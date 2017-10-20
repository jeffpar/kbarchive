---
layout: page
title: "Q104374: PROFS: Err: Host Time-Out, Host Access Left in XEDIT on VM/ESA"
permalink: /kb/104/Q104374/
---

## Q104374: PROFS: Err: Host Time-Out, Host Access Left in XEDIT on VM/ESA

{% raw %}

	Article: Q104374
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Host Access for IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.2 and earlier of Microsoft Host Access for IBM PROFS and
	OfficeVision, the PROFSIN CSI file may get stuck in XEDIT mode while processing
	messages from the local-area network (LAN).
	
	This brings the processing of messages to a halt, and eventually causes the
	gateway to exit out to MS-DOS with a host timeout error. The most noticeable
	sign that this problem has occurred is that when you toggle to the host, Host
	Access is in the XEDIT screen with an empty file.
	
	This problem is known to occur in versions 1.1 and 2.0 of VM/ESA.
	
	CAUSE
	=====
	
	This problem occurs after the PROFS gateway has unloaded the PROFSIN.DAT file
	from the VMGATE subdirectory on the LAN to the host as PROFSIN CSI. The Host
	Access code begins processing the information in the data in the PROFSIN CSI
	file, one record at a time. As each record is processed, it is deleted;
	eventually, all records are processed and the file is empty.
	
	At this point, the Host Access code in the PWAFSCSI XEDIT file issues a COMMAND
	FILE command to exit the file. However, you cannot issue the COMMAND FILE
	command on an empty file in VM/ESA 1.1. Therefore, the COMMAND FILE command is
	ignored, and the file remains open.
	
	RESOLUTION
	==========
	
	On the VM ID's 193 disk, there is a file called PWAFSCSI XEDIT. Place the
	following code at the end of the file, right below the line issuing the COMMAND
	FILE command:
	
	  &IF RC NE 0
	  QQUIT
	
	This code allows the Host Access component to close the PROFSIN CSI file after
	all the records have been processed; the Host Access component then can continue
	normal operation.
	
	Additional query words: 3.20 VM/ESA 1.1 2.0 XEDIT PROFSIN CSI ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
