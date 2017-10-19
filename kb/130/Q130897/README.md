---
layout: page
title: "Q130897: Windows for Workgroups Hangs on Dell Pentium XPS100"
permalink: /kb/130/Q130897/
---

## Q130897: Windows for Workgroups Hangs on Dell Pentium XPS100

	Article: Q130897
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows for Workgroups version 3.11 on a Dell 100 mHz Pentium with
	a Madge Token Ring network card, an IBM Token Ring 16/4 network card, and an
	Sound Blaster card, the computer stops responding (hangs) after the sound card
	driver loads and the network is started.
	
	CAUSE
	=====
	
	This problem occurs when you Sound Blaster card is configured to use the same
	address as the Token Ring card. The default port address for the Token Ring card
	is A220.
	
	RESOLUTION
	==========
	
	Use a port address other than A220 for the Sound Blaster card.
	
	Additional query words: 3.11 wfw wfwg logo tokenring
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
