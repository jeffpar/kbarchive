---
layout: page
title: "Q139786: Event 582 may occur when running Win 3.x APPC or CPIC App"
permalink: /kb/139/Q139786/
---

## Q139786: Event 582 may occur when running Win 3.x APPC or CPIC App

	Article: Q139786
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a 16-bit Windows APPC or CPIC application, the SNA Server Windows
	3.x client software displays the following error message:
	
	  Error 582:
	  No name supplied in the parameter list for this component
	
	CAUSE
	=====
	
	There are two causes for this problem:
	
	- If the SNA Server 2.1 Windows 3.x client software is being used, and if the
	  SNA client software is unable to determine the Windows application name, or
	  parse for its filename (used for internal reasons only), the SNA client will
	  display this error. This problem is fixed in the SNA Server 2.11 Windows 3.x
	  client software.
	
	
	- When using the SNA Server 2.11 Windows client software, if the filename of
	  the CPIC or APPC application happens to include a "0" (zero), the SNA client
	  incorrectly parses the filename (again, used for internal reasons only),
	  causing the error to occur.
	
	RESOLUTION
	==========
	
	If the SNA Server 2.11 Windows 3.x client software is being used and the
	application filename includes a "0", a simple workaround would be to rename the
	file so it doesn't include the "0" character
	
	An update to the SNA Server 2.11 Windows 3.x client software corrects this
	problem.
	
	The updated Windows 3.x client file is:
	
	  <winroot>\SYSTEM\WDMOD.DLL
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.1,2.11
	
	=============================================================================
	
