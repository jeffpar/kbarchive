---
layout: page
title: "Q126426: PC MAPI: MAPIDeleteMail Not Place Deleted Mail in Wastebasket"
permalink: kb/126/Q126426/
---

## Q126426: PC MAPI: MAPIDeleteMail Not Place Deleted Mail in Wastebasket

	Article: Q126426
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MAPI function MAPIDeleteMail allows you to delete a Microsoft Mail for PC
	Networks mail message.
	
	MORE INFORMATION
	================
	
	When this function is called and completed successfully, it does not place the
	message in the Wastebasket or deleted mail folder. Instead, MAPIDeleteMail frees
	the pointer to the message, subsequently making the mail message irretrievable.
	
	This is contrary to Microsoft Mail for Windows user interface that deletes a mail
	message and moves it from the current folder to the Wastebasket or deleted mail
	folder. However, if the current folder is the Wastebasket or deleted mail
	folder, Mail for Windows deletes the mail message and frees the pointer to that
	message, leaving it irretrievable.
	
	
	Additional query words: 3.00 3.20 MAPIFindNext purge
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
