---
layout: page
title: "Q184225: XADM: Cannot Specify Destination Server Name"
permalink: /kb/184/Q184225/
---

## Q184225: XADM: Cannot Specify Destination Server Name

{% raw %}

	Article: Q184225
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to restore the information store from a backup tape to a
	different server, the Destination Server box on the Restore Information dialog
	defaults to the original server name and does not allow you to make changes. The
	Erase All Existing Data option, the Private option, and the Public option are
	dimmed.
	
	CAUSE
	=====
	
	The problem occurs if you selected both the directory service and the
	information store to be restored.
	
	WORKAROUND
	==========
	
	To work around the problem, select only the Information Store option.
	
	MORE INFORMATION
	================
	
	If you need to restore the information store to a server other than the one used
	for backup, you must change the name of the destination server. When you choose
	both the directory service and the information store to be restored, the Restore
	Information dialog has two pages. One is the preferences for the directory
	service and the other is the preferences for the information store. Note that
	the group box title is "Set 1 of 2" for the directory store. This group box does
	not allow changes.
	
	Additional query words: gray grayed grey greyed out not available unavailable
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
