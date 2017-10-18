---
layout: page
title: "Q175119: XADM: Isinteg Ignores Lack of Space and Creates Empty Log"
permalink: kb/175/Q175119/
---

## Q175119: XADM: Isinteg Ignores Lack of Space and Creates Empty Log

	Article: Q175119
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run ISINTEG -<database> -dump -l <logfilename> to write the
	results to a log, the file might be blank. If the drive hosting the log file is
	full, Isinteg will not issue a warning, but the result will be an empty log
	file.
	
	If you use a floppy disk drive as the destination for the log file, insufficient
	disk space will result in the following error message:
	
	  Fatal Error: Unable to write to log file. Shutdown Initiated! Isinteg
	  will shut down when ready.
	
	This will be followed by a Dr. Watson error message indicating an access
	violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Solution Type     : kbpending
	
	=============================================================================
	
