---
layout: page
title: "Q233551: Runtime Error 1226 Occurs When Using Diagnostic Playback"
permalink: /kb/233/Q233551/
---

## Q233551: Runtime Error 1226 Occurs When Using Diagnostic Playback

{% raw %}

	Article: Q233551
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp2
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a COM Transaction Integrator for CICS and IMS (COMTI) component
	library in a COMTI Diagnostic Playback Remote Environment (RE), the following
	error may be recorded in the application Event Log.
	
	  Event ID: 102
	  Source: COMTI
	  Type: Error
	  Category: General
	
	  (102) COM Transaction Integrator reported the following exception to the
	  client:
	
	  Component: Cedar.Bank.1
	  Method: cedrbank
	
	  Exception description:
	  (1226) COM Transaction Integrator encountered an unexpected error while
	  preparing to connect to the Remote Environment (hr=0xc0000835). Delete and
	  re-create the Remote Environment.
	
	CAUSE
	=====
	
	This error may occur if the RE is renamed.
	
	WORKAROUND
	==========
	
	The error is transient. Simply try the method again, and the error should not
	reoccur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
