---
layout: page
title: "Q168734: XADM: Error Synchronizing OST After Upgrading to Exchange"
permalink: /kb/168/Q168734/
---

## Q168734: XADM: Error Synchronizing OST After Upgrading to Exchange

{% raw %}

	Article: Q168734
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to synchronize all folders from a Microsoft Exchange or Outlook
	Client with an OST file, you may encounter the following error message:
	
	  Synchronization with the offline folder file could not be
	  completed. Consult the synchronization log in the deleted
	  items folder for details.
	
	Reviewing the synchronization log shows the following:
	
	  11:43:26 Synchronizing Organization Forms
	  11:43:27 Error synchronizing folder
	  11:43:27 [8004010F-501-0-521]
	  11:43:27 The client operation failed.
	  11:43:27 Microsoft Exchange Server Information Store
	
	This error occurs after you upgrade to Microsoft Exchange Server version 5.0.
	This error occurs if the upgraded computer contains the Organizational Forms
	Library and the Organizational Forms Library has the Default permission set to
	NONE.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Change the Default permission for the Organizational Forms Library to any
	  other Role besides NONE and then change the Role back to NONE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For more information on other causes of this error, refer to the following
	Knowledge Base article:
	
	  Q162703 XCLN: OST Synch Problem After Org Forms Library Deleted
	
	
	Additional query words: outlook
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
