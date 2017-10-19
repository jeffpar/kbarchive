---
layout: page
title: "Q106018: BUG: SetPixel() Doesn't Work Properly on a PS Printer"
permalink: /kb/106/Q106018/
---

## Q106018: BUG: SetPixel() Doesn't Work Properly on a PS Printer

	Article: Q106018
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 09-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Windows 3.1 printing application, calling the SetPixel() command on a
	device context created for the Windows PostScript printer driver version 3.56 or
	earlier causes the pixel that is drawn to be larger than expected if a line with
	a thickness greater than 1 was drawn previously.
	
	CAUSE
	=====
	
	The PostScript driver's implementation of SetPixel() draws a circle with the
	thickness set to the thickness of the last line drawn with the LineTo() command
	if the thickness of the pen used is greater than 1.
	
	RESOLUTION
	==========
	
	Instead of using the SetPixel() command, use the PatBlt() command to draw the
	pixel. This is needed only if a pen of width greater than 1 was used to draw
	lines with the Moveto() and LineTo() commands.
	
	For example, if you were calling SetPixel() using the following line of code to
	draw a black pixel at coordinates (10,10)
	
	     SetPixel(hPrnDC, 10, 10, RGB(0,0,0));
	
	instead of the above line of code, you could use PatBlt() in the following
	example:
	
	     PatBlt(hPrnDC, 10, 10, 1, 1, BLACKNESS);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Once a pen of thickness greater than 1 (one) is created and selected into the
	printer's device context and a LineTo() command is called, every call to
	SetPixel() results in a circle the width of the pen. If a pen of width 0 (zero)
	or 1 is created and used by the LineTo() command, the lines drawn will be the
	correct thickness, but the SetPixel() command will still draw with the thickness
	of the most recently used pen with a width greater than 1 (one).
	
	For example, the following code will draw the first two pixels correctly. After
	the pen of width 50 is created and selected into the printer's device context,
	the first call to SetPixel works correctly because LineTo() has not been called
	yet. The call to SetPixel after the line is drawn results in a circle the
	thickness of the line. After that, a pen of thickness 1 is created and selected
	into the device context. The line drawn afterwards is drawn correctly, but both
	calls to SetPixel() result in thick circles.
	
	Sample Code
	-----------
	
	     if (StartDoc(hPrnDC,&di) > 0)
	     {
	        HPEN hPen, hPen2, hOldPen;
	
	        StartPage(hPrnDC);
	        hPen = CreatePen(PS_SOLID,1,RGB(0,0,0));
	        hOldPen = SelectObject(hPrnDC,hPen);
	        SetPixel(hPrnDC,100,10,RGB(0,0,0));
	        MoveTo(hPrnDC,220,10);
	        LineTo(hPrnDC,700,10);
	        SetPixel(hPrnDC,800,10,RGB(0,0,0));
	
	        hPen2 = CreatePen(PS_SOLID,50,RGB(0,0,0));
	        SelectObject(hPrnDC,hPen2);
	        SetPixel(hPrnDC,100,110,RGB(0,0,0));
	        MoveTo(hPrnDC,220,110);
	        LineTo(hPrnDC,700,110);
	        SetPixel(hPrnDC,800,110,RGB(0,0,0));
	
	        SelectObject(hPrnDC,hPen);
	        SetPixel(hPrnDC,100,210,RGB(0,0,0));
	        MoveTo(hPrnDC,220,210);
	        LineTo(hPrnDC,700,210);
	        SetPixel(hPrnDC,800,210,RGB(0,0,0));
	
	        DeleteObject(hPen2);
	        DeleteObject(SelectObject(hPrnDC,hOldPen));
	        EndPage(hPrnDC);
	        EndDoc(hPrnDC);
	     }
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
