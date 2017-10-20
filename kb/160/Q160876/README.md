---
layout: page
title: "Q160876: INFO: SNA Server Does Not Support Full Duplex APPC"
permalink: /kb/160/Q160876/
---

## Q160876: INFO: SNA Server Does Not Support Full Duplex APPC

{% raw %}

	Article: Q160876
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	APPC is a peer-oriented program-to-program API where either Transaction Program
	(TP) can initiate a conversation. However, APPC/LU6.2 traditionally is
	half-duplex, where after the conversation is established, only one TP has
	direction to send on a conversation at a time. The state of the conversation, as
	viewed by a particular TP, governs which APPC verbs can be issued by the TP at a
	particular time. If the local TP views the conversation as being in a "send"
	state, then the partner TP would also be in a send state.
	
	IBM now supports "full duplex" APPC where either program can issue both send and
	receive verbs at the same time, though this is a fairly new implementation of
	APPC.
	
	The following is the option to set for full duplex functionality:
	
	  112 -- Full-duplex conversations and expedited data
	
	SNA Server does not support option set 112; it only supports half-duplex,
	although either end can initiate the conversation.
	
	MORE INFORMATION
	================
	
	See the "Conversation States" section of Chapter 2 of the SNA Server
	Programmer's Reference for a thorough explanation of conversation state changes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
