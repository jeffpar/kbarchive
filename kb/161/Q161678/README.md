---
layout: page
title: "Q161678: Regedit.exe Cannot Search for DWORD or Binary Data"
permalink: /kb/161/Q161678/
---

## Q161678: Regedit.exe Cannot Search for DWORD or Binary Data

	Article: Q161678
	Product(s): Microsoft Windows NT
	Version(s): 4.0 95
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Find tool in Registry Editor (Regedit.exe) searches for string values only.
	It is not able to locate data contained in a DWORD or Binary value.
	
	To search for data contained in a DWORD or Binary value, you must first export
	the branch you want to search to a text file. Then, open the file in a text
	editor and use the editor's search tool to find the data.
	
	NOTE: Regedit.exe is included with Windows NT 4.0 in addition to Regedt32.exe.
	The Windows NT version of Regedit.exe is identical to the version in Windows 95.
	
	MORE INFORMATION
	================
	
	To search for DWORD data (such as "0x1234abcd") or Binary data (such as "12 34
	ab cd") using this technique, follow these steps:
	
	1. Start Regedit.exe and click the HKEY_LOCAL_MACHINE branch.
	
	2. On the Registry menu, click Export Registry File.
	
	3. Type an arbitrary file name (for example, Hkey_lm.txt), and then verify that
	  Save As Type is set to Registration Files and that Export Range is set to
	  Selected Branch. Click Save.
	
	  NOTE: Setting Export Range to All exports the entire registry to a text file,
	  not just the selected branch.
	
	4. Locate the text file and open it with any text editor (such as Notepad).
	
	5. Use the text editor's search feature to find the data. The format of the text
	  string depends on the data type (DWORD or Binary). For example, the sample
	  binary value "12 34 ab cd" appears as "hex:12,34,ab,cd" and the sample DWORD
	  value "0x1234abcd" appears as "dword:1234abcd."
	
	Additional query words: win95 prodnt reg hack
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 4.0 95
	Issue type        : kbhowto
	
	=============================================================================
	
