---
layout: page
title: "Q180681: BUG: HRESULT 8000ffff When Creating Instance of COMTI Component"
permalink: /kb/180/Q180681/
---

## Q180681: BUG: HRESULT 8000ffff When Creating Instance of COMTI Component

{% raw %}

	Article: Q180681
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create an instance of a COMTI component that is not assigned to
	a Remote Environment (RE), the runtime error
	
	  HRESULT 8000ffff (E_UNEXPECTED)
	
	is raised to the client application. COMTI writes a more descriptive error in the
	event log:
	
	  The COM Transaction Integrator component is not currently assigned to a
	  Remote Environment.
	
	The Prog ID and Class ID of the unassigned component are also included in the
	event log.
	
	CAUSE
	=====
	
	The error occurs because the COMTI component is not assigned to an RE.
	
	WORKAROUND
	==========
	
	To work around the problem, assign components to the appropriate (CICS LINK,
	CICS, IMS, and so forth) Remote Environment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0. A supported fix
	is now available for SNA Server 4.0, but has not been fully regression-tested
	and should be applied only to systems experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft recommends that
	you wait for the next Service Pack that contains this fix. Contact Microsoft
	Product Support Services for more information.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100
	Version           : WINDOWS:1.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
