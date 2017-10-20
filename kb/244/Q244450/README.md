---
layout: page
title: "Q244450: XCLN: Outlook 97, 98, and 2000 Issues w. Remote Mail Filter"
permalink: /kb/244/Q244450/
---

## Q244450: XCLN: Outlook 97, 98, and 2000 Issues w. Remote Mail Filter

{% raw %}

	Article: Q244450
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	NOTE: These procedures only apply if you have installed Outlook with 
	the Corporate or Workgroup option. This option allows you to use Messaging 
	Application Programming Interface (MAPI) services. To determine your 
	installation type, on the Help menu, click About Microsoft Outlook. In About 
	Microsoft Outlook, you should see "Corporate or Workgroup" if you have the 
	Corporate or Workgroup installation.
	
	This article describes a feature that is only available when you use the Exchange Server service in the profile.
	
	SUMMARY
	=======
	
	If you use the Remote Mail filter feature of the Microsoft Outlook client, you
	must be aware of the following important points:
	
	- When you configure the filter, all of the message headers are downloaded when
	  connecting to retrieve new message headers. If a message that does not meet
	  the filter criteria is marked for retrieval, the filter then keeps Outlook
	  from downloading that message. If you want to see only the message headers
	  that meet the filter requirement, use an Inbox Assistant server-based rule to
	  move those messages out of the Inbox.
	
	- The configured filter setting is not applied if you select "Retrieve and send
	  all new mail" in the Remote Connection Wizard. This behavior is by design.
	  For the filter be in effect, you must select "Do only the following" in the
	  Remote Connection Wizard.
	
	MORE INFORMATION
	================
	
	For additional information about how to configure and use the Remote Mail
	feature, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q162046 OL97: Remote Mail, Offline Folders, and Working Offline
	
	Additional query words: OL2000, OL98, OL97
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000; :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
