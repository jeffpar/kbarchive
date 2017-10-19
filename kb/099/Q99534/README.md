---
layout: page
title: "Q99534: AutoCad Overlay Files Must be Local to Work with LAN Man"
permalink: /kb/099/Q99534/
---

## Q99534: AutoCad Overlay Files Must be Local to Work with LAN Man

	Article: Q99534
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	AutoCad works correctly with LAN Manager if the AutoCad overlay files are on the
	workstation (that is, they are local). The AutoCad overlay loading procedure
	somehow does not work with LAN Manager, so the workstation tries to load the
	overlays off the wrong network drive. For instance, the overlay files are on
	drive X, but the workstation tries to load from L, then issues an "unable to
	locate ..." error message. This does not happen if the overlays are local.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
