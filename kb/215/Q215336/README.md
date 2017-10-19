---
layout: page
title: "Q215336: PRB: Picture.Circle Works Wrong if Radius Large and Angle Small"
permalink: /kb/215/Q215336/
---

## Q215336: PRB: Picture.Circle Works Wrong if Radius Large and Angle Small

	Article: Q215336
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbGDI kbGrpDSUser kbVBp kbVBp500 kbVBp600 kbVC500 kbVC600 kbOSWin95 kbOSWin98 kbG
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Circle method of the PictureBox works incorrectly while drawing an arc with
	a very large radius and a very small angle. On Windows 2000 or Windows NT you
	may get a distorted arc. On Windows 95 or Windows Me you may get nothing.
	
	CAUSE
	=====
	
	In Visual Basic, the Circle method of the PictureBox calls the Arc API. The
	problem occurs because the Arc API works incorrectly when the radius is very
	large and the angle is very small.
	
	RESOLUTION
	==========
	
	To work around this problem, you need to implement your own Arc function in
	Visual Basic or C. Usually the C function provides better performance.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project (Project1). Form1 is created by default.
	
	2. Add a PictureBox to Form1 and change its Name to picTest.
	
	3. Add the following code to the code module of Form1:
	
	  Option Explicit
	
	  Private Const CirConst As Double = 3.14159265358979
	  Private Const PISTEP As Double = CirConst / 180#
	
	  Private Sub Form_Load()
	     picTest.AutoRedraw = True
	     picTest.BackColor = vbBlack
	     picTest.ForeColor = vbWhite
	     Me.WindowState = 2
	  End Sub
	
	  Private Sub Form_Resize()
	     Dim retval As Long
	     Dim x As Integer, y As Integer
	     Dim r As Long
	     Dim a1 As Double, a2 As Double
	          
	     picTest.Move 0, 0
	     picTest.Height = Me.ScaleHeight * 0.98
	     picTest.Width = picTest.Height
	      
	     Const ZZ As Double = 0.15
	     picTest.Scale (-ZZ, ZZ + ZZ)-(ZZ, 0)
	     picTest.Cls
	     picTest.Circle (-10, 0), 10, , 0 * PISTEP , 1 * PISTEP 
	  End Sub
	
	4. Run the application in Windows 2000 or Windows NT and you see a distorted
	  arc. Run it in Windows 95 or Windows Me and you see nothing.
	
	Steps to Implement Your Own Arc Function in C
	---------------------------------------------
	
	1. Start Microsoft Visual C++ and create a new Win32 Dynamic-Link Library
	  project.
	
	2. Type "MyGDI" in the Project name text box and click OK.
	
	3. In the next dialog box, choose "a simple dll project" and click the Finish
	  button.
	
	4. Click OK in the next dialog box.
	
	5. In MyGDI.cpp file, add the following code after the line #include "stdafx.h":
	
	  #include "math.h"
	
	  extern "C" {
	  BOOL _stdcall MyArc(HDC hdc, int X, int Y, DWORD dwRadius, 
	                 float fStartDegrees, float fSweepDegrees);
	  }
	
	  BOOL _stdcall MyArc(HDC hdc, int X, int Y, DWORD dwRadius, 
	                 float fStartDegrees, float fSweepDegrees)
	  {
	     float fCurrentAngle;         // Current angle in radians
	     float fStepAngle = 0.003f;   // The sweep increment value in radians
	     float fStartRadians;         // Start angle in radians
	     float fEndRadians;           // End angle in radians
	     int ix, iy;                  // Current point on arc
	     float fTwoPi = 2.0f * 3.1415926535f;
	     int iMM;
	     POINT pt, pt1;
	     SIZE szVP, szW;
	     POINT szOrg, szVPOrg;
	      
	     // save the old mapping mode
	     GetWindowExtEx(hdc, &szW);
	     GetWindowOrgEx(hdc, &szOrg);
	     GetViewportExtEx(hdc, &szVP);
	     GetViewportOrgEx(hdc, &szVPOrg);
	
	     pt.x = X;
	     pt.y = Y;
	     
	     LPtoDP(hdc, &pt, 1);
	     X = pt.x;
	     Y = pt.y;
	      
	     // Calculate the new radius
	     pt.x = dwRadius;
	     pt.y = 0;
	     LPtoDP(hdc, &pt, 1);
	
	     pt1.x = 0;
	     pt1.y = 0;
	     LPtoDP(hdc, &pt1, 1);
	
	     pt.x -= pt1.x;
	     pt.y -= pt1.y;
	     dwRadius = (DWORD)sqrt(pt.x * pt.x + pt.y * pt.y);
	
	     //set the mapping mode to be something that can be used 
	     //to draw arc directly
	     iMM = SetMapMode(hdc, MM_ANISOTROPIC);
	     SetViewportExtEx(hdc, 1, 1, NULL);
	     SetViewportOrgEx(hdc, 0, 0, NULL);
	     SetWindowExtEx(hdc, 1, 1, NULL);
	     SetWindowOrgEx(hdc, 0, 0, NULL);
	      
	     // Get the starting and ending angle in radians 
	     if (fSweepDegrees > 0.0f) {
	        fStartRadians = ((fStartDegrees / 360.0f) * fTwoPi); 
	        fEndRadians = (((fStartDegrees + fSweepDegrees) / 360.0f) * fTwoPi);
	      }   else {
	        fStartRadians = (((fStartDegrees + fSweepDegrees)  / 360.0f) * fTwoPi); 
	        fEndRadians =  ((fStartDegrees / 360.0f) * fTwoPi);
	      }
	      
	      // Calculate the starting point for the sweep via 
	      // polar -> cartesian conversion 
	      ix = X + (int)((float)dwRadius * (float)cos(fStartRadians));
	      iy = Y - (int)((float)dwRadius * (float)sin(fStartRadians));
	      
	      // Draw a line to the starting point 
	      MoveToEx(hdc, ix, iy, NULL); 
	      
	      // Calculate and draw the sweep 
	      for (fCurrentAngle = fStartRadians; 
	      fCurrentAngle <= fEndRadians; 
	      fCurrentAngle += fStepAngle) { 
	          
	         // Calculate the current point in the sweep via 
	         // polar -> cartesian conversion 
	         ix = X + (int)((float)dwRadius * (float)cos(fCurrentAngle));
	         iy = Y - (int)((float)dwRadius * (float)sin(fCurrentAngle));
	          
	         // Draw a line segment to current point 
	         LineTo(hdc, ix, iy); 
	     }              
	      
	     //restore the mapping mode
	     SetMapMode(hdc, iMM);
	     SetViewportExtEx(hdc, szVP.cx, szVP.cy, NULL);
	     SetViewportOrgEx(hdc, szVPOrg.x, szVPOrg.y, NULL);
	     SetWindowExtEx(hdc, szW.cx, szW.cy, NULL);
	     SetWindowOrgEx(hdc, szOrg.x, szOrg.y, NULL);
	      
	     return TRUE;
	  }
	
	6. Under the File menu, select New. Choose Text File from the list on the Files
	  tab. Type "MyGDI.def" (without the quotes) in the File Name text box. Click
	  OK.
	
	7. Add the following code to the MyGDI.def file.
	
	  LIBRARY MyGDI
	
	  EXPORTS
	  	MyArc	@1
	
	8. Build the project and move the MyGDI.dll to the windows system directory or
	  the same directory as the Visual Basic project.
	
	Steps To Use Your Arc Function in Visual Basic
	----------------------------------------------
	
	1. Create a new Standard EXE project. Form1 is created by default.
	
	2. Add a picturebox to Form1. Use the default name, Picture1.
	
	3. Add the following to the code window of Form1:
	
	  Option Explicit
	  Private Type POINTAPI
	          x As Long
	          y As Long
	  End Type
	
	  Private Type size
	          CX As Long
	          CY As Long
	  End Type
	
	  Private Type rect
	          Left As Long
	          Top As Long
	          Right As Long
	          Bottom As Long
	  End Type
	
	  Private Declare Function GetStockObject Lib "gdi32" _
	    (ByVal nIndex As Long) As Long
	  Private Declare Function SelectObject Lib "gdi32" _
	    (ByVal hdc As Long, ByVal hObject As Long) As Long
	  Private Declare Function SetViewportExtEx Lib "gdi32" _
	    (ByVal hdc As Long, ByVal nX As Long, ByVal nY As Long, _
	    lpSize As size) As Long
	  Private Declare Function SetViewportOrgEx Lib "gdi32" _
	    (ByVal hdc As Long, ByVal nX As Long, ByVal nY As Long, _
	    lpPoint As POINTAPI) As Long
	  Private Declare Function SetMapMode Lib "gdi32" _
	    (ByVal hdc As Long, ByVal nMapMode As Long) As Long
	  Private Declare Function SetWindowExtEx Lib "gdi32" _
	    (ByVal hdc As Long, ByVal nX As Long, ByVal nY As Long, _
	    lpSize As size) As Long
	  Private Declare Function SetWindowOrgEx Lib "gdi32" _
	    (ByVal hdc As Long, ByVal nX As Long, ByVal nY As Long, _
	    lpPoint As POINTAPI) As Long
	  Private Declare Function GetClientRect Lib "user32" _
	    (ByVal hwnd As Long, lpRect As rect) As Long
	  Private Declare Function MyArc Lib "MyGDI" _
	    (ByVal hdc As Long, ByVal CX As Long, _
	    ByVal CY As Long, ByVal Radius As Long, _
	    ByVal sDegree As Single, _
	    ByVal SweepDegree As Single) As Long
	       
	  Private Const LOGPIXELSX = 88        '  Logical pixels/inch in X
	  Private Const LOGPIXELSY = 90        '  Logical pixels/inch in Y
	  Private Const WHITE_PEN = 6
	  Private Const BLACK_PEN = 7
	  Private Const MM_ANISOTROPIC = 8
	
	  Private Const CirConst As Double = 3.14159265358979
	  Private Const PI As Double = CirConst / 180#
	
	  Private Sub Form_Load()
	     Me.WindowState = 2
	  End Sub
	
	  Private Sub Form_Paint()
	  draw Picture1, False
	  End Sub
	
	  Private Sub draw(picTest As Object, bPrint As Boolean)
	     Dim retval As Long
	     Dim x As Integer, y As Integer
	     Dim R As Long
	     Dim a1 As Double, a2 As Double
	     Dim usepen&, oldpen&
	     Dim size As size
	     Dim point As POINTAPI
	     Dim rect As rect
	          
	     picTest.Move 0, 0
	     picTest.Height = Me.ScaleHeight * 0.98
	     picTest.Width = picTest.Height
	     
	     picTest.Cls
	      
	     usepen = GetStockObject(BLACK_PEN)
	     oldpen = SelectObject(picTest.hdc, usepen)
	          
	     SetMapMode picTest.hdc, MM_ANISOTROPIC
	          
	     GetClientRect picTest.hwnd, rect
	     SetViewportExtEx picTest.hdc, _
	         rect.Right - rect.Left, _
	         rect.Bottom - rect.Top, size
	     SetWindowExtEx picTest.hdc, 30, -30, size
	     SetWindowOrgEx picTest.hdc, -15, 30, point
	      
	     MyArc picTest.hdc, -1000, 0, 1000, 0, 1
	  End Sub
	
	4. Run the application and you can see the correct Arc.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbGDI kbGrpDSUser kbVBp kbVBp500 kbVBp600 kbVC500 kbVC600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
