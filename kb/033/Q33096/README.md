---
layout: page
title: "Q33096: INFO: Drawing Outside a Window's Client Area"
permalink: /kb/033/Q33096/
---

## Q33096: INFO: Drawing Outside a Window's Client Area

{% raw %}

	Article: Q33096
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWin95 kbSDKWin16
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an application uses the BeginPaint or GetDC function to obtain a device
	context (DC) for its client window and draws into this DC, Windows clips the
	output to the edge of the client window. While this is usually the desired
	effect, there are circumstances where an application draws outside the client
	area of its window.
	
	MORE INFORMATION
	================
	
	The GetWindowDC function provides a DC that allows an application to draw
	anywhere within its window, including the nonclient area.
	
	In the Windows environment, the display is a scarce resource that is shared by
	all applications running in the system. Most of the time, an application should
	restrict its output to the area of the screen it has been assigned by the user.
	However, an application can use the CreateDC function to obtain a DC for the
	entire display, as follows:
	
	     hDC = CreateDC("DISPLAY", NULL, NULL, NULL);
	
	Device contexts are another scarce resource in the Windows environment. When an
	application creates a DC in response to a WM_PAINT message, it must call the
	DeleteDC function to free the DC before it completes processing of the message.
	
	Painting in the nonclient area of a window is not recommended. If an application
	changes the nonclient area of its window, the user can become confused because
	the familiar Windows controls change appearance or are not available. An
	application should not corrupt other windows on the display.
	
	Additional query words: 3.00 3.10 3.50 4.00
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
