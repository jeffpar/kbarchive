---
layout: page
title: "Q86154: PROFS: Maximum Message Size That Can Be Processed"
permalink: kb/086/Q86154/
---

## Q86154: PROFS: Maximum Message Size That Can Be Processed

	Article: Q86154
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The maximum message or file size that can be transferred across the Microsoft
	Mail gateway is usually determined by the virtual storage allotted to the
	gateway VM ID. If the virtual storage is set to greater than 2 MB, the amount of
	disk space on the 191 A disk can also act as a limiting factor.
	
	When the Host Access component is started, a number of informative messages
	appear on the screen, prefaced with an asterisk (*). The second-to-last message
	states
	
	  * Maximum mailbag size (bytes) that can currently be processed:
	
	followed by a number indicating the effective maximum message size for items from
	the local-area network (LAN) and the Host. If the outgoing mailbag file from the
	LAN is larger than this number, it will not be uploaded to the Host. Instead, it
	is copied to the ERR subdirectory on the server, and an error message is sent to
	the LAN administrator's mailbox.
	
	For messages or files sent from the Host, any items that are too large are
	returned by the gateway to the sender, and a message is displayed on the screen
	giving the reason for the rejection.
	
	
	Additional query words: 3.20 pcmail profsvm
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	
