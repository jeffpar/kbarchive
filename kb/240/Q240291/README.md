---
layout: page
title: "Q240291: Zone Err Msg: Could Not Load the Plug-in..."
permalink: kb/240/Q240291/
---

## Q240291: Zone Err Msg: Could Not Load the Plug-in...

	Article: Q240291
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu msgame
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load an Zone Web page, you may receive the following error message:
	
	  Could not load the plug-in 'Zone.com Plugin' for the MIME type
	  'application/x-MSNZoneHeartbeat'.
	
	  Make sure enough memory is available and that the plug-in is installed
	  correctly.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You are using a Microsoft Windows 95-based computer.
	- The Distributed Component Object Model (DCOM) is not installed on the
	  computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install DCOM95 for Windows 95 from the
	following Microsoft Web site:
	
	  http://www.microsoft.com/com/dcom/dcom95/dcom1_3.asp
	
	Additional query words: msgame igz msngz
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu msgame 
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
