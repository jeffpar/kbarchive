---
layout: page
title: "Q245092: Add Printer Wizard Does Not Start When Generating Print Queue."
permalink: /kb/245/Q245092/
---

## Q245092: Add Printer Wizard Does Not Start When Generating Print Queue.

	Article: Q245092
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to generate a print queue on a server cluster by using
	Microsoft Cluster Server (MSCS) (a component of Microsoft Windows NT Server 4.0,
	Enterprise Edition), the Add Printer Wizard may not start.
	
	CAUSE
	=====
	
	This behavior can occur if you log on to the network using the cluster name
	rather than the network name that the print spooler requires, or if you create a
	spooler resource and then move the dependency of the spooler to a different
	network name.
	
	RESOLUTION
	==========
	
	To resolve this behavior, log on to the network using the virtual network name
	that the print spooler requires.
	
	Or, return the Network Name dependency to the original one the spooler resource
	was dependent on.
	
	Additional query words: MS Cluster Server 1.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
