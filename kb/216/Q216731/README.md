---
layout: page
title: "Q216731: FIX: Dtor of Explicitly Constructed Anonymous Temp Not Called"
permalink: /kb/216/Q216731/
---

## Q216731: FIX: Dtor of Explicitly Constructed Anonymous Temp Not Called

	Article: Q216731
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
	
	When an explicitly constructed anonymous temporary of template type that has a
	default constructor with a default argument is used in an expression, it is
	never destroyed.
	
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
	
	Sample Code
	-----------
	
	  #include <stdio.h>
	  const int ex = 4;
	
	  template<typename T>
	  struct CPtr {
	      CPtr(int e = ex) {
	  		m_ptr = new T();
	  		printf("In CPtr::CPtr()\n");
	  	}
	
	      T *operator->() const {
	  		return m_ptr;
	  	}
	
	  	~CPtr() {
	  		printf("In CPtr::~CPtr()\n");
	  	}
	
	  	T *m_ptr;
	  };
	
	  struct I {
	  	int mf() {return 1;}
	  };
	
	  int main()
	  {
	  	bool fFlag = false;
	  	if ((CPtr<I>()->mf() < 0) && !fFlag) return 1;
	  	return 0;
	  }
	
	The output is:
	
	  In CPtr::CPtr()
	
	The output should be:
	
	  In CPtr::CPtr()
	  In CPtr::~CPtr()
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCompiler kbCPPonly kbVC600bug kbVC600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
