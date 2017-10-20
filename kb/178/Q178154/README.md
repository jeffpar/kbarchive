---
layout: page
title: "Q178154: XWEB: Err Msg: Unable to Render This view424Object Required"
permalink: /kb/178/Q178154/
---

## Q178154: XWEB: Err Msg: Unable to Render This view424Object Required

{% raw %}

	Article: Q178154
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Outlook Web Access (OWA) client to access an Exchange Server
	mailbox, you may receive the following error message when you select the
	Calendar icon on the Outlook Bar or the Calendar folder in the folder list:
	
	  Unable to render this view424Object required.
	
	CAUSE
	=====
	
	Some of the OWA files located on the Exchange Server computer may be corrupt or
	absent.
	
	WORKAROUND
	==========
	
	
	To correct this behavior, remove and reinstall the OWA components from the
	Exchange Server computer by performing the following steps:
	
	1. Back up the \Exchsrvr\Webdata directory on the Exchange Server computer.
	
	2. Run the Microsoft Exchange Server Setup program, and choose the Add/Remove
	  option.
	
	3. Click to clear the "Outlook Web Access" components check box, and continue
	  with Setup to remove the OWA components.
	
	4. Delete the \Webdata directory.
	
	5. Run Setup again, and click to select the OWA components.
	
	6. Continue with Setup to perform a clean installation of the OWA components.
	
	
	
	Additional query words: asp active server cdo view 424 object
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
