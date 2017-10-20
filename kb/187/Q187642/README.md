---
layout: page
title: "Q187642: BUG: &quot;Out of Memory&quot; Calling COMTI in Same MTS Pkg. as Caller"
permalink: /kb/187/Q187642/
---

## Q187642: BUG: &quot;Out of Memory&quot; Calling COMTI in Same MTS Pkg. as Caller

{% raw %}

	Article: Q187642
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0 SP1,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 SP1, used with:
	   - Microsoft SNA Server, version 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An "Out of Memory" error occurs when one component installed in a Microsoft
	Transaction Server (MTS) package invokes a method of a COM Transaction
	Integrator for CICS and IMS (COMTI) component installed in the same MTS package.
	The error occurs in the COMTI component. The following conditions are met:
	
	- A COMTI component is called from another MTS component.
	
	- Both components are installed in the same MTS package.
	
	- The COMTI method being called has a return value.
	
	- Both components share MTS Object Context, for example:
	
	        Set oComTI = GetObjectConext().CreateInstance("MyCOMTI.MyMethod")
	
	CAUSE
	=====
	
	The pointer to the return value data is not properly initialized in the COMTI
	runtime. This causes an attempt to free memory (that has not been acquired)
	before handling the return value of the reply data from the host. Thus, the
	COMTI component sends an Access Violation exception, which MTS receives.
	Therefore, MTS destroys the hosting process (Mtx.exe). This causes a failed
	method call and eventually an "Out Of Memory" error to be returned to the
	caller.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Put the COMTI component in a different MTS package from the calling
	  component. This causes a marshal to occur, and the marshaling code
	  initializes pointers to all parameters (including return values).
	
	- Do not share MTS Object Context. This causes the COMTI component to be
	  created on a different thread. Therefore, a thread marshal occurs and yields
	  similar results to the first workaround.
	
	- Do not use a return value for the COMTI method; instead make the desired
	  return value an output parameter, which avoids the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0 SP1, included with SNA Server version
	4.0 SP1.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0 SP1,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
