---
layout: page
title: "Q86148: PROFS: How to Check Whether Mail Is Queued"
permalink: /kb/086/Q86148/
---

## Q86148: PROFS: How to Check Whether Mail Is Queued

	Article: Q86148
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is no easy way to check the mail "queue" on the VM side of the gateway, as
	is possible on the local area network (LAN). However, there are two files you
	can monitor to see whether mail is moving through the gateway.
	
	PROFSIN CSI is the incoming mailbag for the Microsoft Mail Host Access component.
	This is the file that is created when the PROFSOUT.DAT file is uploaded from the
	LAN to the gateway VM ID. The size of this file will vary, depending on the
	number of messages, but it should always be a multiple of 80 bytes.
	
	PROFSOUT $MESSAGE is the outgoing mailbag for the Host Access component. This is
	the file that contains mail items for delivery to the LAN. The size of the file
	will vary; however, it should always be a multiple of 80 bytes. When downloaded
	to the LAN, the file is renamed PROFSOUT.DAT.
	
	REFERENCES
	==========
	
	"Microsoft Mail Host Access for IBM PROFS and OfficeVision VM Administrator's
	Guide"
	
	
	Additional query words: 3.20 pcmail profsvm PROFSOUT $MESSAGE PROFSIN CSI queue
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	
