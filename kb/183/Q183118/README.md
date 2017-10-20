---
layout: page
title: "Q183118: Special Characters Disallowed in Transaction Program Name"
permalink: /kb/183/Q183118/
---

## Q183118: Special Characters Disallowed in Transaction Program Name

{% raw %}

	Article: Q183118
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
	
	The Host Names tab on the Method properties sheet in the COM Transaction
	Integrator for CICS and IMS (COMTI) Component Builder does not allow periods in
	the name.
	
	CAUSE
	=====
	
	When you open the properties sheet and try to edit the TP Name, the problem can
	occur. This is a bug in the code that handles entering a TP Name through the
	method's Host Names Property page. Instead of checking for legal type AE
	characters, the code is checking for the legal type A characters. Only the
	alphanumeric characters $ (dollar sign), # (number sign), and @ (at sign) are
	allowed.
	
	WORKAROUND
	==========
	
	To work around the problem you can use the Import Wizard because it correctly
	handles the alphanumeric characters and allows periods to be entered. Also, the
	code that reads a component into CB handles the name correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
