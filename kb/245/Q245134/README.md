---
layout: page
title: "Q245134: Windows 95 Updates May Not Install in OSR 2.1 or 2.5"
permalink: /kb/245/Q245134/
---

## Q245134: Windows 95 Updates May Not Install in OSR 2.1 or 2.5

	Article: Q245134
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.1,2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg osr2 win95
	Last Modified: 29-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing some updates for Microsoft Windows 95, the update
	process may not succeed and may generate the following error message:
	
	  This update is not designed for your version of Windows. Press OK to exit.
	
	CAUSE
	=====
	
	This behavior can occur if all of the following conditions are true:
	
	- You are running Windows 95 OEM Service Release (OSR) 2.1 or 2.5 (identified
	  as Windows 95 version 4.00.950 C on the General tab in System properties).
	
	- The Universal Serial Bus (USB) Supplement (included with OSR 2.1 and 2.5) is
	  installed.
	
	- An early version (dated before November, 1999) of the fix documented in the
	  following Microsoft Knowledge Base article is installed:
	
	  Q175086 Regional Settings Specified in User Profile Are Not Applied
	
	RESOLUTION
	==========
	
	To resolve this issue, use any of the following methods:
	
	- Obtain and install a later version (dated November, 1999, or later) of the
	  fix documented in the following Microsoft Knowledge Base article:
	
	  Q175086 Regional Settings Specified in User Profile Are Not Applied
	
	- Uninstall the fix from Q175086 before installing other Windows 95 updates.
	  You can reinstall the fix from Q175086 after the other Windows 95 updates are
	  installed.
	
	  To uninstall this fix:
	
	  1. Using Windows Explorer, locate the Mprsk_un.inf file in the
	     Windows\INF\QFE folder. Right-click the Mprsk_un.inf file, and then click
	     Install.
	
	  2. You are prompted for the Windows 95 installation CD-ROM or floppy disk.
	     Choose the appropriate path.
	
	  3. Restart your computer for the changes to take effect.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Windows 95 updates that are known to encounter this problem include:
	
	- Dial-Up Networking 1.3 Upgrade (Msdun13.exe)
	- Year 2000 Corporate Update (Corpupd.exe)
	- Dial-Up Networking (DUN) 1.3/WS2 Update (Y2kvdhcp.exe)
	- Malformed Telnet Argument fix (Telnet95.exe)
	- Malformed (Fragmented) IGMP fix (3304up95.exe)
	- DirectX 7.0 Technology Update (Dx70wupd.exe)
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	
