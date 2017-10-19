---
layout: page
title: "Q103711: BUG: CXX0067: Error: Illegal Enum Value"
permalink: /kb/103/Q103711/
---

## Q103711: BUG: CXX0067: Error: Illegal Enum Value

	Article: Q103711
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.1; WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCodeView kbDebug kbide kbVC MSGRAPH
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.1 
	- Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	- Microsoft Visual Workbench for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When debugging a C++ program with CodeView version 4.1 or the Visual Workbench,
	the following error is generated when watching an enum type variable that is
	assigned a negative value:
	
	  CXX0067: Error: Illegal Enum Value
	
	With CodeView version 4.0 or 4.01, an incorrect value is displayed.
	
	RESOLUTION
	==========
	
	A workaround when using the Visual Debugger or CodeView version 4.1 is to
	typecast the variable as an int in the Watch window. For example, if EnumData is
	an enum type variable with a negative value, set up the watch similar to the
	following:
	
	     (int)EnumData
	
	To add the typecast in the Visual Workbench, first set the watch on the variable
	then modify the type value after it appears in the Watch window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft CodeView for MS-DOS
	and Windows versions 4.0, 4.01, and 4.1, and in the Visual Workbench Debugger
	for Windows version 1.0.
	
	This problem does not occur in CodeView version 4.25 for Win32s.
	
	MORE INFORMATION
	================
	
	The following sample program demonstrates the problem. To reproduce the problem
	in CodeView for Windows or the Visual debugger, compile and link the sample as a
	QuickWin program or place the code in a Windows program.
	
	This problem does not exist in a C program; it occurs only in C++ code.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Zi /Od
	  */ 
	
	  enum Days { Monday=-1,Tuesday};
	
	  void main(void)
	  {
	    enum Days EnumData;
	    EnumData = Monday;
	  }
	
	Additional query words: 4.00 4.10 1.00
	
	======================================================================
	Keywords          : kberrmsg kbCodeView kbDebug kbide kbVC MSGRAPH 
	Technology        : kbVSsearch kbAudDeveloper _IKkbbogus kbCodeView kbSDKSearch kbZNotKeyword3 kbWinSDKSearch kbCodeView400DOS kbCodeView401DOS kbCodeView410DOS kbCodeView400 kbCodeView401 kbCodeView410 kbVWB
	Version           : :4.0,4.01,4.1; WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
