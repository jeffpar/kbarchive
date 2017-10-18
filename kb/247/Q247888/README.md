---
layout: page
title: "Q247888: XADM: Error c1031b95 Configuring an ADC Connection Agreement"
permalink: kb/247/Q247888/
---

## Q247888: XADM: Error c1031b95 Configuring an ADC Connection Agreement

	Article: Q247888
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may be displayed when you configure the From
	Exchange tab of a Connection Agreement for the Active Directory Connector (ADC).
	This error message may also be displayed when you configure the default Exchange
	Server destination in the From Windows tab.
	
	  The credentials specified on the Connections tab are incorrect or do not have
	  sufficient permissions to access the Exchange 5.5 Directory. Please ensure
	  that the credentials specified are entered correctly and that sufficient
	  permissions are granted in order to access the Exchange 5.5 directory.
	  ID no: c1031b95
	  Microsoft Active Directory Connector Management
	
	CAUSE
	=====
	
	This issue can occur for either of the following reasons:
	
	1. The Exchange Server 5.5 computer is not running the required service pack or
	  later. If you define a Connection Agreement to an Exchange Server site, the
	  target directory bridgehead must be running Exchange Server 5.5 Service Pack
	  2 or later.
	
	2. Permissions are not configured correctly on the Exchange Server 5.5 computer.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Apply Exchange Server 5.5 Service Pack 2 or later to the target Exchange
	  Server 5.5 computer. If Exchange Server 5.5 Service Pack 3 is installed, you
	  may need to reapply it.
	
	2. Make sure that the following permissions are correctly configured in this
	  domain and on this server:
	
	  a. The Exchange Server service account at the organization, site, and
	     configuration levels in the Exchange Server Administrator program must
	     have Service Account Administrator rights.
	
	  b. All of the accounts that are used to set up the ADC must have "Access this
	     computer from the network" and "Log on locally" rights in Local Computer
	     Policy, Default Domain Policy, and Default Domain Controllers Policy
	     (click Computer Configurations, click Windows Settings, click Security
	     Settings, click Local Policies, and then click User Rights Assignment).
	
	3. Change port to 391 (in case 390 is in use).
	
	Additional query words: ds dir
	
	======================================================================
	Keywords          : exc55 
	Component         : ADC
	Technology        : kbwin2000AdvServSearch kbwin2000Ssearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
