---
layout: page
title: "Q138439: Some Fills Lost When Saving from PowerPoint 7.0 as 4.0"
permalink: /kb/138/Q138439/
---

## Q138439: Some Fills Lost When Saving from PowerPoint 7.0 as 4.0

	Article: Q138439
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbusage
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a presentation that contains texture fills, two-color shaded
	fills, or preset shaded fills, and then save the presentation as a PowerPoint
	4.0 presentation, those fills will change.
	
	Texture fills, whether in a Design Template or on individual slides, convert to
	the default fill color of the presentation. Two-color shaded fills convert to
	one-color shaded fills, and preset shaded fills convert to the default fill
	color of the presentation.
	
	The following Design Templates make extensive use of texture fills:
	
	 Bedrock.pot             Blue Weave.pot
	 Brown Marble.pot        Metal.pot
	 Professional.pot        Tatami.pot
	 Wet Sand.pot
	
	The texture fill patterns that ship with PowerPoint are:
	
	 Oak                     Walnut
	 Medium Wood             Brown Marble
	 White Marble            Green Marble
	 Sand                    Cork
	 Granite                 Paper
	 Cloth                   Woven Mat
	
	CAUSE
	=====
	
	PowerPoint 4.0 does not support texture fills, two-color and preset shaded
	fills, or semi-transparent fills. When you save a PowerPoint for Windows 95
	presentation in PowerPoint 4.0 format, these features are lost.
	
	RESOLUTION
	==========
	
	To save your PowerPoint 7.0 Design Template in PowerPoint 4.0 format so that it
	retains its texture fills and special shaded fills, do the following:
	
	1. Open the original (PowerPoint for Windows 95 format) presentation.
	
	2. On the View menu, click Master, and click Slide Master.
	
	3. Select the object(s) on the Slide Master that contain textured or
	  custom-shaded fills. On most of the Design Templates, all the graphic
	  elements have been grouped together. This means that if you select one
	  graphic element, you select them all.
	
	4. On the Edit menu, click Cut.
	
	5. On the Edit menu, click Paste Special.
	
	6. In the list of data types, click Picture.
	
	7. Reposition the object(s) as necessary.
	
	8. If necessary, click Bring To Front or Send To Back on the Draw menu.
	
	9. On the View menu, click Master, and then click Title Master.
	
	10. Repeat steps 3-8 if necessary.
	
	Now, when you save your presentation as a PowerPoint 4.0 presentation, it should
	appear correctly.
	
	NOTE: You may notice a slight difference in the appearance of the textured,
	two-color shaded, and preset shaded fills in the revised Design Templates and
	objects. Because the design of the texture pattern has been slightly reduced and
	repeated, or tiled, in the filled area, texture fills, for example, will have a
	smaller pattern. Differences in the two-color shaded and preset shaded fills
	will be less noticeable.
	
	If you have objects on individual slides that use texture or special shaded
	fills, you will have to perform a similar procedure on them before you save them
	as part of a PowerPoint 4.0 presentation:
	
	1. Select an object that uses a texture or special shaded fill.
	
	2. On the Edit menu, click Cut.
	
	3. On the Edit menu, click Paste Special.
	
	4. In the list of data types, click Picture.
	
	5. Reposition the object if necessary.
	
	Additional query words: ppt95 ppt7 PowerPoint 95 powerpt 4.00a 4.00c powerpnt texture 2-color shaded preset fill Design Template Presentation
	
	======================================================================
	Keywords          : kbinterop kbusage 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
