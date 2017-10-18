---
layout: page
title: "Q153326: XADM: Information Store Returns Service Specific Error 4021"
permalink: kb/153/Q153326/
---

## Q153326: XADM: Information Store Returns Service Specific Error 4021

	Article: Q153326
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange Server information store, you
	may encounter the following error in the Event Log:
	
	  Event ID: 5000
	  Source: MSExchangeIS
	  Category: none
	  Type: Error
	  Unable to initialize the Microsoft Exchange Information Store service.
	  Error 4021.
	
	CAUSE
	=====
	
	This occurs when the Microsoft Exchange Server service account does not have the
	correct permissions on the site object.
	
	MORE INFORMATION
	================
	
	Permissions can be set at the Organization, Site, and Configuration levels. This
	error will only be generated if you remove the permissions from the Microsoft
	Exchange Service Account at the Site level.
	
	RESOLUTION
	==========
	
	Start the Microsoft Exchange Administrator program, select the Site in which the
	IS will not start, click Properties from the File menu, click the Permissions
	tab, and give the Microsoft Exchange Service Account the Service Account Admin.
	Role.
	
	
	Additional query words: won't start exfaqad
	
	======================================================================
	Keywords          : kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	
