---
layout: page
title: "Q255069: XADM: Error Message Opening Address Book When Running Pfinfo.exe"
permalink: /kb/255/Q255069/
---

## Q255069: XADM: Error Message Opening Address Book When Running Pfinfo.exe

{% raw %}

	Article: Q255069
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
	
	If you run the Exchange Server Public Folder Information utility (Pfinfo.exe),
	the following message may be displayed in the summary window:
	
	  Process completed. Errors encountered.
	
	The following error message is logged in the Pfinfo log file that is specified in
	the utility:
	
	  Error opening Address Book: Error MAPI_W_ERRORS_RETURNED - One or more
	  address book providers could not be loaded Process completed. Errors
	  encountered. 0 folders processed. 1 errors encountered
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure that the Messaging Application Programming
	Interface (MAPI) profile that exports the public folder information contains
	only the Exchange Server service.
	
	To do this, in Control Panel, click Mail, click the profile, and then click
	Properties. Click the Services tab, and then make sure that only the Exchange
	Server service is configured.
	
	If any other services are configured, create a new profile that contains only the
	Exchange Server Service.
	
	MORE INFORMATION
	================
	
	The Pfinfo.exe utility extracts information about the public folders in an
	Exchange Server site. The Pfinfo.exe utility can also generate a file that
	contains information about public folder permissions and replicas, which you can
	use in conjunction with the Pfadmin.exe utility that is included in the
	Microsoft BackOffice Resource Kit.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
