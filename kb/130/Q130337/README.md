---
layout: page
title: "Q130337: Err Msg Printing from Adobe PageMaker: General Printer Failure"
permalink: /kb/130/Q130337/
---

## Q130337: Err Msg Printing from Adobe PageMaker: General Printer Failure

	Article: Q130337
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from Adobe PageMaker 5.0a under Windows NT, a General Printer
	Failure error message appears. You can print from other applications.
	
	CAUSE
	=====
	
	There is not enough room on the %SYSTEMROOT% drive for the printer spool file.
	
	
	WORKAROUND
	==========
	
	To work around this problem, either free up additional hard disk space on the
	%SYSTEMROOT% drive, or set the default printer spool directory to a drive with
	more free space.
	
	WARNING: Using Registry Editor incorrectly can cause serious, systemwide problems
	that may require you to reinstall Windows NT to correct them. Microsoft cannot
	guarantee that any problems resulting from the use of Registry Editor can be
	solved. Use this tool at your own risk.
	
	To change the default printer spool directory for all printers:
	
	1. Start Registry Editor.
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     \SYSTEM\CurrentControlSet\Control\Print\Printers
	
	3. Select the Printers key.
	
	4. From the Edit menu, choose Add Value.
	
	5. Add a value using the following information:
	
	     Value Name: DefaultSpoolDirectory
	     Data Type:  REG_SZ
	     String:     <full path to printer spool directory>
	
	6. Quit Registry Editor and restart Windows NT.
	
	To change the printer spool directory for a specific printer:
	
	1. Start Registry Editor.
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     \SYSTEM\CurrentControlSet\Control\Print
	       \Printers\<specific printer>\SpoolDirectory
	
	3. Select the Printers key.
	
	4. From the Edit menu, choose Add Value.
	
	5. Add a value using the following information:
	
	     Value Name: SpoolDirectory
	     Data Type:  REG_SZ
	     String:     <full path to printer spool directory>
	
	6. Quit Registry Editor and restart Windows NT.
	
	NOTE: Neither DefaultSpoolDirectory nor SpoolDirectory are set by default. The
	global default location for all printers spool files is
	%SYSTEMROOT%\SYSTEM32\SPOOL\PRINTERS. DefaultSpoolDirectory defines a new global
	default location for all printers to put their spool files. SpoolDirectory
	defines a new printer-specific location for spool files that overrides the
	global default on a per-printer basis. The location of the temporary directory
	(set with the SET TEMP= statement) does not affect the location of the spooler
	files.
	
	PageMaker is manufactured by Adobe, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt pm5 aldus
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
