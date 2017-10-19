---
layout: page
title: "Q143017: PPT7: New Window Opened When Inserted Object Activated"
permalink: /kb/143/Q143017/
---

## Q143017: PPT7: New Window Opened When Inserted Object Activated

	Article: Q143017
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbinterop kbole kbui
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Graph, Organization Chart, Equation Editor, or WordArt to insert an
	object into a PowerPoint presentation, and you set the object's animation
	settings to Build and Edit, you cannot activate the object for in-place editing
	while running a slide show. Instead, PowerPoint opens the object in a separate
	window.
	
	CAUSE
	=====
	
	In PowerPoint, when you activate an OLE object to edit it, the toolbars and
	menus change to those of the program that provided the OLE object. Therefore, if
	you edit an embedded Word table, the PowerPoint menus and toolbars are
	temporarily replaced by the Word menus and toolbars.
	
	When you run a slide show, PowerPoint suppresses its menus and toolbars; they are
	therefore not available to be replaced. The program responsible for editing the
	OLE object opens its own window that can display menus and toolbars.
	
	Additional query words: in-situ in-place editing mode powerpt w_powerpt ppt7 ppt95
	
	======================================================================
	Keywords          : kbinterop kbole kbui 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	
	=============================================================================
	
