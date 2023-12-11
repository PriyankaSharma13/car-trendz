export function authenticateToken(request) {
  console.log(authenticateToken)
   
const authtoken = request.cookies.get("authtoken").value

 console.log(authtoken)
}
export const config = {
  matcher:'/api/admin'
}
