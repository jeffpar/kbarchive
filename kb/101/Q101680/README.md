---
layout: page
title: "Q101680: MHS: Documentation Error for Da Vinci Addressing"
permalink: kb/101/Q101680/
---

## Q101680: MHS: Documentation Error for Da Vinci Addressing

	Article: Q101680
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 31 of the "Administrator's Guide" includes an error in the formatting of
	the address to send to Microsoft Mail from Da Vinci 1.x.
	
	The section under the heading Da Vinci should read:
	
	  To send mail to Microsoft Mail if you are using Da Vinci 2.0, use the
	  extended addressing format:
	
	  USER@GATEWAY {NETWORK/POSTOFFICE/MAILBOX}
	
	  If you are using Da Vinci version 1.X, use the format:
	
	  GATEWAY"NETWORK/POSTOFFICE/MAILBOX":USER
	
	  If the name is too long for the addressing field, contact Da Vinci for a
	  solution.
	
	The manual incorrectly shows a semicolon before the userID, thus:
	
	  GATEWAY"NETWORK/POSTOFFICE/MAILBOX";USER
	
	
	Additional query words: 3.00 DocErr
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
