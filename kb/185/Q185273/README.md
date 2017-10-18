---
layout: page
title: "Q185273: Window Closes After Choosing End Task in Edit Alias Dialog Box"
permalink: kb/185/Q185273/
---

## Q185273: Window Closes After Choosing End Task in Edit Alias Dialog Box

	Article: Q185273
	Product(s): Internet Information Server
	Version(s): WINDOWS:4.0,95
	Operating System(s): 
	Keyword(s): kbui mspwsw95 win95
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server version 4.0 for Windows 95 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you right-click a folder, click Sharing, click the Web Sharing tab, click
	Share This Folder, click Cancel, click the question mark (?), click OK or Cancel
	(but are unable to do so), press CTRL+ALT+DELETE, click Edit Alias, and then
	click End Task twice, open Windows Explorer-type folders (such as Control Panel
	or Printers) may also close, you may be unable to save changes to Personal Web
	Server settings, and icons on the taskbar may disappear.
	
	CAUSE
	=====
	
	This behavior can occur if you click End Task to close an instance of Windows
	Explorer that is not responding. The Web Sharing tab that is available with
	Personal Web Server updates Windows Explorer, and if you close an instance of
	Windows Explorer that is not responding, all instances of Windows Explorer
	windows close before you can save any changes.
	
	RESOLUTION
	==========
	
	To work around this behavior, save any changes before you click Edit Alias and
	then click End Task.
	
	MORE INFORMATION
	================
	
	For more information about the disappearance of icons from the taskbar, see the
	following article in the Microsoft Knowledge Base:
	
	  Q180498 Icons Disappear from Taskbar After Ending Explorer.exe
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbui mspwsw95 win95 
	Technology        : kbOSWin95 kbOSWinSearch kbPersWebServSearch kbZNotKeyword3 kbPersWebServ400Win95
	Version           : WINDOWS:4.0,95
	Issue type        : kbprb
	
	=============================================================================
	
