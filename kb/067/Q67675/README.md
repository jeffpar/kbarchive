---
layout: page
title: "Q67675: Access to the Windows Clipboard by MS-DOS-Based App"
permalink: kb/067/Q67675/
---

## Q67675: Access to the Windows Clipboard by MS-DOS-Based App

	Article: Q67675
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
	
	Windows real and standard modes do not provide an interface for standard MS-DOS
	(non-Windows) applications to access the Windows clipboard. However, in Windows
	enhanced mode, access is provided through the INT 2fh interface. This article
	discusses various methods that may be used to simulate clipboard access in real
	and standard modes and documents the INT 2fh interface for enhanced mode.
	
	MORE INFORMATION
	================
	
	Under Windows real and standard modes, it is possible to simulate programmatic
	access to the contents of the clipboard by a standard MS-DOS-based application.
	One possible method is to create a Windows-based application that places the
	contents of the Windows clipboard into a file. The MS-DOS-based application
	would check for the existence of the file saved from the Windows-based
	application. When the file exists, the MS- DOS-based application can read the
	contents, eliminating the necessity for direct user intervention on behalf of
	the MS-DOS-based application.
	
	Only textual information can be retrieved from the clipboard by a standard
	MS-DOS-based application. This is done using the Edit Paste hierarchical system
	menu combination in Windows enhanced mode that is available when the
	MS-DOS-based application is windowed.
	
	In Windows real or standard modes, a Paste option can be selected directly from
	the system menu only when the MS-DOS-based application is represented by an icon
	("iconic"), giving the user access to its system menu. When Paste is selected,
	Windows will restore the MS-DOS-based application to full screen and paste the
	contents of the clipboard where the cursor is located in the MS-DOS-based
	application. MS-DOS-based applications can be made iconic in real and standard
	modes through an ALT+TAB keystroke.
	
	Placing information into the clipboard can be done though the use of the PRINT
	SCREEN or ALT+PRINT SCREEN keystrokes, each of which copies a full screen into
	the clipboard.
	
	Copying information to the Windows clipboard can be done in Windows enhanced mode
	using the Edit Mark and Edit Copy system menu commands.
	
	More information on user control of the Windows Clipboard can be found on pages
	440-490 in the "Microsoft Windows User's Guide," Chapter 12.
	
	The remainder of this article documents the INT 2fh interface to the clipboard,
	available in Windows enhanced mode.
	
	NOTE: The Windows functions RegisterClipboardFormat() and EnumClipboardFormats()
	are not supported.
	
	Function Call Definitions
	-------------------------
	
	Name            IdentifyWinOldApVersion()
	Parameters      AX = 1700H
	Return Values   AX == 1700H: Clipboard functions not available
	                  <> 1700H: AL = Major version number
	                            AH = Minor version number
	
	Name            OpenClipboard()
	Parameters      AX = 1701H
	Return Values   AX == 0: Clipboard already open
	                  <> 0: Clipboard opened
	
	Name            EmptyClipboard()
	Parameters      AX = 1702H
	Return Values   AX == 0: Error occurred
	                  <> 0: OK, Clipboard emptied
	
	Name            SetClipboardData()
	Parameters      AX = 1703H
	               DX = WinOldAp-Supported Clipboard format
	               ES:BX = Pointer to data
	               SI:CX = Size of data in bytes
	Return Values   AX == 0: Error occurred
	                  <> 0: OK.  Data copied into allocated memory.
	Note            The MS-DOS-based application should call the
	               ClipboardCompact() function prior to this to determine
	               if the data can be accommodated in memory.
	
	Name            GetClipboardDataSize()
	Parameters      AX = 1704H
	               DX = WinOldAp-Supported Clipboard format
	Return Values   DX:AX == Size of the data in bytes, including any
	                        headers.
	                     == 0 If data in this format is not in the clipboard.
	
	Name            GetClipboardData()
	Parameters      AX = 1705H
	               DX = WinOldAp-Supported Clipboard format
	               ES:BX = Pointer to data buffer to hold data
	Return Values   AX == 0: Error occurred (or data in this format is not
	                        in the clipboard)
	                  <> 0: OK
	Note           This call should be preceded by a
	              GetClipBoardDataSize() call to find out how much memory
	              is required for the buffer. No checking is performed, the
	              caller must ensure that the buffer is big enough;
	              otherwise, some of the callers code or data may be
	              overwritten.
	
	Name            CloseClipboard()
	Parameters      AX = 1708H
	Return Values   AX == 0: Error occurred
	                  <> 0: OK
	
	Name            ClipboardCompact()
	Parameters      AX = 1709H
	               SI:CX = Desired memory size in bytes.
	Return Values   DX:AX == Number of bytes of largest block of free memory.
	                     == 0 if error or no memory
	Notes           The MS-DOS-based application is responsible for including
	               the size of any headers in the desired memory size.
	
	Name            GetDeviceCaps()
	Parameters      AX = 170AH
	               DX = GDI information index
	Return Values   AX == integer value of desired item
	                  == 0 if error
	Notes           The implied hDC for this call will be for the display.
	
	Supported Clipboard Formats
	---------------------------
	
	The following Windows clipboard formats are supported:
	
	  CF_TEXT         = 1
	  CF_BITMAP       = 2         ; See structures section
	  CF_OEMTEXT      = 7
	  CF_DSPTEXT      = 81h
	  CF_DSPBITMAP    = 82h
	
	
	NOTE: Since the RegisterClipboardFormat() and EnumClipboardFormats() functions
	are not available at this time, the use of private clipboard formats is not
	supported.
	
	
	Structures
	----------
	
	These structures mimic the actual Windows structures with one major difference:
	instead of including a handle or pointer to other memory containing the actual
	data, the data follows the structure. The structure information now behaves like
	a header prefacing the data.
	
	Bitmap structure:
	
	  bmType          DW      ?   ; Always 0
	  bmWidth         DW      ?   ; Width of bitmap in pixels
	  bmHeight        DW      ?   ; Height of bitmap in raster lines
	  bmWidthBytes    DW      ?   ; Bytes/raster line
	  bmPlanes        DB      ?   ; Number of color planes in the bitmap
	  bmBitsPixel     DB      ?   ; Number of adj color bits to def pixel
	  bmBits          DQ      ?   ; Points to byte following bmHigDim
	  bmWidDim        DW      ?   ; Width of bitmap in 0.1 mm units
	  bmHigDim        DW      ?   ; Height of bitmap in 0.1 mm units
	  BitmapData      nBytes      ; The actual data
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
