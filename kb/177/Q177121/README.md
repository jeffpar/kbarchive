---
layout: page
title: "Q177121: Format Tape Command Unavailable in Ntbackup.exe"
permalink: /kb/177/Q177121/
---

## Q177121: Format Tape Command Unavailable in Ntbackup.exe

{% raw %}

	Article: Q177121
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using Windows NT Backup (Ntbackup.exe), the Format Tape command on
	the Operations menu may be unavailable for certain types of tapes.
	
	MORE INFORMATION
	================
	
	The Ntbackup.exe program included with Windows NT can format only tapes in
	floppy disk controller-based tape drives that are DC2000 compatible. The driver
	for this type of tape device specifies whether the device supports the format
	command. Ntbackup.exe uses this information to determine whether the Format Tape
	command is available. Ntbackup.exe cannot format tapes in SCSI controller-based
	tape drives.
	
	Note that the Format Tape command is unavailable for some tape drives that do
	support the Format Tape command. With these devices, the Format Tape command is
	unavailable because formatting the tape would lower the tape capacity. For
	example, some Travan tapes have a 800-megabyte (MB) capacity with factory
	formatting, but have only a 250-MB capacity if formatted using Ntbackup.exe.
	
	Please consult the tape drive's manufacturer or documentation for information
	about how to format tapes if the Format Tape command is unavailable.
	
	
	Additional query words: prodnt greyed grayed out
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
