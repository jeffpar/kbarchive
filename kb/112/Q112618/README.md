---
layout: page
title: "Q112618: How to Prevent Calling Card Numbers from Appearing on Faxes"
permalink: kb/112/Q112618/
---

## Q112618: How to Prevent Calling Card Numbers from Appearing on Faxes

	Article: Q112618
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a calling card number is entered on the To: line of a message to be faxed,
	the recipient of the fax is able to view the sender's calling card number.
	
	RESOLUTION
	==========
	
	To prevent the calling card number from being displayed on the fax, an alias
	must be created for the recipient in the sender's Personal Address Book.
	
	NOTE: This workaround works only when the Send Cover Page option is disabled. If
	it is enabled, the calling card number is displayed on the cover page. By
	disabling the cover page, the recipient receives only the name of the alias that
	was created and specified on the TO: line and the message; the calling card
	number does not appear. If a cover page is required, then it must be included as
	the first page of the fax message.
	
	To create the alias:
	
	1. Start Mail.
	
	2. From the Mail menu, choose Address Book.
	
	3. Choose the icon for creating new entries.
	
	4. Choose Microsoft At Work PC Fax from the list of options.
	
	5. Enter an alias name.
	
	6. Enter the calling card number and the full phone number for the recipient.
	
	7. Choose the Personal Address Book icon to save the changes.
	
	8. When composing a fax, use the alias name on the To: line. Please note that a
	  separate alias must be created for each individual recipient.
	
	Additional query words: 3.11 efax phone call at work pcfax
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
