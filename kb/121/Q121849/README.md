---
layout: page
title: "Q121849: ATI Video Fails with Adaptec 174x SCSI Driver Present"
permalink: /kb/121/Q121849/
---

## Q121849: ATI Video Fails with Adaptec 174x SCSI Driver Present

	Article: Q121849
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10
	
	WINDOWS
	
	kbnetwork kb3rdparty kbbug3.10 kbfix3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer with an EISA bus running Windows NT version 3.1 may not be able to
	start the ATI video adapter driver (any type) with an Adaptec 174x adapter
	present, and the following messages may appear in the Event Viewer:
	
	  Event ID: 7026 Source: Service Control Manager Type: Error
	  Description: The following boot-start or system-start driver(s) failed to
	  load: ATI
	
	  Event ID: 22 Source: ATI Type: Error
	  Description: A conflict has been detected between two drivers which claimed
	  two overlapping IO port regions. Driver Aha 174x, with device
	  <\Device\ScsiPort0.Translated>, claimed an IO port range with starting
	  address in data address 0x28 and 0x2c, and length in data address 0x30.
	
	  Event ID: 22 Source: ATI Type: Error
	  Description: A conflict has been detected between two drivers which claimed
	  two overlapping IO port regions. Driver ATI, with device
	  <\Device\Video0.Translated>, claimed an IO port range with starting
	  address in data address 0x28 and 0x2c, and length in data address 0x30.
	
	CAUSE
	=====
	
	This problem occurs due to the ATI adapter using EISA address space for its
	extended registers, thus conflicting with devices situated on or beyond slot 4
	on the EISA bus.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	  - Place the Adaptec 174x SCSI adapter card on a slot other than slot 4; for
	  example, slots 1 to 3.
	
	  -or-
	
	  - Upgrade to Windows NT Workstation or Windows NT Server version 3.5.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	The Adaptec and ATI products discussed here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt 3.10 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
