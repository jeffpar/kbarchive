---
layout: page
title: "Q138154: FOR Command Does Not Support Long Filenames in Windows 95"
permalink: /kb/138/Q138154/
---

## Q138154: FOR Command Does Not Support Long Filenames in Windows 95

	Article: Q138154
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the MS-DOS FOR command in Windows 95, long filenames (LFNs) may not
	be handled correctly in MS-DOS sessions or with LAN Manager version 2.11
	servers.
	
	CAUSE
	=====
	
	When you use the FOR command in Windows 95, LFN support is turned off. This
	behavior is by design.
	
	RESOLUTION
	==========
	
	Use the "LFNFOR ON" command before you execute a FOR command in a batch file.
	
	For example, the following batch file displays all LFNs on the screen:
	
	  @echo off
	  lfnfor on
	  for %%I in (*.*) do echo %%I
	
	In this example, the "LFNFOR ON" command causes LFNs to be displayed correctly. A
	file named "New Text Document.txt" is displayed with its full name. Without the
	"LFNFOR ON" command, the file would be displayed with its 8.3 filename of
	"Newtex~1.txt."
	
	MORE INFORMATION
	================
	
	The LFNFOR command enables and disables LFN support when processing FOR
	commands. Use "LFNFOR ON" to enable LFN support, and "LFNFOR OFF" to disable LFN
	support.
	
	Type "lfnfor" without a parameter to display the current setting. The default
	value is LFNFOR OFF.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
