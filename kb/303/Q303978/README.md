---
layout: page
title: "Q303978: Error: Access Violation in Msppnexus.dll"
permalink: kb/303/Q303978/
---

## Q303978: Error: Access Violation in Msppnexus.dll

	Article: Q303978
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4,1.99
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4, 1.99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Passport Manager tries to update the Partner.xml file, an access violation
	in Msppnexus.dll occurs.
	
	CAUSE
	=====
	
	The error occurs if Passport Manager is running on a Windows NT or Windows 2000
	server that also has the Simple Mail Transport Protocol (SMTP) service running.
	
	WORKAROUND
	==========
	
	Do not run the SMTP service on the same server as Passport Manager version 1.4
	or earlier.
	
	STATUS
	======
	
	This is a known problem with Passport Manager version 1.4 and earlier. This
	problem is scheduled to be fixed in Passport Manager version 2.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassport199 kbPassportSearch
	Version           : :1.3,1.4,1.99
	Issue type        : kbprb
	
	=============================================================================
	
