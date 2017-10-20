---
layout: page
title: "Q124022: PPT: Importing MatLab Graphics into PowerPoint Causes Error"
permalink: /kb/124/Q124022/
---

## Q124022: PPT: Importing MatLab Graphics into PowerPoint Causes Error

{% raw %}

	Article: Q124022
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbgraphic kbdta
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In PowerPoint, when you insert a MatLab Windows Metafile Format (WMF) graphic
	created in MatLab version 4.2c.1, you may receive the following error message:
	
	  PP4 caused a General Protection Fault in POWERPNT.DLL at XXXX:XXXX.
	
	NOTE: You do not receive the error message if you export the file from MatLab in
	HPGL format and then import it into PowerPoint, although the image may appear
	garbled.
	
	
	CAUSE
	=====
	
	The MatLab WMF is incompatible with PowerPoint's internal WMF filter. The
	Windows metafile is imported without error into Microsoft Word 6.0, although
	MatLab's documentation says to expect problems with the object's colors.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps:
	
	1. In Outline view, click the slide containing the graphic image.
	
	2. On the Edit menu, click Delete Slide. This should correct the error in the
	  file.
	
	3. Save the graphic in MatLab as a GIF file. This is an 8-bit bitmap that you
	  can successfully import into PowerPoint.
	
	NOTE: Bitmaps can be resized and cropped in PowerPoint, but they cannot be
	converted to PowerPoint objects, or edited or rotated in PowerPoint.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 4.00 4.00a 4.00c 7.00 97 8.00 powerpnt word 6.0 winppt ppt95 ppt97 matlab wmf gif gpf gp fault insert picture Graphics
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbgraphic kbdta 
	Technology        : kbPowerPtSearch kbPowerPt700 kbPowerPt97 kbZNotKeyword2 kbPowerPt97Search kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
