---
layout: page
title: "Q145715: Internet Service Manager Fails to Start"
permalink: /kb/145/Q145715/
---

## Q145715: Internet Service Manager Fails to Start

	Article: Q145715
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You receive an error saying the RPC server is too busy when you try to run
	Internet Information Server's Internet Service Manager.
	
	-or-
	
	Internet Service Manager hangs.
	
	CAUSE
	=====
	
	This problem occurs when the EventLog Service has been disabled.
	
	RESOLUTION
	==========
	
	To correct this problem, enable the EventLog service from the Services applet in
	the Control Panel.
	
	Additional query words: prodiis
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
