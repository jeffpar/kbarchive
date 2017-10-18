---
layout: page
title: "Q231922: WD97: Poor Compression of Word Files That Contain Graphics"
permalink: kb/231/Q231922/
---

## Q231922: WD97: Poor Compression of Word Files That Contain Graphics

	Article: Q231922
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use file compression utilities to reduce the storage size of Word
	documents that contain a large percentage of graphics, the compression ratio may
	be lower than expected.
	
	
	CAUSE
	=====
	
	Microsoft Word is designed to compress the pictures or graphics inserted into
	documents automatically. Word natively stores JPEG images and converts all
	raster formats to Portable Network Graphics (PNG). PNG is a compressed format.
	
	Applying additional compression to well-compressed images does not yield a
	significant reduction in the amount of storage space. Only non-JPEG/PNG data
	like text and other data can be reduced by a compression algorithm.
	
	Additional query words: drw cgm pcx pcd cdr dxf emf wmf jpg png pict gif jpeg tif tiff eps wpg bmp dib rle tga pct
	
	======================================================================
	Keywords          : kbdta word8 winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
