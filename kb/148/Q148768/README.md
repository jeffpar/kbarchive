---
layout: page
title: "Q148768: CONN: Connection Gateway 1.0b Hangs Delivering Message"
permalink: kb/148/Q148768/
---

## Q148768: CONN: Connection Gateway 1.0b Hangs Delivering Message

	Article: Q148768
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.0b,3.2; WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection Gateway, version 1.0b 
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the version 1.0b Connection Gateway can not successfully process a message
	file, it will stop responding and may cause the server to not respond.
	
	If the version 3.2 Mail Connection Gateway can not successfully process a message
	file, it may generate a badmail file that will be placed in the MACGATE\BADMAIL
	directory.
	
	CAUSE
	=====
	
	The message contains an attachment with the following criteria:
	
	- Message with attachment that has a long file name created on Macintosh client
	  for the Microsoft Mail for AppleTalk Networks mail server.
	
	- Message sent to a mailbox on a Microsoft Mail for PC Networks 3.x postoffice
	  through the Mail Connection Gateway.
	
	- User accesses a mailbox from the Microsoft Exchange Windows 95 client
	  included with Windows 95 using the SFS provider.
	
	- Message is forwarded to a mailbox on the AppleTalk server through the Mail
	  Connection Gateway.
	
	The Mail Connection Gateway may have difficulty with the name the Windows 95
	Exchange clients uses to associate the attachment with the message.
	
	RESOLUTION
	==========
	
	For the version 1.0b Connection Gateway, if a file named MSGATE.RDG is located
	in the MSGATE\STORE\PCTOMAC directory, rename the file and restart the Microsoft
	Mail Gateway services.
	
	The user accessing the message from the Windows 95 Exchange client can save the
	attachment and reattach. This will assign an 8.3 name to designate the
	attachment within the message. An update to the Microsoft Exchange Windows 95
	client included with the Microsoft Windows 95 has been released and is available
	by contacting Product Support Services.
	
	
	Additional query words: 1.00 win95
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailConn320 kbMailConn100b kbExchange400Win95
	Version           : :1.0b,3.2; WINDOWS:4.0
	
	=============================================================================
	
