---
layout: page
title: "Q165323: Print Server Does Not Allow Font Size Selection"
permalink: kb/165/Q165323/
---

## Q165323: Print Server Does Not Allow Font Size Selection

	Article: Q165323
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Print Server does not allow font size selection in printer properties.
	
	RESOLUTION
	==========
	
	The Print Server has been changed to allow a user to select a specific font size
	in the printer properties and override the print server auto font sizing
	function. The Print Server has been updated to correct this problem. The updated
	files are:
	
	  Ppd3270.dll
	  Ppd5250.dll
	  Snaprint.exe
	  Winvprt.dll
	  Snaole.dll
	  Snapage.dll
	  Snacfg.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
