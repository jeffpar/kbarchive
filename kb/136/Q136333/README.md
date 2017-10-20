---
layout: page
title: "Q136333: PC DirSync: Err Msg: Fatal 159 Failure to Send Update Mail..."
permalink: /kb/136/Q136333/
---

## Q136333: PC DirSync: Err Msg: Fatal 159 Failure to Send Update Mail...

{% raw %}

	Article: Q136333
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the T2 phase of automatic Directory Synchronization (Dir-Sync) or when
	you run the server transmit process SRVMAIN -t, the following error may be
	displayed:
	
	  Fatal 159 Failure to send update mail to requestors PCM:Net/PO
	
	CAUSE
	=====
	
	This error may be caused by a missing INQUEUE.KEY file and/or a missing
	INQUEUE.MBG file.
	
	RESOLUTION
	==========
	
	Create new INQUEUE.KEY and INQUEUE.MBG files.
	
	To create a new INQUEUE.KEY file:
	
	  debug INQUEUE.KEY
	  -rcx
	  CX 0000
	  :230
	  -f100,32f,0
	  -w
	  -q
	
	To create an INQUEUE.MBG file:
	
	  M:\MBG> type nul > INQUEUE.MBG
	
	NOTE: You can verify that the file was created by using the MS-DOS DIR command to
	check for the existence of a zero-byte INQUEUE.MBG file.
	
	MORE INFORMATION
	================
	
	This error can also be caused by insufficient disk space on the file server
	hosting the Dir-Sync server postoffice.
	
	
	Additional query words: 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	

{% endraw %}
