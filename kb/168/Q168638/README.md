---
layout: page
title: "Q168638: PPT7: No Action or Interactive Settings for Grouped Shapes"
permalink: /kb/168/Q168638/
---

## Q168638: PPT7: No Action or Interactive Settings for Grouped Shapes

{% raw %}

	Article: Q168638
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbgraphic kbdraw
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you group several objects together, the Action Settings command on the Slide
	Show menu is unavailable (dimmed). If you right-click a group of objects, the
	Action Settings command is unavailable on the menu that appears.
	
	In addition, if you group an object that has an action setting or interactive
	setting property with other objects, PowerPoint ignores those settings until you
	ungroup the object.
	
	CAUSE
	=====
	
	Although multiple objects that have been grouped together behave as though they
	are a single object with respect to being moved, sized, or copied, PowerPoint
	remembers that the group is made up of multiple objects. PowerPoint cannot apply
	or activate action settings or interactive settings to multiple objects
	simultaneously, so it disables these commands when you select a grouped object
	or multiple objects.
	
	RESOLUTION
	==========
	
	To apply action settings or interactive settings to a group of objects, first
	convert the group of objects to a single picture. To do this, follow these
	steps:
	
	1. Select the group of objects.
	
	2. On the Edit menu, click Cut.
	
	3. On the Edit menu, click Paste Special.
	
	4. In the Paste Special dialog box, click Picture or click Picture (Enhanced
	  Metafile).
	
	5. Click OK.
	
	You can now apply action settings or interactive settings to the picture.
	
	STATUS
	======
	
	This feature is under review and will be considered for inclusion in a future
	release.
	
	Additional query words: ppt95 grouped grayed out missing
	
	======================================================================
	Keywords          : kbgraphic kbdraw 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
