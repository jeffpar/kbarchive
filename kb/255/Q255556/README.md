---
layout: page
title: "Q255556: PRB: C2146 Error with Sqloledb.h in Platform SDK"
permalink: /kb/255/Q255556/
---

## Q255556: PRB: C2146 Error with Sqloledb.h in Platform SDK

{% raw %}

	Article: Q255556
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbOLEDB kbSQLServ kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile an application that uses the Sqloledb.h header file from the
	Microsoft Platform Software Development Kit (SDK), you receive the following
	error:
	
	  error C2146: syntax error : missing ';' before identifier 'HACCESSOR'
	
	CAUSE
	=====
	
	The compiler is unable to find the definition of the ULONG_PTR data type. This
	data type is defined in the Basetsd.h header file that is included with the
	Platform SDK but is not defined in the version of the Basetsd.h file that is
	installed with Microsoft Visual C++.
	
	RESOLUTION
	==========
	
	In the Visual C++ settings, the Include directory for the Platform SDK must be
	above the Include directory for Visual C++ in the search list.
	
	From the Tools menu, click Options and click the Directories tab. In the Show
	Directories for combo box, click Include files. Make sure that the Platform
	SDK\Include directory is at the top of the list; this forces the compiler to use
	the Basetsd.h file from the Platform SDK.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Win32 Console Application in Visual C++. Select the default
	  project type: An empty project.
	
	2. Add a new Visual C++ source file to the project and then paste in the
	  following code:
	
	  #define DBINITCONSTANTS
	  #define INITGUID
	
	  #include <oledb.h>
	  #include <sqloledb.h>
	
	  int main()
	  {
	     return 0;
	  }
	
	3. Build the application. If the Visual C++ Include folder is above the Platform
	  SDK Include folder in the search list, then the error listed in the
	  "Symptoms" section is returned.
	
	Additional query words: ulong ulong_ptr c2146 compilation
	
	======================================================================
	Keywords          : kbDatabase kbOLEDB kbSQLServ kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
