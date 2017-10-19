---
layout: page
title: "Q74299: INFO: Calculating The Logical Height and Point Size of a Font"
permalink: /kb/074/Q74299/
---

## Q74299: INFO: Calculating The Logical Height and Point Size of a Font

	Article: Q74299
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To create a font in the Microsoft Windows graphical environment given only the
	required point size, an application must calculate the logical height of the
	font because the CreateFont() and CreateFontIndirect() functions use logical
	units to specify height.
	
	To describe a font to the user, an application can calculate a font's point size,
	given its height. This article provides the formulas required to perform these
	calculations for the MM_TEXT mapping mode. You will have to derive a new
	equation to calculate the font size in another mapping mode.
	
	MORE INFORMATION
	================
	
	To calculate the logical height, use the following formula:
	
	                               Point Size * LOGPIXELSY
	  height = Internal Leading + -------------------------
	                                         72
	
	LOGPIXELSY is the number of pixels contained in a logical inch on the device.
	This value is obtained by calling the GetDeviceCaps() function with the
	LOGPIXELSY index. The value 72 is significant because one inch contains 72
	points.
	
	The problem with this calculation is that there is no method to determine the
	internal leading for the font because it has not yet been created. To work
	around this difficulty, use the following variation of the formula:
	
	           -(Point Size * LOGPIXELSY)
	  height = --------------------------
	                        72
	
	This formula may also be written as follows:
	
	     plf->lfHeight = -MulDiv (nPtSize, GetDeviceCaps (hdc, LOGPIXELSY), 72);
	
	When an application calls the CreateFont() or CreateFontIndirect() functions and
	specifies a negative value for the height parameter, the font mapper provides
	the closest match for the character height rather than the cell height. The
	difference between the cell height and the character height is the internal
	leading, as demonstrated by the following diagram:
	
	  ----------  <------------------------------
	  |        |           |- Internal Leading  |
	  | |   |  |  <---------                    |
	  | |   |  |        |                       |- Cell Height
	  | |---|  |        |- Character Height     |
	  | |   |  |        |                       |
	  | |   |  |        |                       |
	  ----------  <------------------------------
	
	The following formula computes the point size of a font:
	
	               (Height - Internal Leading) * 72
	  Point Size = --------------------------------
	                          LOGPIXELSY
	
	The Height and Internal Leading values are obtained from the TEXTMETRIC data
	structure. The LOGPIXELSY value is obtained from the GetDeviceCaps function as
	outlined above.
	
	Round the calculated point size to the nearest integer. The Windows MulDiv()
	function rounds its result and is an excellent choice to perform the previous
	calculation.
	
	Additional query words: 3.00 3.10 3.50 4.00 win16sdk TrueType
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
