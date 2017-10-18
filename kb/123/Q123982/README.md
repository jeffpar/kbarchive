---
layout: page
title: "Q123982: Access Violation in SFMPRINT.EXE with IBM or Lexmark Printer"
permalink: kb/123/Q123982/
---

## Q123982: Access Violation in SFMPRINT.EXE with IBM or Lexmark Printer

	Article: Q123982
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 1.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Services for Macintosh (SFM) printing services may fail to start or they may
	start and then stop after installing an IBM4079 Color Jetprinter, IBM 4039
	Laserprinter Plus PS (IBM4039P.PPD), or a Lexmark Optra PS Printer. You may also
	receive an error in SFMPRINT.EXE and a Dr. Watson log will be created. After
	starting the service, the service may be registered as Stopped. If the service
	is started you may be unable to stop it. No printers show up on the Macintosh
	computers.
	
	The following Application exception error is an example that occured with an IBM
	4039 Laserprinter Plus PS:
	
	  App: sfmprint.DBG (pid=179)
	  When: 2/2/1996 @ 14:13:15.422
	  Exception number: c0000005 (access violation)
	
	
	CAUSE
	=====
	
	When the SFM printing services start, they initialize all of the printer's
	PostScript printer description (PPD) files. If a PPD file has information that
	is formatted incorrectly or, is missing information, the SFM services fail.
	
	The IBM 4079 Color Jetprinter and the Lexmark Optra PS drivers that are included
	with Windows NT 3.5 and 3.51 have PPD's with incorrect PSVersion information in
	them. This causes the SFM printing services to fail; a Dr. Watson Log with an
	access violation is subsequently created.
	
	RESOLUTION
	==========
	
	To correct this problem, modify the PSVersion line in the PPD file:
	
	1. Use a text editor such as Windows Notepad to edit the IBM4079.PPD file. The
	  file is located in the platform specific subdirectory of
	  %SYSTEMROOT%\SYSTEM32\SPOOL\DRIVERS.
	
	2. Modify the following line
	
	  PSVersion: ""
	
	  to read:
	
	  PSVersion: "(250.0 )"
	
	3. Restart the SFM print services.
	
	You should be able to resume printing.
	
	The PPD files are written by Lexmark and IBM, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: sfmprint sfm ibm4079 dies crashes w32x86 dumps prodnt mac macs jet printer
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.1 3.5 3.51 1.51
	
	=============================================================================
	
