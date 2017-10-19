---
layout: page
title: "Q137475: SMC 8416 EtherEZ Card Does Not Allow Reconfiguration"
permalink: /kb/137/Q137475/
---

## Q137475: SMC 8416 EtherEZ Card Does Not Allow Reconfiguration

	Article: Q137475
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51 95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOM
	-------
	
	When you use an SMC 8416 EtherEZ network card, you can only use default
	values of the card. When you change the configuration by running Control
	Panel, choosing Network, and then Configure, or if you use the
	configuration program that ships with the adapter, your configuration
	attempt fails.
	
	CAUSE
	=====
	
	This is caused by the Plug and Play (PNP) capabilities of the card and the Plug
	and Play BIOS of the computer.
	
	RESOLUTION
	==========
	
	The following information has been provided by Standard Microsystems technical
	support and is not guaranteed to be correct by Microsoft Corporation.
	
	To resolve this problem, turn off the PNP capabilities of the adapter. Some
	computer CMOS programs allow you to turn off the PNP capability of the BIOS but
	this can have unexpected results on other adapters.
	
	Depending on the operating system running on your computer, use one of the
	following procedures with EZSETUP.EXE to disable the PNP capabilities of the
	network card:
	
	- If your computer is configured for dualboot, for example, MS-DOS and Windows
	  NT, boot to MS-DOS and type "EZSETUP -nopnp" (without the quotation marks).
	
	  -or-
	
	- If your computer is running Windows NT or Windows 95, boot with an MS-DOS
	  bootable floppy with EZSETUP.EXE on the floppy and type "EZSETUP -nopnp"
	  (without the quotation marks).
	
	You can obtain EZSETUP.EXE by downloading the self-extracting executable
	GEZ121.EXE from the SMC BBS at (516) 434-3162 or from the following Internet
	site:
	
	  http://www.smc.com/ftpdocs/nics.html#nics/latest
	
	For more information contact Standard Micro Systems technical support at (800)
	992-4762.
	
	The SMC 8416 EtherEZ network card is manufactured by Standard Micro Systems, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: prodnt win95
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : 3.50 3.51 95
	
	=============================================================================
	
