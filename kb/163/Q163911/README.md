---
layout: page
title: "Q163911: Cacls.exe May Not Redirect Output to a File"
permalink: kb/163/Q163911/
---

## Q163911: Cacls.exe May Not Redirect Output to a File

	Article: Q163911
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT Cacls.exe command to redirect access control list
	information to a file instead of the screen, you may get unexpected results
	depending on the version of Cacls.exe that you are using.
	
	MORE INFORMATION
	================
	
	Cacls.exe is a command-line utility that ships with all versions of Windows NT.
	It can display, replace, or edit, existing Access Control Lists (ACL) for files
	and directories on an NTFS volume. Cacls.exe is useful for resource
	administration and can also be helpful for troubleshooting issues related to
	permissions.
	
	You can use Cacls.exe with the /t and /c switches to display ACL information.
	
	For example, if you have a directory called c:\temp and you wanted to display the
	ACL for this directory, subdirectories, and its files, you could issue these
	commands:
	
	  cacls c:\temp /t /c
	
	  cacls c:\temp /t /c |more
	
	You can also output the result to a text file with this command:
	
	  cacls c:\temp /t /c > <filename.txt>
	
	The expected behavior is that the information would be written to a file rather
	than to the screen. However, under Windows NT 4.0 Service Pack 2, the file is
	created, but contains only blank lines. Redirecting using the pipe (|) symbol
	opens Notepad with the appropriate filename, but again the file itself is
	empty.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, use the original version of Cacls.exe from Windows NT
	4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 Service
	Pack 2.
	
	Additional query words: text file
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
