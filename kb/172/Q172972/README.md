---
layout: page
title: "Q172972: XCLN: No Roving or Roaming User Support For Macintosh"
permalink: /kb/172/Q172972/
---

## Q172972: XCLN: No Roving or Roaming User Support For Macintosh

{% raw %}

	Article: Q172972
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0,8.1,8.2; WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, versions 8.0, 8.1, 8.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There is no support for roving or roaming users in the Microsoft Exchange Client
	for Macintosh.
	
	CAUSE
	=====
	
	Support for roving or roaming users requires that the Macintosh OS be aware of a
	Microsoft Windows NT domain model. Your Exchange Client profile must be
	centrally stored and copied to the Macintosh before you start the client. A user
	must be identified by the user's domain logon credentials when the Macintosh
	computer starts. Because the current versions of the Macintosh OS do not support
	any of these requirements, Microsoft cannot support roving or roaming users on
	the Macintosh platform at this time.
	
	WORKAROUND
	==========
	
	You can create a profile for all users who want to access Exchange Server using
	a specific Macintosh computer. In the Exchange Client, on the Tools menu, select
	Options. Click the General tab, and select "Prompt for profile to be used".
	
	Each user must select the correct profile and enter the correct domain
	credentials before the user can access Exchange Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbOutlookMacSearch kbExchange500Mac kbExchange400Mac kbOutlook800Mac kbOutlook810Mac kbOutlook820Mac
	Version           : MACINTOSH:8.0,8.1,8.2; WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
