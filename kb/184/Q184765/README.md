---
layout: page
title: "Q184765: XADM: Setting up the Organization Forms Library"
permalink: kb/184/Q184765/
---

## Q184765: XADM: Setting up the Organization Forms Library

	Article: Q184765
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 24-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Forms that are installed into the Organization Forms Library are available to
	the entire Organization. The following steps summarize how to setup the
	Organization Forms Library for forms to be installed:
	
	1. In the Exchange Administrator program click Forms Administrator on the Tools
	  menu.
	
	2. If Organization Forms is not defined, click New to create the Organization
	  Forms library, and set the proper language.
	
	3. Expand Organization, Folders, System Folders, Forms Registry.
	
	4. Double-click on the Organization Forms object to open the properties and
	  click Client Permissions.
	
	5. Give a person or a group the Owner role to allow the user or group to install
	  forms in the organization forms library.
	
	MORE INFORMATION
	================
	
	A user who is trying to install a form must have Owner permission to that
	library or folder, including public folders.
	
	Forms installed in the organization forms are available to anybody in the
	organization through the client by selecting New Forms from the Compose menu.
	Forms installed in the folder, including a public folder, are available when a
	user selects that particular folder.
	
	For additional information on managing and installing forms, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q147604 XGEN: Managing Forms Installed on Exchange Server
	
	Additional query words: organizational e-forms e-form
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
