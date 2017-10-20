---
layout: page
title: "Q145621: Banner Settings Not Saved for Captured NDS Printer with MSNDS"
permalink: /kb/145/Q145621/
---

## Q145621: Banner Settings Not Saved for Captured NDS Printer with MSNDS

{% raw %}

	Article: Q145621
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbprint 3rdpartynet win95 kbPrinting kb3rdPartyNetClientkbfixlist
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Microsoft Service for NetWare Directory Services (MSNDS), the
	print banner settings on a captured NDS printer may be reset to the default
	values after you restart your computer. For example, the Banner check box and
	the Banner description box on the Capture Settings tab may be reset.
	
	CAUSE
	=====
	
	This behavior occurs because the RestorePersistentCaptureFlags function in the
	Nwnp32.dll file incorrectly restores the capture flag settings.
	
	RESOLUTION
	==========
	
	This issue is resolved by the following updated file for Windows 95:
	
	  NWNP32.DLL  version 4.00.969 or later  12/20/95 10:09am  138,752 bytes
	
	NOTE: This file is named Nwnp32.nw4 before it is installed.
	
	This file is included in Windows 95 Service Pack 1. For more information on
	obtaining Windows 95 Service Pack 1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	
	STATUS
	======
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbprint 3rdpartynet win95 kbPrinting kb3rdPartyNetClient kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
