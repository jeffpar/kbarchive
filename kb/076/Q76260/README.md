---
layout: page
title: "Q76260: HOWTO: How to Create Device-Independent Printing Code"
permalink: /kb/076/Q76260/
---

## Q76260: HOWTO: How to Create Device-Independent Printing Code

{% raw %}

	Article: Q76260
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows provides a device-independent platform for application developers.
	Device independence applies to printing as well. To write code to work with any
	printer driver, applications must not rely on any special feature in a printer
	driver. Instead, applications should direct all requests through the Windows
	Graphical Device Interface (GDI).
	
	MORE INFORMATION
	================
	
	There are two major classes of printers: raster printers and PostScript
	printers. This article is directed towards application support for raster
	printers.
	
	With the exception of the standard printer escapes, applications should not rely
	on any printer escape to be supported in a particular printer driver. Note that
	the printer escapes are supported in Windows 3.1, but it is recommended that you
	use the new equivalent functions, instead of the escapes.
	
	The standard escapes/functions are: STARTDOC/StartDoc(), ENDDOC/EndDoc(),
	NEXTBAND, NEWFRAME, SETABORTPROC/SetAbortProc(), and ABORTDOC/AbortDoc(). The
	remaining escapes are optional for printer drivers. Applications should use the
	QUERYESCSUPPORT escape to test for the support of optional escapes. Applications
	should not depend on private knowledge of how a particular driver works.
	
	For example, the DRAWPATTERNRECT escape is available on certain devices. The
	following code fragment determines if the DRAWPATTERNRECT escape is supported on
	the installed device. If not, an alternative function, PatBlt(), is used to
	create the output.
	
	     short i;
	
	     i = DRAWPATTERNRECT;
	
	     if (Escape(hPr, QUERYESCSUPPORT, sizeof(i), (LPSTR)&i, NULL))
	
	        Escape(hPr, DRAWPATTERNRECT, sizeof(lpPatRect),
	                 (LPSTR)lpPatRect, NULL);
	
	     else
	
	        PatBlt(hPr, .....);
	
	Of the remaining escapes, the following are used frequently: GETPHYSPAGESIZE,
	GETPRINTINGOFFSET, PASSTHROUGH, and DRAWPATTERNRECT. An application should
	minimize the number of escapes that it uses.
	
	Another area of device independence applies to ExtDeviceMode(). Applications
	should not allow the user to change printer settings globally. If the user wants
	to change the printer settings for all applications, the Control Panel utility
	should be used. It is more appropriate for printer settings to be associated
	with an application, a document, or a particular set of pages in a document. For
	more information please see the Knowledge Base article:
	
	  "Using ExtDeviceMode() to Modify Printer Settings"
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
