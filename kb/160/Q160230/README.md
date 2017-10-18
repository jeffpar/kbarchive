---
layout: page
title: "Q160230: FP: User Registration File Not Hidden Automatically"
permalink: kb/160/Q160230/
---

## Q160230: FP: User Registration File Not Hidden Automatically

	Article: Q160230
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97; macintosh:1.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In FrontPage, when you use the User Registration template to create a page, the
	WebBot Registration component is set up to save the list of registered users in
	a file called Regdb.txt, which is located in the same folder as the registration
	page itself.
	
	This location may lead to security problems if the registration page is in a
	browseable directory: the Regdb.txt file will be visible to anyone who has
	access to the registration page. Although the Regdb.txt file does not contain
	password information, it does contain registered user names. Although a user
	name without a password is not an immediate security risk, the user name is half
	of the information an unauthorized person would need to enter your restricted
	FrontPage Web.
	
	NOTE: This problem does not occur in FrontPage 98 because the Regdb.txt file is
	stored in the _private folder.
	
	RESOLUTION
	==========
	
	To protect the confidentiality of user names, store the Regdb.txt file in the
	_private folder or some other hidden folder. (Only a FrontPage author or
	administrator can browse the _private folder.) As a further security precaution,
	you may also want change the name of the Regdb.txt file.
	
	Updating the Form Handler When you Move or Rename Regdb.txt
	-----------------------------------------------------------
	
	Use the appropriate method for your version of FrontPage.
	
	
	FrontPage 97:
	
	In FrontPage 97 Explorer folder view, when you drag the Regdb.txt file to a
	hidden folder or when you rename it, the form handler will automatically update
	the information about the page. If the registration form is being set up for the
	first time, this setting should be changed from the form handler properties.
	
	FrontPage 1.x:
	
	Rename the Regdb.txt file to _private/regdb.txt. If you use any other method to
	move the file, you may need to alter the Registration WebBot settings (to do
	this, modify the form handler properties for the registration page).
	
	FrontPage 1.0 for the Power Macintosh:
	
	In the FrontPage Explorer folder view, when you drag the Regdb.txt file to a
	hidden folder or when you rename it, the form handler will automatically update
	the information about the page. If the registration form is being set up for the
	first time, this setting should be changed from the form handler properties.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft FrontPage
	98 for Windows.
	
	Additional query words: 97 1.0 1.1
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97; macintosh:1.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
