---
layout: page
title: "Q79342: Windows Paintbrush File Format"
permalink: /kb/079/Q79342/
---

## Q79342: Windows Paintbrush File Format

{% raw %}

	Article: Q79342
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides the format of Windows Paintbrush files.
	
	MORE INFORMATION
	================
	
	Paintbrush files are preceded by 32 bytes of header information. Following the
	header is an index table into run-length encoded data.
	
	Header
	------
	
	The header structure is defined in the C programming language, as follows:
	
	  typedef struct
	  {
	    WORD  key1;
	    WORD  key2;
	    WORD  dxFile;
	    WORD  dyFile;
	
	    /* NOTE: PBRUSH.EXE version 3.0 and 3.1 ignore the remaining values */ 
	    /* in this structure. Future versions may or may not.               */ 
	
	    WORD  ScrAspectX;
	    WORD  ScrAspectY;
	    WORD  PrnAspectX;
	    WORD  PrnAspectY;
	    WORD  dxPrinter;
	    WORD  dyPrinter;
	    WORD  AspCorX;
	    WORD  AspCorY;
	    WORD  wCheck;
	    WORD  res1;
	    WORD  res2;
	    WORD  res3;
	    WORD  res4;
	  } FILEHDR;
	
	The first 32 bytes contain the header information described by the above
	structure:
	
	Bytes   Name     Win 1.0   Win 2.0           Win 3.0
	-----   ----     -------   -------           -------
	
	0 - 1   Key1     0x6144    0x694C      |0x6144| or |0x694C|
	2 - 3   Key2     0x4D6E    0x536E      |0x4D6E|    |0x536E|
	
	4 - 5   dxFile      X-dimension size of bitmap, in pixels
	
	6 - 7   dyFile      Y-dimension size of bitmap, in pixels
	
	8 - 9   SrcAspectX  Aspect ratio of the screen for which file was
	                   created. Obtained from GetDeviceCaps(hScreenDC,
	                   ASPECTX);
	
	10 - 11 SrcAspectY  Aspect ratio of the screen for which file was
	                   created. Obtained from GetDeviceCaps(hScreenDC,
	                   ASPECTY);
	
	12 - 13 PrnAspectX  Aspect ratio of the printer for which file was
	                   created. Obtained from GetDeviceCaps(hPrinterDC,
	                   ASPECTX);
	
	14 - 15 PrnAspectY  Aspect ratio of the printer for which file was
	                   created. Obtained from GetDeviceCaps(hPrinterDC,
	                   ASPECTY);
	
	16 - 17 dxPrinter   Resolution of the printer for which file was
	                   created. Contains the number of pixels in the x
	                   direction on the printer. The selected paper and
	                   printer orientation affect this value.
	
	18 - 19 dyPrinter   Resolution of the printer for which file was
	                   created. Contains the number of pixels in the y
	                   direction on the printer. The selected paper and
	                   printer orientation affect this value.
	
	20 - 21 AspCorX     Not used. Set to zero.
	
	22 - 23 AspCorY     Not used. Set to zero.
	
	24 - 25 wCheck      Checksum field. Makes sure that this file is Paint
	                   format.
	
	26 - 31 Reserved
	
	Index
	-----
	
	The Paintbrush bitmap is run-length encoded. Each scan line is encoded
	separately. The length of the resulting encoded string depends on the pattern of
	the bitmap. There is an index table following the header. Each entry of this
	index corresponds to a scan line. It is an unsigned integer and shows the length
	of the encoded data. Following this table is the encoded data.
	
	     32 - xxx     xxx = 32 + sizeof(unsigned int) * dyPrinter
	
	ALGORITHM FOR ENCODING
	----------------------
	
	Paint encoding is read in BYTES. There are two types of encoded data: one starts
	with 0 (zero), the other starts with a nonzero value.
	
	If the data starts with 0, it is a repeated byte pattern. The byte following the
	0 tells how many times to repeat the pattern and the subsequent byte is the
	pattern itself. For example, 0, 0x80, 0xff, should be expanded to eighty (hex)
	bytes of 0xff.
	
	If the data starts with a nonzero value, X, the following X number of bytes
	contain unmodified bitmap data, without recognizable pattern. Each scan line can
	be composed of several of the above mentioned groups of data. Of course, the
	groups should alternate, meaning that a scan line can start with a repeated
	pattern followed by some random pattern, which is followed by another repeated
	pattern.
	
	To reach the data for the nth scan line, add up the values in the index table
	from entry 0 to entry n - 1.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
