---
layout: page
title: "Q147347: Application Error in SPOOLSS.EXE When Printing"
permalink: kb/147/Q147347/
---

## Q147347: Application Error in SPOOLSS.EXE When Printing

	Article: Q147347
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 21-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to print or configure the printer in Windows NT, you may
	receive the following error message:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  SPOOLSS.EXE
	
	  Exception: access violation (0xc0000005), Address: <Hex address>
	
	IN Windows 2000, you may receive the following error message:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  SPOOLSV.EXE
	
	  Exception: access violation (0xc0000005), Address: <Hex address>
	
	CAUSE
	=====
	
	This problem occurs if you have many .SHD and .SPL files in the spool directory.
	The global default location for all printer spool files is
	%SYSTEMROOT%\SYSTEM32\SPOOL\PRINTERS. If your spool directory is in a different
	location, please see the following article in the Microsoft Knowledge Base:
	
	  Q123747 Moving the Windows NT Default Paging and Spool File
	
	RESOLUTION
	==========
	
	To correct this problem, stop the Spooler service, and remove the .SHD and .SPL
	files from your spool directory. In addition, remove any unused or old .TMP
	files from your Temp directory. The Spooler service can then be restarted.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinAdvServSearch
	Version           : :2000,3.5,3.51,4.0
	
	=============================================================================
	
