---
layout: page
title: "Q186260: HOWTO: Rotate a Bitmap Image in 90-Degree Increments"
permalink: kb/186/Q186260/
---

## Q186260: HOWTO: Rotate a Bitmap Image in 90-Degree Increments

	Article: Q186260
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbBitmap kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Bitmap rotation is a graphic effect that Visual Basic does not natively offer.
	This article shows how to rotate a given image in 90-degree increments. It
	allows you to rotate any image 0, 90, 180 or 270 degrees. With a little work,
	the code can be modified to rotate to any angle, but that is beyond the scope of
	this article.
	
	MORE INFORMATION
	================
	
	The following sample uses a function called RotateBitmap. Here is some
	information about this function:
	
	     RotateBitmap(hBitmapDC As Long, _
	        lWidth As Long, _
	        lHeight As Long, _
	        lRadians As Long)
	
	hBitmapDC: Handle to a device context of the image to be rotated. Upon return,
	this variable will contain the device context of the rotated image.
	
	lWidth: Width of the incoming image. Upon return contains the width of the
	rotated image.
	
	lHeight: Height of the incoming image. Upon return, contains the height of the
	rotated image.
	
	lRadians: Angle to rotate the image (in Radians). The sample shows how to convert
	degrees into radians on the fly.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a Standard Module (Module1) to the project.
	
	3. Add the following controls to Form1:
	
	   - Two PictureBox controls
	
	   - One Timer control
	
	4. For the two PictureBox controls, set their AutoRedraw properties to True.
	
	5. Copy and paste the following code in the Form's code Window:
	
	        Option Explicit
	
	        Dim sFileName As String     ' filename of the image being used
	        Dim hBitmap As Long         ' handle to the loaded bitmap
	        Dim lBMDC As Long           ' device context of the bitmap
	        Dim sBitmapInfo As BITMAP   ' information on the loaded image
	        Dim Degrees As Long         ' current rotation degree
	
	        Private Sub Form_Load()
	
	           ' set staring degrees
	           Degrees = 0
	
	           ' set the bitmap that will be used in the sample
	           sFileName = "filename.bmp"  ' where filename.bmp is the bitmap
	                                       ' being used
	
	           ' load the bitmap into memory
	           hBitmap = LoadImage(0, sFileName, IMAGE_BITMAP, 0, 0, _
	                       LR_LOADFROMFILE Or LR_CREATEDIBSECTION)
	
	           ' make sure the call succeeded
	           If (hBitmap = 0) Then
	              MsgBox "Error, Unable To Load Bitmap", vbOKOnly, _
	                     "Bitmap Load Error"
	              End
	           End If
	
	           ' create a device context to use when blitting the loaded bitmap
	           lBMDC = CreateCompatibleDC(0)
	
	           ' make sure our call succeeded
	           If (lBMDC = 0) Then
	              MsgBox "Error, Unable To Create Device Context", _
	                     vbOKOnly, "Device Context Error"
	              Exit Sub
	           End If
	
	           ' attach the bitmap to the device context just created
	           Call SelectObject(lBMDC, hBitmap)
	
	           ' get the information about this image
	           Call GetObject(hBitmap, Len(sBitmapInfo), sBitmapInfo)
	
	           ' blit the bitmap image onto the picturebox control
	           ' on the form to show what is being worked with
	           Call BitBlt(Picture1.hdc, 0, 0, sBitmapInfo.bmWidth, _
	                      sBitmapInfo.bmHeight, lBMDC, 0, 0, SRCCOPY)
	           Picture1.Refresh
	
	           ' set the timer and turn it on
	           Timer1.Interval = 500
	           Timer1.Enabled = True
	
	        End Sub
	
	        Private Sub Timer1_Timer()
	           Dim hRotatedBitmapDC As Long    ' returned DC to the new bitmap
	           Dim lWidth As Long              ' current/new width of the bitmaps
	           Dim lHeight As Long             ' current/new width of the bitmaps
	           Dim lRadians As Long            ' the degrees will be converted to
	                                           ' - radians
	           ' get the width/height of the original bitmap image
	           lWidth = sBitmapInfo.bmWidth
	           lHeight = sBitmapInfo.bmHeight
	
	           ' convert the rotation degrees into radians for the
	           ' rotate function
	           lRadians = PI * Degrees / 180
	
	           ' set the input var to the current bitmaps DC
	           hRotatedBitmapDC = Picture1.hdc
	
	           ' rotate the bitmap to its new degree
	           RotateBitmap hRotatedBitmapDC, lWidth, lHeight, lRadians
	
	           ' clear the second picturebox to show the rotated image
	           Set Picture2.Picture = LoadPicture
	
	           ' blit the rotated image
	           Call BitBlt(Picture2.hdc, 0, 0, lWidth, lHeight, _
	                      hRotatedBitmapDC, 0, 0, SRCCOPY)
	           Picture2.Refresh
	
	           ' destroy the DC created for the rotated bitmap
	           Call DeleteDC(hRotatedBitmapDC)
	
	           ' increase the degree count, or reset if we have come full circle
	           Degrees = Degrees + 90
	           If Degrees = 360 Then
	              Degrees = 0
	           End If
	
	        End Sub
	
	6. In the Form_Load event in the above code, be sure to set the sFileName
	  variable to a bitmap file on your system.
	
	7. Add the following code to the Standard Module (Module1):
	
	        Option Explicit
	
	         ' refer to the MSDN for more detailed information regarding the
	         ' constants used in this sample.
	        Public Const IMAGE_BITMAP = &O0   ' used with LoadImage to load
	                                          ' a bitmap
	        Public Const LR_LOADFROMFILE = 16    ' used with LoadImage
	        Public Const LR_CREATEDIBSECTION = 8192 ' used with LoadImage
	        Public Const SRCCOPY = &HCC0020         ' (DWORD) dest = source
	        Public Const PI = 3.14159
	
	        ' Refer to the MSDN for more detailed information regarding the
	        ' structures used in this sample.
	        Type BITMAP '14 bytes
	             bmType As Long
	             bmWidth As Long
	             bmHeight As Long
	             bmWidthBytes As Long
	             bmPlanes As Integer
	             bmBitsPixel As Integer
	             bmBits As Long
	        End Type
	
	        ' Refer to the MSDN for more detailed information regarding the API's
	        ' used in this sample.
	
	        Declare Function LoadImage Lib "user32" Alias "LoadImageA" _
	           (ByVal hInst As Long, ByVal lpsz As String, ByVal un1 As Long, _
	           ByVal n1 As Long,ByVal n2 As Long, ByVal un2 As Long) As Long
	        Declare Function CreateCompatibleDC Lib "gdi32" _
	           (ByVal hdc As Long) As Long
	        Declare Function SelectObject Lib "gdi32" _
	           (ByVal hdc As Long, ByVal hObject As Long) As Long
	        Declare Function BitBlt Lib "gdi32" (ByVal hDestDC As Long, _
	           ByVal X As Long, ByVal Y As Long, ByVal nWidth As Long, _
	           ByVal nHeight As Long, ByVal hSrcDC As Long, ByVal xSrc As Long, _
	           ByVal ySrc As Long, ByVal dwRop As Long) As Long
	        Declare Function GetObject Lib "gdi32" Alias "GetObjectA" _
	           (ByVal hObject As Long, ByVal nCount As Long, lpObject As Any) As
	           Long
	        Declare Function CreateCompatibleBitmap Lib "gdi32" _
	           (ByVal hdc As Long, ByVal nWidth As Long, ByVal nHeight As Long)
	           As Long
	        Declare Function DeleteDC Lib "gdi32" (ByVal hdc As Long) As Long
	        Declare Function DeleteObject Lib "gdi32" _
	           (ByVal hObject As Long) As Long
	
	        Public Sub RotateBitmap(hBitmapDC As Long, lWidth As Long, _
	           lHeight As Long, lRadians As Long)
	
	           Dim hNewBitmapDC As Long    ' DC of the new bitmap
	           Dim hNewBitmap As Long      ' handle to the new bitmap
	           Dim lSine As Long           ' sine used in rotation
	           Dim lCosine As Long         ' cosine used in rotation
	           Dim X1 As Long              ' used in calculating new
	                                       ' bitmap dimensions
	           Dim X2 As Long              ' used in calculating new
	                                       ' bitmap dimensions
	           Dim X3 As Long              ' used in calculating new
	                                       ' bitmap dimensions
	           Dim Y1 As Long              ' used in calculating new
	                                       ' bitmap dimensions
	           Dim Y2 As Long              ' used in calculating new
	                                       ' bitmap dimensions
	           Dim Y3 As Long              ' used in calculating new
	                                       ' bitmap dimensions
	           Dim lMinX As Long           ' used in calculating new
	                                       ' bitmap dimensions
	           Dim lMaxX As Long           ' used in calculating new
	                                       ' bitmap dimensions
	           Dim lMinY As Long           ' used in calculating new
	                                       ' bitmap dimensions
	           Dim lMaxY As Long           ' used in calculating new
	                                       ' bitmap dimensions
	           Dim lNewWidth As Long       ' width of new bitmap
	           Dim lNewHeight As Long      ' height of new bitmap
	           Dim I As Long               ' loop counter
	           Dim J As Long               ' loop counter
	           Dim lSourceX As Long        ' x pixel coord we are blitting
	                                       ' from the source  image
	           Dim lSourceY As Long        ' y pixel coord we are blitting
	                                       ' from the source image
	
	           ' create a compatible DC from the one just brought
	           ' into this function
	           hNewBitmapDC = CreateCompatibleDC(hBitmapDC)
	
	           ' compute the sine/cosinse of the radians used to
	           ' rotate this image
	           lSine = Sin(lRadians)
	           lCosine = Cos(lRadians)
	
	           ' compute the size of the new bitmap being created
	           X1 = -lHeight * lSine
	           Y1 = lHeight * lCosine
	           X2 = lWidth * lCosine - lHeight * lSine
	           Y2 = lHeight * lCosine + lWidth * lSine
	           X3 = lWidth * lCosine
	           Y3 = lWidth * lSine
	
	           ' figure out the max/min size of the new bitmap
	           lMinX = Min(0, Min(X1, Min(X2, X3)))
	           lMinY = Min(0, Min(Y1, Min(Y2, Y3)))
	           lMaxX = Max(X1, Max(X2, X3))
	           lMaxY = Max(Y1, Max(Y2, Y3))
	
	           ' set the new bitmap width/height
	           lNewWidth = lMaxX - lMinX
	           lNewHeight = lMaxY - lMinY
	
	           ' create a new bitmap based upon the new width/height of the
	           ' rotated bitmap
	           hNewBitmap = CreateCompatibleBitmap _
	           (hBitmapDC, lNewWidth, lNewHeight)
	
	           ' attach the new bitmap to the new device context created
	           ' above before constructing the rotated bitmap
	           Call SelectObject(hNewBitmapDC, hNewBitmap)
	
	           ' loop through and translate each pixel to its new location.
	           ' this is using a standard rotation algorithm
	           For I = 0 To lNewHeight
	              For J = 0 To lNewWidth
	                 lSourceX = (J + lMinX) * lCosine + (I + lMinY) * lSine
	                 lSourceY = (I + lMinY) * lCosine - (J + lMinX) * lSine
	                 If (lSourceX >= 0) And (lSourceX <= lWidth) And _
	                 (lSourceY >= 0) And (lSourceY <= lHeight) Then
	                    Call BitBlt(hNewBitmapDC, J, I, 1, 1, hBitmapDC, _
	                                lSourceX, lSourceY, SRCCOPY)
	                 End If
	              Next J
	           Next I
	
	           ' reset the new bitmap width and height
	           lWidth = lNewWidth
	           lHeight = lNewHeight
	
	           ' return the DC to the new bitmap
	           hBitmapDC = hNewBitmapDC
	
	           ' destroy the bitmap created
	           Call DeleteObject(hNewBitmap)
	
	        End Sub
	
	        Private Function Min(X1 As Long, Y1 As Long) As Long
	           If X1 >= Y1 Then
	              Min = Y1
	           Else
	              Min = X1
	           End If
	        End Function
	
	        Private Function Max(X1 As Long, Y1 As Long) As Long
	           If X1 >= Y1 Then
	             Max = X1
	           Else
	              Max = Y1
	           End If
	        End Function
	
	8. Press the F5 key to run the project.
	
	Note that the application will load and attempt to read in the bitmap image
	specified in sFileName. If successful, the image will be blitted to the first
	PictureBox on the Form. Every half second, the image will then be rotated
	90-degrees and blitted into the second PictureBox.
	
	Additional query words: sprites animation
	
	======================================================================
	Keywords          : kbBitmap kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
