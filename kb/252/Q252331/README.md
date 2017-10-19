---
layout: page
title: "Q252331: XADM: Error Message: Failed to Get ADSI Object: 8007203A"
permalink: /kb/252/Q252331/
---

## Q252331: XADM: Error Message: Failed to Get ADSI Object: 8007203A

	Article: Q252331
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the DLUpdate script from the Microsoft BackOffice Resource Kit,
	version 4.5, you may receive the following error message:
	
	  Failed to get ADSI object:
	  8007203A:
	  Please contact your network administrator.
	
	CAUSE
	=====
	
	This problem can occur for either of the following reasons:
	
	- You need to hard-code the name of the Exchange Server computer in the script
	  on which this script is running.
	
	- By default, the Active Directory Service Interface (ADSI) component
	  communicates with the Exchange Server computer by using port 389. If the
	  Lightweight Directory Access Protocol (LDAP) port number has been changed in
	  Exchange Server, you must specify the correct port number in the script.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform one of the following steps, as applicable:
	
	- To address the first cause that is listed in the "Cause" section of this
	  article, assign the Exchange Server computer name to the strServer variable
	  in the script, for example:
	
	  strServer = "MYEXCHANGESERVER"
	
	  NOTE: The name of the server is not case sensitive.
	
	- To address the second cause that is listed in the "Cause" section of this
	  article, append a colon and the correct LDAP port number to the Exchange
	  Server computer name in the strServer variable in the script, for example:
	
	  strServer = "MYEXCHANGESERVER:390"
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
