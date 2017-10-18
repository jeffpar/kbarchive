---
layout: page
title: "Q262902: XWEB: OWA: &quot;Your Current Password Is About to Expire in 0 Days&quot;"
permalink: kb/262/Q262902/
---

## Q262902: XWEB: OWA: &quot;Your Current Password Is About to Expire in 0 Days&quot;

	Article: Q262902
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to an Exchange Server 5.5-based computer using the Outlook Web
	Access client, you may receive the following error message:
	
	  Your current password is about to expire in 0 days
	
	CAUSE
	=====
	
	The following articles reference possible causes of this error:
	
	  Q190433 XWEB: Err Msg: Current Password Is About to Expire in 0 Days
	
	  Q236909 XWEB: Current Password Is About to Expire in 0 Days Message Using OWA
	
	  Q238444 XWEB: OWA Current Password Is About to Expire in 0 Days Message After
	  Installing Service Pack 3
	
	RESOLUTION
	==========
	
	To resolve this behavior, first attempt to use the resolutions that are
	suggested in the articles referred to in the "Cause" section of this article. If
	you are still unable to resolve the behavior, or if the articles to not apply to
	your particular situation, follow these steps:
	
	1. Go to the C:\Exchsrvr\Webdata\USA folder.
	
	2. Open the Root.asp file, and then edit it:
	
	  a. Look for the line that reads:
	
	  if cint(days) < 0 then days = 10000
	
	  b. Change the line to:
	
	  if cint(days) < 1 then days = 10000
	
	3. Save, and then close the file.
	
	MORE INFORMATION
	================
	
	The resolution described in this article is preferable to the "constant.inc"
	workaround that is described in Q190433, which disables clients' ability to
	change passwords from OWA.
	
	The IF statement is included to filter out invalid values for the
	HTTP_REQ_PWD_EXPIRE variable. It is possible for this variable to always be
	returned with the value of 0, which is technically incorrect but not flagged
	because the original code is looking for values less than 0. So, by changing
	this value to 1, you are prompted to change your password starting on the 15th
	day (which is the default) until there is only one day left. When there are no
	days left, you are then forced to change your password.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
