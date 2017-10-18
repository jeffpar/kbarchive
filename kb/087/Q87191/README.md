---
layout: page
title: "Q87191: PROFS: Maximum Allowable Size of Mail Sent Through Gateway"
permalink: kb/087/Q87191/
---

## Q87191: PROFS: Maximum Allowable Size of Mail Sent Through Gateway

	Article: Q87191
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The maximum size of mail items that can be handled by the Microsoft Mail Gateway
	to IBM PROFS and OfficeVision is dependent only on the storage available on the
	receiving system.
	
	For host-to-LAN mail, any size of message or file can by accepted by the gateway
	program on the LAN (HostDisp or VMGATE), provided that there is sufficient disk
	space on the mail system server to write the associated files. Some network
	operating systems (such as Novell NetWare) allow LAN administrators to limit the
	server disk space for specific clients. This should not be done to the gateway
	PC's network ID.
	
	For LAN-to-Host mail, the maximum message or file size is calculated by the Host
	Access software. This number is posted on the host session screen, and is
	viewable when you log on to the gateway VM ID. The LAN gateway program (HostDisp
	or VMGATE) checks this value before queuing up any mail to send to the host. If
	the space on the gateway VM ID is not sufficient to handle the mail, it is
	copied to the VMGATE\ERR directory and the administrator is notified.
	
	NOTE: The PROFS/OV Gtw version 3.4 and 3.4a add the feature to limit the message
	size that VMGATE.EXE sends from the LAN to VM. Use the command line switch
	-onnnnnnn. The message size is specified in kilobytes. If a message exceeds this
	size, the message without the attachments is returned to the sender. You can
	specify a number from 1 to 2,097,151. For example: to indicate that only
	messages smaller than 500K can be ent to VM, specify - o500
	
	For additional information, please see page 35 of the PROFS Gtw LAN
	"Administrators Guide."
	
	
	Additional query words: 3.00 pcmail profslan maximum mail size
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
