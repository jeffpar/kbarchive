---
layout: page
title: "Q117298: Configuring NWLink Frame Type"
permalink: /kb/117/Q117298/
---

## Q117298: Configuring NWLink Frame Type

	Article: Q117298
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51; :
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The purpose of this article is to explain the procedures of checking and
	configuring the NWLink transport via the NetWare server and Windows NT. By
	default, the NWLink transport uses the frame type of 802.3 for Ethernet and
	TOKEN_RING for Token Ring.
	
	MORE INFORMATION
	================
	
	Checking Frame Type on NetWare Server
	-------------------------------------
	
	1. From the NetWare server system console, type the following:
	
	  load install
	
	2. Select System Options.
	
	3. Select Edit AUTOEXEC.NCF File.
	
	4. Find the line with the LAN adapter and parameters information. (This line
	  displays the frame type information)
	
	Configuring NWLink on Windows NT
	--------------------------------
	
	To configure NWLink on Windows NT:
	
	1. In Control Panel, click Network.
	
	2. In the Installed Network Software box, click NWLink IPX/SPX Compatible
	  Transport, and then click Configure.
	
	3. In the Adapter box of the NWLink IPX/SPX Protocol Configuration dialog box,
	  click the name of the adapter card to which you want to bind the transport.
	
	4. In the Frame Type box, accept the default frame type or select the correct
	  frame type for IPX/SPX packets on your network.
	
	5. Click OK to close the NWLink Configuration dialog box, and then click OK to
	  close the Network Settings dialog box.
	
	6. Windows NT prompts you to restart the computer so that the changes take
	  effect. Click Yes to restart the computer.
	
	Additional query words: CSNW gsnw nwcs
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.5,3.51; :
	
	=============================================================================
	
