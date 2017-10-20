---
layout: page
title: "Q103223: Trapping System RIPs and Other Notification Messages"
permalink: /kb/103/Q103223/
---

## Q103223: Trapping System RIPs and Other Notification Messages

{% raw %}

	Article: Q103223
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Ripwatch uses the TOOLHELP dynamic-link library (DLL) to trap system RIPs and
	other notification messages, and displays them in a window.
	
	When developing Microsoft Windows-based applications, you should always use the
	debugging version of Windows. This special build of the system is distributed
	with the Windows Software Development Kit (SDK). It tests for invalid parameters
	to Windows function calls and reports other problems such as failing to free
	graphics device interface (GDI) objects when an application exits. If you don't
	know about the debugging version, you are not getting the most from your SDK;
	worse still, you may be preparing to ship a potentially faulty product.
	
	The default action for reporting detected errors is to send a message to a debug
	terminal connected to COM1. This requires that you have a terminal attached to
	the port to see these messages. This can be a waste of desktop space, a source
	of annoying beeps, and may tie up an otherwise useful communications port. The
	TOOLHELP.DLL included with the Windows SDK allows you to hook these messages
	before they reach the communications port. The Ripwatch sample application
	displays the messages in a window. The display includes a textual description of
	the RIP error code. Ripwatch also allows you to copy the text to the Clipboard,
	save it in a file, or print it.
	
	There is a known problem when running Ripwatch with Microsoft CodeView(R) for
	Windows. If you try to start CodeView while Ripwatch is running, CodeView
	reports an out-of-memory condition. If you try to start Ripwatch after CodeView
	has been started, CodeView will usually GP fault.
	
	Ripwatch was built and tested under Microsoft Windows version 3.1 and the
	Microsoft C/C++ version 7.0 compiler.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Ripwatch.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: kbfile softlib RIPWATCH.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
