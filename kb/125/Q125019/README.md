---
layout: page
title: "Q125019: Long Filename Creates an MS-DOS Volume Label"
permalink: /kb/125/Q125019/
---

## Q125019: Long Filename Creates an MS-DOS Volume Label

{% raw %}

	Article: Q125019
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:3.5,3.51,4.0;MSDOS:5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After saving a file with a long filename to the root directory of an unlabeled
	FAT-formatted drive, you see an unexpected volume label when you reboot under
	MS-DOS.
	
	For example, if you save a file as NEWTESTFILE.TXT on a file allocation table
	(FAT) partition, Windows NT creates NEWTESTFILE.TXT and NEWTES~1.TXT. If you
	boot MS-DOS, the DIR *.TXT command displays:
	
	   Volume in drive C is BX
	   Volume Serial Number is 1CC3-3E96
	   Directory of C:\ 
	
	  NEWTES~1 TXT        11,438 01-16-95   6:28p
	          1 file(s)         11,438 bytes
	
	NOTE: The volume label is BX.
	
	CAUSE
	=====
	
	This situation occurs due to the new Windows NT version 3.5 long filename design
	for FAT-formatted drives. When you create a long filename under Windows NT, the
	FAT file system creates one file but stores both the long filename and short
	filename in the directory. One directory entry is used for short file names, and
	one or more directory entries are used to store long filenames.
	
	NOTE: For more information on how Windows NT creates short filenames, see article
	Q101601 in the Microsoft Knowledge Base.
	
	WORKAROUND
	==========
	
	To work around this situation, do not use long filenames when you write files to
	the root directory of FAT-formatted drives, or turn off the option to use long
	filenames.
	
	To turn off long filename support under Windows NT version 3.5:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     SYSTEM\CurrentControlSet\Control\FileSystem
	
	3. Select Win31FileSystem.
	
	4. From the Edit menu choose DWORD.
	
	5. Press 1 and then choose OK.
	
	6. Shutdown and restart Windows NT.
	
	NOTE: Changing this value does not change the file structure.
	
	MORE INFORMATION
	================
	
	The structure of a MS-DOS entry is:
	
	  Filename:            8 byte
	  Extension:           3 byte
	  Attribute:           1 byte
	  Reserved:           10 byte
	  Time:                2 byte
	  Date:                2 byte
	  Starting cluster:    2 byte
	  File Size:           4 byte
	
	The layout of the attribute byte is:
	
	  Bit   Attribute
	  ---   --------------
	   7    reserved
	   6    reserved
	   5    archive
	   4    sub-directory
	   3    volume label
	   2    system file
	   1    hidden file
	   0    read-only file
	
	A dump of the directory structure from the previous NEWTESTFILE.TXT example
	shows:
	
	  42 58 00 54 00 00 00 FF - FF FF FF 0F 00 46 FF FF   BX.T...    ..F
	  FF FF FF FF FF FF FF FF - FF FF 00 00 FF FF FF FF             ..
	
	  01 4E 00 45 00 57 00 54 - 00 45 00 0F 00 46 53 00   .N.E.W.T.E...FS.
	  54 00 46 00 49 00 4C 00 - 45 00 00 00 2E 00 54 00   T.F.I.L.E.....T.
	
	  4E 45 57 54 45 53 7E 31 - 54 58 54 20 00 32 2A 6B   NEWTES~1TXT .2*k
	  32 1E 32 1E 00 00 2A 6B - 32 1E F0 0F BA 01 00 00   2 2 ..*k2 =.|...
	
	The NEWTES~1.TXT entry attribute byte is 20 (hexadecimal), indicating a file with
	just the archive bit set. Both entries for NEWTESTFILE.TXT have the attribute
	byte set to 0F (hexadecimal), indicating a read-only, system, hidden file, and a
	volume label. This combination is not expected in the MS- DOS environment.
	
	Additional query words: 5.00 5.00a 6.00 6.20 6.21 6.22 prodnt msdos hex hexa upper lower mixed lfn file name names
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : WinNT:3.5,3.51,4.0;MSDOS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
