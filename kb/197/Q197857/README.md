---
layout: page
title: "Q197857: Windows 9x DHCP Clients Do Not Query WINS"
permalink: /kb/197/Q197857/
---

## Q197857: Windows 9x DHCP Clients Do Not Query WINS

	Article: Q197857
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 and Windows 98 computers that are configured as DHCP Clients that
	also receive WINS Server addresses by using DHCP may still not query WINS for
	NetBIOS name resolution.
	
	When looking at IP properties with Winipcfg.exe, the WINS Server fields are
	populated and correct.
	
	CAUSE
	=====
	
	When a Windows 95 or Windows 98 client gets its IP address and WINS Server IP
	address from DHCP, it will ignore the WINS entries if the Disable WINS
	Resolution dialog box is set in the Network tool in Control Panel.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Click Start, click Settings, and then click Control Panel.
	
	2. Open the Network tool in Control Panel.
	
	3. Select the TCP/IP Binding for the installed Network Adapter, and then click
	  Properties.
	
	4. Select the WINS Configuration tab.
	
	5. Select the Use DHCP for WINS Resolution option.
	
	6. Click OK, and then OK again.
	
	7. Restart the client even if you are not prompted to do so.
	
	MORE INFORMATION
	================
	
	On the WINS Configuration Tab
	-----------------------------
	
	If the Disable WINS Resolution option is selected, the client computer will still
	receive WINS addresses from DHCP, but will not query the WINS server for name
	resolution.
	
	If the Enable WINS Resolution option is selected and at least the Primary WINS
	Server field is filled in, this setting will override the WINS received from
	DHCP and name queries will go here.
	
	If the Use DHCP for WINS Resolution option is selected, the client computer will
	get WINS IP addresses by using DHCP and use those WINS addresses for name
	resolution.
	
	Additional query words: kbDSupport wins options
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95,98
	Issue type        : kbprb
	
	=============================================================================
	
