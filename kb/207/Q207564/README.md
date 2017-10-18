---
layout: page
title: "Q207564: DOC: VBCE Error &quot;The Declare statement is incorrectly formatted&quot;"
permalink: kb/207/Q207564/
---

## Q207564: DOC: VBCE Error &quot;The Declare statement is incorrectly formatted&quot;

	Article: Q207564
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdocfix kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When compiling a Windows CE Toolkit for Visual Basic (VBCE) application which
	includes a Declare statement, the following error message may appear:
	
	  The Declare statement is incorrectly formatted. Please see the documentation
	  for more information on the format of a Declare statement.
	
	MORE INFORMATION
	================
	
	The Winceapi.txt file incorrectly includes some Declare statements that include
	parameters declared as "Any". This is not supported in Windows CE. By changing
	the declaration of the parameters to another data type, such as Long, the error
	will be avoided.
	
	For example, the following Declare statement needs to be changed:
	
	  Declare Function SendMessage Lib "Coredll" Alias "SendMessageW" ( _
	     ByVal hwnd As Long, _
	     ByVal wMsg As Long, _
	     ByVal wParam As Long, _
	     lParam As Any) As Long
	
	The statement can be changed to the following:
	
	  Declare Function SendMessage Lib "Coredll" Alias "SendMessageW" ( _
	      ByVal hwnd As Long, _
	      ByVal wMsg As Long, _
	      ByVal wParam As Long, _
	      ByVal lParam As Long) As Long
	
	Additional query words: kbDSupport vbce vbce6 wce
	
	======================================================================
	Keywords          : kbdocfix kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
