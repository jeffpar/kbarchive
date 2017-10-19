---
layout: page
title: "Q165922: WD97: Converting ActiveX to Picture Causes Invalid Page Fault"
permalink: /kb/165/Q165922/
---

## Q165922: WD97: Converting ActiveX to Picture Causes Invalid Page Fault

	Article: Q165922
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbProgramming word8 kbwordvba word97
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to convert an ActiveX Control Object to a Word Picture Object using
	Visual Basic for Applications causes the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	The details of the error message show:
	
	  WINWORD caused an invalid page fault in WINWORD.EXE at 0137:30440759.
	
	Choosing OK causes Word to close.
	
	CAUSE
	=====
	
	When creating your macro, Visual Basic for Applications does not check to see
	whether the method of conversion you are applying to an object is an allowed
	method for the object type.
	
	The error message appears because an ActiveX object (controls such as a check
	box, command button, and so on) cannot be converted to a Word Picture object.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	For more information about ActiveX, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q163435 Programming Resources for Visual Basic for Applications
	
	  Q155965 WD97: CTRL+Z UNDO Will Not Work In Form Control Tools
	
	  Q162598 WD97: ActiveX Controls Lose Sizing After Previewing in Browser
	
	  Q155903 WD97: Error Inserting ActiveX Control
	
	For more information about "ActiveX," click the Office Assistant, type "ActiveX"
	(without the quotation marks), click Search, and then click one of the following
	topics:
	
	- Insert form fields or ActiveX controls in a form
	
	- Form elements you can use on a Web page
	
	- Register a new ActiveX control
	
	- Designing a Web page
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	Additional query words: wordcon vb vba vbe ocx
	
	======================================================================
	Keywords          : kberrmsg kbProgramming word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
