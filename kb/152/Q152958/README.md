---
layout: page
title: "Q152958: XADM: Organizational Forms Unavailable to Other Servers in Site"
permalink: /kb/152/Q152958/
---

## Q152958: XADM: Organizational Forms Unavailable to Other Servers in Site

	Article: Q152958
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange clients might not see any Organizational forms available from
	the Compose-New Form... option or when using the Manage... command button on the
	Forms tab when viewing the properties of a folder.
	
	CAUSE
	=====
	
	If the Organization Forms folder for the Microsoft Exchange Site has been
	deleted and then recreated, clients on other Microsoft Exchange Servers in the
	Site will not be able to see the Organizational Forms until all Servers have
	been rebooted.
	
	WORKAROUND
	==========
	
	Reboot all Microsoft Exchange Servers in the Microsoft Exchange Site and any
	Server that might contain a replica of the Organizational Forms folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Organizational Forms folder has a unique folder Entry ID (EID). When this
	folder is created initially, this EID is cached by all Microsoft Exchange
	Servers in the same Microsoft Exchange Site as well as all Servers that contain
	a replica of the Organizational Forms folder. This cached EID can be updated by
	stopping and restarting the Exchange services. In some cases it may require the
	Server to be rebooted. Therefore, if the Organization Forms folder is deleted
	from the Server where it was originally created and then a new Organizational
	Forms folder is created, a new EID will be assigned to this folder. All Servers
	in the Site and all Servers containing a replica of this folder will need to
	restart the Exchange services or be rebooted to cache this new EID.
	
	
	Additional query words: library
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	
