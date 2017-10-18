---
layout: page
title: "Q142056: Slow Performance with FPNW and More than 60 Printers"
permalink: kb/142/Q142056/
---

## Q142056: Slow Performance with FPNW and More than 60 Printers

	Article: Q142056
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you add more than 60 printers using Print Manager on a Windows NT Server
	running File and Print Services for NetWare (FPNW), server performance quickly
	degrades. Performance Monitor shows processor utilization at a constant 100%,
	while the user mode service portion of FPNW (NWSSVC.EXE) and the Windows NT
	spooler (SPOOLSS.EXE) shows between 45% and 55% of the processor utilization.
	Acceptable performance levels are returned if the number of printers defined is
	reduced to 60 or less.
	
	CAUSE
	=====
	
	The FPNW printing component does not scale well to large numbers of printers
	(greater than 60) due to its current program design.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Server version 4.0.
	
	The program design for the FPNW printing component has been changed for the next
	release of Windows NT, removing the scaling problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in Windows NT Server version 4.0.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	
