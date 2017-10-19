---
layout: page
title: "Q181935: WD97: FileOpen and Auto Macros Renamed"
permalink: /kb/181/Q181935/
---

## Q181935: WD97: FileOpen and Auto Macros Renamed

	Article: Q181935
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbprogramming kbdta kbvirus word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a FileOpen, AutoExec, AutoNew, or AutoOpen macro in Microsoft Word
	97 for Windows, and WinStone anti-virus software is installed, the macro will
	not run. When you restart Word, the macros have been renamed to similar names,
	such as FileOpenOld.
	
	CAUSE
	=====
	
	The Macro-Virus prevention feature in WinStone anti-virus software eliminates
	the FileOpen, AutoExec, AutoNew and AutoOpen macros.
	
	WORKAROUND
	==========
	
	To work around this behavior, disable the automatic macro virus protection by
	moving the Lmdwav.dll file out of the Winword/Startup folder. You can still run
	the WinStone anti-virus package manually; however, WinStone will not be able to
	automatically scan for macro viruses.
	
	MORE INFORMATION
	================
	
	For information about how to move files in Microsoft Windows, on the Start menu,
	click Help. Click the Index tab and type "moving" (without quotation marks), and
	then double-click the "files or folders" entry. Double-click "Moving a file or
	folder."
	
	WinStone Anti-Virus is manufactured by WinStone, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: start launch error command
	
	======================================================================
	Keywords          : kb3rdparty kbprogramming kbdta kbvirus word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
