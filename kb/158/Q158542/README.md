---
layout: page
title: "Q158542: CG3: Clip Gallery Takes a Long Time to Start"
permalink: kb/158/Q158542/
---

## Q158542: CG3: Clip Gallery Takes a Long Time to Start

	Article: Q158542
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,97
	Operating System(s): 
	Keyword(s): kbole kbtool kbualink97 kbdta
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Clip Gallery 3.0 for Windows 
	- Microsoft Excel 97 for Windows 
	- Microsoft Word 97 for Windows 
	- Microsoft PowerPoint 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the programs listed at the beginning of this article, the first time you
	start the Clip Gallery, it may take a long time to appear.
	
	CAUSE
	=====
	
	This behavior may occur when you set up Microsoft Office 97 from an installation
	point on a network server.
	
	RESOLUTION
	==========
	
	This behavior occurs only when you start the Clip Gallery the first time. When
	you subsequently start the Clip Gallery, its performance is faster.
	
	STATUS
	======
	
	This behavior is by design of the Clip Gallery in Microsoft Office 97.
	
	MORE INFORMATION
	================
	
	When you set up Microsoft Office 97 on your computer, the Setup program does not
	copy all of the media files (clip art, sound, video file, and so on) onto your
	computer. Instead, the Clip Gallery references the files in their original
	locations. For example, if you install Microsoft Office 97 from a compact disc,
	the Clip Gallery searches for media files on the compact disc.
	
	If you set up Microsoft Office 97 from a network server, the Clip Gallery
	searches for media files on that network server. If the server is busy or slow,
	or if the current volume of network traffic is high, the Clip Gallery may take a
	long time to appear the first time you start it.
	
	For example, after you run the Setup program from a 90-MHz Pentium network server
	and set up Microsoft Office 97 onto a 66-MHz 486 computer, it may take
	approximately 20 seconds to start the Clip Gallery. However, when you start the
	Clip Gallery a second time, it may take only two seconds. (Note that these times
	may vary, depending on your computer and the network server speed, the current
	volume of network traffic, and so on.)
	
	To start the Clip Gallery in any of the programs listed at the beginning of this
	article, point to Picture on the Insert menu, and then click Clip Art.
	
	Additional query words: OFF97 XL97 WORD97 PPT97 art "clipart gallery" cag
	
	======================================================================
	Keywords          : kbole kbtool kbualink97 kbdta 
	Technology        : kbWordSearch kbOfficeSearch kbFrontPageSearch kbExcelSearch kbPowerPtSearch kbWorksSearch kbWord97 kbWord97Search kbPublisherSearch kbPowerPt97 kbZNotKeyword2 kbOffice97Search kbExcel97Search kbPowerPt97Search kbOffice97 kbClipGallerySearch kbZNotKeyword3 kbVFP300 kbHomePubSearch kbPhotoDrawSearch
	Version           : WINDOWS:3.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
