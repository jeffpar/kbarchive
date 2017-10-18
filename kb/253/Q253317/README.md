---
layout: page
title: "Q253317: BUG: Using #import with ADO Causes C4146 Warning in Visual C++"
permalink: kb/253/Q253317/
---

## Q253317: BUG: Using #import with ADO Causes C4146 Warning in Visual C++

	Article: Q253317
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.5,2.6; winnt:6.0
	Operating System(s): 
	Keyword(s): kbVC kbVC600bug kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbADO250bug kbADO260bug kbATM kbado2
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile an ActiveX Data Objects (ADO) application in Visual C++ 6.0
	using the #import directive with version 2.5 or 2.6 of Msado15.dll, you may
	receive the following warning:
	
	  warning C4146: unary minus operator applied to unsigned type, result still
	  unsigned
	
	RESOLUTION
	==========
	
	Although this problem will most likely have no effect on your application, you
	can suppress the warning with the following code:
	
	  #pragma warning(push)
	  #pragma warning(disable:4146)
	  #import "c:\program files\common files\system\ado\MSADO15.DLL" 
	  #pragma warning(pop)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Save the following code as a .cpp file, and then compile and run the program with
	Visual C++. Accept the default workspace when prompted.
	
	  #import "C:\Program Files\Common Files\SYSTEM\ADO\MSADO15.DLL" rename_namespace("ado20")
	  using namespace ado20;
	  #include <iostream>
	  using namespace std;
	  void main ()
	  {
	      cout <<" You should see the warning in compiler's debug window"<<endl;
	  }
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC kbVC600bug kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbADO250bug kbADO260bug kbATM kbado270 
	Technology        : kbVCsearch kbAudDeveloper kbADOsearch kbADO250 kbADO260 kbVC600 kbVC32bitSearch kbADO270
	Version           : WINDOWS:2.5,2.6; winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
