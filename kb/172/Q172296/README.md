---
layout: page
title: "Q172296: Snacfg.exe Uses Default Printer Properties When Adding Printers"
permalink: kb/172/Q172296/
---

## Q172296: Snacfg.exe Uses Default Printer Properties When Adding Printers

	Article: Q172296
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are unable to define properties for specific printers when you use
	Snacfg.exe to add printer sessions. Snacfg.exe uses the properties of the
	default printer instead of the printer selected.
	
	CAUSE
	=====
	
	Snacfg.exe was not originally programmed with this functionality.
	
	RESOLUTION
	==========
	
	This functionality is included in the latest version of Snacfg.exe. You can now
	set paper size, orientation, and tray assignment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: snaconfig snacfg
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
