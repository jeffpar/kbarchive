---
layout: page
title: "Q189836: Outlook Web Access Error: HTTP/1.0 403 Access Forbidden"
permalink: kb/189/Q189836/
---

## Q189836: Outlook Web Access Error: HTTP/1.0 403 Access Forbidden

	Article: Q189836
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0; winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access the Microsoft Exchange Outlook Web Access logon
	screen via a browser by typing the new alias name such as
	http://servername/exchange2, one of the following errors may be displayed:
	
	  HTTP/1.0 403 Access Forbidden
	  (IIS 3.0 Error Message)
	
	  -or-
	
	  Directory Listing Denied
	  This Virtual Directory does not allow contents to be listed.
	  (IIS 4.0 Error Message)
	
	CAUSE
	=====
	
	The error can occur if the Exchange alias name has been changed to something
	other than /Exchange in the IIS WWW Service properties.
	
	WORKAROUND
	==========
	
	If you change the alias name back to /Exchange and restart the World Wide Web
	Publishing service, you should be able to access the Microsoft Exchange Outlook
	Web Access logon screen. However, if other aspects of the OWA configuration have
	also changed, it may be necessary to remove and reinstall the OWA components
	from the Microsoft Exchange Server compact disc.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	For additional information about this issue, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q189653 : XWEB: Exchange Virtual Directory Cannot Be IIS Home Directory
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0; winnt:5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
