---
layout: page
title: "Q239063: XWEB: Information Store Logs 1219 Events When Browsing PFs"
permalink: /kb/239/Q239063/
---

## Q239063: XWEB: Information Store Logs 1219 Events When Browsing PFs

	Article: Q239063
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you browse public folders anonymously using Outlook Web Access (OWA), you
	may see 1219 events logged by the information store in Event Viewer on the
	Exchange Server computer. The event contains information similar to the
	following:
	
	  Event ID: 1219
	  Source: MSExchangeIS Private
	  Type: Error
	  Category: Logons
	
	  Description:
	  Logon Failure - insufficient user account information.
	
	MORE INFORMATION
	================
	
	The event ID 1219 is logged because OWA uses the Anonymous account permission
	assigned to a public folder. You can view this using the HTTP Protocol
	Properties dialog box in the Microsoft Exchange Server Administrator program.
	Click the HTTP (Web) Site Settings object in the Protocols container under the
	Configuration container, and click the Folder Shortcuts tab. Display the
	properties of the selected public folder, and click Client Permissions.
	
	Although the 1219 event is logged, the functionality of browsing public folders
	anonymously is not affected. The event is merely a symptom of the information
	store being unable to authenticate the logon because the Anonymous account is
	being used.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
