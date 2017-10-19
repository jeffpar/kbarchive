---
layout: page
title: "Q216715: FIX: Bad Code Generated in ?: Operator Converting Class Types"
permalink: /kb/216/Q216715/
---

## Q216715: FIX: Bad Code Generated in ?: Operator Converting Class Types

	Article: Q216715
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
	
	When compiling source code containing the ternary operator (?:), if the compiler
	converts one of the operands from one class type to another, incorrect code may
	be generated or you might receive the following error message:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file
	  'E:\8168\vc98\p2\src\P2\ehexcept.c', line 577)
	
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
	
	  #include <afx.h>
	  class F
	  {
	  	char m_str[50];
	  	CString cstr;
	  public:
	  	F(char *str)
	  	{
	  		strcpy(m_str, str);
	  		cstr = "CSTRING";
	  	}
	  	operator CString() 
	  	{
	  		cstr = m_str;
	  		return cstr;
	  	}
	  };
	
	  void H( const CString & state)
	  {
	  	F f("test");
	  	CString str;
	  	str = (state != "off") ? state : f;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCompiler kbCPPonly kbVC600bug kbVC600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
