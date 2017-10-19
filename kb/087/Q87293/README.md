---
layout: page
title: "Q87293: Registering Message Alias on RPL Workstation"
permalink: /kb/087/Q87293/
---

## Q87293: Registering Message Alias on RPL Workstation

	Article: Q87293
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When starting messenger on an MS-DOS RPL workstation, the user name is not
	registered as a message alias. This can be confirmed by executing the NET NAME
	command from the RPL workstation. Output shows only the workstation name as
	being a registered name. This problem precludes the user from receiving net
	popups addressed to the user. Messages sent to the workstation name are
	correctly named.
	
	RESOLUTION
	==========
	
	Increase the number of NetBIOS names the workstation can register. This can be
	accomplished by increasing the NAMES parameter in the [NETBEUI] section in
	
	     \LANMAN\RPL\BBLOCK\NETBEUI\<netcrd>\PROTOCOL.INI
	
	(where <netcard> is the network interface card for the workstation in
	question) from 5 to 6.
	
	
	Additional query words: 2.10 RIPL messenger
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
