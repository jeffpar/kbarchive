---
layout: page
title: "Q93313: Windows Components Not Installed by Default SETUP.SHH File"
permalink: kb/093/Q93313/
---

## Q93313: Windows Components Not Installed by Default SETUP.SHH File

	Article: Q93313
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install Windows for Workgroups using the default SETUP.SHH file for
	automated setup, the following components are not installed:
	
	- Calculator
	
	- Calculator Help
	
	- Cardfile
	
	- Cardfile Help
	
	- Character Map
	
	- Character Map Help
	
	- Chat
	
	- Chat Help
	
	- ClipBook Viewer Help
	
	- Clock
	
	- Dr. Watson
	
	- Expand
	
	- File Manager Help
	
	- Glossary Help
	
	- Help
	
	- Help Help
	
	- Mail
	
	- Mail Help
	
	- Media Player
	
	- Media Player Help
	
	- Net Watcher
	
	- Net Watcher Help
	
	- Notepad
	
	- Notepad Help
	
	- Object Packager
	
	- Object Packager Help
	
	- Paintbrush
	
	- Paintbrush Help
	
	- PIF Editor Help
	
	- Print Manager Help
	
	- Recorder
	
	- Recorder Help
	
	- Registration Editor Advanced Help
	
	- Registration Editor Help
	
	- Schedule Plus
	
	- Schedule Plus Help
	
	- Sound Recorder
	
	- Sound Recorder Help
	
	- Terminal
	
	- Terminal Help
	
	- Windows Tutorial
	
	- WinMeter
	
	- README files
	
	- Game files
	
	- Screen Saver files
	
	- Bitmap files
	
	These components are referred to in the [dontinstall] section of SETUP.SHH. To
	install them during Setup, you must remove or comment the appropriate items. For
	example, to install all of the above components, modify the [dontinstall]
	section, using semicolons with each item, to look like this:
	
	     [dontinstall]
	     ;accessories
	     ;readmes
	     ;games
	     ;screensavers
	     ;bitmaps
	
	MORE INFORMATION
	================
	
	In Microsoft Windows operating system 3.1, the [dontinstall] section is used to
	specify components to be installed. If an item appears in this section, the
	appropriate components were installed. In Windows for Workgroups, however, the
	opposite is true -- any items appearing in this section (all by default) are not
	installed.
	
	If you have already completed installation, you can add any or all of these
	components to your Windows for Workgroups installation by using the Add/Remove
	Windows Components option on the Options menu of Windows for Workgroups Setup.
	
	Additional query words: 3.10 3.11 drwatson
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
