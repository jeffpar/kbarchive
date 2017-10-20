---
layout: page
title: "Q250276: HOWTO: Do Right-to-Left and Left-to-Right Mirroring in Win2000"
permalink: /kb/250/Q250276/
---

## Q250276: HOWTO: Do Right-to-Left and Left-to-Right Mirroring in Win2000

{% raw %}

	Article: Q250276
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): _IK kbOSWin2000 kbGrpDSIntl kbDSupport
	Last Modified: 25-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Win32 Software Development Kit (SDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On a Windows 2000-based computer, you can dynamically change the application
	user interface from left-to-right to right-to-left.
	
	MORE INFORMATION
	================
	
	This can be accomplished by using the following code:
	
	    // Use ANSI versions of GetWindowLong() and SetWindowLong() because 
	              // Unicode is not needed for these calls.
	              lExStyles = GetWindowLongA(hWnd, GWL_EXSTYLE) ;
	
	              // Check whether new layout is opposite the current layout.
	              if(!!(pLState->IsRTLLayout) != !!(lExStyles & WS_EX_LAYOUTRTL)) 
	              {
	                 // The following lines update the application layout to 
	                  // be right-to-left or left-to-right, as appropriate.
	                  lExStyles ^= WS_EX_LAYOUTRTL ; // Toggle layout.
	
	                  SetWindowLongA(hWnd, GWL_EXSTYLE, lExStyles) ;
	                  // This is to update layout in the client area.
	                  InvalidateRect(hWnd, NULL, TRUE) ;
	              }
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kbOSWin2000 kbGrpDSIntl kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin32SDKSearch kbAudDeveloper kbSDKSearch kbWinAdvServSearch kbWin32sSearch
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
