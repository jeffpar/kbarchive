---
layout: page
title: "Q118794: SFM: Problem Capturing Windows NT Printer"
permalink: /kb/118/Q118794/
---

## Q118794: SFM: Problem Capturing Windows NT Printer

	Article: Q118794
	Product(s): Microsoft Windows NT
	Version(s): 3.10
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10
	
	WINDOWS
	
	kbprint
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a printer on a Windows NT Advanced Server computer, you have the
	option to capture the printer so that Macintosh workstations cannot access it
	directly. If you try to do this, the Macintosh Chooser displays two printer
	queues for the same printer. One queue is displayed under the name you created
	on the Windows NT server and the other is displayed as a normal Macintosh
	printer.
	
	CAUSE
	=====
	
	Some printers, including the LaserWriter IIf and IIg, refuse a connection at
	certain wait time-outs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. This problem has been corrected in Windows NT Server version 3.5.
	
	Additional query words: prodnt 3.10 Printing Mac
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.10
	
	=============================================================================
	
