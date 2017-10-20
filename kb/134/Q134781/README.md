---
layout: page
title: "Q134781: PPT7: Duplicate Clip Art in ClipArt Gallery"
permalink: /kb/134/Q134781/
---

## Q134781: PPT7: Duplicate Clip Art in ClipArt Gallery

{% raw %}

	Article: Q134781
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbgraphic kbsetup kbclip
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install PowerPoint for Windows 95 on a computer that has an earlier
	version of PowerPoint, some clip art may be duplicated.
	
	CAUSE
	=====
	
	Because PowerPoint 4.0 contains some clip art not available in PowerPoint 7.0,
	when you upgrade from version 4.0 to 7.0, the version 4.0 clip art is not
	removed. Since some of the images that ship with PowerPoint 7.0 are the same as
	the ones that ship with PowerPoint 4.0, you will have some duplicate thumbnails
	in your ClipArt Gallery.
	
	This problem is also caused by having PowerPoint 4.0 in a different folder than
	PowerPoint 7.0, which causes PowerPoint to find more than one of the same PCS
	file.
	
	RESOLUTION
	==========
	
	Search the hard disk to find all the PCS files and remove any duplicate PCS
	files, keeping any unique PCS filenames. Then refresh the ClipArt Gallery in the
	folder that holds the PCS files.
	
	Additional query words: 7.00 ppt7 ppt95 Clipart Gallery Duplicate Multiple macppt winppt W_Office 95
	
	======================================================================
	Keywords          : kbgraphic kbsetup kbclip 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
