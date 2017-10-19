---
layout: page
title: "Q123052: Notepad Does Not Print Tabs Properly"
permalink: /kb/123/Q123052/
---

## Q123052: Notepad Does Not Print Tabs Properly

	Article: Q123052
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbprint kbtool kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Notepad does not print tab characters that occur at the beginning of a line.
	They are displayed on the screen properly, but will not show up in the printed
	output. A document created in Notepad such as
	
	  Non Tabbed Line
	  <tab>Tabbed Line
	  123<tab>TEST
	
	would print the following:
	
	  Non Tabbed Line
	  Tabbed Line
	  123 TEST
	
	RESOLUTION
	==========
	
	As a workaround, you can place a space at the beginning of the line and then use
	the Tab key. For example, enter the following text in Notepad:
	
	  <tab>Tabbed Line
	  <space><tab>Space and then Tab
	  123<tab>TEST
	
	This text will print as:
	
	  Tabbed Line
	      Space and then Tab
	  123   TEST
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
