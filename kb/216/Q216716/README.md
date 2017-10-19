---
layout: page
title: "Q216716: FIX: Relocations Not Generated For Array of Ptrs To Functions Us"
permalink: /kb/216/Q216716/
---

## Q216716: FIX: Relocations Not Generated For Array of Ptrs To Functions Us

	Article: Q216716
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCompiler kbCPPonly kbVC600bug kbVC600fix kbVS600sp2 kbVS600SP1 kbVS600s
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Relocations are not generated for typdefed pointers (or arrays) to a typedef of
	a function pointer. This leads some pointers to incorrect locations.
	
	RESOLUTION
	==========
	
	Two levels of typedef's are required to encounter this bug. One workaround is to
	use only one typedef to alias the pointer to function type.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	  #include <stdio.h>
	  struct S{
	      int m_x;
	      int m_y;
	  };
	
	  S f() {
	  	return S();
	  }
	
	  typedef S (Func_t)();
	  typedef Func_t *pFunc_t;
	  typedef int (* PFUNC)();
	
	  pFunc_t	pFunc1	= &f;
	  PFUNC *	ppFunc1	= reinterpret_cast<PFUNC *>( &pFunc1 );
	
	  pFunc_t	pFunc2	= 0;
	  PFUNC *	ppFunc2	= reinterpret_cast<PFUNC *>( &pFunc2 );
	
	  int main()
	  {
	  	pFunc_t	pFunc3	= &f;
	  	PFUNC *	ppFunc3	= reinterpret_cast<PFUNC *>( &pFunc3 );
	
	  	pFunc_t	pFunc4	= 0;
	  	PFUNC *	ppFunc4	= reinterpret_cast<PFUNC *>( &pFunc4 );
	
	  	printf("pFunc1  = 0x%08x\n", pFunc1);
	  	printf("ppFunc1 = 0x%08x\n", ppFunc1);
	  	printf("pFunc2  = 0x%08x\n", pFunc2);
	  	printf("ppFunc2 = 0x%08x\n", ppFunc2);
	  	printf("pFunc3  = 0x%08x\n", pFunc3);
	  	printf("ppFunc3 = 0x%08x\n", ppFunc3);
	  	printf("pFunc4  = 0x%08x\n", pFunc4);
	  	printf("ppFunc4 = 0x%08x\n", ppFunc4);
	
	  	return 0;
	  }
	
	The addresses in the following output may vary:
	
	  pFunc1  = 0x00401005
	  ppFunc1 = 0x00401005
	  pFunc2  = 0x00000000
	  ppFunc2 = 0x00000000  Shouldn't be 0
	  pFunc3  = 0x00401005
	  ppFunc3 = 0x00401005
	  pFunc4  = 0x00000000
	  ppFunc4 = 0x00000000  Shouldn't be 0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCompiler kbCPPonly kbVC600bug kbVC600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
