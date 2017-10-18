---
layout: page
title: "Q157992: How to Triple Boot to Windows NT, Windows 95/98, and MS-DOS"
permalink: kb/157/Q157992/
---

## Q157992: How to Triple Boot to Windows NT, Windows 95/98, and MS-DOS

	Article: Q157992
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up a computer so that the user can go directly
	to Windows NT, Windows 95/98, or MS-DOS by making a selection from the Boot.ini,
	without any need for Windows 95/98 multiple boot support.
	
	MORE INFORMATION
	================
	
	Windows 98 or Windows 95 should not be installed in the same partition as
	Windows NT; the shared Program Files folder can cause problems with interactions
	between Microsoft Internet Explorer and Microsoft Outlook Express on these
	operating systems.
	
	Also, if you are using both FAT32 and NTFS volumes, the NTFS partition should be
	on a logical drive letter that preceeds the FAT32 partition drive letter. If
	this is set up the other way around, Windows NT will not find the boot partition
	(where the system files are located).
	
	This information applies to x86 processors only.
	
	Follow these steps to enable triple boot support:
	
	1. Install MS-DOS.
	
	2. Install Windows NT.
	
	3. Remove the read-only, hidden, and system attributes of Bootsect.dos by typing
	  and running the following line from the command prompt: "attrib -r -h -s
	  bootsect.dos" (without the quotation marks).
	
	4. Copy the boot sector for MS-DOS by typing and running the following line from
	  the command prompt: "copy c:\bootsect.dos c:\bootsect.sav" (without the
	  quotation marks).
	
	5. Boot to MS-DOS and install Windows 95/98.
	
	6. Repair the Windows NT boot sector as Windows 95/98 has over-written the boot
	  sector. This will also create a new Bootsect.dos for Windows 95/98. For
	  additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q104429 Installing MS-DOS Version 6.2x After Windows NT Is Installed
	
	7. Remove the read-only, hidden, and system attributes from the Windows 95/98
	  Bootsect.dos by typing and running the following line from the command
	  prompt: "attrib -r -h -s bootsect.dos" (without the quotation marks).
	
	8. Rename the Windows 95/98 boot sector from C:\Bootsect.dos to C:\Bootsect.w40.
	
	9. Rename the MS-DOS boot sector from C:\Bootsect.sav to C:\Bootsect.dos.
	
	10. Remove the read-only attribute from boot.ini by typing and running the
	  following line from the command prompt: "attrib -r boot.ini" (without the
	  quotation marks).
	
	11. Modify Boot.ini using any text editor, such as Edit or Notepad, by adding
	  the following lines:
	
	  [Operating Systems]
	  c:\bootsect.dos="MS-DOS v6.22" /win95dos
	  c:\bootsect.w40="Windows 95/98" /win95
	
	You should now see the additional choices of "Windows 95/98" and "MS-DOS v6.22"
	when you start Windows NT.
	
	The new switches, /win95dos and /win95, are needed so that Windows NT can emulate
	the multiple boot process of Windows 95/98.
	
	This article contains information about using Windows NT with a configuration
	that has not been tested and is not supported by Microsoft. If the steps
	described in this article do not function properly, use a supported
	configuration.
	
	If Windows NT is going to be on the same partitions as MS-DOS and/or Windows
	95/98, the partition must be an MS-DOS partition. Windows 95/98 FAT 32
	partitions will not work with MS-DOS and Windows NT.
	
	Using NTFS or FAT32 partitions will require different partitions for each
	operation system. The ARC path in the Boot.ini file will need to be modified to
	reflect the different partitions.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q153762 Setting Up Dual Boot After Installing Windows NT
	
	Additional query words: prodnt triple-boot
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
