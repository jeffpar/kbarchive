---
layout: page
title: "Q128145: Cannot Remote Control Windows IPX/NetBIOS Client"
permalink: /kb/128/Q128145/
---

## Q128145: Cannot Remote Control Windows IPX/NetBIOS Client

	Article: Q128145
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to initiate a remote control session with the client, a Quick
	Window appears and it looks like it is trying to connect. It closes itself. No
	error message appears.
	
	CAUSE
	=====
	
	This only occurs if Windows for Workgroups is configured to use both the NetWare
	shell and the NWLINK protocol stack. In that case, NWLINK grabs the IPX packets,
	but does not pass them on to WUSER.
	
	RESOLUTION
	==========
	
	Network Setup installs NWLINK by default, so you must manually remove it to make
	WUSER work.
	
	NOTE: Loading support for "Netware Shell Versions 4.0 and Above" and the
	Microsoft Network with either NetBEUI or TCP/IP32 works correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this is a problem in Microsoft Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: SMS prodsms remote control
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
