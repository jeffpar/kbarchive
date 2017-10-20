---
layout: page
title: "Q232096: How to Verify a Successful Installation of DirectPlay 6.1a"
permalink: /kb/232/Q232096/
---

## Q232096: How to Verify a Successful Installation of DirectPlay 6.1a

{% raw %}

	Article: Q232096
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbimu msgame
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Microsoft DirectPlay 6.1a, you are not notified whether or not
	the installation is successful, and you are not prompted to restart your
	computer.
	
	This article describes how to verify that the installation of DirectPlay 6.1a
	finished successfully.
	
	MORE INFORMATION
	================
	
	To verify that the installation of DirectPlay 6.1a finished successfully, use
	the DirectX Diagnostic Tool (Dxdiag.exe). To do this:
	
	1. Quit all running programs and restart your computer.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "dxdiag.exe" (without the quotation marks).
	
	4. Click the DirectX Files tab.
	
	5. In the list of DirectX Files, note the version number listed beside the
	  Dplayx.dll file.
	
	6. Click Exit.
	
	If the version number listed beside the Dplayx.dll file is 4.06.03.0518 or later,
	the installation of DirectPlay 6.1a finished successfully.
	
	For additional information about how to use the DirectX Diagnostic Tool, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q190900 DirectX: Description of the DirectX Diagnostic Tool
	
	Additional query words: direct-x dx6 dplay61a msngz zone installs setup update win95x win98x
	
	======================================================================
	Keywords          : kbsetup kbtool kbimu msgame 
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
