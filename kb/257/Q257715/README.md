---
layout: page
title: "Q257715: PC Win: Error Message: An Error Occurred Preventing Complete..."
permalink: kb/257/Q257715/
---

## Q257715: PC Win: Error Message: An Error Occurred Preventing Complete...

	Article: Q257715
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Microsoft Mail for Windows client, you may
	receive the following error message when Setup is almost complete:
	
	  An error occurred preventing complete installation of Microsoft Mail. Please
	  contact your system administrator.
	
	CAUSE
	=====
	
	Setup is being run from a network share and not a mapped or local drive.
	
	RESOLUTION
	==========
	
	1. Map a network drive to the network share where the Microsoft Mail for Windows
	  client Setup files can be found.
	
	2. Run Setup again, this time from the mapped drive.
	
	
	Additional query words: win pm presentation manager winmail 16-bit 3.2 3.2a win9x win95 win98
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbprb
	
	=============================================================================
	
