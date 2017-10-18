---
layout: page
title: "Q105422: ERR: &quot;Sorry Can't Do That Because OUT OF MEMORY&quot; w/ FoxPackage"
permalink: kb/105/Q105422/
---

## Q105422: ERR: &quot;Sorry Can't Do That Because OUT OF MEMORY&quot; w/ FoxPackage

	Article: Q105422
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start FoxPackage, you receive the error message
	
	  Sorry, Can't do that because OUT OF MEMORY!
	
	CAUSE
	=====
	
	This error message is caused by an incompatibility between versions of
	FoxPackage earlier than version 2.07 and the Macintosh's System 7.x 32-bit
	addressing feature.
	
	RESOLUTION
	==========
	
	To resolve the problem, do one of the following:
	
	- Upgrade to FoxPackage version 2.07. This version is compatible with the
	  Macintosh's System 7.x 32-bit addressing feature. FoxPackage 2.07 is
	  available from Microsoft Support Services through Application Note FM0796.
	  For information on obtaining Application Note FM0796, query on the word
	  "FM0796" here in the Microsoft Knowledge Base.
	
	-or-
	
	- Turn off the Macintosh's 32-bit addressing feature in the Memory Control
	  Panel that is found in the System Folder. For the change to take effect, the
	  Macintosh must be restarted after 32-bit addressing is turned off in the
	  control panel.
	
	Additional query words: 2.01 2.05 2.07 Runtime run-time errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
