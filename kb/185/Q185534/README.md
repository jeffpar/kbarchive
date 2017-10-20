---
layout: page
title: "Q185534: MSN Shortcut in Online Services Folder on Desktop Does Not Work"
permalink: /kb/185/Q185534/
---

## Q185534: MSN Shortcut in Online Services Folder on Desktop Does Not Work

{% raw %}

	Article: Q185534
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.52
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.52 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click the MSN, The Microsoft Network, shortcut icon in the
	Online Services folder on the desktop, you may experience one of the following
	symptoms:
	
	- Nothing may happen.
	
	- You may receive the following message:
	
	  The item 'Msndc.exe' that this shortcut refers to has been changed or moved.
	  The nearest match, based on size, date, and type, is: 'C:\Program
	  Files\Onmsn\Msnuinst.exe'. Do you want this shortcut to point to this item?
	
	CAUSE
	=====
	
	This behavior can occur if you removed MSN using the Add/Remove Programs tool in
	Control Panel.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall MSN. To do this, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "msninst.exe" (without quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, double-click the Msninst.exe file.
	
	4. Follow the instructions on the screen to reinstall MSN.
	
	If the Msninst.exe file is not found, follow these steps:
	
	1. Insert the Windows 98 CD-ROM into the CD-ROM drive, and then close the
	  Windows 98 screen if it opens on the desktop.
	
	2. Click Start, point to Find, and then click Files Or Folders.
	
	3. In the Named box, type "msnstart.exe" (without quotation marks).
	
	4. In the Look In box, click the CD-ROM drive containing the Windows 98 CD-ROM,
	  and then click Find Now.
	
	5. In the list of found files, double-click the Msnstart.exe file.
	
	6. Follow the instructions on the screen to reinstall MSN.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 98.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. win98
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbOSWin98 kbOSWinSearch kbMSNSearch kbMSN252
	Version           : WINDOWS:2.52
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
