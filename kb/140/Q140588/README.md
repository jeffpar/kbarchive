---
layout: page
title: "Q140588: INFO: Differences Between Full Screen and Windowed Mode Palettes"
permalink: kb/140/Q140588/
---

## Q140588: INFO: Differences Between Full Screen and Windowed Mode Palettes

	Article: Q140588
	Product(s): Miscellaneous Software Development Kits
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Game Software Development Kit (SDK), version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Game SDK function CreatePalette() to create a DIRECTDRAWPALETTE
	object for a DirectDraw object.
	
	When in full screen mode, you have control over the complete physical palette
	except for the first and last colors, black and white. When in full screen mode,
	the first and last entries of the palette will be set to black and white no
	matter what the user has specified for these entries.
	
	You can over-ride this feature by specifying DDPCAPS_ALLOW256 in the flags field
	for the CreatePalette() call. This flag should be used with caution. On some
	video cards, setting palette entry 0 to a color other than black could change
	the color of the overscan region, the area of the display tube outside of the
	normal video display. When you are running in windowed mode (DDSCL_NORMAL), you
	will not be able to change the first and last 10 colors of the physical palette.
	This means that when your application goes between the full screen and windowed
	modes, you need to change the bits of your bitmap data before you will be able
	to display them properly.
	
	MORE INFORMATION
	================
	
	Use the following code to create a gray-scale palette with 256 colors:
	
	     for( i=0; i<256; i++ )
	
	     {
	     ape[i].peRed   = (BYTE)i;
	     ape[i].peGreen = (BYTE)i;
	     ape[i].peBlue  = (BYTE)i;
	     ape[i].peFlags = 0;
	     }
	
	     ddrval = IDirectDraw_CreatePalette(lpDD, DDPCAPS_8BIT, ape,
	
	                                        &ppal, NULL);
	
	Now, when in full screen mode, all 256 colors will be set -- the larger the
	palette index number, the brighter the color. All of your offscreen surfaces
	(bitmaps) will contain bytes that map to these 256 colors correctly.
	
	However, when you go into windowed mode, your bitmaps will no longer map to the
	colors correctly because the 256 palette entries you specified in "ape" are
	mapped to the physical palette like a GDI logical palette is mapped to the
	physical palette when RealizePalette() is called.
	
	In windowed mode, there is no way to know how your 256 colors will get mapped
	unless you use the PC_NOCOLLAPSE flag for your entries. This way, you can ensure
	that entry 1 will map to physical entry 10, entry 2 will map to physical entry
	11, entry 3 will map to physical entry 12, and so on. You should rely only on
	the first 236 colors, though, because there are only 236 free entries in the
	physical palette when in windowed mode.
	
	For example, you could call the following code when your application switches to
	windowed mode:
	
	     for( i=0; i<256; i++ )
	
	     {
	     ape[i].peRed   = (BYTE)i;
	     ape[i].peGreen = (BYTE)i;
	     ape[i].peBlue  = (BYTE)i;
	     ape[i].peFlags = PC_NOCOLLAPSE;
	     }
	
	     ddrval = IDirectDraw_CreatePalette(lpDD, DDPCAPS_8BIT, ape,
	
	                                        &ppal, NULL);
	
	Now you need to add 10 to all of the bytes in all of your bitmap data because all
	colors are now offset by 10. Once you have done so, your bitmap images will
	display correctly.
	
	Additional query words: 1.00 kbinf DDraw DirectDraw Palette
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbAudDeveloper _IKkbbogus kbSDKSearch kbSDKGame
	Version           : :1.0
	Issue type        : kbinfo
	
	=============================================================================
	
