---
layout: page
title: "Q156715: XADM: Unable to Back Up Exchange on Remote Server from NT 4.0"
permalink: /kb/156/Q156715/
---

## Q156715: XADM: Unable to Back Up Exchange on Remote Server from NT 4.0

{% raw %}

	Article: Q156715
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Ntbackup utility on a Windows NT 4.0 computer and you try to
	back up a remote Microsoft Exchange server, the backup fails with abnormal
	termination while backing up the files. It always fails on the second file while
	backing up either the directory or the Information Store (IS).
	
	CAUSE
	=====
	
	The end point mapper for the Remote Procedure Call (RPC) connection to the
	remote server was not validated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	NOTE: This fix is included in SP5 for Windows NT 4.0.
	
	
	MORE INFORMATION
	================
	
	An error is generated in the Event Log Viewer under the Application log. the
	event ID is 8010 and the description is as follows:
	
	  The Microsoft Exchange services returned 102 from a call to BackupRead()
	  data.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
