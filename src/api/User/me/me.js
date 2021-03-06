import { prisma } from "../../../../generated/prisma-client";


// (_) 언더스코어는 변수 이름이 될 수 있다.
// (__) 더블언더스코어는 부모의 arguments를 뜻한다. (부모의 arguments === args)
// 그래서 더블언더스코어 자리에 arguments를 넣어줘도 된다.

// (_) 이건 root나 parent로 불린다.
export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      return await prisma.user({ id: user.id });

      // Prisma client는 강한 관계를 설정하지 않으므로 ".$fragment()"를 붙여줘서 posts들을 가져올 수 있다.
      // return prisma.user({id: user.id}).$fragment(USER_FRAGMENT);
    }
  },

  
};