---
layout: page
title: "Q109700: CONN: MACGATE.EXE Does Not Accept -BR Command-Line Option"
permalink: kb/109/Q109700/
---

## Q109700: CONN: MACGATE.EXE Does Not Accept -BR Command-Line Option

	Article: Q109700
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.2 of the Microsoft Mail Connection for PC and AppleTalk Networks,
	the MACGATE.EXE program reports the following error if you include the Break
	Relative (-BR) option on the command line:
	
	  Run time parameter in MACGATE.INI file must be between 0 and 999. (307)
	
	CAUSE
	=====
	
	The -BR command-line option does not override the RunTime parameter in the
	MACGATE.INI file.
	
	RESOLUTION
	==========
	
	The MACGATE.EXE program -BR option is implemented in version 3.2.1. The option
	allows the administrator to allocate a termination time from within the MACGATE
	command parameters. This no longer requires Dispatch to terminate the session or
	requires the use of batch files when using MACGATE.EXE with Dispatch.
	
	For more information on changing gateway configuration parameters, refer to pages
	29 and 30 of the Mail Connection 3.2 "Administrator's Guide."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of the Microsoft
	Mail Connection for PC and AppleTalk Networks. This problem was corrected in
	version 3.2.1 of the Mail Connection for PC and AppleTalk Networks.
	
	To obtain this updated file, please contact your Microsoft Technical Account
	Manager (TAM) or Product Support Services (PSS).
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
