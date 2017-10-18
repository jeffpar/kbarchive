---
layout: page
title: "Q119645: PC Win: SMTP Address Generates a Non-Delivery Report"
permalink: kb/119/Q119645/
---

## Q119645: PC Win: SMTP Address Generates a Non-Delivery Report

	Article: Q119645
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Windows client receives a message from the SMTP gateway that contains a
	comma in the comment field of the address in the To: or Cc: field, the address
	is delimited by the comma and a Non-Delivery report is generated. No mail is
	misdirected or lost.
	
	CAUSE
	=====
	
	The Windows client incorrectly uses the comma to delimit the address on the To:
	or Cc: field. For example
	
	  To:<Administrator (comment,comment)>
	
	becomes two addresses resulting in
	
	  To: Admin; Comment)>;
	
	The portion of the address following the comma is treated as a bad address and a
	Non-Delivery report is generated.
	
	RESOLUTION
	==========
	
	The sender should edit the address in the To: or Cc: field and exclude commas in
	addresses.
	
	The address appears correctly in the MS-DOS client until the Mail for Windows
	client accesses the message. To read the message, use the MS-DOS client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for PC Networks. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
