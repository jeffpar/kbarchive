---
layout: page
title: "Q124122: File Manager: Association Fails if Path to Command Has Spaces"
permalink: /kb/124/Q124122/
---

## Q124122: File Manager: Association Fails if Path to Command Has Spaces

{% raw %}

	Article: Q124122
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows NT version 3.5, a file association created in File Manager will fail
	if a directory in the path has spaces in its name.
	
	For example: If WINWORD.EXE is located in D:\WIN32 APPS\WINWORD, choosing a .DOC
	file in File Manager displays a Program Not Found dialog box with the following
	message:
	
	  Cannot find WIN32.EXE.
	  This file is needed to run files with the extension 'DOC.'
	
	To work around this problem, edit the command string:
	
	1. From the File menu in File Manager choose Associate.
	
	2. Select DOC for the extension
	
	3. Choose Change Type.
	
	4. Enclose the complete path in quotes in the Command field.
	
	5. Choose OK.
	
	NOTE: You can also modify the command string in the following location in the
	Registry:
	
	  \HKEY_CLASSES_ROOT\<extension>\shell\open\command
	
	where <extension> is the file type or extension you wish to modify. To work
	around this problem, include the complete path to the executable file in the
	command value.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	CAUSE
	=====
	
	Spaces have historically been interpreted as characters separating arguments or
	commands from one another. Since Windows NT version 3.5 allows files and
	directories to contain spaces in their names, many programs may need to be
	modified to accommodate the new file and directory structure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available. This problem was corrected in Windows NT
	version 3.51.
	
	Additional query words: prodnt blank winfile "Cannot run program - Not enough memory to run application"
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
