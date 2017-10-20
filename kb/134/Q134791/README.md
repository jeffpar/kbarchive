---
layout: page
title: "Q134791: PRB: Error at End of Visual FoxPro Installation on Windows NT"
permalink: /kb/134/Q134791/
---

## Q134791: PRB: Error at End of Visual FoxPro Installation on Windows NT

{% raw %}

	Article: Q134791
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbsetup kbvfp300 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A person installing Visual FoxPro on a computer using Windows NT may get this
	message:
	
	  Setup Error: Object ID <id number>. Call to SqlConfigDataSource().
	  Procedure failed."
	
	The message may alternatively state:
	
	  Setup error in visual pass .... 553. Call to SQLConfigDataSource(). Procedure
	  failed.
	
	CAUSE
	=====
	
	A previous (beta) version of either Visual FoxPro or SQL Server version 6.0 may
	or have been installed before the retail version of Visual FoxPro installation.
	
	RESOLUTION
	==========
	
	Remove the ODBC files inserted in the Windows NT SYSTEM32 subdirectory, and
	possibly, in the Windows NT root directory so that Visual FoxPro's Setup program
	will install current versions of those files.
	
	The information presented here is one alternative known to be successful in
	multiple situations. There may be situations in which using the information in
	this article will not eliminate the cause of the error messages.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	People installing the retail release of Visual FoxPro on computers that had
	earlier (beta) versions installed or that had pre-release versions of SQL Server
	version 6.0 installed may get Setup Error messages at the end of the
	installation process. This occurs when the Visual FoxPro Setup program is
	populating the Windows NT desktop program group with icons.
	
	In other situations, the messages appear even though these pre-release version(s)
	have never been installed.
	
	The message states:
	
	  Setup Error: Object ID <id number>.
	  Call to SqlConfigDataSource(). Procedure failed.
	
	This error message will be repeated a number of times, with a different id number
	each time. After the last occurrence, the Setup process will complete populating
	the program group with icons, and pronounce that setup is complete.
	
	In the beginning volume of source media for the retail version of Visual FoxPro
	for Windows 3.0 (Disk 1 of floppy disks, the CD-ROM for the Professional
	Version), you will find a README.TXT file. Within the text in that file is a
	section titled "Reinstalling Visual FoxPro over a Pre- release Version." That
	section contains a message advising the following:
	
	  "If you encounter this problem, delete all ODBC files (ODBC*.*) from the
	  Windows NT SYSTEM32 directory, and reinstall Visual FoxPro."
	
	For most installations this has been successful in eliminating the error
	messages. For some, however, it has been necessary to remove the following
	additional files:
	
	From the Windows NT SYSTEM32 subdirectory:
	
	  ODDBSE32.DLL
	  ODEXL32.DLL
	  ODFOX32.DLL
	  ODPDX32.DLL
	  ODTEST32.DLL
	
	From the Windows NT root directory (Windows, Winnt35 or other):
	
	  ODBC.INI
	  ODBCDDP.INI
	  ODBCINST.INI
	  ODBCISAM.INI
	
	
	Additional query words: 3.11 VFoxWin
	
	======================================================================
	Keywords          : kbsetup kbvfp300 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
