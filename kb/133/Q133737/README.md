---
layout: page
title: "Q133737: OLE Objects Don't Update with New Color Scheme"
permalink: /kb/133/Q133737/
---

## Q133737: OLE Objects Don't Update with New Color Scheme

	Article: Q133737
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
	
	If you insert slides containing OLE objects (for example, Graphs or Organization
	Charts) into an existing presentation by choosing Insert from the File menu,
	then clicking Slides, the OLE objects do not update automatically to match the
	existing color scheme.
	
	This behavior is different from version 4.0 of PowerPoint for Windows.
	
	CAUSE
	=====
	
	OLE objects are not activated when you insert slides from an external file.
	Therefore, the objects do not realize the change in the container environment
	and do not update.
	
	RESOLUTION
	==========
	
	Method 1: For single objects:
	
	a. Select the object to be updated.
	
	b. If you have PowerPoint 7.0, click Recolor on the Tools menu. If you have
	  PowerPoint 97, click Object on the Format menu, click the Picture tab, then
	  click the Recolor button.
	
	c. Click Entire Color Scheme, then click OK.
	
	  The OLE objects should update to the new scheme.
	
	Method 2: For multiple objects on multiple slides:
	
	a. On the View menu, click Slide Sorter.
	
	b. Select each slide that contains an affected object.
	
	c. On the Format menu, click Slide Color Scheme.
	
	d. Note the scheme being used.
	
	e. Choose a different color scheme and click Apply.
	
	f. On the Format menu, click Slide Color Scheme.
	
	g. Reselect the scheme noted in step d above and click Apply.
	
	  The OLE objects should update to the new scheme.
	
	Additional query words: 7.00 ppt7 ppt95 ole color scheme change ppt8
	
	======================================================================
	Keywords          : kbole 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	
	=============================================================================
	
