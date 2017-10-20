---
layout: page
title: "Q168105: WinNT Fails to Create a Memory.dmp On Any Other LUN Than 0"
permalink: /kb/168/Q168105/
---

## Q168105: WinNT Fails to Create a Memory.dmp On Any Other LUN Than 0

{% raw %}

	Article: Q168105
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows NT from a different SCSI logical unit number (LUN) other
	than LUN 0, a memory dump file (memory.dmp) file will not be created.
	
	CAUSE
	=====
	
	The Diskdump.sys file in Windows NT does not check for any other LUN besides LUN
	0. If the Windows NT computer is started from any other LUN than 0, this driver
	will not load, disabling the ability to write a dump file if the computer traps
	(displays a blue screen error message).
	
	MORE INFORMATION
	================
	
	Small Computer System Interface (SCSI) SCSI is a hardware interface that allows
	for the connection of up to 15 peripheral devices to a single expansion board
	that plugs into the computer called a SCSI host adapter or SCSI controller.
	
	SCSI devices are daisy chained together. Each device has two ports, one for the
	incoming cable and another for the outgoing cable to the next device. Each
	device must be set to a unique ID number (SCSI ID), which is normally done by
	manually flipping a rotary switch on the device itself. The highest number has
	the highest priority. Thus, the host adapter usually defaults to ID 7 in the
	case of an 8-device SCSI system.
	
	Each SCSI device can be further broken up into eight logical units, identified by
	logical unit numbers (LUNs) 0 to 7. Although most SCSI disks contain only one
	disk inside and are addressed as LUN 0, CD-ROM and optical disk jukeboxes
	contain multiple units. Each disk in these devices can be addressed
	independently via LUN numbers; for example, a four-disk jukebox could be
	assigned LUN 0 to 3. RAID systems are beginning to use multiple LUN addressing
	in their fault tolerant disk systems as well.
	
	On most computers you will not need to worry about LUN addressing since, by
	default, most SCSI controllers and devices are set to LUN 0. However, many of
	the newer SCSI controllers have the ability to start from LUNs other than zero
	(adaptec 2940 allows starting from LUN 0 or 1). You should be able to detect LUN
	addressing through the SCSI boot process or by entering the BIOS of SCSI
	controller installed on the system.
	
	Obtaining SCSI Standards reference manuals:
	
	American National Standard (ANSI) for Small Computer System Interface (SCSI),
	X3.131-1986. This approved standard is available from:
	
	  American National Standards Institute
	  11 West 42nd Street 13th Floor
	  New York, NY 10036
	  Sales Department: (212) 642-4900
	
	The Small Computer System Interface - 2 (SCSI-2) was approved by ANSI on August
	31, 1990. Since then, the X3T9.2 committee has asked ANSI to return SCSI-2 for
	further editing. Revision 10d is in the works, but it is not finished yet.
	Revision 10c can be purchased from:
	
	  Global Engineering Documents
	  2805 McGaw
	  Irvine, CA 92714
	  (800) 854-7179
	  Outside USA and Canada: (714) 261-1455
	
	Global has identified this document as X3.131-199x. (The latest revision is Rev
	10c with a date of 3/9/90.)
	
	If you are looking for an introduction to SCSI, try:
	
	  SCSI: Understanding the Small Computer System Interface
	  Written by NCR Corporation
	  Available from: Prentice Hall, Englewood Cliffs, NJ, 07632
	  Phone: (201) 767-5937
	  ISBN 0-13-796855-8
	
	If you want an easy-to-read reference book on SCSI-2 that includes timing
	diagrams (but omits all command sets other than for disks, tapes, and processor
	devices), try:
	
	  The SCSI Bench Reference
	  ENDL Publications
	  14426 Black Walnut Court
	  Saratoga CA, 95070
	  (408) 867-6642
	
	Additional query words: ntblue
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
