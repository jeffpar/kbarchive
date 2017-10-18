---
layout: page
title: "Q172645: Print LU Status Remains Pending If SNAPRINT Fails"
permalink: kb/172/Q172645/
---

## Q172645: Print LU Status Remains Pending If SNAPRINT Fails

	Article: Q172645
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft SNA Server versions 3.0 and 3.0 Service Pack 1 (SP1), of a UNC
	(universal naming convention) path for a print session is specified and the
	printer is not installed on the server, Snaprint.exe fails and causes the print
	session to remain in a pending state rather than returning to inactive.
	
	CAUSE
	=====
	
	The Snaprint Service assumes that any printer to which it has access will have a
	port name set up for it. Print Server will fail if the WinvprtStartJob() or
	WinvprtOpenPrinter() fails to find the port name for the defined printer.
	
	RESOLUTION
	==========
	
	The Winvprt.dll and Ppd3270.dll files have been changed. When a port name is not
	detected, an error is logged and the status of the print LU returns to inactive
	instead of remaining in a pending state.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The remote printer must exist in the domain (and be installed) or the print
	session transitions to inactive without trapping.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
