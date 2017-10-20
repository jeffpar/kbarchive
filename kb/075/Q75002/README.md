---
layout: page
title: "Q75002: MDISubCl.exe Changes Background Color of MDI Client"
permalink: /kb/075/Q75002/
---

## Q75002: MDISubCl.exe Changes Background Color of MDI Client

{% raw %}

	Article: Q75002
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): _IK kbfile kbsample kbMDI kbOSWin2000 kbGrpDSUser kbOSWin310 kbWndw kbOSWin300
	Last Modified: 09-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MDISubCl.exe demonstrates how to alter the default background color of an MDI
	client window by subclassing the MDI client window procedure and processing the
	WM_ERASEBKGND message. All other messages are passed to the original MDI client
	window procedure. Normally, a multiple-document interface (MDI) client window
	defines its background color to be the system color value COLOR_BACKGROUND+1,
	which is defined in the Windows SDK file WINDOWS.H. This value corresponds to
	the window background color defined by the user in the Control Panel.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  MDISubCl.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	During processing of the WM_ERASEBKGND message, the class word that defines the
	MDI client's background color is altered using the SetClassWord() function.
	Then, control is passed to the original MDI client window procedure to paint and
	update the window. When control returns from the original MDI client window
	procedure, the MDI client's class word that defines the background color is set
	back to its original value so that other MDI applications currently running are
	not affected.
	
	The following sample code from MDISubCl.exe is a sample window procedure that you
	can use to subclass the default MDI client window procedure:
	
	     LONG FAR PASCAL MdiClientWndProc(hwnd, msg, wParam, lParam)
	     HWND hwnd;
	     WORD msg, wParam;
	     LONG lParam;
	     {
	       LONG lRetCode;
	
	       switch (msg)
	         {
	       case WM_ERASEBKGND:
	         {
	         HBRUSH hbrNew, hbrOld;
	                                            // create a solid purple brush
	         hbrNew = CreateSolidBrush(RGB(75, 45, 145));
	                                         // set the class background color
	         hbrOld = SetClassWord(hwnd, GCW_HBRBACKGROUND, hbrNew);
	                        // let the old window procedure handle the message
	         lRetCode = CallWindowProc(lpfnMDIClientOld, hwnd, msg, wParam,
	                     lParam);
	                                  // set background back to original value
	         SetClassWord(hwnd, GCW_HBRBACKGROUND, hbrOld);
	         DeleteObject(hbrNew);         // all done with this, so delete it
	         break;
	         }
	
	       default:
	         lRetCode = CallWindowProc(lpfnMDIClientOld, hwnd, msg, wParam,
	                     lParam);
	         break;
	         }
	       return lRetCode;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kbfile kbsample kbMDI kbOSWin2000 kbGrpDSUser kbOSWin310 kbWndw kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
