---
layout: page
title: "Q133478: Blank Page is Printed with HP IIIsi and HP 4 Printer Driver"
permalink: kb/133/Q133478/
---

## Q133478: Blank Page is Printed with HP IIIsi and HP 4 Printer Driver

	Article: Q133478
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When printing to a network printer a blank page may be printed at the end of the
	print job. This can occur if the server has Default Datatype set to RAW[FF auto]
	in the printer details on the server.
	
	CAUSE
	=====
	
	The print processor incorrectly parses the data stream from some printers and
	adds an extra form feed to the job when one already exists.
	
	RESOLUTION
	==========
	
	Create two printers, one set to RAW[FF Auto] for printing from applications that
	do not put a FF at the end of the job, usually MS-DOS applications.
	
	Create the second printer with the Datatype set to RAW for printing from
	applications that do put a FF at the end of the print job.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1 and 3.5.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.10 prodnt append data type
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.50
	
	=============================================================================
	
