---
layout: page
title: "Q191220: XCLN: Outlook Bar Shortcut Empties Server's Deleted Items"
permalink: /kb/191/Q191220/
---

## Q191220: XCLN: Outlook Bar Shortcut Empties Server's Deleted Items

	Article: Q191220
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you use a shortcut on the Outlook bar to empty the contents of Deleted Items
	for a personal folder (PST), the server mailbox's deleted items is emptied
	instead.
	
	CAUSE
	=====
	
	The selection "Empty Deleted Items" that is displayed by right-clicking on the
	Outlook bar icon will, by default, empty the Deleted Items folder that resides
	on the server mailbox, even if the shortcut has been changed in an attempt to
	empty the local PST's Deleted Items.
	
	WORKAROUND
	==========
	
	To empty the Deleted Items folder in the local PST, perform the following
	steps:
	
	1. On the menu bar, click View, and then click Folder List.
	
	2. On the Folder List view, right-click the Deleted Items folder in the personal
	  folder display list.
	
	3. Select "Empty 'Deleted Items' Folder".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: Deleted Item Folder 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
