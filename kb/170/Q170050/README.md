---
layout: page
title: "Q170050: Error Message &quot;Can't Find Msnet32.dll&quot; With NT Server Tools"
permalink: /kb/170/Q170050/
---

## Q170050: Error Message &quot;Can't Find Msnet32.dll&quot; With NT Server Tools

{% raw %}

	Article: Q170050
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Server Tools on your Windows NT 4.0 Workstation from the
	Windows NT 4.0 Server compact disc, the error message "Can't find MSNET32.DLL"
	appears when you try to run the application.
	
	CAUSE
	=====
	
	The Windows 95 version is installed instead of the Windows NT version of Server
	Tools.
	
	RESOLUTION
	==========
	
	Manually remove all shortcuts for Server tools from the start menu. To do this,
	right-click on the Start Menu, and choose Open. Highlight each component such as
	Server Manager. Right-click and choose properties. Select the shortcut tab and
	choose Find target. Delete these executable files. Close the Windows Explorer
	window, press cancel, and delete the shortcut.
	
	After you follow the steps listed in the preceding paragraph, install the server
	tools by running setup.bat from:
	
	  <drive>:\clients\srvtools\winnt
	
	NOTE: The Add/Remove hardware option from control-panel does not work.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
