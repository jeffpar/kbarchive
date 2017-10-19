---
layout: page
title: "Q165046: XCLN: How to Open a Hidden User's Schedule"
permalink: /kb/165/Q165046/
---

## Q165046: XCLN: How to Open a Hidden User's Schedule

	Article: Q165046
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You cannot view a hidden user's schedule even if you are given permissions,
	unless you have created a Personal Address Book (PAB) entry for the hidden user.
	This is by product design.
	
	MORE INFORMATION
	================
	
	To view a hidden user's Schedule+ information, the Exchange administrator must
	un-hide the mailbox from the Global Address List (GAL). Then, users must create
	a PAB entry for the hidden user. Once there is a PAB entry for the hidden user's
	mailbox that needs to be viewed, the mailbox can be re-hidden by the Exchange
	administrator. The hidden user will have to grant permissions as normal for you
	to see their Schedule+ information.
	
	To do this, administrators should follow these steps:
	
	1. Start the Microsoft Exchange Administrator program, select the hidden
	  recipient, and from the Advanced property page, uncheck the Hide from Address
	  Book option.
	
	2. Tell the users to add this address to their PAB by starting their client
	  and:
	
	  a. Selecting Address Book from the Tools Menu.
	
	  b. Opening the Global Address List.
	
	  c. Selecting the user that you intend to hide.
	
	  d. From the File menu, selecting Add to Personal Address Book.
	
	3. Repeat step 2 for all users who may need to open the hidden user's Schedule.
	
	4. From the Administrator program, select the user you want to hide from the
	  recipient container and from the Advanced property page, check the Hide from
	  Address Book option.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT kbExchange500Win95
	Version           : 5.0
	Issue type        : kbhowto
	
	=============================================================================
	
