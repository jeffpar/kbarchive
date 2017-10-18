---
layout: page
title: "Q140650: PPT: PowerPoint Overrides Default Graph Color Scheme"
permalink: kb/140/Q140650/
---

## Q140650: PPT: PowerPoint Overrides Default Graph Color Scheme

	Article: Q140650
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:3.0,3.0b,4.0; WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbole kbgraph
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Macintosh, versions 3.0, 3.0b, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	PowerPoint overrides the custom color information saved with the Microsoft Graph
	default graph. When you insert a new graph, PowerPoint uses the colors in the
	Slide Color Scheme, not the colors saved in the default graph file.
	
	CAUSE
	=====
	
	PowerPoint sends the colors in the Slide Color Scheme to Microsoft Graph. This
	changes the first six colors on Graph's palette. This behavior is to ensure that
	the graph uses colors that go well with the rest of the presentation.
	
	PowerPoint uses most of the rest of the settings stored in the default graph
	file.
	
	WORKAROUND
	==========
	
	If you want to create a graph that uses colors other than the Slide Color Scheme
	colors, follow these steps:
	
	1. Create a new graph. Choose the colors you want in the graph. Exit and return
	  to your presentation.
	
	2. Click Recolor on the Tools Menu (in PowerPoint 4.0 and 7.0) or the Object
	  Menu (in PowerPoint 3.0).
	
	3. Click the Text And Background Only button.
	
	4. Click OK.
	
	The graph now retains your customized colors. You can also duplicate this graph,
	and the duplicate will retain the custom colors.
	
	Additional query words: 3.00 3.00b 4.00 4.00a 4.00c 7.00 winppt macppt winmacppt
	
	======================================================================
	Keywords          : kbole kbgraph 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt300Mac kbPowerPt400Mac kbPowerPt300bMac kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : MACINTOSH:3.0,3.0b,4.0; WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
