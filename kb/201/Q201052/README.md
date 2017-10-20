---
layout: page
title: "Q201052: XADM: CRs and DLs Are Not Moved But Are Mapped in Logs"
permalink: /kb/201/Q201052/
---

## Q201052: XADM: CRs and DLs Are Not Moved But Are Mapped in Logs

{% raw %}

	Article: Q201052
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you start the Move Server wizard and choose not to move custom recipients and
	distribution lists, the log files indicate that the custom recipients and
	distribution lists are mapped. The entry is logged in the log files
	(Movesrvr.log in the Mvsrvdat directory) as follows:
	
	  3:01:13 PM 8/26/98 - Map Remote Recipients
	  3:01:13 PM 8/26/98 - Map Distribution Lists
	  3:02:25 PM 8/26/98 - Map Configuration Information
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	
	MORE INFORMATION
	================
	
	The mapping pass always includes the export of distribution list objects. If you
	choose not to move distribution lists, the only processing performed on
	distribution list objects during the mapping pass is a check of whether the
	owner of the distribution list objects is moving. If the owner is moving, a
	warning is included in the Report.txt file.
	
	If you select the Don't Move Custom Recipients option, custom recipient mapping
	is skipped properly.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
