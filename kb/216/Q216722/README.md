---
layout: page
title: "Q216722: FIX: C2440 Using Function Pointer As Class Template Argument"
permalink: /kb/216/Q216722/
---

## Q216722: FIX: C2440 Using Function Pointer As Class Template Argument

{% raw %}

	Article: Q216722
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
	
	When initiating a class template that uses a function pointer as a template
	parameter, you may receive the following error:
	
	  error C2440: ''specialization'' : cannot convert from 'function prototype' to
	  ''int (__cdecl *)( *)''
	
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
	
	Use the following sample code to recreate the error message.
	
	  template < class T, int (*pfn)(T *)>
	  class F
	  {
	  public:
	  	int Test( T *pb ) {
	      	return (*pfn)(	pb );
	  	}
	  };
	
	  int Bar( int *pb ) {
	  	return *pb;
	  }
	
	  F<int,&Bar> f;
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCompiler kbCPPonly kbVC600bug kbVC600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
