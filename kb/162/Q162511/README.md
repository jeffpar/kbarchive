---
layout: page
title: "Q162511: Calling CMSPTR over Thunking DLLs Causes Access Violation"
permalink: /kb/162/Q162511/
---

## Q162511: Calling CMSPTR over Thunking DLLs Causes Access Violation

{% raw %}

	Article: Q162511
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a 16-bit CPI-C application calls uses the
	Set_Prepare_To_Receive_Type(cmsptr) application programming interface (API)
	while running over the 16-bit-to-32-bit CPIC thunking interface, the application
	terminates abnormally with an application error.
	
	CAUSE
	=====
	
	The CPIC thunking interface was not handling this call correctly. In the
	thunking code, The Set_Prepare_To_Receive_Type(cmsptr) function is defined as:
	
	  CallProcEx32W(4,0xF,(DWORD)lpfn32, (DWORD)pConvID,<BR/>
	  (DWORD)pPTRType, (DWORD)pRetCode);
	
	The function should be:
	
	  CallProcEx32W(3,0xF,(DWORD)lpfn32, (DWORD)pConvID,<BR/>
	  (DWORD)pPTRType, (DWORD)pRetCode);<
	
	RESOLUTION
	==========
	
	Apply the fix referenced below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.11, 2.11 Service
	Pack 1 (SP1).
	
	
	A supported fix is now available for 2.11 SP1, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
