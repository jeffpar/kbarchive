---
layout: page
title: "Q167865: Err Msg: Error 6117: The Workgroup Name Cannot Be the Same as..."
permalink: kb/167/Q167865/
---

## Q167865: Err Msg: Error 6117: The Workgroup Name Cannot Be the Same as...

	Article: Q167865
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to a Windows 95-based computer, you may receive the
	following error message:
	
	  The following error occurred while loading protocol number 0.
	  Error 6117: The workgroup name cannot be the same as the name of a computer.
	  Please specify a different workgroup name.
	
	CAUSE
	=====
	
	This behavior can occur when the workgroup name you entered matches a computer
	name on the network and not the established workgroup name.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click the Identification tab.
	
	3. Verify that the name in the Workgroup box is the correct name for your
	  workgroup and not the same as the name of a computer on the network.
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	======================================================================
	Keywords          : kberrmsg kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
