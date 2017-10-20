---
layout: page
title: "Q175256: XWEB: PFs Not Seen When Logging on Anonymously via OWA"
permalink: /kb/175/Q175256/
---

## Q175256: XWEB: PFs Not Seen When Logging on Anonymously via OWA

{% raw %}

	Article: Q175256
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you anonymously log on to an Exchange Server computer via the Microsoft
	Outlook Web Access (OWA) client, you may not be able to see one or more public
	folders.
	
	CAUSE
	=====
	
	Either the public folder has not been published on the Exchange Server computer,
	or the anonymous account does not have a minimum of Folder Visible permissions
	on the folder.
	
	RESOLUTION
	==========
	
	Use the Microsoft Exchange Administrator program to perform the following
	steps:
	
	1. Open the HTTP (Web) Site Settings object from the site-level Protocols
	  container.
	
	2. Select the Folder Shortcuts tab. Using the New button, add any folders
	  (except the root "All Public Folders" folder) you want to publish.
	
	3. From the Properties dialog box of each published folder, select the General
	  Tab.
	
	4. On the General tab, select the Client Permissions button and make sure that
	  the folder has at least the Folder Visible permission enabled for the
	  anonymous account. To view the contents of the public folder, the anonymous
	  account must have at least a role of Reviewer.
	
	Additional query words: active server pages components xcln xweb
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : 5.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
