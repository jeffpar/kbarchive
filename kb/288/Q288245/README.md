---
layout: page
title: "Q288245: PRB: Global.asa Does Not Fire from Personal Web Server"
permalink: kb/288/Q288245/
---

## Q288245: PRB: Global.asa Does Not Fire from Personal Web Server

	Article: Q288245
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,6.0
	Operating System(s): 
	Keyword(s): kbExtension kbFrontPage kbServer kbVBp600 kbVisID600 kbWebClasses kbWebServer kbGrpDSAS
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual InterDev, version 6.0 
	- Microsoft Personal Web Server version 4.0 for Windows 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you develop Visual Basic Internet Information Server (IIS) applications
	(WebClasses) on Microsoft Windows 98, you may not be able to access any session
	or application variables from the Global.asa file. This problem may also occur
	when you work locally (in Local Mode) in a Visual InterDev project.
	
	CAUSE
	=====
	
	The virtual directory that Visual Basic (or Visual InterDev in Local Mode) sets
	up is not created as an application. For Global.asa to fire, the virtual
	directory must be an application. When Global.asa fires, the session and
	application variables are set to the appropriate values.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the existing virtual directory, and create a new
	virtual directory in Personal Web Manager as follows:
	
	1. Open Personal Web Manager (click the black and white icon on the taskbar).
	
	2. On the Advanced tab, click your WebClass project directory (for example,
	  \test) or your Visual InterDev local Web project's folder (for example,
	  \test_local), and then click Properties.
	
	3. Copy the directory alias and its physical path, and then click OK.
	
	4. Click Remove to remove the particular virtual directory.
	
	5. From the treeview, click the home directory, and then click Add to add the
	  virtual directory.
	
	6. Paste the information that you copied in Step 3.
	
	MORE INFORMATION
	================
	
	To verify that the Global.asa file is firing, you can write out any session
	variable or application variable from Global.asa in your WebClass or Active
	Server Pages (ASP) page.
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q184572 PRB: Creating Application with PWS 4.0, Windows 95 and VID
	
	Additional query words: global asa webclass interdev
	
	======================================================================
	Keywords          : kbExtension kbFrontPage kbServer kbVBp600 kbVisID600 kbWebClasses kbWebServer kbGrpDSASP _IK 
	Technology        : kbVisIDsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbPersWebServSearch kbZNotKeyword3 kbPersWebServ400Win98 kbVisID600
	Version           : :4.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
