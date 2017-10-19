---
layout: page
title: "Q263841: PC DB: NDR When Sending from Microsoft Mail to Exchange Server"
permalink: /kb/263/Q263841/
---

## Q263841: PC DB: NDR When Sending from Microsoft Mail to Exchange Server

	Article: Q263841
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Mail for PC Networks 
	- Microsoft Mail for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Microsoft Mail (MS Mail) user tries to send e-mail to an Exchange Server
	user by using Microsoft Outlook, the MS Mail user may receive a non-delivery
	report (NDR) that states that the Exchange Server user does not exist. If the
	same MS Mail user tries to send e-mail to an Exchange Server user by using the
	MS Mail client, the message is delivered successfully.
	
	CAUSE
	=====
	
	This issue can occur if there is corruption in the address list for the Exchange
	Server shadow postoffice (.usr file).
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Use the MS Mail Administrator program to delete the reference to the shadow
	  postoffice. This causes the old .usr file to be abandoned.
	
	2. Request a full import by using the MS Mail Administrator program.
	
	3. Wait for directory synchronization to finish or perform a manual directory
	  synchronization. This process creates and populates the new .usr file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:; winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
