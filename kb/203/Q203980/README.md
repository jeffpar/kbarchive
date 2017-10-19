---
layout: page
title: "Q203980: PRB: Error 282 Connecting to VB5 or VB6 DDE Server"
permalink: /kb/203/Q203980/
---

## Q203980: PRB: Error 282 Connecting to VB5 or VB6 DDE Server

	Article: Q203980
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDDE kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to connect to a Visual Basic 5.0 or Visual Basic 6.0 DDE server,
	the following error message might appear:
	
	  Error 282 - No Foreign Application Responded to a DDE Initiate.
	
	CAUSE
	=====
	
	Visual Basic versions 5.0 and 6.0 use the application title as the DDE
	Application. This problem is most likely to occur if you have recently converted
	the project from Visual Basic versions 3.0 or 4.0. These prior versions of
	Visual Basic used the project executable name (not including the .exe extension)
	as the DDE source's application name.
	
	RESOLUTION
	==========
	
	Modify the DDE client, otherwise known as the destination, to connect to the
	server using the application title of the server instead of the executable
	filename (not including the .exe extension).
	
	The application title is located on the Make tab of the Project Properties dialog
	box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDDE kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
