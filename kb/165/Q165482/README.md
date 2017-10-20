---
layout: page
title: "Q165482: XFOR: Connector for cc:Mail Fails With Some Non-US Time Zones"
permalink: /kb/165/Q165482/
---

## Q165482: XFOR: Connector for cc:Mail Fails With Some Non-US Time Zones

{% raw %}

	Article: Q165482
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for Lotus cc:Mail fails to work properly with
	some time zones outside the United States. Mail is returned to the Microsoft
	Exchange Client sender with the following error message:
	
	  Invalid time zone, cannot send.
	
	RESOLUTION
	==========
	
	On the computer running Microsoft Exchange Server that has the Connector for
	cc:Mail installed, perform the following steps:
	
	1. In Control Panel, click Regional Settings. On the Regional Settings tab,
	  select English (United States) and select the Set As Default check box in the
	  lower left corner.
	
	2. Click the Input Locale tab and under Input Locales, select English (United
	  States) and make US the default Locale.
	
	3. Restart the Connector for cc:Mail
	
	4. Confirm that the messages can flow now from Exchange Server users to cc:Mail
	  users.
	
	Additional query words: CCMail
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
