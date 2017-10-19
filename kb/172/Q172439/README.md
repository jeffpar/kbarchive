---
layout: page
title: "Q172439: &quot;The Icmp.dll File Cannot Start&quot; While Using Ping.exe"
permalink: /kb/172/Q172439/
---

## Q172439: &quot;The Icmp.dll File Cannot Start&quot; While Using Ping.exe

	Article: Q172439
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Ping.exe tool included with Windows 95, you may receive any of
	the following error messages:
	
	  The Icmp.dll file cannot start. Check the file to determine the problem.
	
	  Unable to initialize Windows Sockets interface, error code 6.
	
	Note that the first error message may be misleading because the Icmp.dll file may
	not be the cause of the problem; replacing it may not resolve the issue.
	
	CAUSE
	=====
	
	The Wsock32.dll file may have been damaged or have been replaced by a
	third-party program.
	
	RESOLUTION
	==========
	
	Use the Extract tool to extract a new copy of the Wsock32.dll file from your
	original Windows 95 disks or CD-ROM to the Windows\System folder.
	
	For information about using the Extract tool, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	MORE INFORMATION
	================
	
	You may also see various error messages when you start Windows 95 that indicate
	there is a problem with the Wsock32.dll file.
	
	
	Additional query words: corrupt
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
