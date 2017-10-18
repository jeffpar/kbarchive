---
layout: page
title: "Q246733: INFO: Windows CE Web Browsers"
permalink: kb/246/Q246733/
---

## Q246733: INFO: Windows CE Web Browsers

	Article: Q246733
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows CE currently supports two Web browsers:
	
	1. Pocket Internet Explorer
	2. Internet Explorer for Windows CE
	
	The information in this article provides a breakdown of both browsers.
	
	MORE INFORMATION
	================
	
	Pocket Internet Explorer:
	
	Features:
	
	Integrated with the Windows CE Desktop
	Supported in Windows CE 1.0+
	
	Supported:
	
	HTML 3.2
	Microsoft JScript
	
	Unsupported:
	
	Cascading Style Sheets
	Dynamic HTML
	ActiveX controls
	Java Applets or Applications
	Microsoft Visual Basic Scripting Edition (VBScript)
	
	Memory Footprint:
	
	Approximately 1.3MB
	
	Hosting:
	
	HTML Viewer Control
	
	Used by:
	
	Pocket Internet Explorer 1.0
	Windows CE Help (PEGHELP.EXE)
	
	Files for hosting:
	
	htmlctrl.h, htmlview.lib, htmlview.dll
	
	Hosting sample:
	
	Please refer to article "Creating an HTML Viewer Control" located at:
	
	  http://msdn.microsoft.com/library/wcedoc/wcehpc/jup_prog_30.htm
	
	Internet Explorer for Windows CE:
	
	Features:
	
	Ported from Internet Explorer 4.01, SP 2
	Supported in Windows CE 2.12
	
	Supported:
	
	HTML 4.0
	Microsoft JScript
	Cascading Style Sheets (CSS1 compliant)
	Dynamic HTML
	ActiveX controls
	Java Applets or Applications
	International language support (Unicode characters)
	Images (GIF, JPEG, BMP, and XBM)
	Multimedia (using Microsoft DirectShow)
	
	Unsupported:
	
	Data binding
	Microsoft Visual Basic Scripting Edition (VBScript)
	Extensible Markup Language (XML)
	Internet Code Download
	Portable Network Graphics (PNG)
	Microsoft Virtual Machine
	Gopher
	Recreation Software Advisory Council on the Internet
	(RSACi) rating system
	Filters and transitions
	
	Memory Footprint:
	
	Approximately 3.1MB
	
	Hosting:
	
	Web Browser Control
	
	Files for hosting:
	
	exdisp.h, shdocvw.dll
	
	Interfaces for hosting:
	
	IWebBrowser2
	
	Hosting sample:
	
	Please refer to article "Using the WebBrowser Control" located at:
	
	  http://msdn.microsoft.com/workshop/c-frame.htm?/workshop/browser/webbrowser/webbrowser.asp
	
	REFERENCES
	==========
	
	More information about both browsers is available at the MSDN Online Web
	Workshop:
	
	  http://msdn.microsoft.com/workshop/c-frame.htm?942956883159#/workshop/essentials/windowsce/internet_support.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
