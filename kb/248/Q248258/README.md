---
layout: page
title: "Q248258: Games: &lt;Program&gt; Caused an Invalid Page Fault in Module Unknown"
permalink: /kb/248/Q248258/
---

## Q248258: Games: &lt;Program&gt; Caused an Invalid Page Fault in Module Unknown

{% raw %}

	Article: Q248258
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbimu msgame
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NBA Inside Drive 2000, version 1.0 
	- Microsoft NFL Fever 2000, version 1.0 
	- Microsoft Pandora's Box, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the products listed at the beginning of this
	article, you may receive one of the following error messages:
	
	   - NBA2000 caused an invalid page fault in module unknown.
	
	   - Nflfever caused an invalid page fault in module unknown.
	
	   - Pandora caused an invalid page fault in module unknown.
	
	CAUSE
	=====
	
	This behavior can occur if Earthlink or Mindspring Internet software is
	installed on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, quit the Earthlink or Mindspring Internet software before
	you start the program.
	
	1. Press CTRL+ALT+DEL to open the Close Program dialog box.
	
	2. In the Close Program window, click Armon32, and then click End Task.
	
	  If you receive a message that the program is busy or not responding, click End
	  Task again.
	
	3. Start the program.
	
	NOTE: The Earthlink or Mindspring Internet software starts automatically when you
	restart the computer.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 msgame nba2k nflfever nfl2k panbox fastlane gpf ipf
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbNFLFever2000 kbNFLSearch kbPandoraSearch kbPandorasBox kbNBAInsideDrive2000
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
