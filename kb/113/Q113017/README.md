---
layout: page
title: "Q113017: PPT: Cannot Branch to PowerPoint Slide Objects"
permalink: /kb/113/Q113017/
---

## Q113017: PPT: Cannot Branch to PowerPoint Slide Objects

	Article: Q113017
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft PowerPoint for Windows provides the ability to create two different
	types of PowerPoint OLE (object-linking-and-embedding) objects:
	
	  MS PowerPoint Slide
	  MS PowerPoint Presentation
	
	If you insert an MS PowerPoint Presentation object into a slide, you can use the
	Play Settings command to choose which action to take with the object during an
	on-screen slide show. If you choose the Show action, you can branch to that
	inserted presentation during your slide show.
	
	However, if you insert an MS PowerPoint Slide object into a slide, you will find
	that the Show action is not available. As a result, you cannot branch to an MS
	PowerPoint Slide object.
	
	WORKAROUND
	==========
	
	The workaround is to convert your MS PowerPoint Slide object into an MS
	PowerPoint Presentation object. Once you have converted the object, you can use
	the Play Settings dialog box to choose the Show action for the object so that
	you can branch to it during your on-screen slide show.
	
	There are two different procedures for converting the object, depending on
	whether the object is embedded or linked.
	
	Embedded Slide Object Procedure
	-------------------------------
	
	Use the Convert command:
	
	1. Select the MS PowerPoint Slide object that you want to convert.
	
	2. From the Edit menu, choose MS PowerPoint Slide Object. Select the Convert
	  command.
	
	3. In the Convert dialog box, select the object type MS PowerPoint Presentation
	  and choose OK.
	
	Linked Slide Object Procedure
	-----------------------------
	
	1. Delete the linked MS PowerPoint Slide object from your slide.
	
	2. If the source file contains just a single slide, skip to step 4.
	
	3. If the source file contains more than one slide, you can't really link to
	  just one slide in a presentation of multiple slides so you will need to
	  create a single slide presentation by doing the following:
	  a. Open the presentation file that is the source of the linked object that
	     was just deleted.
	
	  b. Save the file under a different name, using the Save As command. This
	     preserves the original file.
	
	  c. Delete all slides from this new presentation, except the slide that you
	     want to link.
	
	  d. Save and close the file.
	
	4. Insert a new MS PowerPoint Presentation object by doing the following:
	  a. From the Insert menu, choose Object.
	
	  b. Select Create From File.
	
	  c. Browse for or type in the path and filename of the presentation that is
	     the source of the linked object you want to insert.
	
	  d. Select the Link check box.
	
	  e. Choose OK.
	
	MORE INFORMATION
	================
	
	When you select and copy just one slide from Slide Sorter view, the only OLE
	object type that is placed on the Clipboard is an MS PowerPoint Slide object. If
	you select and copy two or more slides from Slide Sorter view, the only OLE
	object type that is placed on the Clipboard is an MS PowerPoint 4.0 Presentation
	object.
	
	If you have any existing presentation files that you want to insert into
	PowerPoint as an OLE object and you always want them to come in as MS PowerPoint
	Presentation objects, so that you can branch to them, do the following:
	
	1. From the Insert menu, choose Object.
	
	2. Choose Create From File.
	
	3. Browse for or type in the path and filename of the presentation that you want
	  to insert.
	
	4. If you want to link, rather than embed the object, select the Link check box.
	
	5. Choose OK.
	
	The object created will always be an MS PowerPoint Presentation object regardless
	of whether it is linked or embedded, has one slide, or many slides.
	
	Additional query words: 4.00 4.00a 4.00c 7.00 ppt95 winppt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
