---
layout: page
title: "Q161801: Chkdsk Reports an Erroneous Event ID 41"
permalink: kb/161/Q161801/
---

## Q161801: Chkdsk Reports an Erroneous Event ID 41

	Article: Q161801
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run "chkdsk <drive_letter>: /f" (without the quotation marks),
	you may receive the following event in the system event log:
	
	  Event ID: 41
	  Source: Disk
	  Description: The file system structure on the disk is corrupt and unusable.
	  Please run the chkdsk utility on the device Device\Harddiskx\Partitionx with
	  label "xxxx".
	
	NOTE: The "xxxx" is the volume label of the partition.
	
	CAUSE
	=====
	
	Chkdsk reports the wrong text message in the event log. The message should
	read:
	
	  "Autochk will be run on this volume because user has selected it."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
