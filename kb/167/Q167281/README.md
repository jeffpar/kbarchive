---
layout: page
title: "Q167281: XADM: Err Msg: Error Encountered Accessing Registry Keys/Values"
permalink: kb/167/Q167281/
---

## Q167281: XADM: Err Msg: Error Encountered Accessing Registry Keys/Values

	Article: Q167281
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run EDBUTIL.EXE /D or EDBUTIL.EXE /R and you use the registry switches
	of /DS, /IS, /ISPRIV, or /ISPUB to specify the location for the database, the
	following error message may appear:
	
	  Error encountered accessing registry keys/values for specified
	  Exchange store.
	
	  Operation terminated with error -1907
	
	CAUSE
	=====
	
	This error occurs when EDBUTIL is running on a computer other than the one
	Microsoft Exchange Server is installed on. When you run EDBUTIL /R, the registry
	switches /DS or /IS must be used to specify the database name. Thus, if you want
	to use the registry switches to specify the database name, you must run EDBUTIL
	/R from the Exchange Server computer.
	
	WORKAROUND
	==========
	
	To run EDBUTIL /D or EDBUTIL /D /R on a non-Exchange Server computer:
	
	- Explicitly specify the database path and name after the /D switch, as in the
	  following example:
	
	  EDBUTIL /D c:\exchsrvr\dsadata\dir.edb
	
	  When you run EDBUTIL with both the /D and the /R switch, the database path and
	  name must be placed after the /D switch and before the /R switch, as in the
	  following example:
	
	  EDBUTIL /D c:\exchsrvr\mdbdata\priv.edb /R
	
	CAUTION: Running EDBUTIL can remove damaged data that might be required for the
	operation of the service and might not be recoverable. Always back up the
	original database file before running Edbutil.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	
	=============================================================================
	
