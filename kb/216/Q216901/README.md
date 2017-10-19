---
layout: page
title: "Q216901: XCLN: Resources Free Busy Information Not Updated"
permalink: /kb/216/Q216901/
---

## Q216901: XCLN: Resources Free Busy Information Not Updated

	Article: Q216901
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When setting a resource account (conference room, meeting hall) to use a
	delegate to automatically process the meeting requests, the resource account
	Free Busy information only shows two months of published data, even though it
	has been configured to publish more.
	
	CAUSE
	=====
	
	By default, Free Busy information is published for two months, unless otherwise
	modified to publish more data. Even though the resource account is set up to
	publish more than two months, the resource account is not logged on, and
	therefore, the information published to the Free Busy folder is published by the
	delegate.
	
	RESOLUTION
	==========
	
	The delegate account must also be modified to publish the required amount of
	Free Busy information.
	
	WORKAROUND
	==========
	
	Set the delegate account to publish more than two months of Free Busy
	information.
	
	MORE INFORMATION
	================
	
	
	For more information on setting up resource accounts in Outlook, see the
	following article in the Microsoft Knowledge Base:
	
	  Q169872 OL97: How to Create a Resource Account in Outlook
	
	Additional query words: 8.0 8.01 8.02 8.03 8.5
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbOutlookSearch kbOutlook97 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
