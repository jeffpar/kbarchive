---
layout: page
title: "Q169126: Madge Smart 16/4 PCI Ringnode BM2 Token Ring Network"
permalink: /kb/169/Q169126/
---

## Q169126: Madge Smart 16/4 PCI Ringnode BM2 Token Ring Network

{% raw %}

	Article: Q169126
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 detects the Madge Smart 16/4 PCI Ringnode Bus Master 2 (BM2)
	Token Ring adapter as the Madge Smart 16/4 PCI Ringnode Bus Master (BM) adapter.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the Madge Smart 16/4 PCI Ringnode BM2 Token
	Ring adapter driver that is included with Windows NT 4.0 Service Pack 3. To do
	this:
	
	NOTE: Windows NT 4.0 does not ship a driver for the Madge Smart 16/4 PCI Ringnode
	Bus Master 2 (BM2) Token Ring adapter. If you use the Madge Smart 16/4 PCI
	Ringnode Bus Master (BM) Token Ring adapter driver, the Madge Smart 16/4 PCI
	Ringnode Bus Master (BM2) Token Ring adapter will not function in DMA mode.
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click the Network icon.
	
	2. Click the Adapters tab, click Madge Smart 16/4 PCI Ringnode Bus Master (BM)
	  Adapter, click Remove, and then click Yes.
	
	3. Shut down and restart Windows NT.
	
	4. Click the Start button, point to Settings, click Control Panel, and then
	  double-click the Network icon.
	
	5. Click the Adapters tab, click Add, click Madge Smart 16/4 PCI Ringnode Bus
	  Master 2 (BM2) Adapter, then click OK.
	
	  NOTE: If the Madge Smart 16/4 PCI Ringnode Bus Master 2 (BM2) does not appear,
	  verify that you have Service Pack 3 installed.
	
	The Configuration dialog box permits the following transfer method selections:
	
	- PIO sets the Madge Smart 16/4 PCI Ringnode Bus Master 2 (BM2) or the Madge
	  Smart 16/4 PCI Ringnode Bus Master (BM) to PIO mode.
	
	- The MMIO choice sets the Bus Master 2 to DMA mode and the PCI Ringnode to
	  MMIO mode.
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbhowto
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
