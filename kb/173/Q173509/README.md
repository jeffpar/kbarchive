---
layout: page
title: "Q173509: XADM: Setup Fails when Installing Outlook Web Access"
permalink: /kb/173/Q173509/
---

## Q173509: XADM: Setup Fails when Installing Outlook Web Access

{% raw %}

	Article: Q173509
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the Microsoft Exchange Server Setup program to install the Outlook
	Web Access (OWA) component, you may receive the following error:
	
	  Processing file E:\server\eng\setup\i386\webcon.ins, at or near line 9.
	  The system cannot find the file specified.
	  Microsoft Windows NT no: 0xc002002
	
	CAUSE
	=====
	
	This error occurs because Active Server Pages (ASP) is not installed on the
	server.
	
	RESOLUTION
	==========
	
	From the Windows NT Service Pack 3 compact disk, run IIS30\ASP\i386\ASP.EXE to
	install ASP and then install OWA.
	
	Additional query words: exfaq exfaqad
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
