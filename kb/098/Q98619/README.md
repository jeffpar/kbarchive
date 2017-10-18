---
layout: page
title: "Q98619: PATPOLY Demos Polygon Filled with Dithered Color"
permalink: kb/098/Q98619/
---

## Q98619: PATPOLY Demos Polygon Filled with Dithered Color

	Article: Q98619
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbSDKWin32
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Patpoly.exe is a file that demonstrates how to draw a polygon so that the entire
	polygon, including the border, can be filled with a dithered color in an
	application for the Microsoft Windows environment.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Patpoly.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	It is not possible to fill a polygon and its border with a dithered color using
	just a call to the Windows Polygon() Application Programming Interface (API),
	because of problems producing the border with a dithered color. Using a NULL pen
	doesn't work because not all of the interior and border will be filled. Pens
	with a width of one can have only solid colors, so they don't work. Wider pens
	can have a dithered color, but because the pen is centered on the polygon border
	as defined by the vertex points, the resulting polygon is larger than defined by
	the vertices. Also, the PS_INSIDEFRAME pen style does not have any affect when
	used with Polygon().
	
	To accomplish the desired result, the PatPolygon() function first creates a
	monochrome mask of the polygon in a memory Device Context (DC), and then blits
	the mask transparently to the screen using a pattern brush containing the
	dithered color.
	
	This sample also demonstrates how to load a Device-Independent Bitmap (DIB)
	resource and create a DIB pattern brush with it.
	
	Additional query words: softlib PATPOLY.EXE
	
	======================================================================
	Keywords          : kbfile kbSDKWin32 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
