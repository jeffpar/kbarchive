---
layout: page
title: "Q90981: Exiting Wing Commander Hangs Computer"
permalink: /kb/090/Q90981/
---

## Q90981: Exiting Wing Commander Hangs Computer

	Article: Q90981
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer may stop responding (hang) after you exit Wing Commander version
	2.0.
	
	CAUSE
	=====
	
	This game requires extensive conventional, extended, and expanded memory. You
	should not start the network redirectors before playing this game.
	
	WORKAROUND
	==========
	
	If you automatically start the network in your AUTOEXEC.BAT file, remove the
	network from memory before playing Wing Commander by typing " net stop "
	(without the quotation marks) at any MS-DOS command prompt.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
