---
layout: page
title: "Q90571: Applications That Require SETVER.EXE for MS-DOS 6.0 or 6.2"
permalink: kb/090/Q90571/
---

## Q90571: Applications That Require SETVER.EXE for MS-DOS 6.0 or 6.2

	Article: Q90571
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some applications check the MS-DOS version number before executing and may not
	run when they detect version 6.00 or later. To work around this limitation, use
	SETVER.EXE, which is included with MS-DOS Upgrade.
	
	MORE INFORMATION
	================
	
	SETVER allows you to modify the version table that is kept in the MSDOS.SYS
	file. When an application associated with an entry in the version table is
	executed, the version table tells the program that it is running under the
	MS-DOS version listed in the table.
	
	Default Version Table Contents
	------------------------------
	
	The following lists the files in the default SETVER.EXE version table for MS-DOS
	version 6.0 and the required MS-DOS version:
	
	  Filename    MS-DOS Version
	  --------------------------
	
	  KERNEL.EXE      5.00
	  NETX.COM        5.00
	  NETX.EXE        5.00
	  NET5.COM        5.00
	  BNETX.COM       5.00
	  BNETX.EXE       5.00
	  EMSNETX.EXE     5.00
	  EMSNET5.EXE     5.00
	  XMSNETX.EXE     5.00
	  XMSNET5.EXE     5.00
	  DOSOAD.SYS      5.00
	  REDIR50.EXE     5.00
	  REDIR5.EXE      5.00
	  REDIRALL.EXE    5.00
	  REDIRNP4.EXE    5.00
	  EDLIN.EXE       5.00
	  BACKUP.EXE      5.00
	  ASSIGN.COM      5.00
	  EXE2BIN.EXE     5.00
	  JOIN.EXE        5.00
	  RECOVER.EXE     5.00
	  GRAFTABL.COM    5.00
	  LMSETUP.EXE     5.00
	  STACKER.COM     5.00
	  NCACHE.EXE      5.00
	  NCACHE2.EXE     5.00
	  IBMCACHE.SYS    5.00
	  XTRADRV.SYS     5.00
	  2XON.COM        5.00
	  WINWORD.EXE     4.10
	  EXCEL.EXE       4.10
	  LL3.EXE         4.01
	  REDIR4.EXE      4.00
	  REDIR40.EXE     4.00
	  MSREDIR.EXE     4.00
	  WIN200.BIN      3.40
	  METRO.EXE       3.31
	
	The following lists the files in the default SETVER.EXE version table for MS-DOS
	versions 6.2 and the required MS-DOS version:
	
	  Filename    MS-DOS Version
	  --------------------------
	
	  KERNEL.EXE      5.00
	  NETX.COM        5.00
	  NETX.EXE        6.00
	  NET5.COM        5.00
	  BNETX.COM       5.00
	  BNETX.EXE       6.00
	  EMSNETX.EXE     6.00
	  EMSNET5.EXE     5.00
	  XMSNETX.EXE     6.00
	  XMSNET5.EXE     5.00
	  DOSOAD.SYS      5.00
	  EXTDISK.SYS     6.00
	  REDIR50.EXE     5.00
	  REDIR5.EXE      5.00
	  REDIRALL.EXE    5.00
	  REDIRNP4.EXE    5.00
	  EDLIN.EXE       5.00
	  BACKUP.EXE      5.00
	  ASSIGN.COM      5.00
	  EXE2BIN.EXE     5.00
	  JOIN.EXE        5.00
	  RECOVER.EXE     5.00
	  GRAFTABL.COM    5.00
	  LMSETUP.EXE     5.00
	  STACKER.COM     5.00
	  NCACHE.EXE      5.00
	  NCACHE2.EXE     5.00
	  IBMCACHE.SYS    5.00
	  XTRADRV.SYS     5.00
	  2XON.COM        5.00
	  WINWORD.EXE     4.10
	  EXCEL.EXE       4.10
	  LL3.EXE         4.01
	  REDIR4.EXE      4.00
	  REDIR40.EXE     4.00
	  MSREDIR.EXE     4.00
	  WIN200.BIN      3.40
	  METRO.EXE       3.31
	  VDISK.SYS       4.00
	
	The following lists the files in the default SETVER.EXE version table for MS-DOS
	version 6.21 and the required MS-DOS version:
	
	  KERNEL.EXE      5.00
	  NETX.EXE        6.21
	  BNETX.EXE       6.21
	  EMSNETX.EXE     6.21
	  XMSNETX.EXE     6.21
	  DOSOAD.SYS      5.00
	  EXTDISK.SYS     6.00
	  REDIR50.EXE     5.00
	  REDIR5.EXE      5.00
	  REDIRALL.EXE    5.00
	  REDIRNP4.EXE    5.00
	  EDLIN.EXE       5.00
	  BACKUP.EXE      5.00
	  ASSIGN.COM      5.00
	  EXE2BIN.EXE     5.00
	  JOIN.EXE        5.00
	  RECOVER.EXE     5.00
	  GRAFTABL.COM    5.00
	  LMSETUP.EXE     5.00
	  STACKER.COM     5.00
	  NCACHE.EXE      5.00
	  NCACHE2.EXE     5.00
	  IBMCACHE.SYS    5.00
	  XTRADRV.SYS     5.00
	  2XON.COM        5.00
	  WINWORD.EXE     4.10
	  EXCEL.EXE       4.10
	  LL3.EXE         4.01
	  REDIR4.EXE      4.00
	  REDIR40.EXE     4.00
	  MSREDIR.EXE     4.00
	  WIN200.BIN      3.40
	  METRO.EXE       3.31
	
	Files Using Earlier MS-DOS Versions
	-----------------------------------
	
	The following files need versions of MS-DOS earlier than 6.0; these files are not
	in the default version table:
	
	  Filename   MS-DOS Version   Description
	  ------------------------------------------------------------
	
	  BACKUP.COM     4.0          Backup program from MS-DOS 4.x
	  MC.SYS         5.0          Memory Commander TSR
	  MCIN.EXE       5.0          Memory Commander TSR
	  NETWKSTA.EXE   4.01         LAN MAN 1.x enhanced
	  PCIINIT.EXE    6.00         Initialization program for Locus
	                              Computing Corp network redirector
	  RESTORE.COM    4.0          Restore program from MS-DOS 4.x
	  SLP.EXE        5.0          Seiko Smart Label Printer TSR
	  SCPLUS.EXE     5.0          Iomega caching program
	  SCSIDISK.SYS   5.0          Procomm Technology SCSI Device
	                              Driver
	  UMBFILES.COM   5.0          PC Magazine Utility
	
	
	For more information, query in the Microsoft Knowledge Base on "SETVER.EXE" and
	the specific application name.
	
	Modifying the Version Table
	---------------------------
	
	Before you can use the SETVER command, the version table must be loaded into
	memory by a DEVICE command in your CONFIG.SYS file. By default, the MS-DOS 6.0
	and 6.2 Setup programs modify your CONFIG.SYS file to ensure that the version
	table is loaded into memory each time you start your system.
	
	To modify the version table, do the following:
	
	1. At the MS-DOS command prompt, type the following:
	
	  " setver <name of command and version> " (without the quotation marks)
	
	  For example:
	
	     setver example.exe 4.01
	
	  A warning message is displayed that states the application being added to the
	  version table may not be verified by MS-DOS and could cause corruption.
	
	2. Verify that the command was added to the version table by typing "setver"
	  (without the quotation marks).
	
	3. Restart the system so that the new Setver table is loaded into memory.
	
	Additional query words: 6.22 4.00 5.00 5.00a 6.00 4.0 5.0 6.0 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
