---
layout: page
title: "Q172293: Tops of Characters Missing When Win3270 Applet Window Resized"
permalink: kb/172/Q172293/
---

## Q172293: Tops of Characters Missing When Win3270 Applet Window Resized

	Article: Q172293
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Windows 95 3270 applet (Win3270.exe) and resize the display
	window, the top of the text may appear to be cut off, as if the font is too big
	for the height of the row.
	
	CAUSE
	=====
	
	When support for Greek and Czech fonts was added to the Windows 3270 applet, the
	Czech font size became the basis for calculating the row height. If the normal
	font is bigger than this row size, the text truncates and displays incorrectly.
	
	RESOLUTION
	==========
	
	The Windows 95 3270 applet has been changed to support distinct row sizes for
	normal, Greek, and Czech fonts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 Service Pack 1
	(SP1). This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: truncate truncated
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	
