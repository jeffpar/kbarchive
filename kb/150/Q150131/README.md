---
layout: page
title: "Q150131: &quot;Windows: A Fatal Exception&quot; Error Message When Opening BBS"
permalink: /kb/150/Q150131/
---

## Q150131: &quot;Windows: A Fatal Exception&quot; Error Message When Opening BBS

	Article: Q150131
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both of these files are hidden
	in the Windows folder.
	
	SYMPTOMS
	========
	
	When you open a bulletin board (BBS) on MSN, The Microsoft Network, you may
	receive the following error message:
	
	  - Windows: A Fatal Exception 0E has occurred @ 0028:c025 a0a0 n-vxd vmm(06)x
	  00010a0
	
	CAUSE
	=====
	
	Registry values may be damaged.
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	
	Navigate to the following Registry key and delete the Articles folder and the BBS
	Viewer folder:
	
	  HKEY_CURRENT_USER\Software\Microsoft\MOS
	
	These folders should be rebuilt when you sign in to MSN. Note that deleting the
	Articles folder causes you to see all the BBS messages that you have already
	read.
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN130 kbMSN120
	Version           : WINDOWS:1.2,1.3
	
	=============================================================================
	
