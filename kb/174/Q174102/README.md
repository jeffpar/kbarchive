---
layout: page
title: "Q174102: XFOR: Messages Not Flowing from OV/VM to Exchange"
permalink: kb/174/Q174102/
---

## Q174102: XFOR: Messages Not Flowing from OV/VM to Exchange

	Article: Q174102
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You find that messages are not flowing from OV/VM to Exchange through the
	LinkAge Exchange-OV/VM (or LinkAge PROFS) Connector and you get the following
	error messages in the Application Event log:
	
	  The description for Event ID ( 1 ) in Source ( LSIControl ) could not be
	  found. It contains the following insertion string(s): ENS, 1997/09/05
	  03:15:37- LME-PROFS-DIAMEX(01e8) 1 40720:Error {CT:160()} finding
	  correlation table record.
	
	  -and-
	
	  The description for Event ID ( 1 ) in Source ( LSIControl ) could not be
	  found. It contains the following insertion string(s): ENS, 1997/09/05
	  03:15:37- LME-PROFS-DIAMEX(01e8) 1 04065:Critical error: Queue item
	  handle passed to QMMarkQItemBad is invalid.
	
	You will also find that the OV/VM to Exchange Transform process is not running,
	and you see the following messages in the Linkage Browse log:
	
	  LME-PROFS-DIAMEX 40720: Error {CT:160()} finding correlation table
	  record
	  LME-PROFS-DIAMEX 56074: {I/O error has occurred}: Could not find CT
	  record
	  for '1997090310234541 server.org '
	  LME-PROFS-DIAMEX 04065: Critical error: Queue item handle passed to
	  QMMarkQItemBad is invalid
	  LME-PROFS-DIAMEX 00514: A RESTART request has been received
	  LME-PROFS-DIAMEX 00505: LME-PROFS-DIAMEX is ending, last return code was
	  {A
	  shutdown request was made}
	
	CAUSE
	=====
	
	A possible cause may be a corrupted correlation table.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Stop the Linkage Controller service. This will stop the OV/VM Connector and
	  the SNADS Connector (if present).
	
	2. Move the Ct2.idx, Ct2.dat, and Ctlock.dat files from the c:\linkage\tables
	  directory into a backup directory.
	
	3. Delete the Ct2.idx, Ct2.dat, and Ctlock.dat files (the Ctlock.dat file may
	  not be present) from the c:\linkage\tables directory.
	
	4. Restart the LinkAge Controller and Connector services. The correlation tables
	  will be rebuilt.
	
	NOTE: There are no tools available that will repair a damaged correlation table;
	currently rebuilding the table is the only known fix for this issue. Damaged
	correlation tables (the files that make up the correlation tables) should be
	sent to Microsoft Support for cause analysis through the normal channels.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Solution Type     : kbfix
	
	=============================================================================
	
