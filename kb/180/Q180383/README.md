---
layout: page
title: "Q180383: FP: Modified By Attribute Displays as a Question Mark"
permalink: /kb/180/Q180383/
---

## Q180383: FP: Modified By Attribute Displays as a Question Mark

	Article: Q180383
	Product(s): Word Front Page
	Version(s): WINDOWS:1.1,97
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q205238.
	
	For a Microsoft FrontPage 98 version of this article, see Q194675.
	
	SYMPTOMS
	========
	
	FrontPage displays a ? (question mark) in the Modified By field in FrontPage
	Explorer.
	
	CAUSE
	=====
	
	When you start FrontPage, it determines the name of the user currently logged on
	to Windows. When you save and create pages, FrontPage writes Modified By
	information to a hidden file located in the subfolder "_vti_cnf." If you are not
	currently logged on to Windows, FrontPage cannot determine who you are. When no
	user is logged on to Windows, FrontPage will use a ? (question mark) instead of
	a user name.
	
	RESOLUTION
	==========
	
	To display your name as the Modified By attribute of pages that you edit, you
	must log on to Windows.
	
	To log on to Windows and specify a user name, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel. In
	  Control Panel, double-click the Passwords icon.
	
	2. In the Passwords Properties dialog box, click the User Profiles tab, and then
	  click to select the "Users can customize their preferences and desktop
	  settings" button.
	
	3. Click OK.
	
	4. Click Yes when you are prompted to restart your computer.
	
	5. When Windows starts, you will be prompted for a user name and password. In
	  the User Name field, type "user" (without the quotation marks). Leave the
	  Password field blank.
	
	  NOTE: You may change the password later if you want by double-clicking on the
	  Password icon in the Control Panel.
	
	6. Click OK.
	
	7. Click Yes.
	
	Additional query words: marks
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : WINDOWS:1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
