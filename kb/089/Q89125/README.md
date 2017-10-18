---
layout: page
title: "Q89125: How to Obtain Updated Novell Drivers and VPICDA.386"
permalink: kb/089/Q89125/
---

## Q89125: How to Obtain Updated Novell Drivers and VPICDA.386

	Article: Q89125
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To run Windows 3.0 on a Novell network, you must obtain new Novell NetWare shell
	components (NET3.COM, NET4.COM, NETBIOS.EXE, and IPX.COM) version 3.02a or
	later. When you upgrade your shell components, also upgrade other NetWare
	utilities (such as BINDFIX.EXE and MAKEUSER.EXE) before using them with the
	NetWare 3.01 shell.
	
	MORE INFORMATION
	================
	
	If you are using a network card on IRQ2, then you also need Novell's VPICDA.386.
	In enhanced mode, your system may stop responding (hang) without this file. To
	use VPICDA.386:
	
	1. Run Novell's INSTALL.EXE, which is included with the updated shell components
	  listed above.
	
	2. Enter the location of your Windows 3.0 files. INSTALL.EXE copies VPICDA.386
	  into the SYSTEM subdirectory and modifies a line in SYSTEM.INI to read:
	
	        device=VPICDA.386
	
	Upgrades for these components are available through normal Novell distribution
	channels, including CompuServe in the NOVLIB software library. Consult your
	system administrator for instructions on how to install components on your
	system.
	
	Additional query words: 3.00 3.00a interrupt freeze lock
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWin300 kbWin300a
	Version           : :3.0,3.0a
	
	=============================================================================
	
