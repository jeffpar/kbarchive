---
layout: page
title: "Q134961: Network Monitor Hangs Windows for Workgroups 3.11"
permalink: /kb/134/Q134961/
---

## Q134961: Network Monitor Hangs Windows for Workgroups 3.11

{% raw %}

	Article: Q134961
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork smsnetmon kbNetworkMon
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you start a capture in Network Monitor on computer running Windows for
	Workgroups that has a Compaq Netflex2 Token Ring card installed, the system
	stops responding (hangs) if Microsoft TCP/IP-32 is one of your installed
	protocols. If NetBEUI or NWBlink are installed without Microsoft TCP/IP-32,
	starting a capture may work once, but if you stop and start the capture a second
	time, an error message appears stating that the network driver does not support
	promiscuous mode.
	
	WORKAROUND
	==========
	
	Use another Token Ring card supported by Network Monitor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as is becomes available.
	
	
	Additional query words: netmon prodsms sms network interface NIC nw blink
	
	======================================================================
	Keywords          : kbnetwork smsnetmon kbNetworkMon 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
