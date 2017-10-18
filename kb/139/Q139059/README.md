---
layout: page
title: "Q139059: No Personal Folders Password By Default in MS Exchange"
permalink: kb/139/Q139059/
---

## Q139059: No Personal Folders Password By Default in MS Exchange

	Article: Q139059
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Microsoft Mail information service in Microsoft Exchange,
	you are prompted to enter a password when you start Microsoft Exchange. However,
	this password does not prevent others from accessing your personal information
	store.
	
	CAUSE
	=====
	
	After you install the Microsoft Mail information service, you are prompted to
	enter a password the next time you start Microsoft Exchange. This password is
	the password for the post office; it is not a password for your personal
	information store.
	
	RESOLUTION
	==========
	
	To prevent others from accessing your personal information store, configure
	Microsoft Exchange to use a password for your personal folders. To do so, follow
	these steps:
	
	1. In Microsoft Exchange, click Services on the Tools menu.
	
	2. Click Personal Folders, and then click Properties.
	
	3. Click Change Password.
	
	4. Type the password for your personal folders in the New Password and Verify
	  Password boxes, and then click OK.
	
	MORE INFORMATION
	================
	
	If you do not configure Microsoft Exchange to use a password for your personal
	information store, others can access your personal information store by logging
	on to Microsoft Exchange on your computer, or by using Microsoft Exchange to
	access your personal information store from another computer on the network (if
	your personal information store is located in a shared folder).
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
