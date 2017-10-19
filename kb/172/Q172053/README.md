---
layout: page
title: "Q172053: Restoring .lnk File Associations"
permalink: /kb/172/Q172053/
---

## Q172053: Restoring .lnk File Associations

	Article: Q172053
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select programs from the Start menu or shortcuts nothing happens, the
	"Open with" dialog box is displayed or a specific program runs.
	
	CAUSE
	=====
	
	The .lnk association is either missing, incorrect or corrupted. Because all
	shortcuts and Program Menu items are files with a .lnk extension. Selecting one
	either brings up the "Open with" dialog box, a specific application such as
	Notepad.exe or Wordpad.exe or doesn't do anything.
	
	RESOLUTION
	==========
	
	You can correct this by either restoring the registry key from another working
	computer or manually replacing the registry key.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To restore the registry key from another computer, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe) and select the following subkey:
	
	  HKEY_CLASSES_ROOT\.lnk
	
	2. From the Edit menu, click Delete.
	
	3. On another Windows NT 4.0 computer, start Registry Editor (Regedt32.exe) and
	  select the registry key HKEY_CLASSES_ROOT\.lnk.
	
	4. From the Registry menu, click Save Key.
	
	5. Copy this file to the computer exhibiting the problem or to a floppy disk.
	
	6. On the computer exhibiting the problem, recreate the registry key by
	  selecting HKEY_CLASSES_ROOT and then from the Edit menu, click Add Key. Type
	  .lnk for the key name.
	
	7. Select the new key, click Restore from the Registry menu, and select the file
	  from the other computer or floppy disk.
	
	8. Quit Registry Editor and restart the computer. Test a Program menu item or
	  shortcut.
	
	To manually enter the information, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe), select the HKEY_CLASSES_ROOT subkey,
	  and then click Add Key on the Edit menu.
	
	2. In the Key Name box type ".lnk" (without quotation marks), and then click OK.
	  Note that you should leave the Class box blank.
	
	3. In the Add Value dialog box, click OK to leave the Value Name blank, and
	  click REG_SZ in the Data Type list.
	
	4. In the String Editor box, type "lnkfile" (without quotation marks), and then
	  click OK.
	
	5. Select the .lnk key you just re-created under the HKEY_CLASSES_ROOT subkey.
	  On the Edit menu, click Add Key and then type "ShellNew" (without quotation
	  marks). Note that you should leave the Class box blank.
	
	6. Click Add Value on the Edit menu, type "command" (without quotation marks) in
	  the Data Name box, click REG_SZ in the Data name box, and then type "RunDLL32
	  AppWiz.Cpl,NewLinkHere %1" (without quotation marks) as the string value.
	
	7. Quit Registry Editor, and then restart the computer.
	
	Additional query words: Howto file types
	======================================================================
	Keywords          : kbfile 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
