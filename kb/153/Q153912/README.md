---
layout: page
title: "Q153912: Internet Shortcuts Do Not Function After Reinstalling MSN"
permalink: kb/153/Q153912/
---

## Q153912: Internet Shortcuts Do Not Function After Reinstalling MSN

	Article: Q153912
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5,95
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 95 
	- The Microsoft Network versions 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click an Internet shortcut, your Web browser may not open or
	connect to the Web page.
	
	CAUSE
	=====
	
	Internet shortcuts may become associated with the Ccdialer.exe file instead of
	the Rundll32.dll file. This behavior can occur after uninstalling and
	reinstalling MSN, The Microsoft Network, version 1.2, without also reinstalling
	Microsoft Internet Explorer. This may also occur with third-party Web browsers,
	which may alter the file association for Internet shortcuts.
	
	RESOLUTION
	==========
	
	To resolve this issue, set up the correct file association for Internet
	shortcuts, or remove and reinstall Internet Explorer.
	
	To set up the correct file association for Internet shortcuts, follow these
	steps:
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. On the View menu, click Options.
	
	3. Click the File Types tab.
	
	4. In the Registered File Types box, click Internet Shortcut, and then click
	  Edit.
	
	5. In the Actions box, click Open, and then click Edit.
	
	6. In the Application Used To Perform Action box, type the following line:
	
	  "rundll32.exe shdocvw.dll,OpenURL %1" (without the quotation marks)
	
	  NOTE: Make sure to type a space before "%1". The case and spacing of the
	  characters must match this line exactly.
	
	7. Click OK or Close until you return to Windows.
	
	To remove and reinstall Internet Explorer, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. In the list of installed programs, click Internet Explorer.
	
	4. Click Add/Remove to remove Internet Explorer.
	
	5. Reinstall Internet Explorer.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5,95
	Issue type        : kbprb
	
	=============================================================================
	
