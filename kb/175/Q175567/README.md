---
layout: page
title: "Q175567: XCLN: Upgrading to Outlook 8.03 Does not Remove Exchange Icons"
permalink: /kb/175/Q175567/
---

## Q175567: XCLN: Upgrading to Outlook 8.03 Does not Remove Exchange Icons

{% raw %}

	Article: Q175567
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If Microsoft Exchange has been installed in a custom program group, (such as "My
	Exchange Client"), instead of the default group called Microsoft Exchange and
	you upgrade to Microsoft Outlook and choose the same program group where
	Microsoft Exchange is installed, an empty program group called Microsoft
	Exchange is created. Also, the old Microsoft Exchange icons are not removed from
	the original program group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook for Windows
	3.x, version 8.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In some cases, this behavior may be desirable. Because the old Exchange icons
	are not removed when the new Outlook icons are added to the old program group,
	users can run either the old Exchange client or new Outlook client, or both.
	
	If Microsoft Outlook client is installed in the same directory as the Exchange
	client, it is assumed that Microsoft Exchange will no longer be used. Therefore,
	the following icons can be manually deleted from the program group:
	
	  Microsoft Exchange
	  MS Exchange Services
	  Inbox Repair Tool
	  Microsoft Exchange Setup
	  ShivaRemote Setup
	  Microsoft Schedule+
	
	The empty Microsoft Exchange program group that was created by the Microsoft
	Outlook installation will also need to be deleted.
	
	
	Additional query words: setup win16 3.1 3.11 wfw workgroups
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch
	Version           : WINDOWS:8.03
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
