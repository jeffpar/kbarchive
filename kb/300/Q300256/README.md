---
layout: page
title: "Q300256: PRB: 3270 Display Through Terminal Server Shows Only Dots"
permalink: kb/300/Q300256/
---

## Q300256: PRB: 3270 Display Through Terminal Server Shows Only Dots

	Article: Q300256
	Product(s): Microsoft SNA Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 tslic_tslic
	Last Modified: 14-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a connection is made to a mainframe through the 3270 Applet installed on
	Microsoft Terminal Server or Terminal Services, the 3270 display screen may show
	only a series of dots instead of letters and numbers. If you enter log on
	information, you may be able to successfully log on, but the screen may still
	show only a series of dots.
	
	CAUSE
	=====
	
	When the 3270 Applet is initialized, it attempts to dynamically create the
	Lucida TrueType header file, Ltype.fot. If the Ltype.fot file is not present on
	the server and write access is not enabled to the Fonts folder, the problem may
	occur.
	
	RESOLUTION
	==========
	
	Manually install the Lucida TrueType font in the Fonts folder on the computer
	that is running Terminal Server or Terminal Services and set Ltype.fot to
	read-only.
	
	To work around this problem, enable write access to the Fonts folder.
	
	REFERENCES
	==========
	
	For related problems in a non-Terminal Server or Terminal Services environment,
	see the following Microsoft Knowledge base articles:
	
	  Q161192 Cannot Load Lucida Typewriter Font
	
	  Q139379 Cannot Load Lucida Typewriter Font
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 tslic_tslic 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ300 kbSNAServ400
	Version           : :3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
