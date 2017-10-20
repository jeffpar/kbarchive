---
layout: page
title: "Q142684: NetworkAddress Parameter Not Supported for a Modem"
permalink: /kb/142/Q142684/
---

## Q142684: NetworkAddress Parameter Not Supported for a Modem

{% raw %}

	Article: Q142684
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assigning a specific media access control address with the parameter
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NdisWAN\Parameters\ 
	NetworkAddress
	
	for the modem used for a RAS connection is not supported. Every time a RAS
	connection is made, the assigned media access control address is set randomly.
	
	
	CAUSE
	=====
	
	There are two reasons why assigning a specific media access control address is
	not supported. The first reason is that a modem uses Serial.sys, and serial is
	not a device that NetworkAddress is relative to. The second reason is that the
	NetworkAddress registry override parameter is an optional value that is enforced
	only for Token Ring. So, if Serial.sys supported the NetworkAddress parameter,
	assigning a specific media access control address could be done. However, this
	would get more complicated with multiple serial devices in a machine. So,
	although a modem is a WAN device, it does not use a network device driver, which
	is where the optional NetworkAddress registry override parameter would be
	managed.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	

{% endraw %}
