---
layout: page
title: "Q102367: BUG: CXX0030 Error Using Enumerated Type in Class"
permalink: kb/102/Q102367/
---

## Q102367: BUG: CXX0030 Error Using Enumerated Type in Class

	Article: Q102367
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.05,4.1; WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	- Microsoft Visual Workbench for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to display a variable in the Locals, QuickWatch, or Watch windows
	fails and CodeView or Visual Workbench displays the following message:
	
	  CXX0030 : Error : expression cannot be evaluated
	
	CAUSE
	=====
	
	The application uses a type-defined enumerated bitfield in a class type and the
	user attempts to display the value of a variable of that type. The CXX0030 error
	may not occur if you do not attempt to display it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 4.0x and 4.1
	for MS-DOS and Windows and in Visual Workbench version 1.0 for Windows.
	
	This is not a problem in CodeView version 4.25 for Win32s.
	
	MORE INFORMATION
	================
	
	The following code example demonstrates this problem.
	
	Sample Code
	-----------
	
	  /*
	   * Compiler options needed: /Zi /Od /f-
	   */ 
	
	  #include <iostream.h>
	  typedef enum
	  {
	     T1
	  } TENUM;
	
	  class TEST
	  {
	  public:
	     TEST();
	     TENUM linkstate:8;
	  };
	
	  TEST::TEST()
	  {
	     linkstate = T1;
	  }
	
	  TEST *port;
	  void main(void)
	  {
	     port = new TEST;
	     // NOTE: Must refer to linkstate for CXX0033 error to occur.
	     port->linkstate;
	     delete port;
	  }
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVSsearch kbAudDeveloper _IKkbbogus kbCodeView kbSDKSearch kbZNotKeyword3 kbWinSDKSearch kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView400 kbCodeView401 kbCodeView410 kbVWB
	Version           : :4.0,4.01,4.05,4.1; WINDOWS:1.0
	
	=============================================================================
	
