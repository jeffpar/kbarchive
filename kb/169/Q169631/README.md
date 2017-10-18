---
layout: page
title: "Q169631: XCON: MTA Runs Internal MTACHECK After Command-Line Version"
permalink: kb/169/Q169631/
---

## Q169631: XCON: MTA Runs Internal MTACHECK After Command-Line Version

	Article: Q169631
	Product(s): Microsoft Exchange
	Version(s): WinNT: 4.0,5.0
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you run the command-line utility MTACHECK, located in the Exchsrvr\Bin
	directory, the MTA runs the internal version of MTACHECK upon startup.
	
	CAUSE
	=====
	
	When the MTA service starts, it checks for a placeholder file (Dbbitmp.dat) to
	see if the service last stopped without an error. If the file is missing, then
	the MTA will run an internal MTACHECK in order verify database integrity. In the
	4.0 and 5.0 versions of Exchange, the command line version of MTACHECK does not
	create this placeholder file and therefore the MTA assumes the MTA database
	needs to be checked.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem has been fixed in Exchange Server version
	5.5.
	
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT: 4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
