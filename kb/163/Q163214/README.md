---
layout: page
title: "Q163214: RAS Script with Set IPADDR May Fail with 3Com Defender Add-on"
permalink: /kb/163/Q163214/
---

## Q163214: RAS Script with Set IPADDR May Fail with 3Com Defender Add-on

{% raw %}

	Article: Q163214
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a script that modifies the dynamically assigned IP address with
	Dial-Up Networking to connect to a 3Com NetBuilder that is running Defender
	Security Add-on, the Dial-Up Networking client uses the initial PPP assigned IP
	address.
	
	CAUSE
	=====
	
	3Com Defender Security Add-on assigns a new IP address to the client that is
	connecting to it. While this negotiation occurs without a problem, the IP
	address that is returned by the "getip" function of the script is not put into
	the PPP IP address field by the "set ipaddr" function of the script.
	
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt dun
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
