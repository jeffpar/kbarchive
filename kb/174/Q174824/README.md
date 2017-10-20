---
layout: page
title: "Q174824: XCLN: Err Msg: The Items Properties Could Not Be Displayed"
permalink: /kb/174/Q174824/
---

## Q174824: XCLN: Err Msg: The Items Properties Could Not Be Displayed

{% raw %}

	Article: Q174824
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.01, 8.02, 8.03 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compose a message and attempt to set the Send options on that message,
	you may receive an error message similar to the following:
	
	  The item's properties could not be displayed. No additional send options
	  are available for this message.
	
	CAUSE
	=====
	
	The Send Options feature is a function of the Microsoft Exchange Server
	information service that is loaded on the client. This feature is not available
	when the MS Mail information service is the only information service in the
	profile. Therefore, if you are running the Exchange Client in an MS Mail only
	environment, this feature will be unavailable to you.
	
	Additional query words: Win95 WinNT Win16
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
