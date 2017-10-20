---
layout: page
title: "Q142050: Using Multiple Internet Domain Names and Addresses Over RAS"
permalink: /kb/142/Q142050/
---

## Q142050: Using Multiple Internet Domain Names and Addresses Over RAS

{% raw %}

	Article: Q142050
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article explains how to use multiple IP addresses and multiple Internet
	domain names on a stand-alone Windows NT computer to dial to the Internet using
	Remote Access Service (RAS).
	
	MORE INFORMATION
	================
	
	Your ISP may assign multiple IP addresses for different domain names on the
	Domain Name System (DNS) server. This allows a single Web server to service
	multiple companies (appears as multiple Web servers).
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To configure RAS to use these IP addreses, do the following:
	
	1. Use the first IP address for the RAS connection.
	
	  a. Start the Remote Access client.
	
	  b. Select the phonebook entry you want to modify and click Edit.
	
	  c. Click Advanced. If the Advanced button is not available, proceed to the
	     next step.
	
	  d. Click Network.
	
	  e. In the Network Protocol Settings dialog box, click TCP/IP Settings.
	
	  f. Select Require specific IP address and enter the IP address.
	
	  g. Quit the Remote Access client.
	
	2. Use the other IP addresses for your network adapter.
	
	  NOTE: If you do not have a network adapter, install the MS Loopback Adapter.
	  To do this, click Add Adapter in Control Panel Network.
	
	  a. In the TCP/IP Configuration dialog box, add the next available IP address
	     and the subnet mask.
	
	  b. Click Advanced to add the remaining IP addresses and corresponding subnet
	     masks.
	
	     NOTE: The RAS connection and the MS Loopback Adapter can use the same
	     subnet mask.
	
	3. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Service\RasArp\Parameters
	
	4. From the Edit menu, select Add Value.
	
	5. Enter the following:
	
	  Value Name: DisableOtherSrcPackets
	  Data Type: REG_DWORD
	  Data: 0
	
	6. Choose OK and quit the Registry Editor.
	
	7. Shut down and restart Windows NT.
	
	Additional query words: prodnt logical
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
