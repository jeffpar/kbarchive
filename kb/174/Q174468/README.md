---
layout: page
title: "Q174468: SLI_SEND Fails To Complete, Causing Win32 SLI App To Hang"
permalink: /kb/174/Q174468/
---

## Q174468: SLI_SEND Fails To Complete, Causing Win32 SLI App To Hang

{% raw %}

	Article: Q174468
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Win32 SLI application may hang waiting for an SLI_SEND to complete. This may
	occur if the host has sent an UNBIND on the session, which causes the SLI
	library to issue an RUI_TERM.
	
	CAUSE
	=====
	
	SNA Server's Winsli32.dll does not return the SLI_SEND Post response to the SLI
	application after an RUI_TERM is sent and this causes the application to hang.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated Winsli32.dll so that it returns all outstanding SLI verbs
	to the application when a session fails.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and
	3.0sp1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	A client side trace will show the following data flow:
	
	  ---------------------------------------------- 08:18:08.05
	  SLI_RECEIVE request
	  ---------------------------------------------- 08:18:08.06
	  RUI_READ response
	  OK - OK
	  (Unbind received on this response)
	  ---------------------------------------------- 08:18:08.06
	  RUI_READ request
	  ---------------------------------------------- 08:18:08.06
	  SLI_RECEIVE response
	  OK - OK
	  (client receives message signoff is successful in data flow)
	  ---------------------------------------------- 08:18:08.06
	  SLI_SEND request
	  ---------------------------------------------- 08:18:08.06
	  RUI_TERM request
	  ---------------------------------------------- 08:18:08.07
	  RUI_WRITE request
	  ---------------------------------------------- 08:18:08.07
	  RUI_WRITE response
	  CANCELLED - TERMINATED
	  ---------------------------------------------- 08:18:08.08
	  SLI_SEND response
	  IN_PROGRESS - OK
	  ---------------------------------------------- 08:18:08.08
	  RUI_READ response
	  CANCELLED - TERMINATED
	  ---------------------------------------------- 08:18:08.08
	  RUI_READ response
	  CANCELLED - TERMINATED
	  ---------------------------------------------- 08:18:08.08
	  RUI_READ response
	  CANCELLED - TERMINATED
	  ---------------------------------------------- 08:18:08.08
	  RUI_TERM response
	  OK - OK
	  ---------------------------------------------- 08:18:08.09
	  SLI_BID post
	  SESSION_FAILURE - 00000055
	
	Additional query words: sli hang
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
