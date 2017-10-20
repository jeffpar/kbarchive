---
layout: page
title: "Q178053: XADM: Store Thread's Processor Use Peaks Indefinitely"
permalink: /kb/178/Q178053/
---

## Q178053: XADM: Store Thread's Processor Use Peaks Indefinitely

{% raw %}

	Article: Q178053
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A thread in the store indefinitely consumes a substantial percentage of
	processor utilization. In addition, this problem begins to occur at
	approximately the same time every week. If the spinning thread is viewed in a
	debugger, the call stack will appear similar to the following:
	
	  035efd50 0045b208 : store!TibNext+0x34
	  035efd50 00459fb8 : store!REPL__EcGetNextFtSend+0xd8
	  035efd90 0045a0f0 : store!REPL__EcGetNextFtSendStatus+0xc8
	  035efdd0 0044f448 : store!REPL__EcSetFtSendStatus+0xc0
	  035efe10 00472670 : store!EcReplFolderMessagesSend+0x238
	  035efec0 0047283c : store!EcReplSendMessages+0xc0
	  035eff10 004713e0 : store!EcReplSendMessagesSelectedTimes+0x7c
	  035eff50 005258ac : store!FReplAgent+0x130
	  035eff80 77e6cbe8 : store!EcProcessTask+0x1bc
	
	CAUSE
	=====
	
	This problem only occurs when a public folder has been selected to replicate to
	other servers only once a week. The store's thread remains in a loop
	indefinitely while attempting to calculate the next instance to send a status
	message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.5.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 100% CPU
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
