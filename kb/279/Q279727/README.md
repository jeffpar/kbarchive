---
layout: page
title: "Q279727: XFOR: Exchange SNADS Connector Shuts Down with 22096 Event"
permalink: /kb/279/Q279727/
---

## Q279727: XFOR: Exchange SNADS Connector Shuts Down with 22096 Event

{% raw %}

	Article: Q279727
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 24-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for SNADS may shut down. When you use the
	Exchange Connectivity Administrator to view the Connectivity Controller log, the
	following error message may be reported:
	
	  2000/09/28 13:19:12-LME-SNADS-MEXDIA(00d4)
	  4 04103:Queue snads.in depth threshold has reached the maximum number
	  specified. Current 128, Maximum 60
	
	In addition, the following event may be reported in the application event Log in
	Event Viewer:
	
	  Event ID: 22096
	  Source: MSExchangeSNADS
	  Category: Transport from SNADS
	
	  Queue threshold exceeded. Suspending SNA Link. Please reduce disk usage.
	
	CAUSE
	=====
	
	This issue can occur if the queue depth for messages has reached its maximum
	level. When the Exchange SNADS Connector reaches its threshold for messages, the
	service is designed to shut down.
	
	RESOLUTION
	==========
	
	To resolve the issue, increase the "qdepththreshold" entry in the Exchconn.ini
	file. This file is located in the Exchsrvr\Connect\Exchconn folder. Modify the
	section labeled "[QM]".
	
	The following text is an example of the section that you need to edit. Notice
	that the current "qdepththreshold" entry is set to 500:
	
	  [QM]
	  ; baditemthreshold =
	  ; qdepththreshold = 500
	  ; itemagethreshold =
	  ; qspacethreshold =
	  ; qroot =
	  ; quickscan =
	  ; pollinterval =
	  ; version =
	  ; maxhopcount =
	  ; maxretrycount =
	  ; ROUTER parameters.
	
	After you increase this setting, restart the MSExchange Connectivity Controller
	and the Exchange SNADS Connector for the changes to take effect.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	After the Exchange SNADS Connector service quits and the errors are reported,
	you must manually restart the service.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
