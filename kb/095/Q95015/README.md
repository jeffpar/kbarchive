---
layout: page
title: "Q95015: PROFS: Err Msg: Error Downloading the File..."
permalink: /kb/095/Q95015/
---

## Q95015: PROFS: Err Msg: Error Downloading the File...

{% raw %}

	Article: Q95015
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 2.1b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While transferring messages between the LAN and VM host environments, the system
	displays the following error message:
	
	  Error in downloading the file xxx Lines downloaded instead of yyy
	
	This error message signals that the VMGATE program's check of the downloaded file
	size was inconsistent with the file size it had when it was located on the VM
	host.
	
	CAUSE
	=====
	
	This is caused by a set of bad file transfer executables (SEND.EXE and
	RECEIVE.EXE) from the emulator manufacturer.
	
	RESOLUTION
	==========
	
	For assistance in acquiring corrected versions of the transfer executables,
	check with the manufacturer of the emulator.
	
	Additional query words: 2.10b Emulator DCA Send Receive Downloading ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS210b
	Version           : :2.1b
	
	=============================================================================
	

{% endraw %}
