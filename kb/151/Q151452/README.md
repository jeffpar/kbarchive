---
layout: page
title: "Q151452: Print Jobs Fail to Print to Printer Pool if Printer is Offline"
permalink: /kb/151/Q151452/
---

## Q151452: Print Jobs Fail to Print to Printer Pool if Printer is Offline

	Article: Q151452
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
	
	When you print to a printer pool configured under Windows NT, if a printer on
	one of the ports is unavailable, a job sent to that port times out and has to be
	deleted.
	
	WORKAROUND
	==========
	
	If a printer that is part of a pool is unavailable, remove that port from the
	pool.
	
	MORE INFORMATION
	================
	
	When printing to a printer pool, the spooler will send waiting jobs to alternate
	ports. If the original or alternate ports are not available, either from the
	network being down, the printer being off-line or turned off, or a parallel or
	serial cable being unplugged, the spooler will still send a job to the
	unavailable port and all other jobs will continue to print on the available
	ports. This is normal behavior under Windows NT.
	
	If a printer is unavailable, the spooler always attempts to print to it and
	produces an error when the print job times out. A printer pool with multiple
	ports still results in the same behavior on a port-by-port basis.
	
	Currently, the spooler cannot redirect jobs from one port to another, so once the
	job has been directed to a port that is not available, the job will have to be
	canceled.
	
	Additional query words: prodnt hang
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
