---
layout: page
title: "Q72874: Windows: Do Not Install for No Network if Network Exists"
permalink: /kb/072/Q72874/
---

## Q72874: Windows: Do Not Install for No Network if Network Exists

	Article: Q72874
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft recommends that you DO NOT install for "No Network" if a
	Windows-supported network is actually installed.
	
	MORE INFORMATION
	================
	
	The VNETBIOS and DOSNET devices automatically detect if they are necessary, and
	do not load if a network is not installed. They are always specified as a
	default in case Windows is installed for No Network, but a network is actually
	present.
	
	A case in which this could occur is when Windows 3.0 is installed while the
	network is not loaded. Windows Setup does not detect a network, so it installs
	for No Network. When the network is later activated, VNETBIOS and DOSNET detect
	the network presence and prevent compatibility problems. However, no network
	functionality is present without a Windows network driver installed.
	Additionally, the system cannot print through a network- redirected printer port
	if Windows is not specifically installed for a network.
	
	Files Installed When No Network Is Selected
	-------------------------------------------
	
	  *vnetbios  The Enhanced-Mode Virtual NetBios Driver
	  *dosnet    The Enhanced-Mode Virtual Redirector Driver
	
	Switches Added When No Network Is Selected
	------------------------------------------
	
	    SYSTEM.INI  [386Enh]  network=*nvetbios, *dosnet
	
	REFERENCES
	==========
	
	"Windows Resource Kit," version 3.0, page 128.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
