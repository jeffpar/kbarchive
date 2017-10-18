---
layout: page
title: "Q97084: PROFS: Gateway Unable to Mail to HP Desk System"
permalink: kb/097/Q97084/
---

## Q97084: PROFS: Gateway Unable to Mail to HP Desk System

	Article: Q97084
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.1,3.2,3.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 3.1, 3.2, 3.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Normally, the process of sending mail from the Microsoft Mail Gateway to PROFS
	to a Hewlett-Packard Desk (HP Desk) user is accomplished by customizing the VM
	system and using the nickname file.
	
	However, when Mail messages are sent to HP Desk through the PROFS gateway, HP
	Desk rejects the messages because the full name of the recipient is not in the
	TO: field, as shown below.
	
	Messages sent to HP Desk from PROFS using the nickname file (the full name is in
	the comment field in the nickname file)
	
	  TO:Nickname --VMID Full name
	
	Messages sent to HP Desk from Microsoft Mail using the PROFS gateway
	
	  TO:Nickname --VMID
	
	Because gateway addressing does not take the full name from the comment field of
	the nickname file, HP Desk is unable to properly route the message to the HP
	Desk user.
	
	RESOLUTION
	==========
	
	None currently available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Host Access for the
	Microsoft Mail Gateway to IBM PROFS and OfficeVision versions 3.1, 3.2, and 3.3.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.10 3.20 3.30
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320 kbMailGateIBMPROFS310 kbMailGateIBMPROFS330
	Version           : :3.1,3.2,3.3
	
	=============================================================================
	
