---
layout: page
title: "Q161192: Cannot Load Lucida Typewriter Font"
permalink: /kb/161/Q161192/
---

## Q161192: Cannot Load Lucida Typewriter Font

{% raw %}

	Article: Q161192
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kbsna
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the SNA Server Windows NT 3270 applet, the following message
	appears:
	
	  Cannot load Lucida Typewriter font. Please ensure that ltype.ttf is in the
	  windows system directory.
	
	CAUSE
	=====
	
	There are three known causes of this error.
	
	1. A client setup problem in SNA Server 2.11 that resulted in the font not being
	  installed under certain conditions. If the Ltype.ttf file is missing from the
	  <ntroot>\system32 directory, refer to the following article in the
	  Microsoft Knowledge Base:
	
	  Q139379 SNA Server Error: Cannot Load Lucida Typewriter Font
	
	  This problem was fixed in SNA Server, version 2.11 Service Pack 1 (SP1).
	
	2. If you are running a copy of Windows from a network share. When a 3270
	  emulator is started, it dynamically creates the Lucida TrueType header file,
	  Ltype.fot, on the server (assuming you have write-access to the share) and
	  removes this file when exiting the emulator. If the Ltype.fot file is not
	  present on the server and you don't have write access to it, you will get the
	  error above.
	
	3. Corrupt TrueType header file, Ltype.fot or a conflicting Raster Font file,
	  Ltype.fon.
	
	RESOLUTION
	==========
	
	1. For the setup problem, apply SP1 or follow the workaround in the Microsoft
	  Knowledge Base article listed above.
	
	2. When using a shared copy of Windows, install the Lucida TrueType font (via
	  the Font control panel program), and then set Ltype.fot to be a read- only
	  file on the server sharepoint.
	
	3. If Ltype.ttf is installed and a shared copy of the operating system is not
	  being used, rename or remove both Ltype.fot and Ltype.fon.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbsna 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
