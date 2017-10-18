---
layout: page
title: "Q122186: Err Msg: Could Not Find Setup File F:&#92;&lt;Platform&gt;&#92;PRINTER.INF"
permalink: kb/122/Q122186/
---

## Q122186: Err Msg: Could Not Find Setup File F:&#92;&lt;Platform&gt;&#92;PRINTER.INF

	Article: Q122186
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	Windows
	
	kbprint kbbug3.50 kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install a printer driver for a platform other than the one you are
	running on, the following error message appears:
	
	  Could not find setup file F:\<platform>\PRINTER.INF.
	
	For example, if you have a Windows NT 3.5 print server running on an x86- based
	computer and try to install a driver to support one of the other Alpha or MIPS
	platforms, this error message would be displayed.
	
	CAUSE
	=====
	
	This problem happens because the PRINTER.INF files on the Windows NT version 3.5
	CD are compressed.
	
	WORKAROUND
	==========
	
	Copy the directory for platform you want to install a printer for from the CD to
	a hard disk drive and expand the PRINTER.INF file. Then install the driver from
	the hard disk drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
