




// app.post("/api/v1/user/signup", async(c) => {
//   const prisma = new PrismaClient({
//     // @ts-ignore
//     datasources: c.env.DATABASE_URL
//   })
//   const body = await c.req.json()
  
//   try{
//     await prisma.user.create({
//       data:{
//         email: body.username,
//         password: body.password,
//         name: body.name
//       }
//     })
//     return c.text("Hello Hono!");
//   }
//   catch(e){
//     console.log(e);
    
//     return c.text("Invalid");
//   } 
// });

// app.post("/api/v1/user/signin", (c) => {
//   return c.text("Hello Hono!");
// });

// app.put("/api/v1/user/blog", (c) => {
//   return c.text("Hello Hono!");
// });

// app.get("/api/v1/user/blog/:id", (c) => {
//   return c.text("Hello Hono!");
// });

// app.get("/api/v1/user/blog/bulk", (c) => {
//   return c.text("Hello Hono!");
// });

// export default app;
