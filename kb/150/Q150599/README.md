---
layout: page
title: "Q150599: Incompatibility Between Setmarks and Filemarks"
permalink: /kb/150/Q150599/
---

## Q150599: Incompatibility Between Setmarks and Filemarks

	Article: Q150599
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.2x,6.0,6.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to restore data using SQL Load on a Tandberg 1.2-gigabyte (GB)
	drive, and the data has been backed up using SQL Dump with a WangTEK 525-
	megabyte (MB) drive, the load fails.
	
	CAUSE
	=====
	
	The Tandberg and WangTEK drives both produce outputs in QIC tape format. In the
	case described above, the load fails because the Tandberg drive reports the tape
	to be blank when data is really present.
	
	The Tandberg drive has a new formatting feature called "setmarks," in addition to
	the old "filemarks" format. When the data was backed up using the WangTEK drive,
	filemarks format was used by the SQL Dump utility.
	
	On the restore, the SQL Load utility defaulted to the new setmarks format when
	the Tandberg drive reported both formats were available. Requesting setmarks
	data from a filemarks formatted tape produced a result of "no data available."
	
	RESOLUTION
	==========
	
	As a temporary workaround to this problem, a modified tape driver is available.
	This driver reports filemarks only as available from the Tandberg drive.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server versions 3.5
	and 3.51 and Microsoft SQL Server versions 4.21a, 6.0, and 6.5. A supported fix
	is now available, but has not been fully regression-tested and should be applied
	only to systems experiencing this specific problem. Unless you are severely
	impacted by this specific problem, Microsoft recommends that you wait for the
	next Service Pack that contains this fix. Contact Microsoft Product Support
	Services for more information.
	
	
	Additional query words: 4.21a 6.00 6.50sql6 dump load
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.2x,6.0,6.5
	
	=============================================================================
	
