---
layout: page
title: "Q146397: XCON: Large Number of Messages with Receipts Can Stay in MTA"
permalink: /kb/146/Q146397/
---

## Q146397: XCON: Large Number of Messages with Receipts Can Stay in MTA

{% raw %}

	Article: Q146397
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may find that a large number of messages with Read receipts and Delivery
	receipts destined to go out the Microsoft Exchange Server version 4.0 Internet
	Mail Connector (IMC), or Microsoft Exchange Server version 5.0 Internet Mail
	Service (IMS), slow down or halt the Microsoft Exchange Server Message Transfer
	Agent (MTA).
	
	If you stop and restart the MTA and IMC (or IMS), a few messages will be
	delivered. From that point onward, delivery may be very slow or halted outright.
	Symptoms can also include messages placed in the BAD queue.
	
	CAUSE
	=====
	
	This is caused by a corrupted application protocol data unit (APDU) received
	from the MTA.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange versions 4.0
	and 5.0.
	
	For Microsoft Exchange Server version 4.0, this has been fixed in MTA build
	996.25. Please contact Microsoft Technical Support for information on the
	availability of this fix.
	
	This problem was corrected in the latest Microsoft Exchange Server 5.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	To install the fix for Microsoft Exchange Server version 4.0:
	
	1. Get the appropriate file from Microsoft Technical Support and unzip it. There
	  is no password on these files.
	
	2. Install the new MTA by running the following command on the Microsoft
	  Exchange Server computer:
	
	  hotfix /i
	
	  The retail symbols (BDB files, but renamed to DBG) are included. You will need
	  to install these manually into your Symbols directory.
	
	Please note that this is also a problem on other platforms and localized
	versions. If you need an Alpha version of the MTA (or a different localized
	version), please contact Microsoft Technical Support.
	
	How to find the MTA build number from the Event Logs:
	
	The MTA automatically logs its build number in the NT Application Event Log when
	the service is started. This information is written to Event ID 9298 and looks
	similar to the following:
	
	Event ID:    9298
	Source:      MSExchangeMTA
	Type:        Information
	Category:    X.400 Service
	Description:
	Microsoft Exchange Server MTA Service startup complete, version 4 (build
	995.54).
	[BASE IL MAIN BASE 46 490] (14)
	
	This entry corresponds to the Microsoft Exchange Server version 4.0 Service Pack
	4 MTA.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
