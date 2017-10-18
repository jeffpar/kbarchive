---
layout: page
title: "Q113333: How To Print Picture Box Contents Using StretchDIBits"
permalink: kb/113/Q113333/
---

## Q113333: How To Print Picture Box Contents Using StretchDIBits

	Article: Q113333
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbcode kbprint kbPrinting
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, versions 2.0, 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article demonstrates how to print the contents of a Visual Basic picture
	box by using the Windows API StretchDIBits() functions. This method can
	accomplish the following:
	
	- Work with 256-color bitmaps.
	
	- Work on both PostScript and PCL printers.
	
	- Take advantage of printer halftones.
	
	- Work with visible and invisible picture boxes.
	
	- Print a specified portion of a picture.
	
	- Stretch the output to a specified size.
	
	MORE INFORMATION
	================
	
	Microsoft Windows supports a device-independent bitmap (DIB) format.
	StretchDIBits() is a Windows API function that paints a DIB into a device
	context (DC). A DC is a link between a Windows-based application, a device
	driver, and an output device (such as a printer or plotter).
	
	Many printer drivers support the StretchDIBits() function, including most PCL and
	PostScript printer drivers. If a printer driver supports the StretchDIBits()
	function, the driver will convert the device-independent color information to
	the colors available on the printer. This allows the code in the step-by-step
	example (below) to print 256-color bitmaps.
	
	The Windows function GetDIBits() creates a DIB from a device-dependent bitmap
	(DDB). In the process, GetDIBits() expects the DDB not to be selected into a
	device context. To achieve this, the sample application creates a device context
	in memory and a compatible bitmap. It then copies the source picture into this
	newly created bitmap. If the source picture has a palette, the program uses it
	when copying the picture. After copying, the routine removes the bitmap copy
	from the memory-device context and passes it to GetDIBits(). Once GetDIBits()
	returns the DIB bits, the code can call StretchDIBits() to stretch the bitmap
	onto the printer's device context.
	
	The following example puts this information into practice by demonstrating how to
	use GetDIBits() and StretchDIBits() to print bitmaps of up to 256 colors to the
	printer.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a picture box (Picture1) and a Command button (Command1) to the form.
	
	3. Place the following code in the Command button's click event:
	
	     Sub Command1_Click ()
	        ' Set up picture box (these properties can be set at design time):
	        Picture1.AutoRedraw = True       ' Must be true if invisible.
	        Picture1.ScaleMode = PIXELS      ' Scale mode must be pixels.
	        Picture1.AutoSize = True
	        Picture1.Visible = False
	        Picture1.Picture = LoadPicture("C:\WINDOWS\256COLOR.BMP")
	
	        ' Set up Printer object:
	        Printer.ScaleMode = PIXELS       ' Scale mode must be pixels.
	        Printer.Print " "                ' Printer must be initialized.
	
	        ' The source coordinates used must be valid for the picture. You can
	        ' use Picture1.ScaleWidth and Picture1.ScaleHeight to verify them.
	        ' All coordinates are in pixels.
	        ' The coordinates 0, 0, 60, 40 are valid for 256COLOR.BMP.
	        On Error Resume Next
	        ' Enter the following two lines on one line:
	        Call StretchPicToDC(CInt(Printer.hDC), 0, 0, 600, 400, Picture1, 0,
	           0, 60, 40)
	        If Err Then
	           MsgBox Err & ": Error Printing Picture"
	           ' Predefined error codes are commented in the BAS file.
	        End If
	        On Error Goto 0
	
	        ' End print job:
	        Printer.EndDoc
	     End Sub
	
	4. Add a new module to the project.
	
	5. Place the following code in the new module:
	
	     Option Explicit
	
	     Type BITMAPINFOHEADER
	        biSize As Long
	        biWidth As Long
	        biHeight As Long
	        biPlanes As Integer
	        biBitCount As Integer
	        biCompression As Long
	        biSizeImage As Long
	        biXPelsPerMeter As Long
	        biYPelsPerMeter As Long
	        biClrUsed As Long
	        biClrImportant As Long
	     End Type
	
	     Type BITMAPINFO
	        bmiHeader As BITMAPINFOHEADER
	        bmiColors As String * 1024 ' Enough for 256 colors.
	     End Type
	
	     Global Const PIXELS = 3
	     Global Const SRCCOPY = &HCC0020
	     Global Const BI_RGB = 0
	     Global Const DIB_RGB_COLORS = 0
	     Global Const GMEM_MOVEABLE = 2
	     Global Const RASTERCAPS = 38
	     Global Const RC_STRETCHDIB = &H2000
	     Global Const RC_PALETTE = &H100
	     Global Const PLANES = 14
	     Global Const BITSPIXEL = 12
	     Global Const SIZEPALETTE = 104
	     Global Const VBM_GETPALETTE = &H101C
	
	     ' Each of the following declares should be entered on one line:
	     Declare Function CreateCompatibleDC Lib "GDI" (ByVal hDC As Integer
	        ) As Integer
	     Declare Function DeleteDC Lib "GDI" (ByVal hDC As Integer) As Integer
	     Declare Function BitBlt Lib "GDI" (ByVal hDCDest As Integer,
	        ByVal XDest As Integer, ByVal YDest As Integer, ByVal nWidth As
	     Integer,
	        ByVal nHeight As Integer, ByVal hDCSrc As Integer, ByVal XSrc As
	     Integer,
	        ByVal YSrc As Integer, ByVal dwROP As Long) As Integer
	     Declare Function CreateCompatibleBitmap Lib "GDI" (ByVal hDC As Integer,
	        ByVal nWidth As Integer, ByVal nHeight As Integer) As Integer
	     Declare Function DeleteObject Lib "GDI" (ByVal hObject As Integer) As
	     Integer
	     Declare Function SelectObject Lib "GDI" (ByVal hDC As Integer,
	        ByVal hObject As Integer) As Integer
	     Declare Function GetDIBits Lib "GDI" (ByVal hDC As Integer,
	        ByVal hBitmap As Integer, ByVal nStartScan As Integer,
	        ByVal nNumScans As Integer, ByVal lpBits As Long,
	        BITMAPINFO As BITMAPINFO, ByVal wUsage As Integer) As Integer
	     Declare Function StretchDIBits Lib "GDI" (ByVal hDC As Integer,
	        ByVal DestX As Integer, ByVal DestY As Integer,
	        ByVal wDestWidth As Integer, ByVal wDestHeight As Integer,
	        ByVal SrcX As Integer, ByVal SrcY As Integer, ByVal wSrcWidth As
	     Integer,
	        ByVal wSrcHeight As Integer, ByVal lpBits As Long, BitsInfo As
	     BITMAPINFO,
	        ByVal wUsage As Integer, ByVal dwRop As Long) As Integer
	     Declare Function GetDeviceCaps Lib "GDI" (ByVal hDC As Integer,
	        ByVal iCapabilitiy As Integer) As Integer
	
	     Declare Function GlobalAlloc Lib "KERNEL" (ByVal wFlags As Integer,
	        ByVal lMem As Long) As Integer
	     Declare Function GlobalLock Lib "KERNEL" (ByVal hMem As Integer) As Long
	     Declare Function GlobalUnlock Lib "KERNEL" (ByVal hMem As Integer) As
	        Integer
	     Declare Function GlobalFree Lib "KERNEL" (ByVal hMem As Integer) As
	        Integer
	
	     Declare Function SelectPalette Lib "USER" (ByVal hDC As Integer,
	        ByVal hPalette As Integer, ByVal bForceBackground As Integer) As
	        Integer
	     Declare Function RealizePalette Lib "USER" (ByVal hDC As Integer) As
	        Integer
	     Declare Function SendMessage Lib "USER" (ByVal hWnd As Integer,
	        ByVal wMsg As Integer, ByVal wParam As Integer, lParam As Any) As
	     Long
	
	     ' The following are Global constants for the error trapping comments
	     ' below:
	
	     Global Const ERR_PICSCALEMODE = 11100
	     ' Picture box ScaleMode not Pixels
	     Global Const ERR_PICAUTOREDRAW = 11101
	     ' Picture invisible and AutoRedraw False
	     Global Const ERR_SRCPARAMETER = 11102
	     ' Source coordinates out of range
	     Global Const ERR_PRINTERSCALEMODE = 11103
	     ' Printer ScaleMode not Pixels
	     Global Const ERR_DESTPARAMETER = 11104
	     ' Destination coordinates out of range
	     Global Const ERR_DEVSTRETCHDIB = 11105
	     ' Device not supporting StretchDIBits
	     Global Const ERR_PALSIZE = 11106
	     ' Palette not 256 colors
	     Global Const ERR_CREATEMEMDC = 11107
	     ' Unable to create device context
	     Global Const ERR_CREATEBMP = 11108
	     ' Unable to create bitmap
	     Global Const ERR_GETPALETTE = 11109
	     ' Unable to retrieve palette
	     Global Const ERR_BITBLT = 11110
	     ' Unable to copy bitmap to memory
	     Global Const ERR_BITMEM = 11111
	     ' Unable to allocate memory for DIB bits
	     Global Const ERR_LOCKBITMEM = 11112
	     ' Unable to lock DIB bits memory
	     Global Const ERR_GETDIB = 11113
	     ' Unable to get DIB bits
	     Global Const ERR_STRETCHDIB = 11114
	     ' Unable to copy bitmap to destination
	     Global Const ERR_UNLOCKMEM = 11115
	     ' Unable to unlock DIB bits memory
	     Global Const ERR_FREEMEM = 11116
	     ' Unable to free DIB bits memory
	     Global Const ERR_SELPAL = 11117
	     ' Unable to select palette
	     Global Const ERR_DELBMP = 11118
	     ' Unable to delete bitmap
	     Global Const ERR_DELMEMDC = 11119
	     ' Unable to delete device context
	
	     '-----------------------------------------------------------------------
	     ' StretchPicToDC:
	     '  - Stretches a specified portion of picture box to a device context.
	     '  - Works with 256-color bitmaps.
	     '  - Works on PostScript and PCL printers (driver must support
	          StretchDIBits).
	     '  - Can output to other device contexts.
	     '
	     ' hDCDest:
	     '  - This is destination device context.
	     '  - ScaleMode of device context must be pixels.
	     '  - If using Printer object, the printer should be initialized. This
	     '    can be accomplished with Printer.Print " " or any other printing.
	     '
	     ' LeftDest, TopDest, WidthDest, and HeightDest describe the location and
	     ' size of the image on the printer in pixels.
	     '
	     ' picSrc:
	     '  - Is a picture box that must have ScaleMode = Pixels.
	     '  - Can also have Visible = False if AutoRedraw = True
	     '
	     ' LeftSrc, TopSrc, WidthSrc, and HeightSrc describe the location and
	     ' size of the source image in pixels.
	     '
	     ' Errors will occur with a predefined code if necessary.
	     '
	     '-----------------------------------------------------------------------
	     ' The following should be entered on one line:
	     Sub StretchPicToDC (hDCDest As Integer, LeftDest, TopDest, WidthDest,
	       HeightDest, picSrc As PictureBox, LeftSrc, TopSrc, WidthSrc,
	       HeightSrc)
	
	       Dim BMI As BITMAPINFO
	       Dim hMem As Integer
	       Dim lpBits As Long
	       Dim r As Integer
	       Dim hDCMemory As Integer
	       Dim hBmp As Integer
	       Dim hBmpPrev As Integer
	       Dim hPal As Integer
	       Dim hPalPrev As Integer
	
	       Dim RasterCapsDest As Integer
	       Dim RasterCapsSrc As Integer
	       Dim HasPaletteSrc As Integer
	       Dim BitsPixelSrc As Integer
	       Dim PlanesSrc As Integer
	       Dim PaletteSizeSrc As Integer
	
	       ' Set error trap.
	       On Error GoTo SPTDC_ERRORS:
	       ' As a precaution, check for some invalid parameters.
	       If picSrc.ScaleMode <> PIXELS Then Error ERR_PICSCALEMODE
	       If picSrc.Visible = False And picSrc.AutoRedraw = False Then
	          Error ERR_PICAUTOREDRAW
	       End If
	       If LeftSrc < 0 Or TopSrc < 0 Then Error ERR_SRCPARAMETER
	       If WidthSrc <= 0 Or HeightSrc <= 0 Then Error ERR_SRCPARAMETER
	       If LeftSrc > picSrc.ScaleWidth Then Error ERR_SRCPARAMETER
	       If TopSrc > picSrc.ScaleHeight Then Error ERR_SRCPARAMETER
	       If LeftSrc + WidthSrc > picSrc.ScaleWidth Then Error ERR_SRCPARAMETER
	       If TopSrc + HeightSrc > picSrc.ScaleHeight Then Error ERR_SRCPARAMETER
	       If LeftDest < 0 Or TopDest < 0 Then Error ERR_DESTPARAMETER
	       If WidthDest <= 0 Or HeightDest <= 0 Then Error ERR_DESTPARAMETER
	       If Printer.hDC = hDCDest Then
	          If Printer.ScaleMode <> PIXELS Then Error ERR_PRINTERSCALEMODE
	          If LeftDest > Printer.ScaleWidth Then Error ERR_DESTPARAMETER
	          If TopDest > Printer.ScaleHeight Then Error ERR_DESTPARAMETER
	          If LeftDest + WidthDest > Printer.ScaleWidth Then
	             Error ERR_DESTPARAMETER
	          End If
	          If TopDest + HeightDest > Printer.ScaleHeight Then
	             Error ERR_DESTPARAMETER
	          End If
	       End If
	
	       ' Check that the destination supports StretchDIBits.
	       RasterCapsDest = GetDeviceCaps(hDCDest, RASTERCAPS)
	       If (RasterCapsDest And RC_STRETCHDIB) <> RC_STRETCHDIB Then
	          Error ERR_DEVSTRETCHDIB
	       End If
	        ' Get properties of source device context.
	       RasterCapsSrc = GetDeviceCaps(picSrc.hDC, RASTERCAPS)
	       HasPaletteSrc = RasterCapsSrc And RC_PALETTE
	       BitsPixelSrc = GetDeviceCaps(picSrc.hDC, BITSPIXEL)
	       PlanesSrc = GetDeviceCaps(picSrc.hDC, PLANES)
	       PaletteSizeSrc = GetDeviceCaps(picSrc.hDC, SIZEPALETTE)
	
	       ' Limit function use to 256-color palettes.
	       If HasPaletteSrc And (PaletteSizeSrc <> 256) Then Error ERR_PALSIZE
	        ' Copy source to a bitmap in memory.
	       hDCMemory = CreateCompatibleDC(picSrc.hDC)
	       If hDCMemory = 0 Then Error ERR_CREATEMEMDC
	       hBmp = CreateCompatibleBitmap(picSrc.hDC, WidthSrc, HeightSrc)
	       If hBmp = 0 Then Error ERR_CREATEBMP
	       hBmpPrev = SelectObject(hDCMemory, hBmp)
	       ' Get a copy of the source palette and realize it if necessary.
	       If HasPaletteSrc Then
	          hPal = SendMessage(picSrc.hWnd, VBM_GETPALETTE, 0, 0)
	          If hPal = 0 Then Error ERR_GETPALETTE
	          ' Select the palette into the destination and realize it.
	          hPalPrev = SelectPalette(hDCMemory, hPal, 0)
	          r = RealizePalette(hDCMemory)
	       End If
	       ' Enter the following on one line:
	       r = BitBlt(hDCMemory, 0, 0, WidthSrc, HeightSrc, picSrc.hDC, LeftSrc,
	          TopSrc, SRCCOPY)
	       If r = 0 Then Error ERR_BITBLT
	       hBmp = SelectObject(hDCMemory, hBmpPrev)
	        ' Fill in necessary parts of bitmap info.
	       BMI.bmiHeader.biSize = 40
	       BMI.bmiHeader.biWidth = WidthSrc
	       BMI.bmiHeader.biHeight = HeightSrc
	       BMI.bmiHeader.biPlanes = 1
	       If BitsPixelSrc * PlanesSrc = 24 Then
	          ' 24-bit True color may require too much memory, so
	          ' limit to 256-color DIB.
	          ' You can get rid of this exception and the routine
	          ' should copy 24-bit color bitmaps.
	          BMI.bmiHeader.biBitCount = 8 ' 8 bits = 256 colors
	       Else
	          BMI.bmiHeader.biBitCount = BitsPixelSrc * PlanesSrc
	       End If
	       BMI.bmiHeader.biCompression = BI_RGB
	
	       ' Allocate memory for bitmap bits.
	       ' Enter the following on one line:
	       hMem = GlobalAlloc(GMEM_MOVEABLE, (CLng(WidthSrc *
	          BMI.bmiHeader.biBitCount + 31) \ 32) * 4 * HeightSrc)
	       If hMem = 0 Then Error ERR_BITMEM
	       lpBits = GlobalLock(hMem)
	       ' Get the bits and color information from the persistent bitmap.
	       ' The following should be entered on one line:
	       r = GetDIBits(hDCMemory, hBmp, 0, HeightSrc, lpBits, BMI,
	          DIB_RGB_COLORS)
	       If r = 0 Then Error ERR_GETDIB
	
	       ' Stretch the DIB to the printer.
	       ' The following should be entered on one line:
	       r = StretchDIBits(hDCDest, LeftDest, TopDest, WidthDest, HeightDest,
	             0, 0, WidthSrc, HeightSrc, lpBits, BMI, DIB_RGB_COLORS, SRCCOPY)
	       If r = 0 Then Error ERR_STRETCHDIB
	
	       ' Free up memory used for bitmap bits.
	       r = GlobalUnlock(hMem)
	       If r <> 0 Then Error ERR_UNLOCKMEM
	       r = GlobalFree(hMem)
	       If r <> 0 Then Error ERR_FREEMEM
	
	       ' Select the default palette back if necessary.
	       If HasPaletteSrc Then
	          r = SelectPalette(hDCMemory, hPalPrev, 0)
	          If r = 0 Then Error ERR_SELPAL
	       End If
	
	       ' Delete created objects.
	       r = DeleteObject(hBmp)
	       If r = 0 Then Error ERR_DELBMP
	       r = DeleteDC(hDCMemory)
	       If r = 0 Then Error ERR_DELMEMDC
	
	       On Error GoTo 0
	     Exit Sub
	
	     ' Clean up on predefined errors if necessary.
	     SPTDC_ERRORS:
	        Select Case Err
	           Case ERR_CREATEBMP
	              r = DeleteDC(hDCMemory)
	              Error Err
	           Case ERR_GETPALETTE
	              hBmp = SelectObject(hDCMemory, hBmpPrev)
	              r = DeleteObject(hBmp)
	              r = DeleteDC(hDCMemory)
	              Error Err
	           Case ERR_BITBLT
	              If HasPaletteSrc Then
	                 r = SelectPalette(hDCMemory, hPalPrev, 0)
	              End If
	              hBmp = SelectObject(hDCMemory, hBmpPrev)
	              r = DeleteObject(hBmp)
	              r = DeleteDC(hDCMemory)
	              Error Err
	           Case ERR_BITMEM
	              If HasPaletteSrc Then
	                 r = SelectPalette(hDCMemory, hPalPrev, 0)
	              End If
	              r = DeleteObject(hBmp)
	              r = DeleteDC(hDCMemory)
	              Error Err
	           Case ERR_GETDIB, ERR_STRETCHDIB
	              r = GlobalUnlock(hMem)
	              r = GlobalFree(hMem)
	              If HasPaletteSrc Then
	                 r = SelectPalette(hDCMemory, hPalPrev, 0)
	              End If
	              r = DeleteObject(hBmp)
	              r = DeleteDC(hDCMemory)
	              Error Err
	           Case ERR_UNLOCKMEM, ERR_FREEMEM
	              If HasPaletteSrc Then
	                 r = SelectPalette(hDCMemory, hPalPrev, 0)
	              End If
	              r = DeleteObject(hBmp)
	              r = DeleteDC(hDCMemory)
	              Error Err
	           Case ERR_SELPAL
	              r = DeleteObject(hBmp)
	              r = DeleteDC(hDCMemory)
	              Error Err
	           Case ERR_DELBMP
	              r = DeleteDC(hDCMemory)
	              Error Err
	           Case Else
	              Error Err
	        End Select
	        Error Err
	
	     End Sub
	
	6. Save the project.
	
	7. Run the program (or press the F5 key). Then choose the Command1 button.
	
	  The picture box should disappear and a portion of the hidden 256-color bitmap
	  should be printed on the printer.
	
	Notes
	-----
	
	- To print the entire picture box, specify 0, 0, Picture1.ScaleWidth,
	  Picture1.ScaleHeight for the LeftSrc, TopSrc, WidthSrc, and HeightSrc
	  parameters in the call to StretchPicToDC.
	
	- The extents of the printer are in the Printer.ScaleWidth and
	  Printer.ScaleHeight properties. You can use this information to scale your
	  output to the position and size you want.
	
	- To maintain an aspect ratio, you need to use the TwipsPerPixelX and
	  TwipsPerPixelY properties of the Screen and Printer objects. For example, the
	  printer image will have the same proportions as the screen image if you
	  calculate the size in pixels with the following formulas:
	
	        PrntHeight=ScrnHeight*(Screen.TwipsPerPixelY / 
	           Printer.TwipsPerPixelY)
	        PrntWidth=ScrnWidth*(Screen.TwipsPerPixelX / Printer.TwipsPerPixelX)
	
	- If you want to print the nonvisible portion of a visible picture box, copy
	  the contents into an invisible picture box with AutoSize set to True. Then
	  print the picture in the invisible picture box.
	
	- The PrintPicToDC function does not work with negative values. PrintPicToDC
	  will not print if it finds the coordinates invalid.
	
	- This method does not print child controls.
	
	REFERENCES
	==========
	
	- "Programming Windows 3.1: The Microsoft Guide to Writing Applications for
	  Windows 3.1," Charles Petzold, Microsoft Press, 1992.
	
	- "Microsoft Windows Software Development Kit: Programmer's Reference."
	
	- Windows SDK Help file shipped with the Professional Editions of the
	  Microsoft.
	
	- Visual Basic Programming System for Windows, versions 2.0 and 3.0.
	
	- Windows SDK Knowledge Base Articles Q81498 and Q80080.
	
	Additional query words: 2.00 3.00 vb3only
	
	======================================================================
	Keywords          : kbcode kbprint kbPrinting 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbVB200
	Version           : :2.0,3.0
	
	=============================================================================
	
