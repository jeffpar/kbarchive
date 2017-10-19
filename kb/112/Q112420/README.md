---
layout: page
title: "Q112420: PPT: PowerPoint Cannot Open Some Files with .DRW Extension"
permalink: /kb/112/Q112420/
---

## Q112420: PPT: PowerPoint Cannot Open Some Files with .DRW Extension

	Article: Q112420
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbgraphic kbinterop kbdta kbconversion kbgpf
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you attempt to access a file with a .DRW extension that is not a Lotus
	Freelance for MS-DOS file (version 3.0 or 4.0) by clicking Open on the File menu
	or by clicking Slides From File on the Insert menu, one of the following error
	messages appear.
	
	In PowerPoint 7.0, you will receive the following message:
	
	  Sorry, this type of file cannot be opened by PowerPoint.
	
	In PowerPoint 4.0, you will receive the following message:
	
	  PP4 caused a General Protection Fault in module FL40DOS.PDI at 0001:AD35.
	
	CAUSE
	=====
	
	Several graphics applications (Micrografx Designer, for example) use the same
	file extension (.DRW) for their data files as Lotus Freelance for MS- DOS. The
	Freelance translator is expecting the .DRW files to be from Lotus Freelance for
	MS-DOS. The error occurs when the Freelance translator encounters the unfamiliar
	file format from a non-Lotus graphics application.
	
	RESOLUTION
	==========
	
	To import .DRW graphics files, click Insert Picture on the Edit menu rather than
	clicking Open on the File menu or clicking Slides From File on the Insert menu.
	
	Additional query words: 4.00a 4.00c buglist pp4bug free lance xlator general winppt ppt95 protection fault gpf gf
	
	======================================================================
	Keywords          : kberrmsg kbgraphic kbinterop kbdta kbconversion kbgpf 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
