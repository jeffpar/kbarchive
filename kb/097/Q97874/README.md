---
layout: page
title: "Q97874: /N Switch Turns off Verification Search for Protocol"
permalink: /kb/097/Q97874/
---

## Q97874: /N Switch Turns off Verification Search for Protocol

	Article: Q97874
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Minses provides the interface between LAN Manager for MS-DOS and NetBIOS. Before
	it loads, minses normally verifies that there is a protocol driver at Int 5c.
	Demand protocol architecture protocols such as NetBEUI are loaded after the
	workstation (including Minses) starts, so the verification fails and Minses
	refuses to load. The /n switch (which should be turned on by the LAN Manager
	Setup program) turns the minses verification search off.
	
	The /q parameter disables the Minses beep.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
