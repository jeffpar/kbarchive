---
layout: page
title: "Q136748: PPT7: Unable to Link Only a Portion of a Presentation"
permalink: /kb/136/Q136748/
---

## Q136748: PPT7: Unable to Link Only a Portion of a Presentation

	Article: Q136748
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbinterop kbole
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select several slides in a presentation and copy them, you cannot use the
	Paste Link command to paste the slides into Word or Microsoft Excel (the Paste
	Link button is unavailable). However, if you select a single slide in a
	presentation and copy it, you can use the Paste Link command.
	
	CAUSE
	=====
	
	PowerPoint can provide two types of OLE objects: slides and presentations. A
	slide object is a single slide; a presentation object is a group of slides.
	
	You can link a slide object to an OLE container document, but you cannot link a
	presentation object unless that presentation object contains every slide in the
	presentation.
	
	RESOLUTION
	==========
	
	If you want to link an entire PowerPoint presentation to another document,
	follow these steps.
	
	NOTE: The following procedure is specific to Microsoft Word. However, you can
	follow similar steps with other programs.
	
	1. In PowerPoint, create a presentation and save it.
	
	2. Open the Word document you want to use as an OLE container.
	
	3. On the Insert menu, click Object.
	
	4. Click the Create From File tab.
	
	5. Click Browse.
	
	6. Open the folder that contains your presentation, and click the name of your
	  presentation. Click OK.
	
	7. Click to select the Link To File check box.
	
	8. Click OK.
	
	Additional query words: 7.00 powerpt
	
	======================================================================
	Keywords          : kbinterop kbole 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
