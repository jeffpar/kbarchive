---
layout: page
title: "Q87690: PRB: How to Resolve &quot;Too Many Files Open&quot; Error"
permalink: /kb/087/Q87690/
---

## Q87690: PRB: How to Resolve &quot;Too Many Files Open&quot; Error

	Article: Q87690
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.50 | 2.50 3.00 5.00
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5 
	- Microsoft FoxPro for Windows, version 2.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A "Too many files open" error occurs.
	
	RESOLUTION
	==========
	
	On both the server and workstation computers, do the following to address this
	situation:
	
	1. Check the FILES statement in the CONFIG.SYS file to ensure that it does not
	  contain any spaces and that there are enough files specified (FILES=60 is a
	  good starting point).
	
	2. In a Novell network environment, check the FILE HANDLES statement in either
	  the SHELL.CFG or the NET.CFG, depending on your installation (for example,
	  FILE HANDLES=80).
	
	  NOTE: The location of the SHELL or NET.CFG file is critical in a network
	  environment. The file MUST be in the same directory as the IPXODI driver. If
	  it is NOT in the same directory, the FILE HANDLES statement will NOT be
	  processed. Novell governs the number of files open by the FILE HANDLES
	  statement independently of the MS-DOS FILES statement. A FILES setting of 100
	  is usually more than adequate, but in any case, the combination of the FILES
	  statement AND the FILE HANDLES statement in the *.CFG file should NOT exceed
	  the MS-DOS limit of 255. The combination of the two values is cumulative.
	
	  This error may also occur when running the Microsoft Client software for
	  Netware, under Windows 95. This occurs because this client software does not
	  support Novell's Network Directory Services. In order to get support for
	  these services, download MSNDS.EXE from one of Microsoft's on-line resources.
	  For more information about Microsoft Services for Netware Directory Services,
	  please see the following article in the Microsoft Knowledge base:
	
	  Q138709 Microsoft Service for Netware Directory Services Available
	
	3. If the AUTOEXEC.BAT file loads the MS-DOS SHARE utility, modify the F and L
	  parameters to specify a greater number of files and locks (for example, SHARE
	  /F:5120 /L:500).
	
	  /F: Allocates file space for the MS-DOS storage area used to record
	  file-sharing information. The default value is 2040.
	
	  /L: Sets the number of files that can be locked at one time. The default value
	  is 20.
	
	  NOTE: By using the MS-DOS INSTALL command, SHARE may be loaded in the
	  CONFIG.SYS file instead of AUTOEXEC.BAT. Be sure to check both files to
	  determine if SHARE has been loaded.
	
	4. If the system has less than 4 megabytes of random-access memory (RAM), try
	  remarking out the disk cache. To do this for SMARTDRV.EXE, place "REM "
	  (without the quotation marks) in front of the line that loads SMARTDRV.EXE in
	  the AUTOEXEC.BAT file.
	
	NOTE: When you run the FoxPro for DOS product in Windows NT, you need to make the
	preceding changes to the Autoexec.nt and Config.nt files. These files are
	located in the \WINNT\SYSTEM32 directory.
	
	Additional query words: VFoxWin FoxDos FoxWin foxdos smartdrv.sys smart drive smartdrive novel synchronize
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250 kbVFP300 kbVFP500
	Version           : 2.00 2.50 | 2.50 3.00 5.00
	
	=============================================================================
	
