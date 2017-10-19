---
layout: page
title: "Q153000: All Drives in My Computer Are Hidden"
permalink: /kb/153/Q153000/
---

## Q153000: All Drives in My Computer Are Hidden

	Article: Q153000
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kbtool win95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although you have turned off the Hide Drives In My Computer option in System
	Policy Editor, all the drives in My Computer may still be hidden.
	
	CAUSE
	=====
	
	This behavior occurs if you use System Policy Editor to create a system policy
	with the Hide Drives In My Computer option enabled. This option cannot be
	disabled in a system policy once it has been enabled because of a setting in the
	default template (Admin.adm).
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the default template. To do so, follow these
	steps:
	
	1. Make a copy of the default system policy template file (Admin.adm). This file
	  is located in the Windows\INF folder. Note that this folder may be hidden.
	
	2. Use Notepad to open the Admin.adm file.
	
	3. Search for the text "hidedrives" (without the quotation marks). The default
	  entry for this section should be:
	
	  POLICY !!HideDrives
	  VALUENAME "NoDrives"
	  VALUEON NUMERIC 67108863; low 26 bits on (1 bit per drive)
	
	4. Modify this section to read as follows:
	
	  POLICY !!HideDrives
	  VALUENAME "NoDrives"
	  VALUEON NUMERIC 67108863 ; low 26 bits on (1 bit per drive)
	  VALUEOFF NUMERIC 0 ; ******
	
	5. Save and then close the file.
	
	MORE INFORMATION
	================
	
	Once you have enabled the Hide Drives In My Computer option in System Policy
	Editor, the option cannot be permanently disabled using the default template. If
	you disable the option in System Policy Editor, the change stays in effect only
	until the next time you start System Policy Editor. After you start System
	Policy Editor, the option becomes enabled again when you restart your computer.
	
	System Policy Editor (Poledit.exe) is available in the Admin\Apptools\ Poledit
	folder on the Windows 95 CD-ROM. Use the Add/Remove Programs tool in Control
	Panel to install System Policy Editor.
	
	NOTE: System Policy Editor is not included in the floppy disk version of Windows
	95. You can download Policy.exe, a self-extracting executable file containing
	Poledit.exe, from online services. Please see the following article in the
	Microsoft Knowledge Base for information about downloading Policy.exe:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	Additional query words: winnt prodnt
	
	======================================================================
	Keywords          : kbenv kbtool win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
