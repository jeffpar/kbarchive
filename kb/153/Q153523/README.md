---
layout: page
title: "Q153523: CMINIT May Fail with PRODUCT_SPECIFIC_ERROR(20) After a CMCANC"
permalink: /kb/153/Q153523/
---

## Q153523: CMINIT May Fail with PRODUCT_SPECIFIC_ERROR(20) After a CMCANC

{% raw %}

	Article: Q153523
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an application issues a cmcanc() call with a cmrcv() outstanding, the CPIC
	library would release its conversation control block twice. This would cause a
	subsequent cminit() call to fail with PRODUCT_SPECIFIC_ERROR(20).
	
	CAUSE
	=====
	
	When the application issues the cmcanc() verb the outstanding cmrcv() returns
	with the error, CM_DEALLOCATED_ABEND_SVC. At that point the CPIC library frees
	the conversation control block. When the cmcanc() verb had finished its
	processing, it then frees the conversation control block again. This causes the
	CPIC library's count of active conversations to drop to -1. Because the CPI-C
	library uses unsigned integers, a negative value of -1 appears as a very large
	positive number. When the application now issues the next cminit() call the CPIC
	library checks its count of active conversations, and notice that it was greater
	than the maximum limit of 16.
	
	With the SNA Application, CPI-C trace enabled you might see the following:
	
	|00000101.000000e0 CPIC   ----------------------------------------------
	13:35:10.55
	|00000101.000000e0 CPIC   CMCANC request
	|00000101.000000e0 CPIC    Conversation ID = 02000000
	|00000101.000000e0 CPIC   ----------------------------------------------
	13:35:10.57
	|00000101.000000e0 CPIC   CMRCV async response, result =
	CM_DEALLOCATED_ABEND_SVC
	|00000101.000000e0 CPIC    Buffer empty
	|00000101.000000e0 CPIC    Data received type = CM_INCOMPLETE_DATA_RECEIVED
	|00000101.000000e0 CPIC    Received length = 0
	|00000101.000000e0 CPIC    Status received = CM_NO_STATUS_RECEIVED
	|00000101.000000e0 CPIC    Request to send received =
	CM_REQ_TO_SEND_NOT_RECEIVED
	|00000101.000000e0 CPIC   ----------------------------------------------
	13:35:10.57
	|00000101.000000e0 CPIC   CMCANC response, result = CM_OK
	|00000101.000000e0 CPIC   ----------------------------------------------
	13:35:14.26
	|00000101.000000e0 CPIC   CMINIT request
	|00000101.000000e0 CPIC    Sym dest name = LU62TEST
	|00000101.000000e0 CPIC   ----------------------------------------------
	13:35:14.26
	|00000101.000000e0 CPIC   CMINIT response, result =
	CM_PRODUCT_SPECIFIC_ERROR
	|00000101.000000e0 CPIC    Conversation ID = 00000000
	|00000101.000000e0 CPIC   Conversation characteristics
	|00000101.000000e0 CPIC    Conversation type = CM_BASIC_CONVERSATION
	|00000101.000000e0 CPIC    Deallocate type = CM_DEALLOCATE_SYNC_LEVEL
	|00000101.000000e0 CPIC    Error direction = CM_RECEIVE_ERROR
	|00000101.000000e0 CPIC    Sync level = CM_NONE
	|00000101.000000e0 CPIC    Fill type = CM_FILL_LL
	|00000101.000000e0 CPIC    Prepare to receive type =
	CM_PREP_TO_RECEIVE_SYNC_LEVEL
	|00000101.000000e0 CPIC    Receive type = CM_RECEIVE_AND_WAIT
	|00000101.000000e0 CPIC    Send type = CM_BUFFER_DATA
	|00000101.000000e0 CPIC    Conversation security type = XC_SECURITY_NONE
	|00000101.000000e0 CPIC    Log data pointer = 00000000
	|00000101.000000e0 CPIC    Log data length = 0
	|00000101.000000e0 CPIC    Sym dest name =
	|00000101.000000e0 CPIC    Partner LU name =
	|00000101.000000e0 CPIC   00000000 00000000 00000000 00000000
	<................>
	|00000101.000000e0 CPIC   00                                      <.
	>
	|00000101.000000e0 CPIC    Mode name =
	|00000101.000000e0 CPIC   00000000 00000000                       <........
	>
	|00000101.000000e0 CPIC    Partner TP name =
	|00000101.000000e0 CPIC   00000000 00000000 00000000 00000000
	<................>
	|00000101.000000e0 CPIC   00000000 00000000 00000000 00000000
	<................>
	|00000101.000000e0 CPIC   00000000 00000000 00000000 00000000
	<................>
	|00000101.000000e0 CPIC   00000000 00000000 00000000 00000000
	<................>
	|00000101.000000e0 CPIC   ----------------------------------------------
	13:35:14.28
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11.sp1. This problem was corrected in the latest Microsoft SNA Server 2.11
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	There might be other reasons for getting a PRODUCT_SPECIFIC_ERROR(20) that are
	not necessarily be related to this article. Further reasons for getting a
	PRODUCT_SPECIFIC_ERROR(20) can be found in the Knowledge Base articles Q132720
	and Q148359.
	
	If you should observe this behavior you will also get the error message 3022
	logged in the Application Event Log which indicates an attempt to exceed the
	maximum number of concurrent CPIC conversations.
	
	
	Additional query words: prodsna sp1 cpi-c cmcanc cminit product_specific_error
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
