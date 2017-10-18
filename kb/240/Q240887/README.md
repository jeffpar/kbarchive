---
layout: page
title: "Q240887: BUG: Fatal Error w/Memo Field in Watch Window Bound to Edit Box"
permalink: kb/240/Q240887/
---

## Q240887: BUG: Fatal Error w/Memo Field in Watch Window Bound to Edit Box

	Article: Q240887
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Referencing a memo field in the Watch Window that is bound to an edit box on a
	form might result in a fatal error in Microsoft Visual FoxPro. After you close
	the error dialog box, Visual FoxPro terminates.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The error varies depending upon whether you are using Visual FoxPro 6.0 on
	Microsoft Windows 98 or Microsoft Windows NT.
	
	Using Visual FoxPro 6.0 on Windows 98 and Windows NT 4.0, you receive the
	following error message:
	
	  Fatal error: Exception code = C0000005.
	
	Using Visual FoxPro 6.0 under Visual Studio 6.0 SP3 on Windows 98 and Windows NT
	4.0, you receive this error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Follow one of the methods below to reproduce the error.
	
	Method 1:
	
	1. Create a form.
	
	2. Add a table to the data environment that contains a memo field.
	
	3. Add an edit box to the form that is bound to the memo field.
	
	4. Run the form.
	
	5. Open the debugger.
	
	6. Enter the name of the memo field in the Watch Window and press the Enter key.
	
	Method 2: Create a program with the following code, and then run the program:
	
	  *** start of code ***
	  CREATE CURSOR temp (m1 M)
	  APPEND BLANK
	  REPLACE m1 WITH "This is a test."
	  PUBLIC oform1
	  oform1=CREATEOBJECT("form1")
	  oform1.SHOW
	  DEBUG
	  _CLIPTEXT = "temp.m1"
	  KEYBOARD '{alt+3}{ctrl+v}{enter}'
	  RETURN
	
	  DEFINE CLASS form1 AS FORM
	
	     TOP = -1
	     LEFT = -1
	     HEIGHT = 300
	     WIDTH = 400
	     DOCREATE = .T.
	     CAPTION = (VERSION())
	     LOCKSCREEN = .F.
	     NAME = "Form1"
	
	     ADD OBJECT edit1 AS EDITBOX WITH ;
	        HEIGHT = 169, ;
	        LEFT = 48, ;
	        TOP = 48, ;
	        WIDTH = 241, ;
	        CONTROLSOURCE = "temp.m1", ;
	        NAME = "Edit1"
	
	  ENDDEFINE
	  *** end of code ***
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
