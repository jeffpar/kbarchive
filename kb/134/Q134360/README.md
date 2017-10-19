---
layout: page
title: "Q134360: Err Msg: The Command You Specified Could Not Be Carried Out"
permalink: /kb/134/Q134360/
---

## Q134360: Err Msg: The Command You Specified Could Not Be Carried Out

	Article: Q134360
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
	
	When you start Microsoft Exchange, or click the Inbox button on the Microsoft
	Exchange toolbar, you may receive the following error message:
	
	  The command you specified could not be carried out. A default set of folders
	  could not be found. Your active profile must include such a set, such as a
	  personal folder file.
	
	When you click OK, Microsoft Exchange seems to work properly. However, when you
	open a message in the Inbox folder, or try to compose a new message, you may
	receive the following error message:
	
	  The item could not be displayed. A default set of folders could not be found.
	  Your active profile must include such a set, such as a personal folder file.
	
	CAUSE
	=====
	
	The errors described above can occur when any of the following conditions
	exists:
	
	- You do not have a set of personal folders or a personal information store in
	  your active profile.
	
	- You do have a set of personal folders or a personal information store in your
	  active profile, but the "Deliver new mail to the following location" field is
	  set to None.
	
	- You have removed the default message store, leaving only the secondary
	  message store (such as personal folders or another personal information
	  store) in your active profile.
	
	RESOLUTION
	==========
	
	To resolve the problem, use the appropriate method. Note that all of the methods
	involve configuring your active profile in Microsoft Exchange.
	
	Method 1: No Personal Folders or Personal Information Store
	-----------------------------------------------------------
	
	1. On the Tools menu, click Options.
	
	2. On the Services tab, click Add.
	
	3. Click Personal Folders, and then click OK.
	
	4. In the File Name box, click the appropriate .pst file, and then click Open.
	  (The file is usually named Mailbox.pst and is located in the Exchange
	  folder.)
	
	5. If the .pst file is password-protected, type the password and then click OK.
	
	6. In the Personal Folders dialog box, click OK.
	
	7. In the properties for the active profile, click OK.
	
	Method 2: "Deliver New Mail to..." Field Set to None
	----------------------------------------------------
	
	1. On the Tools menu, click Options.
	
	2. Click the Deliver tab.
	
	3. In the "Deliver new mail to the following location" box, click either
	  Personal Folders or Personal Information Store.
	
	4. Click OK.
	
	Method 3: Removed Default Message Store
	---------------------------------------
	
	1. On the Tools menu, click Options.
	
	2. On the Services tab, click Add.
	
	3. Click Personal Folders, and then click OK.
	
	4. Click the Appropriate .pst file, and then click Open.
	
	  NOTE: There may be more than one .pst file. You should click the default
	  message store, which is usually called Mailbox.pst and is located in the
	  Exchange folder.
	
	5. If the .pst file is password-protected, type the password and then click OK.
	
	6. In the Personal Folders dialog box, click OK.
	
	7. In the properties for the active profile, click OK.
	
	MORE INFORMATION
	================
	
	"Personal information store" and "My information" are interchangeable terms.
	They both contain Inbox, Outbox, Deleted Items, and Sent folders. These folders
	are necessary for a correct default message store. The default message store is
	literally the first information store added to a profile. Personal folders is
	designed as a secondary message store and contains only a Deleted Items folder.
	
	Additional query words: wpp95 win95 exchange msn msnetwork
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
