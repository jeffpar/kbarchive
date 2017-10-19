---
layout: page
title: "Q182374: TN5250 Event ID 16 Error Causing APPC Session To Fail"
permalink: /kb/182/Q182374/
---

## Q182374: TN5250 Event ID 16 Error Causing APPC Session To Fail

	Article: Q182374
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some situations, such as performing a screen save from a TN5250 session to
	the AS400, the APPC session fails (the AS/400 rejects one of the messages) and
	an Event ID 16 is logged from the TN5250 Service on the SNA Server computer with
	the following text:
	
	  The SNA TN5250 Service detected an unexpected passthrough parameter 
	  data area flag from the client at <data>.
	
	  The client should not generate this information and it has been
	  suppressed. Please verify that the client software has all fix
	  updates applied.
	
	CAUSE
	=====
	
	In some cases, the data flow comes across two socket calls. The TN5250 Service
	is incorrectly handling the second call, causing the problem to occur.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0. This problem was first corrected in SNA
	Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	With the update applied, the TN5250 Service functions correctly in this
	situation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
