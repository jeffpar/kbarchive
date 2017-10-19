---
layout: page
title: "Q108110: Corrupted 8-Bit .AVI File After Step Frame Capture"
permalink: /kb/108/Q108110/
---

## Q108110: Corrupted 8-Bit .AVI File After Step Frame Capture

	Article: Q108110
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Video for Windows, version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using VidCap and doing step capture and compression simultaneously, you may
	experience problems with the resulting file if the codec was selected first and
	then a palette was captured.
	
	RESOLUTION
	==========
	
	Capture the palette first and then specify the codec for compression or capture
	in true color and use VidEdit to create a palette out of the video sequence.
	
	This problem only occurs when a new palette is created after selecting Microsoft
	VIDEO 1 or SPIGOT compression. When the capture is complete, load the file in
	VidEdit, for example, and the video clip is unusable.
	
	Additional query words: 1.1 Creative labs vid cap edit 8-BIT 8BIT
	
	======================================================================
	Keywords          :  
	Technology        : kbVideoSearch kbVideo110
	Version           : WINDOWS:1.1
	
	=============================================================================
	
