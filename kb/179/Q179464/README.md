---
layout: page
title: "Q179464: CedarBank: Session Object Error 'ASP 0168 : 80004005'"
permalink: /kb/179/Q179464/
---

## Q179464: CedarBank: Session Object Error 'ASP 0168 : 80004005'

{% raw %}

	Article: Q179464
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
	
	You attempt to run CedarBank sample from a Web page. After you type a name into
	the edit box and click the "Checking Acct. Balance" button, you receive the
	following error message:
	
	  Error:
	  Session object error 'ASP 0168 : 80004005'
	  Disallowed object use
	  /cedarbank/selectpage.asp, line 4
	  An intrinsic object cannot be stored within the Session object.
	
	CAUSE
	=====
	
	Two statements in ~\sna\comti\tutorials\cedarbank\website\Selectpage.asp
	
	     Set Session("CustName") = Request("CustName")
	
	-and-
	
	     Set Session("CustPIN")  = Request("CustPIN"),
	
	are incorrect.
	
	WORKAROUND
	==========
	
	Delete the word "Set" from the two problematic statements, or replace the two
	lines with these two statements
	
	       Session("CustName") = Request("CustName")
	
	-and-
	
	       Session("CustPIN")  = Request("CustPIN"),
	
	respectively.
	
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
