---
layout: page
title: "Q87181: PROFS: How to Trace Where Mail Failed"
permalink: /kb/087/Q87181/
---

## Q87181: PROFS: How to Trace Where Mail Failed

	Article: Q87181
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
	
	There are several points where the delivery of a piece of mail can fail when
	traveling from a Microsoft Mail user to an IBM PROFS user (or vice versa). In
	most of these cases, the mail item will be returned to the sender. However, in
	some instances the mail item is copied to another location, and the mail system
	administrator is sent an error message.
	
	MORE INFORMATION
	================
	
	When sending mail from the local-area network (LAN), all mail destined for the
	host goes to a common outgoing mailbag in the mail system database. You can
	check the contents of this mailbag with the Queue function in the Admin
	program.
	
	After the gateway program (HostDisp or VMGATE) has extracted the mail item from
	this queue, it appendeds it to the file CSIOUT.DAT in the VMGATE directory of
	the database. At this point, an entry is written to the SENT.LOG file, if the
	-MS option is used on the gateway command line.
	
	When the gateway program is ready to send the mail to the host, it copies
	CSIOUT.DAT to PROFSIN.DAT. If there are any problems during this process, the
	file will be copied to the VMGATE\ERR subdirectory and an error message is sent
	to the administrator's mailbox.
	
	Once the PROFSIN.DAT is uploaded to the gateway VM ID, it is called PROFSIN CSI,
	and it resides on the 191 "A" disk. At this point, the LAN side of the gateway
	has finished its tasks, and the delivery of the mail is dependent on the Host
	Access component programs. The incoming mailbag (PROFSIN CSI) is opened,
	addresses are translated, and the gateway attempts to send each mail item to its
	recipients. If any of these steps fail, either the message is returned to the
	sender or an Incident Report is sent to the INFORM_ID.
	
	When sending mail from the host to an MS Mail user, the process is reversed and
	the filenames are different. Once the gateway VM ID receives an incoming message
	or file from PROFS in its READER, it first check the validity of the address. If
	the message or file is found to be valid, the item is appended to the outgoing
	mailbag file, PROFSOUT $MESSAGE. At this point, it waits for the LAN-side
	gateway program (HostDisp or VMGATE) to request that the mailbag be downloaded
	to the LAN.
	
	Once the PROFSOUT $MESSAGE file is downloaded to the LAN, it is called
	PROFSOUT.DAT. This file is immediately appended to CSIIN.DAT. If any part of
	this process fails, the file is copied to the VMGATE\ERR directory. When the
	gateway program is ready to insert the mail into the MS Mail database, it copies
	CSIIN.DAT to CSIWORK.DAT. If this succeeds, the mail is delivered to the
	recipient's MS Mail mailboxes. Also, an entry is added to the RECV.LOG file, if
	the -MR option is specified on the gateway program command line. If the process
	fails, the CSIWORK.DAT file is copied to the VMGATE\ERR directory.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to IBM PROFS and OfficeVision LAN Administrator's
	Guide"
	
	
	Additional query words: 3.00 pcmail profslan queues mail failure Incident Report
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
