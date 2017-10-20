---
layout: page
title: "Q179050: XADM: WinNT Account Becomes Domain&#92;&#92;User When Output by Export"
permalink: /kb/179/Q179050/
---

## Q179050: XADM: WinNT Account Becomes Domain&#92;&#92;User When Output by Export

{% raw %}

	Article: Q179050
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you export a directory to a comma-separated values (CSV) file that contains a
	Mode column, some information may not be imported when you perform a directory
	import from that file. For example, if you add one or more Windows NT user
	accounts on a mailbox's Permissions tab, the accounts are not imported when you
	perform a directory import.
	
	CAUSE
	=====
	
	When you perform a directory export, mailbox information is not exported
	properly if the export file contains a Mode column. This prevents the
	information from being imported when you perform a directory import from that
	file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: output
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
