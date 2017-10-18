---
layout: page
title: "Q102728: Manual Installation of the UAM"
permalink: kb/102/Q102728/
---

## Q102728: Manual Installation of the UAM

	Article: Q102728
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	Customers that have installed the Services for Macintosh and have not
	yet upgraded their partitions to NTFS will not have the Microsoft User
	Authentication Module (UAM) volume. This article explains how to set
	up that volume after a NTFS partition has been created.
	
	The Microsoft UAM volume is formed with the following files:
	
	- MS UAM
	
	- ReadMe.UAM
	
	To create this volume and put the correct files in it, do the
	following:
	
	1. Make sure that you have an NTFS partition.
	
	2. If you are running Windows NT 3.x, run the following command from a command
	  prompt:
	
	  SETUP /i OEMNXPSM.INF /c UAMINSTALL
	
	  If you are running Windows NT 4.0, run the following command from a command
	  prompt:
	
	  SETUP /i OEMNSVSM.INF /c UAMINSTALL
	
	  The OEMNXPSM.INF and OEMNSVSM.INF files are the script information files for
	  the Services for Macintosh, and UAMINSTALL is the name of the section that
	  has the necessary commands to modify the registry in order to add that
	  volume.
	
	3. The Windows NT Setup screen appears and returns to the command prompt if the
	  above step was successful.
	
	  There are two things happening at this point. One is the creation of the
	  volume itself, and the other is the copying and creation of the files. The
	  SMFUAM.IFO and the SMFUAM.RSC are the two forks for the MS UAM file, and the
	  SFMUAM.TXT is the ReadMe.UAM file. These files get stored within a
	  subdirectory called AppleShare Folder, which is also created by this script
	  file.
	
	4. Because the script file modifies the registry, you will not see the volume if
	  you have the File Services for Macintosh started. If this is the case, stop
	  and start the File Services for Macintosh.
	
	5. Check the newly created volume in File Manager, Server Manager or the MacFile
	  icon in the Control Panel.
	
	Additional query words: sfm prodnt Authentication
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNT310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
