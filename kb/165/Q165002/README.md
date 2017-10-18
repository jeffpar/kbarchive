---
layout: page
title: "Q165002: Corrupt Files Error After You Apply Service Pack 2"
permalink: kb/165/Q165002/
---

## Q165002: Corrupt Files Error After You Apply Service Pack 2

	Article: Q165002
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfile kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP2 
	- Microsoft Windows NT Server version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Service Pack 2 for Windows NT 4.0 over the network and restart
	your computer, you may receive error messages stating that some files (for
	example Ntfs.sys or Advapi32.dll) are corrupt.
	
	CAUSE
	=====
	
	This problem occurs because the Service Pack 2 binary files were packaged using
	authentication for web distribution. You only experience this problem when you
	expand a previous version of Service Pack 2 and then copy the files from one
	computer with an NTFS partition to another computer over the network (and only
	when the two systems negotiate raw write mode between them.)
	
	The specific files affected by this problem are:
	
	  Ntfs.sys
	  Advapi32.dll
	  Winhlp32.exe
	  Halapic.dll
	
	This does not occur with the CD-ROM version of Service Pack 2.
	
	RESOLUTION
	==========
	
	The Service Pack 2 binary files were repackaged to resolve this problem. Please
	download the Service Pack 2 files again.
	
	IMPORTANT: The files did not change, they were only repackaged without
	authentication.
	
	NOTE: If your system no longer starts due to Ntoskrnl.exe or other critical
	system files being corrupt, you must replace these files manually. This may
	require you to install another copy of Windows NT in different folder so that
	you can access the original installation, especially on an NTFS partition.
	
	MORE INFORMATION
	================
	
	If you experience this problem with the latest version of Service Pack, perform
	one of the following steps:
	
	- Copy the Service Pack locally and run Update.exe from your local hard disk.
	
	  -or-
	
	- Manually update the Rdr.sys file before you apply Service Pack 2 over the
	  network. To do this, rename Rdr.sys in the %systemroot%\System32\Drivers
	  folder, copy the expanded version of Rdr.sys from Service Pack 2 to this
	  location, restart your computer, and then run Update.exe.
	
	Additional query words: prodnt sp2 4.00
	======================================================================
	Keywords          : kbfile kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp2 kbWinNTSsearch kbWinNTS400sp2 kbWinNTS400search
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	
