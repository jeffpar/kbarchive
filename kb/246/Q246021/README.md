---
layout: page
title: "Q246021: HOWTO: Close an Instance of Word from Visual FoxPro Using APIs"
permalink: kb/246/Q246021/
---

## Q246021: HOWTO: Close an Instance of Word from Visual FoxPro Using APIs

	Article: Q246021
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2000,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbAutomation kbvfp500a kbvfp600 kbVS600sp3 kbGrpDSFox kbCodeSnippet
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can close a running instance of Microsoft Word
	using the SendMessage Application Program Interface (API).
	
	MORE INFORMATION
	================
	
	The following code terminates an instance of Word 97 or Word 2000, even if the
	current document has been changed. Note that you will not be prompted to save
	changes. Terminating a running Windows application in this manner is considered
	bad programming style, however, this method can be effective if you need to
	quickly close Word.
	
	This code can be used with either an instance of Word that is already running or
	if Word is instantiated using OLE Automation, this example uses OLE Automation
	to start Word.
	
	Create a program and enter the following code:
	
	  DECLARE LONG FindWindowA IN WIN32API STRING class, STRING title
	  DECLARE INTEGER SendMessage IN Win32API INTEGER HWND,INTEGER Msg, Short WParam, INTEGER LPARAM)
	
	  oWord = Createobject('Word.Application')
	  * Pass the class name for Word - "OpusApp" to FindWindowA
	  oWordHandle = FindWindowA('OpusApp',NULL)   
	  WITH oWord
	  	.Documents.Add
	  	.Visible=.T.
	  	.Selection.InsertAfter ("This is a test.")
	  	.Application.Activate   && Activate Word.
	  ENDWITH
	  =INKEY(3)                   && Wait a couple seconds then close Word.
	  =SendMessage(oWordHandle,16,0,0)
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words: kbDSE
	
	======================================================================
	Keywords          : kbAPI kbAutomation kbvfp500a kbvfp600 kbVS600sp3 kbGrpDSFox kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:2000,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
