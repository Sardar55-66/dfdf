import { useEffect } from 'react';
import { Article } from '../Article/Article';
import { CreateArticle } from '../Create-article/Create-article';
import { HeaderLogo, CreateArticleBtn, HeaderUser, LogOut, SignIn, SignUp } from '../Header-components/Header-components';
import { ListOfArticles } from '../List/List';
import { getArticles, getRandomAvatar } from '../api/get-api-data';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PaginationControlled from '../Pagination/Pagination';
import CircularWithValueLabel from '../Spinner/Spinner';
import { NoArticle } from '../No-article-error/No-article-error';
import { DeleteArticle } from '../Delete-article/Delete-article';
import { EditArticle } from '../Edit-article/Edit-article';
import { EditProfile } from '../Edit-profile/Edit-profile';
import { SignInForm } from '../Sign-in/Sign-in';
import { SignUpForm } from '../Sign-up/Sign-up';
import { AuthorizedList } from '../List-authorized/List-authorized';
import { errorWhileRegistering } from '../Actions/Actions';
import { ErrorComponent, ErrorComponents } from '../ErrorComponent/ErrorComponent';
import { NoArticleAuthorized } from '../No-article-authorized/No-article-authorized';

function App() {

  

  const dispatch = useDispatch()
  useEffect(() => {dispatch(getArticles())}, [])
  
  const isLoaded = useSelector(state => state.articles.isLoaded)
  const articles = useSelector(state => state.articles.articles)
  const slug = useSelector(state => state.slug.slug)
  const isSignedUp = useSelector(state => state.users.isSignedUp)
  const errorMsg = useSelector(state => state.error.errorMessage)


  



  return (

    <>    
    
    
      <div className="App">

        <header className='header'>
          <div className='header__logo'>
            <Routes>
              <Route path="*" element={<HeaderLogo/>}/>
            </Routes>
          </div>
        <div className='header__info'>
          <Routes>
            <Route path='/' element={
              <>
              <SignUp/>
              <SignIn/>
              </> 
              
            }/>

          <Route path='/signin' element={
              <>
              <SignUp/>
              <SignIn/>
              </> 
              
            }/>     
            
              <Route path='/authorized-list' element={
                <>
                <CreateArticleBtn/>
                <HeaderUser/>
                <Link to='/'><LogOut/></Link>
                </>
              }/>
              <Route path='/profile' element={
                <>
                <CreateArticleBtn/>
                <HeaderUser/>
                <Link to='/'><LogOut/></Link>
                </>
              }/>
          </Routes>
        </div>
      </header>
      
      <Routes>
        <Route path='/' element={articles.length === 0 ? <NoArticle/>: null}/>
        <Route path='/authorized-list' element={articles.length === 0 ? <NoArticleAuthorized/>: null}/>
        <Route path='/profile' element={<EditProfile/>}/>
        <Route path='/' element={
          <>
          <CreateArticleBtn/>
          <HeaderUser/>
          <Link to='/'><LogOut/></Link>
          </>
        }/>
      </Routes>
     
  {!isLoaded ? <CircularWithValueLabel/> : articles.map((article) => {
   return <Routes>
    <Route path="/" element={
      <>
      <ListOfArticles key={article.slug} data={article}/>
      <PaginationControlled/>
      
      </>
    }/>  
     <Route path='/authorized-list' element={
      <>
      <AuthorizedList data={article}/>
      <PaginationControlled/>
      </>
     }/>
      
   </Routes>
  })}
<Routes>
    <Route path='/signup' element={
    <>
    <SignUpForm/>
    <Link className='main-page-redirect' to="/"><span className='main-page'>back</span></Link>
    </>
    }/>
    <Route path='/signin' element={
    <>
    <SignInForm/>
    <Link className='main-page-redirect' to="/"><span className='main-page'>back</span></Link>
    </>
    }/>    
  
  <Route path="/articles/:slug?" element={
  <>
    {isLoaded ? null : <CircularWithValueLabel/>}
    <Article slug={slug}/>
    <Link className='main-page-redirect' to="/"><span className='main-page'>back</span></Link>
  </>
  }/>
  <Route path='/error' element={<ErrorComponent error={errorMsg}/>}/>
  </Routes>
</div>

</>

  );
}

export default App;
