---
layout: page
title: "Q177975: BUG: VBClientExplicitSecurity:ActiveX Component Can't Create Obj"
permalink: /kb/177/Q177975/
---

## Q177975: BUG: VBClientExplicitSecurity:ActiveX Component Can't Create Obj

{% raw %}

	Article: Q177975
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the VBClientExplicitSecurity tutorial sample, you receive the
	following error message:
	
	  Object Creation Failed: ActiveX component can't create object.
	
	CAUSE
	=====
	
	The statement
	
	     Set objSecurityContext = CreateObject("Cedar.HostSecurityContext")
	
	specifies the wrong PROGID. The correct PROGID is
	
	     COMTI.HostSecurityContext
	
	WORKAROUND
	==========
	
	To work around the problem, perform the following steps:
	
	1. In the Visual Basic (VB) development environment, open the following
	  project:
	
	     ~\sna\Comti\Tutorials\CedarBank\VBClientExplicitSecurity
	     \CedarBank.vbp
	
	  NOTE: The path and project name should be typed as one line.
	
	2. Select the Form, frmMain (Testbank.frm)
	
	3. On the View menu, click Code.
	
	4. Locate both occurrences of the line
	
	        Set objSecurityContext = CreateObject("Cedar.HostSecurityContext")
	
	  and change each statement to
	
	        Set objSecurityContext = CreateObject("COMTI.HostSecurityContext")
	
	5. On the File menu, click Make, and then select CedarBank.exe from the menu (or
	  test by running in VB debug mode).
	
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
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100
	Version           : WINDOWS:1.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
