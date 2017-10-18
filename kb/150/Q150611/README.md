---
layout: page
title: "Q150611: Qvision 2000 and Matrox Mga Ultima Cause Access Violation"
permalink: kb/150/Q150611/
---

## Q150611: Qvision 2000 and Matrox Mga Ultima Cause Access Violation

	Article: Q150611
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article outlines a special programming case that causes an access violation
	when running the Qvision 2000 or Matrox Mga Ultima Video cards. These cards use
	the Mga.sys video driver.
	
	The problem is caused by making some bad graphics calls. (These are shown in a
	program included in the More Information section below.) The problem causes the
	following error message to be returned by NT 3.51:
	
	  access violation in ntdll.dll at 0x77fa02ad with exception 0xc0000037.
	
	
	This error is only known to occur using the Mga.sys driver. There may be other
	drivers that also produce this error.
	
	The programming problem is produced by calling BeginPath and Endpath with no
	points defined (no LineTo definitions) and calling StrokeAndFillPath (really the
	FillPath is the problem).
	
	Once this has been done there is a problem with the hdc. The failure will show up
	when MoveToEx is called (after the previous calls have messed up the device
	context - hdc).
	
	MORE INFORMATION
	================
	
	Here is a simple sample program that produces the error:
	
	#include <windows.h>
	
	HANDLE mainFrame;
	extern LRESULT WINAPI DrawProc (HWND, UINT, WPARAM, LPARM);
	
	int APIENTRY WinMain (HMODULE hModule, HINSTANCE hNULL, PSTR cmdLine,
	    int cmdShow)
	{
	MSG msg;
	WNDCLASS wc;
	
	       memset (&wc, 0, sizeof (WNDCLASS));
	       wc.lpszClassName = "MAIN";
	       wc.hbrBackground = (void * ) (COLOR_WINDOW +1);
	       wc.style = CS_VREDRAW | CS_HREDRAW;
	       wc.lpfnWndProc = DrawProc;
	       if  (!RegisterClass (&wc)) exit (-1);
	       if  ( (mainFrame = CreateWindow ("MAIN", "Mca Test",
	            WS_OVERLAPPEDWINDOW, 0, 0, 300, 200, NULL,
	             NULL, 0, NULL) ) == NULL)
	          return (FALSE);
	       ShowWindow (mainFrame, SW_SHOW);
	
	       While (GetMessage (&msg, NULL, 0, 0) )
	       {
	           TranslateMessage (&msg);
	           DispatchMessage(&msg);
	       }
	}
	
	LRESULT  WINAPI DrawProc (HWND hwnd, UINT msg, WPARM mp1, LPARAM mp2)
	{
	PAINTSTRUCT ps;
	
	  switch (msg)
	  {
	  case  WM_CLOSE:
	       DestroyWindow (mainFrame);
	       return (0);
	  case WM_DESTROY:
	       PostQuitMessage (0);
	       return (0);
	  case WM_PAINT:
	       BeginPaint (hwnd, &ps);
	       BeginPath  (ps.hdc);
	       EndPath (ps.hdc);
	       StrokeAndFillPath (ps.hdc); // Fillpath is the problem here
	                                   // since nothing has been drawn
	       BeginPath (ps.hdc);
	       MoveToEx (ps.hdc, 50, 50, NULL); //This is the failure point
	       LineTo (ps.hdc, 100, 100);
	       LineTo (ps.hdc, 150,  150);
	       EndPath (ps.hdc);
	       StrokeAndFillPath (ps.hdc);
	       MoveToEx (ps.hdc, 300, 300, NULL);
	       EndPaint (hwnd, &ps);
	       return (0);
	   }
	   return (DefWindowProc (hwnd, msg, mp1, mp2));
	}
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
