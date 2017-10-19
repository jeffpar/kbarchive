---
layout: page
title: "Q109928: Printing from MS-DOS Applications to Local Printer"
permalink: /kb/109/Q109928/
---

## Q109928: Printing from MS-DOS Applications to Local Printer

	Article: Q109928
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may be able to print from some MS-DOS-based applications running in Windows
	NT to a local printer only after using a network redirection.
	
	MORE INFORMATION
	================
	
	Most MS-DOS-based applications in Windows NT are run in a Virtual DOS Machine
	(VDM). Some such applications tend to write to the printer port directly.
	Windows NT, on the other hand, does not allow any direct access to any hardware
	device. For serial printers, the MS-DOS redirection command does not usually
	work.
	
	To print to a serial printer attached locally, do the following:
	
	1. Create a printer with the appropriate printer driver and port.
	
	2. Select the option to share the printer and assign a name.
	
	3. From the command prompt, type:
	
	  NET USE LPT1: \\<Computer Name>\<Printer Share Name>
	
	4. Choose LPT1 to print from the MS-DOS application. The direction should be
	  valid for the current VDM.
	
	If you are printing to a printer attached to LPT1:, the network redirection must
	not be LPT1:, otherwise the print job will never be released from Print
	Manager.
	
	NOTE: If you are using Windows NT version 3.5, an access violation in SPOOLSS.EXE
	may occur when you use LPT1 for the network redirection. You can avoid this
	problem by using LPT2 instead of LPT1 when you use the NET USE command.
	
	Additional query words: prodnt NET USE
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5
	
	=============================================================================
	
