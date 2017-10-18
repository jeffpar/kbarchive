---
layout: page
title: "Q128432: MHS: Circular Routing Through the MHS Gateway"
permalink: kb/128/Q128432/
---

## Q128432: MHS: Circular Routing Through the MHS Gateway

	Article: Q128432
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Nondelivery messages do not leave the Mail Administrator program (ADMIN.EXE) MHS
	gateway queue. The messages never seem to be delivered and no error message is
	returned.
	
	CAUSE
	=====
	
	The "stuck" messages are actually messages from the postmaster at MSMail to the
	postmaster at MSMail. The gateway tried to deliver a message to POSTMAST@MSMAIL
	{NET1/PO1/POSTMASTER}. However, the user did not create a postmaster account;
	therefore, the External Mail program generated a nondelivery notice and sent it
	back to the originator, which was also POSTMAST@MSMAIL {NET1/PO1/POSTMASTER}.
	Since the mail was routing through the MHS gateway each cycle, the External Mail
	program never had the opportunity to consider it as a circular route.
	
	RESOLUTION
	==========
	
	Create a postmaster account on every postoffice that will be sending or
	receiving mail through the MHS gateway.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
