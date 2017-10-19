---
layout: page
title: "Q156985: CG3: Error When Using Clip Gallery to Insert a Sound"
permalink: /kb/156/Q156985/
---

## Q156985: CG3: Error When Using Clip Gallery to Insert a Sound

	Article: Q156985
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,97; :97
	Operating System(s): 
	Keyword(s): kberrmsg kbualink97 kbdta
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Clip Gallery 3.0 for Windows 
	- Microsoft Excel 97 for Windows 
	- Microsoft Word 97 for Windows 
	- Microsoft Access 97 
	- Microsoft PowerPoint 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In any of the Microsoft Office 97 programs listed at the beginning of this
	article, you receive the following error message:
	
	  Clip Gallery cannot launch the software component to handle <path to a WAV
	  file>.
	
	CAUSE
	=====
	
	This error message will be displayed if both of the following conditions are
	true:
	
	- You are using the Microsoft Clip Gallery to insert a sound into a Microsoft
	  Office document.
	
	-and-
	
	- You do not have the Windows Sound Recorder installed on your machine.
	
	RESOLUTION
	==========
	
	You cannot use the Microsoft Clip Gallery to insert sounds into documents unless
	you have the Windows Sound Recorder installed on your computer. To do this in
	Windows 95 and Windows NT 4.0, use the following steps:
	
	1. On the Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click the Windows Setup tab or the Windows NT Setup tab.
	
	4. In the list of Components, click the text "Multimedia". (Do not click the
	  check box to the left of "Multimedia".) Then, click Details.
	
	5. In the list of Components, select the Sound Recorder check box, then click
	  OK.
	
	6. Click OK.
	
	7. If you are prompted to insert your Windows 95 CD-ROM, do so and click OK.
	
	8. When the Sound Recorder is installed, close the Control Panel.
	
	You should now be able to use the Microsoft Clip Gallery to insert sounds into
	your documents.
	
	Note: to play sounds, you must have a suitable sound card and drivers installed
	on your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Microsoft Clip Gallery is a shared application that allows you to embed
	pictures, sounds, and video clips in documents in Microsoft Office 97 programs.
	To access it:
	
	1. On the Insert menu, click Object.
	
	2. In the list of Object Types, click "Microsoft Clip Gallery". Click OK.
	
	If you click the Sounds tab in Microsoft Clip Gallery, click a sound file, and
	then click Insert, the Clip Gallery embeds a copy of the sound into your
	document. Double-clicking the embedded sound causes it to play.
	
	However, if the Windows Sound Recorder is not installed on your computer, you
	will not be able to embed sounds using the Clip Gallery.
	
	
	Additional query words: OFF97 XL97 WORD97 ACC97 PPT97 multimedia wave audio "clip art gallery"word8 8.00
	
	======================================================================
	Keywords          : kberrmsg kbualink97 kbdta 
	Technology        : kbWordSearch kbFrontPageSearch kbExcelSearch kbAccessSearch kbPowerPtSearch kbWorksSearch kbWord97 kbWord97Search kbPublisherSearch kbAccess97 kbPowerPt97 kbZNotKeyword2 kbAccess97Search kbExcel97Search kbPowerPt97Search kbClipGallerySearch kbZNotKeyword3 kbClipGallery300 kbHomePubSearch kbPhotoDrawSearch
	Version           : WINDOWS:3.0,97; :97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
