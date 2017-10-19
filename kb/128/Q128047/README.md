---
layout: page
title: "Q128047: PC Win: Err Msg: Some Entries Could Not be Added to the Group"
permalink: /kb/128/Q128047/
---

## Q128047: PC Win: Err Msg: Some Entries Could Not be Added to the Group

	Article: Q128047
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Mail for Windows, if you attempt to add one or more entries to a
	Personal Group, where one or more of the addresses currently exist in the
	Personal Address Book (PAB), the following error may occur:
	
	  Some entries could not be added to the group.
	
	CAUSE
	=====
	
	When you add one or more users to a Personal Group, the entries will
	automatically be added to the PAB simultaneously. If a discrepancy exists
	between the account information being added and the current entry in the PAB,
	the above error will occur.
	
	When an entry is created in the PAB in Microsoft Mail for Windows, the account
	information is added to the PAB according to content of the current address
	lists on the postoffice. If the account is deleted and recreated (using the same
	Mailbox name, etc.) on the postoffice by the Mail Administrator, the account
	data becomes obsolete for the current reference contained within the PAB, as the
	mailbag ID has changed.
	
	This condition may also result if there is a discrepancy in the hexid between the
	Postoffice Address Lists (POLs) and the ACCESS*.GLB files.
	
	
	RESOLUTION
	==========
	
	Remove the offending entry as it currently exists in the PAB, and re-add the
	name to the Personal Group.
	
	Additional query words: 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
