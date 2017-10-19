---
layout: page
title: "Q103929: Cannot Install Driver From a Directory Name That Has a Space"
permalink: /kb/103/Q103929/
---

## Q103929: Cannot Install Driver From a Directory Name That Has a Space

	Article: Q103929
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install additional drivers in Windows NT from the Drivers section of
	Control Panel, if the required files reside in a directory with a space in its
	name, the files will not be found and the driver will not be able to install
	correctly.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From File Manager, create a directory on an NTFS partition called "Directory
	  Name with Spaces" (without the quotes).
	
	2. Expand any one of the following files from the Windows NT CD-ROM to that
	  directory:
	
	  SNDSYS.SYS
	  SNDSYS32.DLL
	  SYNTH.DLL
	  SYNTH.PAT
	  SYNTH.SYS
	
	3. Open Control Panel and choose the Drivers icon.
	
	4. Choose Add.
	
	5. Select the Windows Sound System driver and choose OK.
	
	6. In the Install Driver dialog box, type the name of the NTFS directory:
	
	  <drive:>\Directory Name with Spaces\
	
	  where <drive:> is the drive letter of the NTFS partition.
	
	7. Choose OK and the directory name will be truncated in the dialog box you
	  entered at the first space in the name.
	
	RESOLUTION
	==========
	
	If the files to install a specific drive need to be stored in a different place
	than the Windows NT CD-ROM, place them in a directory that does not contain any
	spaces in the directory name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.x. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	This problem is resolved in Windows NT 4.0.
	
	Additional query words: prodnt wss
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
