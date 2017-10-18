---
layout: page
title: "Q90379: Novell Driver Change in Setup Clears WIN.INI &quot;Load=&quot; Line"
permalink: kb/090/Q90379/
---

## Q90379: Novell Driver Change in Setup Clears WIN.INI &quot;Load=&quot; Line

	Article: Q90379
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Novell NetWare with Microsoft Windows version 3.1 and change
	the Novell network version in the Windows Setup program, the Windows Setup
	program will replace any programs listed on the Load= line of the WIN.INI file
	with NWPOPUP.EXE. The old entries on the Load= line will be lost unless you have
	made a backup of your WIN.INI file.
	
	MORE INFORMATION
	================
	
	When you change network drivers, Setup reads the SETUP.INF file to determine
	which .INI file lines need to be updated. However, as outlined on page 104 of
	the "Microsoft Windows Resource Kit" version 3.1, there is no syntax in the
	SETUP.INF for adding values to existing .INI file entries; it only replaces
	existing values. Hence, the old entries on the Load= line are removed, and the
	new line is rewritten to display only NWPOPUP. This problem does not occur with
	other networks such as Microsoft LAN Manager because they rely on the network
	drivers themselves to add network pop-up utilities on the Load= line rather than
	relying on the Windows Setup program for these updates.
	
	The Novell products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 NW-POPUP NWPOPUP.EXE load-line startup 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
