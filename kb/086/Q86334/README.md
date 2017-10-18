---
layout: page
title: "Q86334: DOCERR: Corrections to Program Manager Group File Format Docs"
permalink: kb/086/Q86334/
---

## Q86334: DOCERR: Corrections to Program Manager Group File Format Docs

	Article: Q86334
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below provides additions and corrections to the documentation of the
	Microsoft Windows Program Manager group (.GRP) file format. This format is
	documented in Chapter 5 of the "Microsoft Windows Software Development Kit:
	Programmer's Reference, Volume 4: Resources" manual and in the associated online
	help files (WIN31WH.HLP and WIN31QH.HLP) provided with the Microsoft Windows
	Software Development Kit (SDK) version 3.1.
	
	MORE INFORMATION
	================
	
	- In the "Organization of a Group File" section, page 61, the third paragraph
	  is incorrect; it says:
	
	  The item data entries are followed by entries that contain the color data for
	  the application icons.
	
	  Group files do not contain color data. The application icons use system colors
	  only, and do not require any color data to be saved in the group file.
	
	- The GROUPHEADER structure is incorrectly documented on page 62. The
	  wBitsPerPixel and wPlanes fields are only one byte long. The correct
	  GROUPHEADER structure is as follows:
	
	        struct tagGROUPHEADER {
	
	            char  cIdentifier[4];
	            WORD  wCheckSum;
	            WORD  cbGroup;
	            WORD  nCmdShow;
	            RECT  rcNormal;
	            POINT ptMin;
	            WORD  pName;
	            WORD  wLogPixelsX;
	            WORD  wLogPixelsY;
	            BYTE  bBitsPerPixel;
	            BYTE  bPlanes;
	            WORD  wReserved;  // Should be 0x0000
	            WORD  cItems;
	            WORD  rgiItems[cItems];
	        }
	
	- The cbGroup field in the GROUPHEADER structure (described on page 62)
	  specifies the size of the group file not including the tag data. This is in
	  accord with Windows 3.0 group files, which do not contain any tag data. In
	  Windows 3.1 group files, cbGroup can be used as an offset to the tag data.
	
	- The description of the rgiItems field in the GROUPHEADER structure on page 63
	  is missing two words. The description should be:
	
	  Specifies an array of offsets to ITEMDATA structures.
	
	- Page 64 says that the pHeader field in the ITEMDATA structure points to the
	  resource header for the icon, but fails to specify the structure of the
	  resource header. Its structure is as follows:
	
	        struct {
	
	            int xHotSpot;    // Should be 0
	            int yHotSpot;    // Should be 0
	            int cx;          // Icon width
	            int cy;          // Icon height
	            int cbWidth;     // Bytes per row accounting
	                             // for WORD alignment
	            BYTE bPlanes;    // Count of planes
	            BYTE bBitsPixel; // Bits per pixel
	          }
	
	- The last TAGDATA structure (described on page 64-65) in the group file will
	  have 0xFFFF as the value for its wID. This simply signals the end of file.
	
	Additional query words: 3.10 docerr no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
