---
layout: page
title: "Q189540: PRB: Access Denied Error on WebClass Files"
permalink: kb/189/Q189540/
---

## Q189540: PRB: Access Denied Error on WebClass Files

	Article: Q189540
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbInternet kbVBp kbVBp600 kbVS600 kbWebClasses kbGrpDSASP _IK kbIIS
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive an "Access to the file... denied" error on WebClass files. Internet
	Information Server (IIS) loads files and sometimes they are still loaded when
	you try to write to these files from the Visual Basic IDE that will cause this
	error to appear.
	
	CAUSE
	=====
	
	IIS has the file cached so you receive the error message "Access to the file...
	denied."
	
	RESOLUTION
	==========
	
	To unload the DLL or other files that you were denied access to, stop Internet
	Information Server. There are several ways to stop Internet Information Server:
	
	- In Visual Basic, while you are in the WebClass designer, select the toolbar
	  item "Stop Internet Information Server".
	
	- In the Windows Control Panel, select Services and Stop the IIS Admin Service.
	
	- At a command prompt, type the following command:
	
	  "net stop iisadmin /y" (without the quotation marks)
	
	  On a Microsoft Windows 2000-based computer, type the following command:
	
	  "iisreset" (without the quotation marks)
	
	NOTE: Stopping the Web site from the Microsoft Management Console (MMC) does not
	cause IIS to unload these files.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	Please see the following Microsoft Knowledge Base article for more information
	on WebClasses:
	
	  Q189539 : INFO: VB 6.0 Readme Part 8: WebClass Designer Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet kbVBp kbVBp600 kbVS600 kbWebClasses kbGrpDSASP _IK kbIIS 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
