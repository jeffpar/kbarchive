---
layout: page
title: "Q191132: CG4: Clip Gallery Hangs When Importing Multiple CGM Files"
permalink: /kb/191/Q191132/
---

## Q191132: CG4: Clip Gallery Hangs When Importing Multiple CGM Files

	Article: Q191132
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Clip Gallery 4.0 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to import multiple Computer Graphics Metafile (CGM) files in
	Microsoft Clip Gallery, Clip Gallery may stop responding (hang).
	
	CAUSE
	=====
	
	The CGM import filter (Cgmimp32.flt) that ships with Microsoft Publisher 97 or
	Microsoft Publisher 98 does not support importing multiple CGM files.
	
	WORKAROUND
	==========
	
	NOTE: If you do not have Microsoft Office 97 installed, import each CGM file
	individually.
	
	If you have Microsoft Office 97 installed on your computer, you can install the
	CGM import filter from the Office compact disc. This version of the CGM import
	filter supports importing multiple CGM files in Clip Gallery. To install this
	filter, follow these steps:
	
	1. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. In the list of installed programs, click either "Microsoft Office 97,
	  Professional Edition" or "Microsoft Office 97, Standard Edition." Click
	  Add/Remove.
	
	4. In the Maintenance Mode dialog box, click Add/Remove.
	
	5. Click Converters And Filters and then click Change Option.
	
	6. Click Graphics Filters and then click Change Option.
	
	7. Click to select Computer Graphics Metafile Import and then click OK.
	
	8. Click OK again. Click Continue and follow the instructions on your screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: ppt97 pub98 pub97 97 98 1.0 filter error hang hangs hanging stops responding freeze cg4 cg cag4 cag clip gallery artgallery
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWordSearch kbFrontPageSearch kbExcelSearch kbPowerPtSearch kbWorksSearch kbPublisherSearch kbClipGallerySearch kbClipGallery400 kbHomePubSearch kbPhotoDrawSearch
	Version           : WINDOWS:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
