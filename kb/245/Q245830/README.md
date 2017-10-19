---
layout: page
title: "Q245830: XCLN: Using the Outlook LDAP Service to View Global Address List"
permalink: /kb/245/Q245830/
---

## Q245830: XCLN: Using the Outlook LDAP Service to View Global Address List

	Article: Q245830
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Lightweight Directory Access Protocol
	(LDAP) service in Outlook to query the Global Address List on the Exchange
	Server computer.
	
	MORE INFORMATION
	================
	
	You can use the LDAP service in Outlook to query the Global Address List either
	anonymously or as an authenticated user. By default, Exchange Server allows
	anonymous access through LDAP protocol. If you want to connect anonymously,
	confirm that the User name and Password boxes are blank in the LDAP service
	properties.
	
	Alternatively, you can log on by using your Windows NT credentials for
	authentication. You cannot log on by using the standard user name, domain name,
	and password syntax; you must enter the logon credentials in the following
	format:
	
	- User Name: CN=<username>,CN=<WindowsNTdomainname>
	
	- Password: <password>
	
	If you enter the credentials incorrectly, you receive the following message:
	
	  The specified Directory Service has denied access. Check the Properties for
	  this Directory Service and verify that your Authentication Type settings and
	  parameters are correct.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook98Search kbZNotKeyword3
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
