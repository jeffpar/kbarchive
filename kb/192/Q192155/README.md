---
layout: page
title: "Q192155: PRB: Internal Error Occurred While Loading the HTML Template"
permalink: kb/192/Q192155/
---

## Q192155: PRB: Internal Error Occurred While Loading the HTML Template

	Article: Q192155
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbhtml kbInternet kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you import an HTML Page into an IIS Application, you may receive one of the
	following error messages in the WebClass Designer:
	
	  An internal error occurred while loading the HTML template <file> for
	  TemplateX.
	
	  -or-
	
	  An unspecified error has occurred
	
	CAUSE
	=====
	
	You may have Incorrect HTML syntax in the page you imported, such as a TD tag
	without a closing angle bracket.
	
	RESOLUTION
	==========
	
	Make sure your HTML page has correct HTML syntax.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q189539 INFO: VB 6.0 Readme Part 8: WebClass Designer Issues
	
	  Q246490 PRB: Unspecified Error When You Add an HTML Template to a WebClass
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhtml kbInternet kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
