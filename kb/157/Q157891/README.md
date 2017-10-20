---
layout: page
title: "Q157891: No Name Resolution with SLIP Account in Windows NT 4.0"
permalink: /kb/157/Q157891/
---

## Q157891: No Name Resolution with SLIP Account in Windows NT 4.0

{% raw %}

	Article: Q157891
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access Internet resources using a SLIP (Serial Line Internet
	Protocol) account with Windows NT version 4.0 Dial-Up Networking, you may
	receive error messages similar to the following message:
	
	  Internet Explorer cannot open the Internet site http://<web address>
	  The site was not found. Make sure the address is correct, and try again.
	
	NOTE: The error message you receive may differ depending on the program you are
	using to access the Internet resource.
	
	CAUSE
	=====
	
	This issue may be caused by one of the following situations:
	
	- You have your name server addresses specified in the Dial-Up Networking
	  phonebook entry.
	
	- You have enabled the Force IP Header Compression option in the phone- book
	  entry.
	
	RESOLUTION
	==========
	
	To work around this issue use one of the following methods:
	
	Name Server Address Specified in Phonebook Entry
	------------------------------------------------
	
	1. Double-click My Computer, and then double-click Dial-Up Networking.
	
	2. Click the appropriate entry in the Phonebook Entry To Dial box.
	
	3. Click More, click Edit Entry, and then click Modem Properties.
	
	4. Click Server, click TCP/IP Settings, and then change the Primary DNS entry to
	  all zeros.
	
	5. Click OK twice.
	
	6. Use the right mouse button to click Network Neighborhood, and then click
	  Properties on the menu that appears.
	
	7. Click Protocols, click TCP/IP Protocol, and then click Properties.
	
	8. Click DNS, click Add, enter the address for your name server, and then click
	  Add.
	
	9. Click OK twice.
	
	Force IP Header Compression Option Enabled
	------------------------------------------
	
	1. Double-click My Computer, and then double-click Dial-Up Networking.
	
	2. Click the appropriate entry in the Phonebook Entry To Dial box.
	
	3. Click More, click Edit Entry, and then click Modem Properties.
	
	4. Click Server, click TCP/IP Settings, and then click the Force IP Header
	  Compression check box to clear it.
	
	5. Click OK twice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt dialup remote access service
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
