---
layout: page
title: "Q120220: PC Adm: Message Stuck in Queue--Sent Multiple Times"
permalink: kb/120/Q120220/
---

## Q120220: PC Adm: Message Stuck in Queue--Sent Multiple Times

	Article: Q120220
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the version 3.2 Mail Administrator program and choose the Queue
	option to check mail queued for an external postoffice, there may be mail
	messages that have not been deleted from the queue, even though the External
	Mail program (EXTERNAL.EXE) has successfully delivered the message to the
	external postoffice. Because the mail message remains in the queue, it will be
	delivered repeatedly until the administrator deletes the message from the queue.
	This symptom has been noted specifically with external postoffices defined as
	direct via modem.
	
	CAUSE
	=====
	
	Once a message is successfully delivered, the External Mail program updates the
	delete bit in the .KEY file to mark the header in the .MBG file as deleted. If
	the <HEXID>.KEY file (<HEXID> is the 8-digit ID that corresponds to
	the external postoffice) is not updated, the symptoms described above may occur.
	This problem can be caused by a lack of sufficient file handles.
	
	RESOLUTION
	==========
	
	Confirm that there is a FILES line in the CONFIG.SYS file and that it is set to
	30 or more.
	
	The default number of files allocated in MS-DOS is 20. The first 5 of these 20
	are always assigned to the standard devices, which default to the CON, AUX, and
	PRN character devices. This leaves 15 for the External Mail process.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
