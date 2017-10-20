---
layout: page
title: "Q113026: PPT: Text Format Lost When Promoting, Demoting Paragraph"
permalink: /kb/113/Q113026/
---

## Q113026: PPT: Text Format Lost When Promoting, Demoting Paragraph

{% raw %}

	Article: Q113026
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:3.0,4.0; WINDOWS:3.0,4.0,7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0 
	- Microsoft PowerPoint for Macintosh, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the indent level of a paragraph, it takes on the formatting
	defined on the Slide Master for that indent level. For example, if you demote or
	promote a paragraph to a third-level indent, the text in the paragraph will
	adopt the formatting defined on the Slide Master for all third-level indented
	paragraphs. Any custom text formatting you previously applied to the paragraph
	will be lost.
	
	CAUSE
	=====
	
	This behavior is by design. It is intended to assist in the creation of
	professional-looking presentations.
	
	MORE INFORMATION
	================
	
	The formatting of the text in the Object Area for AutoLayout (Master Body in
	PowerPoint 3.0) determines what text formatting will be used by default at each
	level of indentation in the object placeholders (body in PowerPoint 3.0) on the
	slide.
	
	The same behavior also appears when you demote or promote text in the body of the
	Notes pages. In this case, the formatting is controlled by the formatting on the
	Notes Master.
	
	Additional query words: 4.00a 3.00b winppt ppt powerpt powerpnt macppt 7.0
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt300Mac kbPowerPt400Mac kbPowerPt300
	Version           : MACINTOSH:3.0,4.0; WINDOWS:3.0,4.0,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
