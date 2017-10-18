---
layout: page
title: "Q154503: SMS: Wuser2.exe GPF When Using Hurricane VMM"
permalink: kb/154/Q154503/
---

## Q154503: SMS: Wuser2.exe GPF When Using Hurricane VMM

	Article: Q154503
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Hurricane virtual memory manager (VMM) and you attempt to
	remotely control a Systems Management Server client, the following error message
	appears:
	
	  WUSER2 caused a General Protection Fault in module IDIS_LM.DLL
	
	CAUSE
	=====
	
	Hurricane is a virtual memory manager that performs GDI object mapping in a
	manner incompatible with the remote control functionality of Systems Management
	Server.
	
	WORKAROUND
	==========
	
	To remove GDI Object Mapping, edit the Hurricane.ini file found in the Hurricane
	directory and turn off GDIObjectMapping by adding the following entry:
	
	  [Heap Expander]
	  GDIObjectMapping=OFF
	
	MORE INFORMATION
	================
	
	Hurricane version 2.1 is manufactured by Helix Software, a vendor independent of
	Microsoft. We make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
