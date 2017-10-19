---
layout: page
title: "Q97534: Unwanted String Begins Messages Redirected by XPAD"
permalink: /kb/097/Q97534/
---

## Q97534: Unwanted String Begins Messages Redirected by XPAD

	Article: Q97534
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	An incorrect or unwanted string sometimes begins messages sent through XPAD
	redirection. The problem is caused by connection through a NULL modem cable.
	
	SYMPTOMS
	========
	
	The X.25 PAD is often used for testing remote access services because it allows
	a PC with a modem to access one PAD COM port, then redirects the connection to
	another PAD COM port that has a LAN Man server running RAS.
	
	Sometimes, however, the first word the RAS client software sends is unwanted. In
	one reported instance, the word "client" began every message, causing a problem
	because it is an invalid command for the PAD, which requires a string such as
	"call/local 1" before it initiates a redirection.
	
	CAUSE
	=====
	
	This can be caused by connecting to the PAD through a null modem cable.
	
	RESOLUTION
	==========
	
	You can fix this by modifying PAD.INF, but it is not the best way to do it. If
	your connections are successfully completing, leave PAD.INF alone and go to the
	MODEMS.INF file. Find the Null Modem section. The unwanted string ("client" in
	the previous example) is in the Dial Command section. Replace it with
	"call/local 1" or whatever string you require.
	
	Additional query words: 2.00 2.10 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
