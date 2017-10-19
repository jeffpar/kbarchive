---
layout: page
title: "Q190745: Manager Does Not Show Details View for TN3270 and Print Server"
permalink: /kb/190/Q190745/
---

## Q190745: Manager Does Not Show Details View for TN3270 and Print Server

	Article: Q190745
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Manager may not show details view for TN3270 and Print Server in the right pane
	of Manager under some conditions.
	
	
	CAUSE
	=====
	
	The TN3270 service, Print service, SNA Server service, TN5250 service, and
	Shared Folder service all use the NetBIOS name of the SNA Server as their
	identifier. This name is used to find the list view settings, so changing the
	TN3270 setting affected the Shared Folder and Print service settings as well,
	making them invalid.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 and 4.0
	SP1. This problem was corrected in the latest SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
