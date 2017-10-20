---
layout: page
title: "Q296912: XCCC:  Error Message Occurs  When You Access Logon.asp"
permalink: /kb/296/Q296912/
---

## Q296912: XCCC:  Error Message Occurs  When You Access Logon.asp

{% raw %}

	Article: Q296912
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access the Microsoft Outlook Web Access (OWA) Logon.asp page,
	you may receive the following error message:
	
	  Directory Listing Denied
	  The Virtual Directory does not allow the contents to be listed.
	
	CAUSE
	=====
	
	This issue can occur if the Default Document option has been disabled on the
	default Web site. When you install OWA on a server that is running Internet
	Information Server (IIS) 4.0, most settings for the default Web site are copied
	to the Exchange Virtual Directory. In some cases, the Default Document option
	may be disabled on the default Web site.
	
	RESOLUTION
	==========
	
	To resolve this issue, first check the Default Document option on the default
	Web site:
	
	1. On the IIS server, click Start, click Programs, and then click "Windows NT
	  4.0 Option Pack".
	
	2. Click "Microsoft Internet Information Server", and then click Internet
	  Service Manager.
	
	3. Click to expand Default Web Site, and then click to expand
	  <Server_name>, where <Server_name> is the NETBIOS name of the IIS
	  server.
	
	4. Right-click Default Web Site, and then click Properties.
	
	5. Click the Documents tab.
	
	6. Check to see if the "Enable Default Document" option has been enabled; if
	  this option has not been enabled, you must check the same setting in the
	  Exchange Virtual Directory.
	
	Next, check the Default Document option on the Exchange Virtual Directory:
	
	1. On the IIS server, click Start, click Programs, and then click "Windows NT
	  4.0 Option Pack".
	
	2. Click "Microsoft Internet Information Server", and then click Internet
	  Service Manager.
	
	3. Click to expand Default Web Site, and then click to expand
	  <Server_name>, where <Server_name> is the NETBIOS name of the IIS
	  server.
	
	4. Click to expand Default Web Site.
	
	5. Right-click Exchange Virtual Server, and then click Properties.
	
	6. Click the Documents tab.
	
	7. Check to see if the "Enable Default Document" option has been enabled; if
	  this option has not been enabled, click to enable it.
	
	8. Quit Internet Service Manager
	
	MORE INFORMATION
	================
	
	Before you enable the Default Document option on the default Web site, make sure
	there was not a valid business reason for disabling this option.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
