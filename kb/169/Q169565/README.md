---
layout: page
title: "Q169565: PRB: Type Mismatch Using OLE Automation to Word 97"
permalink: kb/169/Q169565/
---

## Q169565: PRB: Type Mismatch Using OLE Automation to Word 97

	Article: Q169565
	Product(s): Microsoft FoxPro
	Version(s): 3.0 3.0b 5.00 5.0a 8.0 97
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp kbVS97sp1fix kbVS97sp2fix
	Last Modified: 14-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using OLE automation to interact with Microsoft Word 97 and the Visual
	Basic for Applications language, certain commands return the following error to
	Visual FoxPro:
	
	  OLE error code 0x80020005: Type Mismatch.
	
	CAUSE
	=====
	
	This problem is caused by a problem in the way Word 97 returns mismatched errors
	from the OLE DISPATCH methods.
	
	RESOLUTION
	==========
	
	There are two ways to solve the error:
	
	1. Use the equivalent Word.Basic methods with the WordBasic property within the
	  Word.Application object. See the example below.
	
	2. Use only the Word.Basic object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Starting with Word 97, OLE automation from other applications, such as Visual
	FoxPro, can access the Word 97 Visual Basic for Applications (VBA) objects by
	issuing the CreateObject("Word.Application") command in Visual FoxPro. However,
	some of the methods used in Word 97 VBA return errors back to the client
	application. When an error is returned to the client application, like Visual
	FoxPro, it may be necessary to use older Word Basic statements and functions in
	conjunction with the newer Word.Application methods and properties. The purpose
	of the WordBasic property is to return an Automation object (Word.Basic) that
	includes methods for all the WordBasic statements and functions available in
	Word version 6.0 and Word for Windows 95.
	
	To accomplish this while there is reference created to the Word.Application
	object, preface the Word.Basic statement or function with the WordBasic
	property, then follow with the desired Word.Basic statement or function. See the
	code example below.
	
	The ActiveDocument.SaveAs method is not the only method that returns the above
	error, it is the only one covered in this article. Again if the error is
	returned, try using one of the covered workarounds.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code can be entered in the Command window, in a program, or in a
	method on a form:
	
	  
	
	     oWord=CreateObject("Word.Application")
	     oWord.Documents.Add
	     oWord.Selection.InsertAfter("This is a test")
	     oWord.Visible=.T.
	     *The line below will error. But this is a valid Word VBA command
	     oWord.ActiveDocument.SaveAs("Mydoc")
	     oWord.Quit
	
	To avoid the above error, revert back to the WordBasic equivalent command.
	Replace the ActiveDocument.SaveAs above with the following line:
	
	  
	
	     oWord.WordBasic.FileSaveAs("Mydoc")    && Will save document
	
	Another option is to use only the Word.Basic object model. Enter the following
	code in the Command window, in a program, or in a method on a form:
	
	  
	
	     oWord=CreateObject("Word.Basic")
	     oWord.FileNew
	     oWord.Insert("This is a test")
	     oWord.AppShow
	     oWord.FileSaveAs("Mydoc")
	     oWord.FileQuit
	
	REFERENCES
	==========
	
	Microsoft Word for Windows 97 on-line help. Visual Basic for Applications help
	that shipped with Word for Windows version 97.
	
	For more information, see the following article in the Microsoft Knowledge Base:
	
	  Q169547 Some OLE Automation Commands Fail with Visual Fox Pro 5.x
	
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbvfp kbVS97sp1fix kbVS97sp2fix 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : 3.0 3.0b 5.00 5.0a 8.0 97
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
