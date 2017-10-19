---
layout: page
title: "Q164619: FP97: Cannot Preview Office 97 Clipart in FrontPage Editor"
permalink: /kb/164/Q164619/
---

## Q164619: FP97: Cannot Preview Office 97 Clipart in FrontPage Editor

	Article: Q164619
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbgraphic kbusage kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194278.
	
	SYMPTOMS
	========
	
	The popular clipart that is installed with Office 97 cannot be previewed in
	FrontPage Editor.
	
	CAUSE
	=====
	
	The popular clipart that is installed with Office 97 is in the Windows Metafile
	(WMF) format. FrontPage Editor can only display JPG and GIF images; it does not
	have the ability to display WMF files.
	
	RESOLUTION
	==========
	
	To insert the WMF files in FrontPage Editor, follow these steps:
	
	1. On the Insert menu, click Image, and then click the Other Location tab.
	
	2. Click Browse, select the WMF file, and then click Open.
	
	NOTE: Office 97 clipart is installed in the \Program Files\Microsoft
	Office\Clipart folder by default.
	
	MORE INFORMATION
	================
	
	The most common image file formats for use on the Web are Graphics InterChange
	Format (GIF) and Joint Photographic Experts Group (JPG). Although some Web
	browsers do support some additional graphics formats, formats such as WMF are
	not widely supported. To ensure that visitors to your site can view your images,
	you should avoid using non-supported images on your Web pages.
	
	Additional query words: 97 tiff bmp ras eps pcx tga
	
	======================================================================
	Keywords          : kbgraphic kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
