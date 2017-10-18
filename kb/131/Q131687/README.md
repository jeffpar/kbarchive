---
layout: page
title: "Q131687: PPT: CompuServe GIF89a Doesn't Import Transparent Background"
permalink: kb/131/Q131687/
---

## Q131687: PPT: CompuServe GIF89a Doesn't Import Transparent Background

	Article: Q131687
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:2.0,3.0,4.0,7.0
	Operating System(s): 
	Keyword(s): kbgraphic kbdta kbconversion
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you import a picture in the GIF89a graphics format, with one of its colors
	set to transparent, the picture imports into PowerPoint 4.0 or 7.0 with the
	transparent area filled with the original color.
	
	CAUSE
	=====
	
	The GIF import filter supports both the GIF87a and GIF89a formats. However, the
	transparent color option of the GIF89a format is not supported by the filter.
	The GIF graphic import filter reads the GIF file and converts the image data
	into generic bitmap data. The generic bitmap data format does not support
	transparent colors or regions.
	
	NOTE: The GIF import filter is only shipped with PowerPoint 4.0 and later and
	Microsoft Office 4.2 or later, but if you have it installed, all versions of
	PowerPoint can use it.
	
	RESOLUTION
	==========
	
	If your GIF image is a monochrome image--that is, it only uses black and white
	as its colors--you can save it as a monochrome Windows Bitmap. PowerPoint
	imports this image format directly, bypassing the generic bitmap, and
	maintaining a transparent background. To do this:
	
	1. Open your GIF file in an application such as Microsoft Imager, which allows
	  you to open GIF files and save it in a different graphic format. For example,
	  save the image as a Windows Bitmap (.BMP) or a Publisher Paintbrush (.PCX)
	  file.
	
	2. Open this new .BMP or .PCX file in Windows Paintbrush.
	
	3. Save the file as a Monochrome Bitmap . This choice is in the Save File As
	  Type list in the Paintbrush Save As dialog box (File menu).
	
	4. Start or switch to PowerPoint and import the bitmap created in step 4 above.
	
	If your GIF file is grayscale or uses more than two colors, this may not be an
	option. Converting grayscale images to monochrome may produce unwanted results,
	and color images will look even worse when converted to a monochrome color
	scheme.
	
	Depending on the image, you may be able to convert the GIF file into a
	vector-based graphic by using a program, such as Corel Trace, Micrografx
	Designer,or Adobe Superpaint.
	
	Vector-based graphics are simply file formats that contain instructions on how to
	draw objects and what colors to fill them with. The following are some of the
	various vector-based formats supported by PowerPoint 4.0:
	
	- Computer Graphics Metafile (CGM)
	
	- Windows Metafile (WMF)
	
	- Macintosh PICT format (PCT)
	
	- CorelDRAW! version 3.0 (CDR)
	
	Once converted, you can import the new image into PowerPoint and ungroup the
	picture, converting the picture into a PowerPoint object. The object can be
	recolored, deleted, or made transparent.
	
	MORE INFORMATION
	================
	
	PowerPoint 97 supports transparency in bitmapped images.
	
	For information about transparent images in Microsoft PowerPoint 97, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q159014 PPT: Transparent Image Support in PowerPoint 97 and 98
	
	Additional query words: ppt95 2.00e 2.0 2.0e 3.0 4.00a 4.00c 7.0 PowerPoint 95 power point w_powerpt win95
	
	======================================================================
	Keywords          : kbgraphic kbdta kbconversion 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt200 kbPowerPt300
	Version           : WINDOWS:2.0,3.0,4.0,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
