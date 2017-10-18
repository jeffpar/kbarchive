---
layout: page
title: "Q272387: Unable to Connect to Local LPT Port with NET USE Command, 'Error"
permalink: kb/272/Q272387/
---

## Q272387: Unable to Connect to Local LPT Port with NET USE Command, 'Error

	Article: Q272387
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the NET USE command to connect to a local LPT port,you
	may be unable to do so, and you may receive the following error message:
	
	  Error 85: local device is already in use.
	
	CAUSE
	=====
	
	This behavior can occur when the LPT port is currently connected to a print
	share.
	
	RESOLUTION
	==========
	
	To resolve this behavior, disconnect the LPT port and try again.
	
	MORE INFORMATION
	================
	
	Follow these steps:
	
	1. To see whether the LPT port is in fact currently connected to a print share,
	  type the following at a command prompt:
	
	  "NET USE" (without the quotation marks)
	
	2. If the LPT port is currently connected to a print share, type the following
	  command to disconnect the LPT port from the print share:
	
	  "NET USE LPT(x) /D" (without the quotation marks)
	
	  where (x) is the number of the LPT port.
	
	3. Carry out the original NET USE LPTx \\servername\share command.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
