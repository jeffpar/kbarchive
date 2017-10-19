---
layout: page
title: "Q169916: Linksnif.exe does not Contain Scroll Bars"
permalink: /kb/169/Q169916/
---

## Q169916: Linksnif.exe does not Contain Scroll Bars

	Article: Q169916
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft SNA Server 3.0 Service Pack 1 includes a utility called Linksnif.exe
	that is a windows version of the command line utility DLSSTAT.EXE. If you have
	many DLS links (15 or more), they will not show up when you maximize the window.
	
	CAUSE
	=====
	
	A scroll bar was missing, which would have allowed you to scroll thru the
	window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be problems in SNA Server, version 3.0 Service
	Pack 1.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: linksnif dls scroll bar
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
