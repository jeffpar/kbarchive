---
layout: page
title: "Q115763: VFW v1.1 DK &quot;ICM_DRAW_START_PLAY&quot; Message"
permalink: kb/115/Q115763/
---

## Q115763: VFW v1.1 DK &quot;ICM_DRAW_START_PLAY&quot; Message

	Article: Q115763
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Video for Windows Development Kit, version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ICM_DRAW_START_PLAY and ICM_DRAW_STOP_PLAY messages are not documented in
	the "Programmer's Guide" included in the "Video for Windows Development Kit,
	version 1.1" (VFW 1.1 DK).
	
	This article describes these messages in detail for the purpose of assisting a
	developer in writing a render driver.
	
	MORE INFORMATION
	================
	
	The Installable Compression Manager (ICM) communicates with a renderer (also
	known as a render driver) by sending messages to it. The renderer interprets the
	message and responds accordingly.
	
	The ICM_DRAW_START_PLAY message is sent either by the ICM or by an application
	that calls the ICDrawStartPlay() command. This message is sent to tell the
	driver the actual starting and ending times of a play operation. This message is
	sent to the driver before any frame data is sent.
	
	ICM_DRAW_START_PLAY is sent with two DWORD parameters, dwParam1 (the starting
	time) and dwParam2 (the ending time). These times are typically interpreted as
	frame numbers.
	
	If the ending time is less than the starting time (dwParam2 < dwParam1), then
	the segment plays backward.
	
	The ICM_DRAW_STOP_PLAY message is sent when the ICDrawStopPlay() command is
	issued to indicate a play operation is over. dwParam1 and dwParam2 are not used
	with this message and should be ignored by the driver.
	
	Additional query words: 1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbVideoSearch kbSDKSearch kbVideoDK110
	Version           : :1.1
	
	=============================================================================
	
