---
layout: page
title: "Q156010: INFO: Pool Manager Sample (Custom OLE Automation Server)"
permalink: /kb/156/Q156010/
---

## Q156010: INFO: Pool Manager Sample (Custom OLE Automation Server)

	Article: Q156010
	Product(s): Microsoft FoxPro
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation kbvfp500 kbvfp600
	Last Modified: 24-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Pool Manager sample in Visual FoxPro 5.0 and later.
	The Pool Manager is an example of a Custom OLE Automation Server created in
	Visual FoxPro.
	
	MORE INFORMATION
	================
	
	The Pool Manager sample (located in Samples\Servers) illustrates Custom OLE
	Automation Servers, created in Visual FoxPro, used to balance work loads and
	handle job requests from clients.
	
	NOTE: The sample is merely an example and not necessarily optimized for use in an
	industrial setting.
	
	You (the client) can send jobs to the Pool Manager (Visual FoxPro Custom OLE
	Server), which might be remote, and have the Pool Manager handle the job
	processing. This allows you to continue working (asynchronously) because the
	Pool Manager is handling all the work. The client does not need a timer
	continuously checking to see if a job is done, because the Pool Manager makes an
	OLE call back. The jobs requested are dummy simulation jobs.
	
	You can expand the Pool Manager class to provide better control on how many
	servers to deploy, timing of servers, and so forth. All of these are variables
	that can be controlled by the user to impact performance.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
