---
layout: page
title: "Q128146: WFW Client Hangs Saving to Windows NT 3.5 Share"
permalink: kb/128/Q128146/
---

## Q128146: WFW Client Hangs Saving to Windows NT 3.5 Share

	Article: Q128146
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to overwrite an existing file in a subdirectory of a read- only
	share on a Microsoft Windows NT 3.5 computer from a Windows for Workgroups 3.11
	computer, the Windows for Workgroups computer stops responding (hangs).
	
	This problem does not occur if the file you try to overwrite is in the root
	directory of the share, nor does it occur from File Manager or an MS-DOS prompt.
	
	RESOLUTION
	==========
	
	To work around this problem, mark all the files in the share's sub- directory
	with the Read-Only attribute.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows for Workgroups
	version 3.11. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
