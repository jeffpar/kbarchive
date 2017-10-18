---
layout: page
title: "Q139674: Enhanced Error Description for Message 631"
permalink: kb/139/Q139674/
---

## Q139674: Enhanced Error Description for Message 631

	Article: Q139674
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server may log the following error if an internal client-server
	communication error is detected:
	
	  Message 631
	  Invalid message received across the LAN
	
	  EXPLANATION: This is an internal error.
	
	  ACTION: Contact support services at your site.
	
	This message, however, does not indicate the underlying cause of the error.
	
	CAUSE
	=====
	
	Message 631 is logged by SNA Server if any of the following error conditions is
	detected in a message sent by another SNA Server component:
	
	- The mhtype is invalid.
	
	- The message ID is invalid.
	
	- The sequence number is wrong.
	
	The mhtype, message ID, and sequence number are included in all messages passed
	between SNA Server components (for example, between SNA Server and a 3270 or
	APPC application, between SNA Server and a link service, and between SnaBase and
	an SNA client).
	
	RESOLUTION
	==========
	
	Microsoft has updated the following files to correct this problem:
	
	  SNAEVENT.DLL
	  SNALM.DLL
	  SNAIP.DLL
	  SNANW.DLL
	  SNANB.DLL
	  SNABV.DLL
	  SNAAT.DLL
	
	With this fix applied, Message 631 now logs the following information:
	
	- The reason for logging the event.
	
	- Message header information.
	
	- Expected sequence number.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
