---
layout: page
title: "Q197258: XFOR: cc:Mail Dirsync Fails When PO Contain Extended Characters"
permalink: /kb/197/Q197258/
---

## Q197258: XFOR: cc:Mail Dirsync Fails When PO Contain Extended Characters

{% raw %}

	Article: Q197258
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Directory synchronization (dirsync) between Lotus cc:Mail and Exchange Server
	will fail with extended characters in the post office (PO) name. For example,
	POs with Spanish or French characters in the name will fail at dirsync. Running
	dirsync with the Exchange Server computer works correctly when the same PO is
	renamed to remove the extended characters.
	
	Error 14005 is reported in the Windows NT Application Event log. The end result
	is that no custom recipients are created and dirsync fails.
	
	CAUSE
	=====
	
	The cc:Mail Connector does not know how to handle extended characters in the
	post office name.
	
	WORKAROUND
	==========
	
	Rename the post office and remove the extended characters from the post office
	name.
	
	STATUS
	======
	
	Microsoft acknowledges this to be a problem in Microsoft Exchange Server version
	5.5.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
