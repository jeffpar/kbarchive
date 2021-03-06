---
layout: page
title: "Q186054: SLI_SEND/SLI_RECEIVE Can Send/Receive A Maximum Of 65 KB Of Data"
permalink: /kb/186/Q186054/
---

## Q186054: SLI_SEND/SLI_RECEIVE Can Send/Receive A Maximum Of 65 KB Of Data

{% raw %}

	Article: Q186054
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SLI_SEND and SLI_RECEIVE verbs can only send or receive a maximum of 65
	kilobytes (KB) of data each time they are issued by a SLI application.
	
	The lua_data_length parameter is used to specify the amount of data to be sent in
	a SLI_SEND verb. The SLI_RECEIVE verb uses the lua_max_length parameter to
	specify the length of the buffer that is to be used to receive data.
	
	CAUSE
	=====
	
	The 65-KB data length per SLI_SEND/SLI_RECEIVE is by design. The lua_data_length
	and lua_max_length parameters are defined as Unsigned Integers (unsigned int),
	which limits their maximum values to 2^16 bytes (approximately 65 KB).
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.1, 2.11,
	2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1.
	
	SNA Server 3.0
	--------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. To resolve this problem immediately, contact
	Microsoft Technical Support to obtain the fix. If you are not severely impacted
	by this specific problem, Microsoft recommends that you wait for the next SNA
	Server 3.0 service pack that contains this fix.
	
	For SNA Server 3.0:
	
	     File Name        Date       Time
	     ----------------------------------
	     winsli32.dll    6/16/98  8:32AM
	     snatrc.dll      6/16/98  8:29AM
	     snatrccn.dll    6/16/98  8:29AM
	     snatrcsn.dll    6/16/98  8:29AM
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest Microsoft SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The SLI API has been extended to include the following new verbs:
	
	- SLI_SEND_EX
	
	- SLI_RECEIVE_EX
	
	These new verbs can be used instead of SLI_SEND and SLI_RECEIVE in those SLI
	applications that require sending or receiving more than 65 KB of data with each
	send or receive issued. These new SLI verbs include the following new
	parameters:
	
	  SLI_SEND_EX:     lua_data_length_ex
	  SLI_RECEIVE_EX:  lua_max_length_ex
	
	Each of these new parameters is defined as Unsigned Long Integers (unsigned
	long), which allows their maximum values to be 2^32 bytes (approximately 4 GB).
	
	These SLI API updates are available after applying the fix or service pack
	mentioned previously.
	
	Please refer to the SNA Server LUA Programmer's Guide for more details on both
	the RUI and SLI APIs included with SNA Server.
	
	Additional query words: snalua snaprog
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
