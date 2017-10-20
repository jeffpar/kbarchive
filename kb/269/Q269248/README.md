---
layout: page
title: "Q269248: XADM: Exchange Installation Stops with Error ID C103798a"
permalink: /kb/269/Q269248/
---

## Q269248: XADM: Exchange Installation Stops with Error ID C103798a

{% raw %}

	Article: Q269248
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbsetup
	Last Modified: 19-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Exchange Server 5.5 or an Exchange Server 5.5
	service pack on a Hewlett-Packard computer, Setup may stop and the following
	error message may appear:
	
	  Processing file path\server.ins at or near line 153.
	  An internal component has failed.
	  Id No. C103798a
	
	CAUSE
	=====
	
	This behavior can occur when you attempt to install Exchange Server 5.5 or an
	Exchange service pack on a Hewlett-Packard computer that is running Simple
	Network Management Protocol (SNMP) service. SNMP locks open the PREf009a.dat
	file or the PREF009f.dat file and stops the installation.
	
	RESOLUTION
	==========
	
	To resolve this behavior, stop the SNMP service before you install Exchange
	Server 5.5 or an Exchange Server 5.5 service pack, and then restart the SNMP
	service after the installation is complete.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q251181 XADM: Lodctr Dsactrs.ini Error with Service Pack Upgrade
	
	Additional query words: HP
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbsetup 
	Component         : Admin Setup
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
