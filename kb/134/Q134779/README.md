---
layout: page
title: "Q134779: Print Jobs to Windows NT Servers Named &quot;Remote Downlevel Doc.&quot;"
permalink: kb/134/Q134779/
---

## Q134779: Print Jobs to Windows NT Servers Named &quot;Remote Downlevel Doc.&quot;

	Article: Q134779
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
	
	When you print to a Microsoft Windows NT 3.1 or 3.5 print server, the print job
	is always listed as "Remote Downlevel Document" in the print queue.
	
	-or-
	
	When you print from an MS-DOS-based program to a Windows NT 3.51 print server,
	the print job is always listed as "Remote Downlevel Document" in the print
	queue.
	
	CAUSE
	=====
	
	When Windows 95 prints to a Windows NT print server, Windows NT names the print
	job "Remote Downlevel Document" and returns this name to Windows 95 when the
	print job is enumerated.
	
	
	RESOLUTION
	==========
	
	If you do not want your print jobs from Windows-based programs labeled this way,
	upgrade your Windows NT print server to version 3.51.
	
	There is currently no workaround for MS-DOS-based programs printing to a Windows
	NT 3.51 print server.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
