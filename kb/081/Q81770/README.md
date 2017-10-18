---
layout: page
title: "Q81770: Windows 3.1 Setup May Not Detect Networks Not in the Path"
permalink: kb/081/Q81770/
---

## Q81770: Windows 3.1 Setup May Not Detect Networks Not in the Path

	Article: Q81770
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Windows version 3.1 Setup program may not correctly detect the
	presence of some networks if the network directory is not in the PATH
	statement.
	
	The following is a list of networks that Windows 3.1 may not detect if the
	network directory is not in the path.
	
	- 3Share
	
	- 3Open
	
	- LAN Manager
	
	- MSNet
	
	WORKAROUND
	==========
	
	If the Setup program does not detect a network, and one is installed, there are
	three options.
	
	1. Add the network directory to the PATH statement and rerun Setup.
	
	  -or-
	
	2. Execute the Windows 3.1 Setup program, choose Custom mode, and manually
	  specify the correct network.
	
	  -or-
	
	3. If Windows 3.1 is already installed, but is not configured for the correct
	  network, run the Maintenance mode of Setup from MS-DOS and select the correct
	  network.
	
	Some of the network products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.10 win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
