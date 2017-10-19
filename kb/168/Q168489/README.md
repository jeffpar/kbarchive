---
layout: page
title: "Q168489: How to Remove Routing and Remote Access and Install Standard RA"
permalink: /kb/168/Q168489/
---

## Q168489: How to Remove Routing and Remote Access and Install Standard RA

	Article: Q168489
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to remove Routing and Remote Access, and how to
	re-install the legacy Remote Access Service (RAS). To complete this procedure,
	you will need the latest service pack installed on the system, and your Windows
	NT Server 4.0 CD. Please read the entire procedure BEFORE attempting this
	process. Failure to follow these directions precisely may result in making your
	system unusable.
	
	MORE INFORMATION
	================
	
	Perform the following steps to remove Routing and Remote Access and install the
	standard RAS components:
	
	1. In Control Panel, double-click Network.
	
	2. Click the Services tab.
	
	3. Select Routing and Remote Access, and then click Remove.
	
	4. Click Close. Click Yes to restart your system.
	
	5. After the system restarts, use the EXPAND command to expand the original
	  Oemnsvra.Inf file from the Windows NT source CD into the
	  %SystemRoot%\System32 directory. For example, go to the appropriate directory
	  on the CD (i386 for Intel computers) and type the following command:
	
	  <drive>:\I386>expand Oemnsvra.In_
	  %SystemRoot%\System32\Oemnsvra.Inf
	
	  where <drive> is the letter of your CD-ROM drive.
	
	6. Re-install the Remote Access Server service in the Network Control Panel
	  tool. After re-installing RAS, you will be prompted to restart the system. DO
	  NOT RESTART WHEN PROMPTED. You must first re-apply the service pack;
	  otherwise, the system may not respond after restarting. For more information,
	  please see the following article in the Microsoft Knowledge Base:
	
	  Q162837 Replacing TCP/IP After SP2 Causes STOP 0x00000050
	
	NOTE: If you are using Microsoft BackOffice Small Business Server version 4.0 or
	4.0a, then do not re-apply Windows NT Service Pack 3 (SP3). SP3 is already
	included in Small Business Server.
	
	7. BEFORE RESTARTING, re-apply the most current service pack, then restart the
	  system. Standard RAS for Windows NT 4.0 is now restored.
	
	Additional query words: prodnt 4.00 steelhead rras uninstall
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0,4.0a
	Issue type        : kbhowto
	
	=============================================================================
	
