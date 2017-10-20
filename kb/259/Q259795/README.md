---
layout: page
title: "Q259795: XCLN: ErrMsg When You Synchronize Mailbox with OST File"
permalink: /kb/259/Q259795/
---

## Q259795: XCLN: ErrMsg When You Synchronize Mailbox with OST File

{% raw %}

	Article: Q259795
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Outlook 97 to synchronize your mailbox to an .ost file, you may
	receive the following error log in your Deleted Items folder:
	
	  8:28:32 Synchronizing Organization Forms
	  8:28:33 Terminated in error
	  8:28:33 [8004010F-501-0-B20]
	  8:28:33 the client operation failed.
	  8:28:33 Microsoft Exchange Server Information Store
	
	CAUSE
	=====
	
	The Ems*.dll files that control the Exchange Server service for Outlook 97 may
	be damaged.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the Archive patch for Outlook 97 from the
	following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/arch97en.aspx
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
