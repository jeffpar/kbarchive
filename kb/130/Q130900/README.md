---
layout: page
title: "Q130900: SMS Remote Control Fails on AST Manhattan Pentium"
permalink: /kb/130/Q130900/
---

## Q130900: SMS Remote Control Fails on AST Manhattan Pentium

{% raw %}

	Article: Q130900
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you remove Remote Control for the second time from a Windows for Workgroups
	3.11 client using a 3COM 3C503 or 3C509 network interface card (NIC), the
	following error message may appear:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  exe\SMS.DBG (pid=33)
	  Exception: access violation (0xc0000005), Address <Hex address>
	
	This problem occurs when Systems Management Server is installed on an AST
	Manhattan Pentium computer with 64 megabytes of RAM.
	
	To work around this problem, do one of the following:
	
	- Use another supported NIC on the Windows for Workgroups client.
	
	-or-
	
	- On the Systems Management Server, reduce the RAM to 16 MB.
	
	Additional query words: prodsms sms mb
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
