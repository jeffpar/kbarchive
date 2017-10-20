---
layout: page
title: "Q184505: CPI-C Accept_Conversation (cmaccp) Does Not Block As Expected"
permalink: /kb/184/Q184505/
---

## Q184505: CPI-C Accept_Conversation (cmaccp) Does Not Block As Expected

{% raw %}

	Article: Q184505
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a CPI-C (Common Programming Interface for Communications) application calls
	WinCPICStartup followed by Accept_Conversation (cmaccp), then the cmaccp() will
	function in blocking mode. However, the cmaccp() will never complete, because no
	local TP (transaction processing) name has been specified for the application.
	
	In order to associate a TP (Transaction Program) name with the cmaccp() call,
	Specify_Local_TP_Name (cmsltp) must be called prior to cmaccp(). However, this
	causes cmaccp() to function in "non-blocking" mode. This can cause the cmaccp()
	to fail immediately with an error 25 (CM_PROGRAM_STATE_CHECK) instead of waiting
	for an incoming attach request.
	
	CAUSE
	=====
	
	This behavior is by design, according to the Windows CPI-C specification.
	
	RESOLUTION
	==========
	
	To force blocking behavior of cmaccp, Wait_For_Conversation (cmwait) must be
	called after cmsltp() and cmaccp() in order to cause the application's thread to
	block. All CPI-C functions operate in blocking mode by default, except the
	cmaccp() function, which requires the application to call cmwait() in order to
	force blocking behavior.
	
	There are no plans to change the Windows CPI-C specification or to modify the SNA
	Server CPI-C API (application programming interface) to behave differently than
	it does in the current design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
