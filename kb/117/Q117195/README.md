---
layout: page
title: "Q117195: PPT: PowerPoint Readme- Filter Limitations (BMP and WMF)"
permalink: /kb/117/Q117195/
---

## Q117195: PPT: PowerPoint Readme- Filter Limitations (BMP and WMF)

{% raw %}

	Article: Q117195
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbgraphic kbreadme kbdta kbconversion
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information about Windows bitmaps and metafiles (.bmp, .wmf)
	filters is from the PowerPoint 4.0 Readme Help file.
	
	MORE INFORMATION
	================
	
	Windows Bitmaps and Metafiles (.BMP, .WMF)
	
	  PowerPoint supports Windows bitmap (BMP) files and Windows metafiles (WMF)
	  directly, without a separate graphic filter. These filters are required by
	  other Microsoft products, such as Microsoft ClipArt Gallery. WMF files must
	  be in the Aldus Placeable Metafile format (which contains a header with org
	  and ext information).
	
	  Aldus and Micrografx have created an extended version of the Windows Metafile
	  Format called the "Placeable Metafile Format." In this extended format, 22
	  bytes of information have been added to the standard metafile header. This
	  information allows the metafile to specify how the metafile is to be placed
	  and sized.
	
	  The WMF filter rejects files that do not have the correct key, checksum,
	  bounding rectangle, and/or enough data in the file.
	
	NOTE: PowerPoint 7.0 can only import .wmf files that are in the Aldus Placeable
	Metafile format. If you try to import a Windows Metafile that does not have a
	header, you receive this message:
	
	  Sorry, "<filename.wmf>" is damaged and cannot be read.
	
	Additional query words: 4.00 4.00a 4.00c 7.00 read me pp4 readme readme.txt winppt ppt95 readme4.00 graphic graphics converter translator macppt
	
	======================================================================
	Keywords          : kbgraphic kbreadme kbdta kbconversion 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
