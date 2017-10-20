---
layout: page
title: "Q201531: XFOR: F/B Request by Calendar Connector May Crash NetWare Server"
permalink: /kb/201/Q201531/
---

## Q201531: XFOR: F/B Request by Calendar Connector May Crash NetWare Server

{% raw %}

	Article: Q201531
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you send a free and busy request to a nonexistent Novell GroupWise domain or
	nonexistant post office through the Novell API Gateway, the Novell NetWare
	server may stop responding (crash). This is caused by a bug in GroupWise and its
	API Gateway in handling non-delivery reports (NDRs).
	
	The Microsoft Exchange Calendar Connector transfers free and busy information
	between Microsoft Exchange Server version 5.5 and Novell GroupWise mail systems.
	For more information on this connector, please refer to the Calcon.rtf file,
	which is located in the Exchsrvr\Connect\Calcon\Doc folder, after you install
	the connector.
	
	MORE INFORMATION
	================
	
	The GroupWise message transfer agent (MTA) is not handling free and busy NDRs
	properly. After the GroupWise MTA receives the request by means of the API
	gateway, the GroupWise MTA responds with a mail-based NDR. The API Gateway picks
	up the mail NDR and attempts to match it with the original free and busy
	request. The following error message is displayed:
	
	  Message does not contain Orig-Msg-ID property.
	
	The API Gateway goes into an unstable state. The next free and busy request
	causes the server to crash.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
