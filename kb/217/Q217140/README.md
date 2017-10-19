---
layout: page
title: "Q217140: Computer Does Not Boot When Tracking Memory Usage with Pool Tags"
permalink: /kb/217/Q217140/
---

## Q217140: Computer Does Not Boot When Tracking Memory Usage with Pool Tags

	Article: Q217140
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 4 on a computer running Windows NT
	4.0 that already has the Microsoft Windows NT 4.0 Hardware Compatibility Test
	(HCT) tool (version 8.1) installed, the computer may stop responding (hang).
	
	CAUSE
	=====
	
	The HCT tool automatically enables the use of pool tags to track thread memory
	usage, and this feature may cause a conflict with the Ntoskrnl.exe file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400search
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
