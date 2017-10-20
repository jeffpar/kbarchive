---
layout: page
title: "Q127827: Increasing DefaultTTL in Registry Has No Effect"
permalink: /kb/127/Q127827/
---

## Q127827: Increasing DefaultTTL in Registry Has No Effect

{% raw %}

	Article: Q127827
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
	
	By default, the DefaultTTL setting in the Windows NT registry under
	HKEY_LOCAL_MACHINE\SYSTEM\CURRENTCONTROLSET\SERVICES\TCPIP\PARAMETERS is 32
	decimal. If this value is changed to anything above 32, the Default Time to Live
	value is unaffected. Packets will not reach a remote destination.
	
	If you have a destination that Tracert shows is 41 hops away and the default TTL
	is 32, packets will not reach the destination. If you change the default TTL on
	the ping command line to 45, by using the -i switch, the packets will make it to
	the destination.
	
	This problem occurs only with the PING utility because it is hard coded to use 32
	for the TTL. Other utilities, like Telnet and FTP, use the correct registry TTL
	value. For Ping utility, "-i" switch can be used to specify a different TTL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
