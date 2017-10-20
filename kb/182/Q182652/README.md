---
layout: page
title: "Q182652: Memory Leak When Transactional Method Fails Before Connect"
permalink: /kb/182/Q182652/
---

## Q182652: Memory Leak When Transactional Method Fails Before Connect

{% raw %}

	Article: Q182652
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	COMTI state machines are not reused if an application method invocation fails
	before a connection is established. A memory leak can be observed by the use of
	monitoring techniques. Memory used by Mtx.exe grows by about 6 kilobytes PER
	METHOD invocation.
	
	NOTE: This leak only happens on transactional calls.
	
	CAUSE
	=====
	
	This memory leak can occur when a COMTI application is in the midst of a
	transaction and there is something wrong with its Remote Environment (RE)
	configuration or the RE is inactive. You can correct the RE while the
	transaction is in-flight and go ahead with repetitive method invocations within
	the same Transaction Server process. Meanwhile, COMTI state machines have been
	allocated for the unsuccessful method invocations that occurred before the RE
	was corrected. These unusable state machines are left intact, using memory and
	being examined and rejected on each method invocation. So, there is more
	processing overhead incurred in addition to the memory leak.
	
	WORKAROUND
	==========
	
	Correct the erroneous RE and stop/start all Microsoft Transaction Server server
	processes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0. This problem was corrected in the
	latest SNA Server version 4.0 U.S. Service Pack. For information on obtaining
	this Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
