/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// module.exports = {
  
//     async middleware() {
//       return [
//         async (req, res, next) => {
//           next();
//         },
//         await import('./middleware').then((m) => m.authenticateToken),
//       ];
//     },
//   };