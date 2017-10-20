---
layout: page
title: "Q120436: Installing Non-Native Printer Drivers on a Print Server Fails"
permalink: /kb/120/Q120436/
---

## Q120436: Installing Non-Native Printer Drivers on a Print Server Fails

{% raw %}

	Article: Q120436
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbprint kbenv kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install a printer driver for a platform other than that of
	the print server by the following standard procedure:
	
	1. Select Properties from the Printer menu
	
	2. Select Other... from the Driver list
	
	3. Enter the path to the subdirectory on the Windows NT 3.5 CD-ROM for the
	  preferred platform (eg: "F:\MIPS")
	
	Print Manager returns the error message:
	
	  Cannot find setup file f:\<platform>\printer.inf.
	
	CAUSE
	=====
	
	Print Manager cannot find the setup file PRINTER.INF because it is compressed on
	the CD-ROM as PRINTER.IN_.
	
	NOTE: A compressed file has the same filename as its original file except that
	the last letter is replaced with an underscore.
	
	WORKAROUND
	==========
	
	The following steps use the example of installing MIPS printer drivers on an
	80x86 print server. For other installations, replace "i386" and "w32x86" with
	the platform of your print server, and replace "MIPS" with the platform of the
	printer driver you wish to install. These steps also assume the CD-ROM disk
	drive is drive F:.
	
	1. Create a directory on your hard disk, such as C:\DRIVERS\MIPS.
	
	2. Decompress the PRINTER.IN_ file to the C:\DRIVERS\MIPS directory, by
	  executing the command:
	
	  F:\I386\EXPAND -R F:\MIPS\PRINTER.IN_ C:\DRIVERS\MIPS
	
	3. Look in the %SYSTEMROOT%\SYSTEM32\SPOOL\DRIVERS\W32X86\1 directory to
	  identify what files are necessary, and use EXPAND.EXE to decompress the
	  appropriate files from F:\MIPS to C:\DRIVERS\MIPS. The following command is
	  an example:
	
	  EXPAND -R F:\MIPS\PSCRIPT.DL_ C:\DRIVERS\MIPS
	
	4. Select Properties from the Printer menu
	
	5. Select Other... from the Driver list
	
	6. When prompted for a path to the setup files, enter:
	
	  PATH C:\DRIVERS\MIPS
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt alpha
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
