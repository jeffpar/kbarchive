---
layout: page
title: "Q134461: PPT7: Embedded OLE Object Won't Update in Branched Presentation"
permalink: /kb/134/Q134461/
---

## Q134461: PPT7: Embedded OLE Object Won't Update in Branched Presentation

	Article: Q134461
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbole
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to edit embedded OLE objects in an embedded (or branched)
	PowerPoint presentation while in slide show view, the objects are not updated.
	
	If you insert an OLE object into a PowerPoint presentation, you can edit that OLE
	object during a slide show by doing the following:
	
	1. Select the object.
	
	2. On the Tools menu, click Animation Settings.
	
	3. In the Play Options list, click Edit or Open.
	
	If you run the slide show, you can now edit the OLE object while in Slide Show
	view, and the updates are reflected in the object.
	
	If, however, you insert a PowerPoint presentation object into a PowerPoint
	presentation and insert an OLE object into that embedded presentation object, it
	does not update while you are in Slide Show view.
	
	CAUSE
	=====
	
	When you start an embedded PowerPoint presentation from a PowerPoint slide show,
	you are playing it, not editing it. You cannot change an object to edit mode
	while you are playing it. Because you cannot change the embedded PowerPoint
	presentation while you are playing it, OLE objects in the presentation will not
	update.
	
	Additional query words: power point powerpt branched winppt branch branching
	
	======================================================================
	Keywords          : kbole 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
