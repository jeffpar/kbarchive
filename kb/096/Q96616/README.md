---
layout: page
title: "Q96616: AutoCad Overlay Files Must be Local to Work with LAN Man"
permalink: kb/096/Q96616/
---

## Q96616: AutoCad Overlay Files Must be Local to Work with LAN Man

	Article: Q96616
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	Q. Can AutoCad work with LAN Manager?
	
	A. AutoCad works fine with LAN Manager if the AutoCad overlay files
	
	  are on the workstation (local). AutoCad's overlay loading procedure somehow
	  does not work with LAN Manager, and the result is that the workstation tries
	  to load the overlays off the wrong network drive. For instance, the overlay
	  files are on drive X, but the workstation tries to load from L, then issues
	  an "unable to locate ..." error message. This does not happen if the overlays
	  are local.
	
	Additional query words: 2.00 2.10 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
