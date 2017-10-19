---
layout: page
title: "Q200449: XFOR: LME: Error When Opening the SNA Base Parameters Key"
permalink: /kb/200/Q200449/
---

## Q200449: XFOR: LME: Error When Opening the SNA Base Parameters Key

	Article: Q200449
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2; winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Exchange SNADS Connector service, the following errors may be
	logged:
	
	  22993:Error occurred when opening the SNA base parameters key
	  SYSTEM\CurrentControlSet\Services\SnaBase\Parameters
	
	  22992:Error {UNKNOWN GRC CODE} when creating registry tree
	  SYSTEM\CurrentControlSet\Services\SnaBase\Parameters\TPs\SNAD002\Parameters
	
	CAUSE
	=====
	
	The service account used by the connector cannot open the registry to read the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaBase\Parameters
	
	WORKAROUND
	==========
	
	Grant the service account used by the connector full access to the registry
	key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaBase\Parameters
	
	- or -
	
	Add the service account used by the connector to the local Administrators group
	for the server containing the Exchange SNADS Connector.
	
	MORE INFORMATION
	================
	
	When the Exchange SNADS Connector service starts, it will open the SnaBase
	registry parameters, and add information for the connector if not found. The
	connector's settings are created in the registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaBase\Parameters\TPs\SNAD002\Parameters
	
	The values added include:
	
	- AlreadyVerified set to No
	- ConversationSecurity set to No
	- SNAServiceType set to 0x1a
	- LocalLU set to the Local LU configured on the connector
	- Timeout set to the polling interval multiplied by 1000
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2; winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
