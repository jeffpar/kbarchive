---
layout: page
title: "Q247936: XWEB: Error Message Accessing OWA:  HTTP 404 Not Found"
permalink: kb/247/Q247936/
---

## Q247936: XWEB: Error Message Accessing OWA:  HTTP 404 Not Found

	Article: Q247936
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you use a browser to attempt to
	access the Outlook Web Access (OWA) logon screen by typing the URL in the
	following format:
	
	  "http://<server FQDN>/exchange" (without the quotation marks)
	
	The error message is as follows:
	
	  HTTP 404 Not Found
	
	If you use the following format, however, you can log on:
	
	  "http://<localhost>/Exchange " (without the quotation marks)
	
	CAUSE
	=====
	
	This behavior may occur if the IP address of the OWA computer has been assigned
	to a Web site other than the default Web site. Remote OWA clients are
	incorrectly directed when they try to find the Exchange virtual root.
	
	RESOLUTION
	==========
	
	In Microsoft Internet Information Server (IIS) Manager, open the properties on
	the default Web site, and in the IP Address list, click the IP address of this
	server. You will receive the message "Duplicate name exists" if this IP address
	has been assigned to another Web site. You will need to set that Web site's
	address to (All Unassigned), and then set the default Web site to the IP
	address. After you stop and restart the default Web site, attempt to use OWA
	again.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
