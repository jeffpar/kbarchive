---
layout: page
title: "Q134871: PPT7: Embedded Object Resizes if Slide Formatted as Title Master"
permalink: /kb/134/Q134871/
---

## Q134871: PPT7: Embedded Object Resizes if Slide Formatted as Title Master

{% raw %}

	Article: Q134871
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
	
	If you embed an object through one of the OLE object placeholders in an
	AutoLayout and then add a Title master to your presentation, the embedded object
	resizes if its slide is formatted as a Title slide.
	
	CAUSE
	=====
	
	In this situation, when you change the AutoLayout, PowerPoint mistakes the OLE
	object placeholder for the sub-title placeholder. The OLE object takes on the
	size and positioning of the sub-title placeholder.
	
	NOTE: OLE objects that are not created from AutoLayout placeholders are not
	affected.
	
	RESOLUTION
	==========
	
	If the object resizes and moves, you can drag it back to its original position
	and resize it by dragging the resize handles.
	
	Additional query words: 7.00 shrink downsize
	
	======================================================================
	Keywords          : kbole 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
