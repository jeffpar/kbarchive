---
layout: page
title: "Q167688: &quot;STOP 0x7B&quot; on DEC Alpha Personal Workstation During Setup"
permalink: kb/167/Q167688/
---

## Q167688: &quot;STOP 0x7B&quot; on DEC Alpha Personal Workstation During Setup

	Article: Q167688
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the installation of Windows NT on a DEC Personal Workstation (A series),
	you may receive the following error message:
	
	  STOP 0x0000007B Inaccessible_Boot_Device
	
	CAUSE
	=====
	
	This error message can occur if an integrated drive electronics (IDE) device
	driver is not installed. The device driver required for IDE support on the DEC
	Personal Workstation is not included with Windows NT.
	
	RESOLUTION
	==========
	
	To resolve this issue, install the IDE device driver from the CMD CSA-64xx
	driver disk included with the accessories kit included with the DEC Personal
	Workstation, or contact Digital Technical Support for further information.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 500a 433a inaccessible boot device
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
