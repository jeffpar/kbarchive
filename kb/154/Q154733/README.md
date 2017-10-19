---
layout: page
title: "Q154733: Error Accessing Boot Sector File &#92;&#92;BOOTSS"
permalink: /kb/154/Q154733/
---

## Q154733: Error Accessing Boot Sector File &#92;&#92;BOOTSS

	Article: Q154733
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If your computer is configured to dual boot into Windows NT version 4.0 and
	another operating system (such as MS-DOS or Windows 95), you may receive the
	following error message when you attempt to boot into the non-Windows NT
	operating system:
	
	  I/O error accessing boot sector file
	  Multi(0)disk(0)rdisk(0)partition(1)\\BOOTSS
	
	CAUSE
	=====
	
	When your computer is configured to dual boot into Windows NT version 4.0 and
	another operating system, it uses a hidden file called Bootsect.dos to boot into
	the non-Windows NT operating system. If the Bootsect.dos file becomes corrupted,
	or is missing from the root of drive C, you will receive this error.
	
	Note that the Ntldr file displays the erroneous file name Bootss instead of the
	correct file name of Bootsect.dos.
	
	
	RESOLUTION
	==========
	
	Search for the hidden Bootsect.dos file in the root of drive C. If it is
	missing, it can be re-created or restored from a recent backup. If it exists, it
	is probably corrupted. You should delete the file and then re- create it. To do
	this, see the following article in the Microsoft Knowledge Base:
	
	Q101789Reconstructing Bootsect.dos
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
