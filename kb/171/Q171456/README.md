---
layout: page
title: "Q171456: PRB: Run-time error -2147023071 (80070721) using WithEvents"
permalink: /kb/171/Q171456/
---

## Q171456: PRB: Run-time error -2147023071 (80070721) using WithEvents

	Article: Q171456
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using an ActiveX component that defines events, you may receive the
	following error when this component is accessed through DCOM.
	
	  Run-time error -2147023071 (80070721)
	  Automation Error
	
	This error does not occur if the ActiveX component is used locally or if the
	client does not instantiate the remote object using the WithEvents statement.
	
	CAUSE
	=====
	
	This problem occurs because you did not set the appropriate identity for the
	server.
	
	RESOLUTION
	==========
	
	To resolve this problem, refer to the following articles in the Microsoft
	Knowledge Base:
	
	  Q267836 HOWTO: Create a DCOM Client/Server with Events by Using Visual Basic
	
	  Q268550 HOWTO: Use Dcomcnfg for a Visual Basic DCOM Client/Server Application
	
	  Q269330 HOWTO: Troubleshoot DCOM for Visual Basic Client/Server Applications
	
	Additional query words: -2147023071 (80070721)
	
	======================================================================
	Keywords          : kberrmsg kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
