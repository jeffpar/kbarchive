---
layout: page
title: "Q87556: PPT: Maximum Number of Objects Per Slide and Notes"
permalink: /kb/087/Q87556/
---

## Q87556: PPT: Maximum Number of Objects Per Slide and Notes

{% raw %}

	Article: Q87556
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:2.0,3.0,4.0; WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 2.0, 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Macintosh, versions 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PowerPoint has a limit to the number of objects that can be in Slides view,
	Notes view, or any of the master views. This limit is different depending on
	which version of PowerPoint you are using.
	
	  Version  Object Limit
	  -------  ------------
	  7.0      2040 (2048 minus reserved placeholder objects)
	  4.0      2040 (2048 minus reserved placeholder objects)
	  3.0      2046 (2048 minus reserved title, slide image, and body objects)
	  2.0      1069 (1070 minus reserved title and slide picture objects)
	
	MORE INFORMATION
	================
	
	Versions 3.0, 4.0, 7.0
	----------------------
	
	PowerPoint versions 3.0, 4.0, and 7.0, have a limit of 2048 objects per Slides
	view, Notes view, or any of the master views. This includes the Title, Body,
	Master Title, Master Body, and Slide Image objects in PowerPoint 3.0 and the
	AutoLayout placeholder objects in PowerPoint 4.0 and 7.0.
	
	This means that only 2046 objects (PowerPoint 3.0) or 2040 objects (PowerPoint
	4.0 and 7.0) can be added to the Slides, Notes, Slide Master, and Notes master
	views.
	
	PowerPoint gives you the following warning message if you try to exceed the
	limit:
	
	  Sorry, the slide has too many objects to perform this operation.
	
	In addition to getting this message when you paste information to or make changes
	to a document, you may also get the message when you convert a non- PowerPoint
	object to a PowerPoint object using the Ungroup command (which is not available
	in PowerPoint 2.0).
	
	Version 2.0
	-----------
	
	PowerPoint 2.0 is limited to 1070 objects per Slides view, Notes view, or any of
	the master views. For the Slides, Notes, Slide Master, and Notes master views,
	this includes the Title and Slide Picture objects. This means that only 1069
	objects can be added to the Slides, Notes, Slide Master, and Notes master views
	because the reserved objects in those views cannot be deleted.
	
	PowerPoint 2.0 for Windows warns you if you have multiple objects in the
	Clipboard and pasting the contents of the Clipboard would exceed this limit:
	
	  Sorry, you cannot paste all the objects to this slide, some have been pasted.
	  Use Undo to recover the slide's state before pasting.
	
	PowerPoint 2.0 for the Macintosh does not warn you under the same circumstances.
	Instead, you receive the following warning when saving a presentation in which
	the current view exceeds this limit:
	
	  There are too many objects on the current slide. Some will be lost.
	
	If it is not the current view that exceeds the limit, PowerPoint 2.0 for the
	Macintosh does not display a warning message, but some of the objects will be
	lost anyway.
	
	If you are at exactly the limit for the current view, the Paste command is
	unavailable (dimmed).
	
	WORKAROUND
	==========
	
	You can reduce the number of objects in PowerPoint by converting multiple
	objects to a single picture. A picture is treated as just one object in
	PowerPoint. To convert multiple PowerPoint objects to a single picture, do the
	following:
	
	1. Select the objects that you want to convert, using the various methods for
	  performing multiple selections in PowerPoint.
	
	2. On the Edit menu, click Cut.
	
	3. If you are using version 2.0, click Paste As Picture on the Edit menu.
	
	  -or-
	
	  If you are using version 3.0 or later, click Paste Special on the Edit menu.
	  Click Picture and then click Paste (version 3.0) or click OK (version 4.0 and
	  later).
	
	The resulting picture is treated as a single object and allows you to add more
	objects to your presentation.
	
	In versions 3.0 and 4.0, the resulting picture can be converted back to
	PowerPoint objects using the Ungroup command.
	
	Additional query words: 4.00a 4.00c ppt95 too many winppt macppt objects limit limits max slides
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt200Mac kbPowerPt300Mac kbPowerPt400Mac kbPowerPt200 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : MACINTOSH:2.0,3.0,4.0; WINDOWS:2.0,3.0,4.0,4.0a,4.0c,7.0
	Hardware          : MAC x86
	
	=============================================================================
	

{% endraw %}
