---
layout: page
title: "Q136651: Shutdown Hangs After &quot;Please Wait While...&quot; Screen"
permalink: kb/136/Q136651/
---

## Q136651: Shutdown Hangs After &quot;Please Wait While...&quot; Screen

	Article: Q136651
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you click the Shut Down The Computer option in the Shut Down Windows
	dialog box and then click OK, your computer may stop responding (hang) or
	display a black screen after you see the "Please wait while your computer shuts
	down" screen.
	
	CAUSE
	=====
	
	This problem can be caused by an incompatibility between the Windows 95 Advanced
	Power Management (APM) system and the APM-capable BIOS in your computer. If the
	BIOS in your computer instructs the system to suspend, rather than shut down,
	Windows 95 cannot shut down correctly.
	
	RESOLUTION
	==========
	
	As a temporary workaround, disable APM support. To do so, double-click the Power
	icon in Control Panel, and set the Power Management setting to Off.
	
	
	To resolve the problem, contact your computer manufacturer to inquire about a
	BIOS upgrade that resolves the problem.
	
	MORE INFORMATION
	================
	
	For additional information about how to resolve issues with shutting down
	Windows 95, please see the following article in the Microsoft Knowledge Base:
	
	Q145926 How to Troubleshoot Windows 95 Shutdown Problems
	
	
	Additional query words: fail fails exit
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
