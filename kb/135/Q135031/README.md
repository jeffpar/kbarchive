---
layout: page
title: "Q135031: SMTP: Unable to Send SMTP Mail Messages from Downstream PO"
permalink: kb/135/Q135031/
---

## Q135031: SMTP: Unable to Send SMTP Mail Messages from Downstream PO

	Article: Q135031
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Downstream postoffices (PO) with the SMTP Access Component installed can not
	send SMTP messages; the mail messages are still in the SMTP queue and have not
	been picked up by the External Mail program. However, Microsoft Mail messages
	are sent successfully in both directions from the downstream postoffice to the
	gateway postoffice, and incoming SMTP mail is successfully routed to the
	Downstream postoffice. No errors are listed in the SESSION.LOG, and mail is not
	returned with an error.
	
	CAUSE
	=====
	
	After you install the SMTP Access Component on the downstream postoffice, the
	gateway postoffice is deleted from the External-Admin option in ADMIN.EXE. Then
	it is added back (one reason would be for troubleshooting purposes).
	
	The NETWORK.GLB file was not updated to show the correct hex value for the
	gateway postoffice's MBG and KEY files. When a user on the downstream postoffice
	sends SMTP mail, it is being put into the SMTP <hexid>.MBG and
	<hexid>.KEY files; however, the External Mail program does not know what
	postoffice to send the SMTP Mail to. As a result, it ignores the mail.
	
	ADMIN.EXE should recognize that the gateway postoffice is a hub postoffice, but
	it does not and subsequently allows the administrator to delete it.
	
	RESOLUTION
	==========
	
	NOTE: Debugging the NETWORK.GLB file and changing the hex value to the correct
	hex value (matching the gateway postoffice's hex value in the XTN file) does NOT
	fix this problem and is NOT recommended.
	
	When the SMTP gateway postoffice reference is deleted from a downstream
	postoffice with the SMTP Access Component installed, you must run the following
	to remove the SMTP Access Component from the downstream PO:
	
	  install -r
	
	Then run INSTALL to put the files back again and to update the NETWORK.GLB and
	other files.
	
	This information may also apply to other gateways.
	
	Additional query words: pcmailfaq
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
