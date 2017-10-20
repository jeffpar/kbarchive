---
layout: page
title: "Q135604: DIR /O:N /S Does Not Sort Directory Names in Alphanumeric Order"
permalink: /kb/135/Q135604/
---

## Q135604: DIR /O:N /S Does Not Sort Directory Names in Alphanumeric Order

{% raw %}

	Article: Q135604
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOM
	-------
	
	When you run the DIR /O:N /S command at a Windows NT command prompt to list
	directory names in ascending alphanumeric order, the directory names that
	contain one or more numbers are listed after, instead of before, the names
	containing only letters.
	
	This problem occurs only with directory name listings; program and data
	files are listed in the correct order.
	
	Example
	-------
	
	Your C drive has the following directories:
	
	  C:\WIN32
	  C:\WINDOWS
	  C:\444
	
	You issue the DIR /O:N /S command and the output appears in the following
	incorrect sort order:
	
	  C:\WINDOWS
	  C:\WIN32
	  C:\444
	
	The directories should be listed in the following order:
	
	  C:\444 C:\WIN32 C:\WINDOWS
	
	CAUSE
	=====
	
	The directories are located on a Windows NT partition using the file allocation
	table (FAT) file system.
	
	WORKAROUND
	==========
	
	To work around this problem, convert your FAT partition to use the Windows NT
	file system (NTFS).
	
	To convert your FAT partition to NTFS use the Windows NT CONVERT.EXE utility
	program. To get help on CONVERT.EXE, type the following at a Windows NT command
	prompt:
	
	  convert /?
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt vdm sort
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
