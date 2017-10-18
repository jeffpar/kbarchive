---
layout: page
title: "Q99197: Model 95 Traps with Trap00D, Trap00C, Duplicate Name etc."
permalink: kb/099/Q99197/
---

## Q99197: Model 95 Traps with Trap00D, Trap00C, Duplicate Name etc.

	Article: Q99197
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	SYMPTOMS
	========
	
	LAN Manager servers receive an error 5325 (duplicate name found) or error 3172
	(error sending alert message) along with error 2136 (Trap00D, Trap00C--general
	network error). Primary server traps result in a ring0 error and complete loss
	of functionality, although member servers also are trapped along with the
	primary.
	
	CAUSE
	=====
	
	Updated revision display level required.
	
	RESOLUTION
	==========
	
	Update the display revision level from 1.02 files dated 10/1/90 to 1.03 dated
	10/31/91 or later ones using the reference disk.
	
	CONFIGURATION
	-------------
	
	The problem was reported on this configuration:
	
	LAN Manager 2.2
	OS/2 1.3
	net card IBM 16 token ring
	IBM model 95 486 server
	HPFS386
	user level security
	NetBEUI.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
