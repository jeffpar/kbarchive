---
layout: page
title: "Q74908: CWheel.exe Uses the Palette Under Windows"
permalink: /kb/074/Q74908/
---

## Q74908: CWheel.exe Uses the Palette Under Windows

{% raw %}

	Article: Q74908
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbGDI kbPalettes
	Last Modified: 09-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The palette is a mechanism to manage the colors used on the Windows display.
	This article discusses the steps necessary for an application to create and use
	a palette. This article is meant to supplement the information provided in the
	Windows SDK documentation. CWheel.exe is a file in the Software Library that
	demonstrates how to manage the palette by drawing a color wheel on the screen.
	The following is an excerpt of the code in that file.
	
	MORE INFORMATION
	================
	
	Q: What is the difference between the system palette and a logical palette?
	
	A: The system palette is the palette that is actually in use (the colors on the
	screen at any given time are the colors of the system palette). Many
	applications do not create a logical palette. Therefore, by default, these
	applications use the predefined colors in the default system palette. The handle
	to this default palette can be obtained by calling
	GetStockObject(DEFAULT_PALETTE).
	
	A logical palette is one that the application creates; the application also
	specifies what colors the palette contains. Using certain GDI calls, the
	application can temporarily replace most of the system palette with the logical
	palette, which allows the application to use the colors in the logical palette.
	Windows reserves some entries in the system palette for itself. These are not
	replaced when the operations described in this article are used.
	
	Q: How are logical palettes created?
	
	A: Before creating a palette, the application should check the system's
	capabilities for color resolution. The following code demonstrates how this is
	done:
	
	     HDC           hDCGlobal;
	     NPLOGPALETTE  pLogPal;               // Pointer to program's
	                                           // logical palette
	
	     int           iNumColors;            // Number of colors supported
	                                           // by device
	
	     int           iPalSize, iRasterCaps; // Size of Physical palette
	
	     hDCGlobal = GetDC(NULL);
	     iPalSize = GetDeviceCaps(hDCGlobal, SIZEPALETTE);
	     iRasterCaps = GetDeviceCaps(hDCGlobal, RASTERCAPS);
	     iRasterCaps = (iRasterCaps & RC_PALETTE) ? TRUE : FALSE;
	
	     if (iRasterCaps)
	       iNumColors = GetDeviceCaps(hDCGlobal, SIZEPALETTE);
	     else
	       iNumColors = GetDeviceCaps(hDCGlobal, NUMCOLORS);
	
	     ReleaseDC(NULL, hDCGlobal);
	
	The variable iNumColors should have a value of 2, 16, or 256, depending on the
	video card installed. This number can change in the future, depending on the
	advances in hardware technology.
	
	If RC_PALETTE is not set, the device is not capable of palette manipulation. When
	this is the case, however, an application can still create a palette, select it
	into a display context, and use the colors from the palette. GDI will create a
	dithered pattern (the disadvantages of which are discussed below) to simulate
	the color in the palette.
	
	After the number of colors has been determined, a block of memory must be
	allocated to hold the palette entries. A palette entry is a structure that
	contains the red, green, and blue values to specify the color, plus a flag. The
	flag is used to denote special colors for use in animation and other special
	cases. Consult the SDK documentation for a more complete description. For this
	article, the default flag value of NULL will be used; which means this color has
	no special attributes.
	
	The following code will allocate a block of memory large enough for the palette
	in local memory:
	
	     pLogPal = (NPLOGPALETTE)LocalAlloc(LMEM_FIXED,
	         (sizeof(LOGPALETTE) + (sizeof(PALETTEENTRY) * (iNumColors))));
	
	     pLogPal->palVersion = 0x300;      // Windows Version 3.0
	     pLogPal->palNumEntries = iNumColors;
	
	Now that the memory structure has been created, it is the responsibility of the
	application to put the necessary values into the structure to create colors.
	There are two different means of doing this: use the default system color, or
	create a custom color. The following code examples demonstrate these two
	options. Assume that the variable PaletteIndex is valid in the range from 0
	(zero)to (iNumColors-1).
	
	Use the default system color:
	
	     pLogPal->palPalEntry[PaletteIndex].peRed = PaletteIndex;
	     pLogPal->palPalEntry[PaletteIndex].peFlags = PC_EXPLICIT;
	
	Use a custom color:
	
	     pLogPal->palPalEntry[PaletteIndex].peRed = <red value>;
	     pLogPal->palPalEntry[PaletteIndex].peGreen = <green value>;
	     pLogPal->palPalEntry[PaletteIndex].peBlue  = <blue value>;
	     pLogPal->palPalEntry[PaletteIndex].peFlags = NULL;
	
	Once the structure has been filled with the appropriate values, it is time to use
	the GDI call CreatePalette() to make the logical palette:
	
	     hPal = CreatePalette((LPLOGPALETTE)pLogPal);
	
	During the processing of one of the application termination message (WM_QUIT or
	WM_CLOSE), use DeleteObject(hPal) to free the system resources used by the
	palette.
	
	Q: How are logical palettes used?
	
	A: In Windows applications, colors are generated by three means: by specifying
	the explicit red, green, and blue color values [using the RGB() macro], by
	specifying the index into a palette [using the PALETTEINDEX() macro], or by
	specifying red, green, and blue color values and asking Windows to return the
	closest entry into the palette. Therefore, if a particular set of red, green,
	and blue values has been specified for palette entry 25, the following three
	lines of code will seem to be identical:
	
	     hBrush = CreateSolidBrush(RGB(122, 15, 200));
	     hBrush = CreateSolidBrush(PALETTEINDEX(25));
	     hBrush = CreateSolidBrush(PALETTERGB(122, 15, 200));
	
	However, this is not the case. Even though the palette entry #25 may have red,
	green, and blue (RGB) values of 122, 15, and 200, respectively, the results will
	be different. The first example produces a brush that is a dithered pattern of
	the eight main system colors. The second and third examples use the pure color
	defined in the palette, which produces more pleasing results.
	
	There are advantages and disadvantages to using RGB dithers or to using palette
	colors:
	
	- RGB dithers will always retain their color, even as the palette is changed,
	  because they are composed of reserved colors. RGB dithers will appear
	  identical on 16-color and 256-color systems. However, RGB dithers are less
	  attractive than pure palette colors, and single-pixel-thick lines will be
	  drawn in the pure color that most closely matches the dithered color.
	
	- Palette entries will use a true color for the red, green, and blue values.
	  Single-pixel-thick lines will not be matched to one of the reserved pure
	  colors. However, when the application loses focus, the system palette may
	  change (due to another application changing the palette). This will cause the
	  colors that the application uses to change. When the application regains the
	  focus, it can restore the palette if it was changed. Managing the palette
	  also requires additional code and memory.
	
	CWHEEL.exe is a file in the Software Library that demonstrates managing the
	palette by drawing a color wheel on the screen. The following is an excerpt of
	the code in that file.
	
	     case WM_PAINT:
	
	     hDC = BeginPaint(hWnd, (LPPAINTSTRUCT)&ps);
	
	      // Bring in the palette
	      hOldPal = SelectPalette(hDC, hPal, FALSE);
	
	      // Synchronize the system palette with this application's
	      // logical palette
	      RealizePalette(hDC);
	
	      // Perform any GDI operations here....
	
	      // Bring back in the previous palette
	      SelectPalette(hDC, hOldPal, TRUE);
	
	      EndPaint(hWnd, (LPPAINTSTRUCT)&ps);
	      break;
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbGDI kbPalettes 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
