---
layout: page
title: "Q131305: How To Make a Network Software Component Setup Disk from CD-ROM"
permalink: kb/131/Q131305/
---

## Q131305: How To Make a Network Software Component Setup Disk from CD-ROM

	Article: Q131305
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can make a floppy disk that contains an installable network components such
	as TCP/IP or DLC. If you only have the Windows NT CD-ROM disc, and you can only
	install network components from floppy disks, you can make a disk that contains
	network components such as TCP/IP or DLC.
	
	MORE INFORMATION
	================
	
	1. Format a blank disk.
	
	2. Copy all files with an extension of *.S (Server version) or *.W (Workstation)
	  (each are two bytes in size) from the CD-ROM root directory to the disk.
	
	  For Windows NT 4.0, copy a file called: CDROM_S.40 (for Server) or CDROM_W.40
	  (for Workstation) from the CDROM root directory to the disk.
	
	3. Find the INF file which contains the list of files you need to copy from the
	  \I386 directory on the CD-ROM.
	
	     OEMNXPDL.INF for installing DLC protocol
	     OEMNXPTC.INF for TCP/IP protocol
	
	  For additional information on INF files, see the following article in the
	  Microsoft Knowledge Base:
	
	  Q130209 List and Description of Windows NT 3.5 Information Files (*.INF)
	
	  NOTE: The INF files you need exist in compressed form on the distribution
	  media and must be expanded using the EXPAND.EXE utility before you can read
	  them with a text editor. For example:
	
	     EXPAND E:\I386\OEMNXPTC.IN_    A:\OEMNXPTC.INF
	
	4. Open the INF file with a text editor.
	
	5. Search for the section "[FILES-xxx]", where xxx is the component you wish to
	  install. For example:
	
	        [FILES-DLC] and [FILES-DLCAPI] for the DLC protocol
	
	6. Copy all the files listed under the "[FILES-xxx]" section to the disk.
	
	7. The disk now contains the necessary files to install the component listed in
	  the Add Software list box in the Network section of Control Panel.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
