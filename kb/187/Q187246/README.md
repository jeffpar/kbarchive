---
layout: page
title: "Q187246: XFOR: Internet Mail Service Produces Dr. Watson"
permalink: /kb/187/Q187246/
---

## Q187246: XFOR: Internet Mail Service Produces Dr. Watson

{% raw %}

	Article: Q187246
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Internet Mail Service may produce a Dr. Watson error message with the
	following call stack:
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	030ffbd0  0041c258  0460120c 00000031 00abf0fc
	MSEXCIMC!HrRegisterInboundFolder+0x20705
	030ffc9c  0041b51e  0000070f 00abf0fc 00000001
	  MSEXCIMC!HrOpenFolders+0x19e
	030ffd30  0045e533  004808e0 00000001 00abf0fc
	  MSEXCIMC!HrOpenIMCSession+0xb9
	030ffdd4  0042b336  00abf0fc 004808e0 00000001 MSEXCIMC!HrRetryLogon+0x6c
	030fff38  0041c920  00abf0f0 00ab26d0 77f1cc7b
	  MSEXCIMC!ProcessInboundItem+0x23ac6
	030fff80  0041c847  00ab26d0 0041c588 00000000 MSEXCIMC!ProcessShared+0x64
	77f1cc7b  408b0000  74ffc324 74ff0824 15ff0824
	  MSEXCIMC!SharedWorkerThread+0x57
	
	CAUSE
	=====
	
	The problem is in the HrRetryLogon code. The thread attempts to connect to a
	specific folder based on a context ID that is received from a global variable.
	When the thread goes through a re-logon, it gets a new index from the global
	variable, not the old variable (the one it should use).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
