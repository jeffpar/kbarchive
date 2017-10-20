---
layout: page
title: "Q162836: XCLN: TCP/IP RPC Calls Fail if AppleTalk Is Not Enabled"
permalink: /kb/162/Q162836/
---

## Q162836: XCLN: TCP/IP RPC Calls Fail if AppleTalk Is Not Enabled

{% raw %}

	Article: Q162836
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Pinging the server from MacTCP ping is successful for both host name and IP
	address. However, the Exchange Client cannot connect to the server. One or more
	the following error messages may occur.
	
	  Microsoft Exchange could not be started. There are not enough system
	  resources available to complete this operation. Contact your system
	  administrator if this condition persists.
	
	  Microsoft Exchange could not be started. The action could not be
	  completed.
	
	  The set of folders could not be opened. The information store could not
	  be opened.
	
	WORKAROUND
	==========
	
	To work around this problem, enable AppleTalk on the Macintosh computer. To do
	this, do one of the following:
	
	- On the Apple menu, choose Control Panels, and the choose AppleTalk, and then
	  choose Options. Make sure this is set to Active and save the changes when you
	  close the window.
	
	  -OR-
	
	- On the Apple menu, choose Chooser, click on Active (next to AppleTalk), click
	  OK, and close the Chooser.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Macintosh
	Client version 4.0. It has been fixed in version 5.0 of the Client.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q149596 XCLN Mac: Configuring Mac Client for TCP/IP
	
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac kbExchange400Mac
	Version           : MACINTOSH:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
