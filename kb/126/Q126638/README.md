---
layout: page
title: "Q126638: STOP 0xA When Installing Madge Smart 16/4 Ringnode Adapter"
permalink: /kb/126/Q126638/
---

## Q126638: STOP 0xA When Installing Madge Smart 16/4 Ringnode Adapter

{% raw %}

	Article: Q126638
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT version 3.5 using a Madge Smart 16/4 Ringnode Token
	Ring adapter, the system may stop responding (hang) or the following error
	message appears while attempting to start the network:
	
	  STOP: 0x0000000A
	  IRQL_NOT_LESS_OR_EQUAL
	
	RESOLUTION
	==========
	
	According to Madge Networks Technical Support, you should:
	
	1. Download an updated driver called NT35.ZIP from Madge Networks bulletin board
	  system (BBS) at (408)-955-0262.
	
	2. If you are installing a workstation or a member server, do not install the
	  network during Windows NT version 3.5 Setup. If you are installing a Primary
	  or Backup Domain Controller, contact Madge Networks Technical Support at
	  (800) 876-2343 for more information.
	
	
	3. Once Windows NT Setup is complete, manually install the network. To do so:
	
	  a. Run Control Panel and choose Network.
	
	  b. In the Network Settings dialog box select Add Software.
	
	  c. Choose "<Other> Requires disk from manufacturer" from the Network
	     Software list box.
	
	  d. Select Continue and specify the location of the Madge network drivers.
	
	The Madge products discussed here are manufactured by Madge Networks, Inc., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt trap blue screen 0x0a 0x0000000a ring node
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
