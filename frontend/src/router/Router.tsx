import { memo, VFC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from '../components/pages/SignIn'
import { SignUp } from '../components/pages/SignUp'
import { Layout } from '../components/templates/Layout'

export const Router: VFC = memo(() => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout title="Index">
          <p>Index</p>
        </Layout>
      }
    />
    <Route
      path="/signin"
      element={
        <Layout title="Sign In">
          <SignIn />
        </Layout>
      }
    />
    <Route
      path="/signup"
      element={
        <Layout title="Sign Up">
          <SignUp />
        </Layout>
      }
    />
  </Routes>
))
