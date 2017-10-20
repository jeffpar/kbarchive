---
layout: page
title: "Q180286: Reg.exe DELETE and UPDATE Functions Do Not Work as Expected"
permalink: /kb/180/Q180286/
---

## Q180286: Reg.exe DELETE and UPDATE Functions Do Not Work as Expected

{% raw %}

	Article: Q180286
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Registry Manipulation Utility (Reg.exe) 1.0 included with the
	Microsoft Windows NT Server Version 4.0 Resource Kit, Supplement Two, the
	following symptoms occur:
	
	- When you use the DELETE function with the /F or /f parameter, the program
	  prompts you for deletion even though the online help states that these
	  parameters provide for the creation of batch files for automating the
	  deletion of registry entries without user confirmation.
	
	- When you use the UPDATE function to modify a DWORD or BINARY registry value,
	  you receive the following error message:
	
	  DWORD Value:
	
	  BUGBUG: Need to deal with 32 bit numbers
	
	  BINARY Value:
	
	  BUGBUG: Need to deal with binary data
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain Registry Manipulation Utility 1.05 from the
	following Microsoft FTP site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/i386
	
	NOTE: Registry Manipulation Utility 1.05 is contained in the self- extracting
	archive file, Reg_x86.exe.
	
	To work around this issue, follow these steps:
	
	1. At a command prompt, type the following line, and then press ENTER
	
	  " cd <drive>:\<ntreskit>" (without the quotation marks)
	
	  where <drive> is the drive letter on which Windows NT Server Version 4.0
	  Resource Kit, Supplement Two is installed, and <ntreskit> is the folder
	  in which Windows NT Server Version 4.0 Resource Kit, Supplement Two is
	  installed.
	
	2. At a command prompt, type the following line, and then press ENTER:
	
	  " edit confirm.txt" (without the quotation marks)
	
	3. Type the letter Y, and then press ENTER.
	
	4. Press ALT+F, press S (to save), and then press X (to exit).
	
	5. At a command prompt, type the following line, and then press ENTER:
	
	  " reg delete hklm\Software\MyCo\MyApp\Timeout < confirm.txt" (without the
	  quotation marks)
	
	This causes the prompt to delete the registry key or value to be automatically
	answered "Yes."
	
	MORE INFORMATION
	================
	
	Registry Manipulation Utility 1.05 includes the following changes:
	
	- The DELETE function /F switch has been changed to /FORCE.
	
	- The UPDATE function is fixed to allow REG_DWORD changes. You no longer
	  receive an error message. Also, REG_BINARY changes are no longer allowed.
	
	For more information about changes in Registry Manipulation Utility 1.05, please
	see the Readme.txt file contained in the Reg_x86.exe file.
	
	Additional query words: prodnt NTS reskit utils command line DOS prompt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
