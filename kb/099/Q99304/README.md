---
layout: page
title: "Q99304: Mac Srv: Server May Stop Operating When Run with Tape Backup"
permalink: kb/099/Q99304/
---

## Q99304: Mac Srv: Server May Stop Operating When Run with Tape Backup

	Article: Q99304
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a tape backup device or software is installed on the same Macintosh as the
	server for version 2.0, 3.0, or 3.1 of Microsoft Mail for AppleTalk Networks,
	the server may stop operating at startup or at the time the backup is taking
	place.
	
	CAUSE
	=====
	
	Because both the Mail server and the tape backup process are CPU intensive,
	neither wants to give up processor time to the other. Consequently, if the tape
	backup is running at the time the Mail server attempts to process information,
	the Mail server may stop operating.
	
	Likewise, if the Mail server interrupts the tape backup at the time it is writing
	data to the tape drive, a bad write may occur and the backup data could be
	corrupt.
	
	RESOLUTION
	==========
	
	Move either the tape backup unit or the Mail server software to a different
	Macintosh. For detailed instructions on moving a Microsoft Mail Server, refer to
	chapter two of the "Network Manager's Guide."
	
	MORE INFORMATION
	================
	
	Most mail servers are classified as "interrupt driven" applications. This refers
	to the fact that a mail server is interrupted with requests from users, other
	servers, or its own internal processes. Backup systems write in a continuous
	data stream to the backup device. If a mail server interrupt is processed by the
	server, it is possible for the backup system to incorrectly write information,
	which will cause a corrupt copy of the data.
	
	
	Additional query words: 2.00 3.00 3.10 Retrospect NetStream crash hang
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310 kbMailATN200
	Version           : WINDOWS:2.0,3.0,3.1
	
	=============================================================================
	
