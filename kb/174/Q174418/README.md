---
layout: page
title: "Q174418: Internal Commands not Recognized by Schedule Service"
permalink: /kb/174/Q174418/
---

## Q174418: Internal Commands not Recognized by Schedule Service

{% raw %}

	Article: Q174418
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows NT 3.51, output from a batch file run by the Schedule service can be
	redirected to a log file. An example of this procedure is:
	
	     AT 10:00 "dir > c:\logfile.txt"
	
	The resulting contents of C:\Logfile.txt would be a directory listing of the
	current directory. However, the same command issued in Windows NT 4.0 will
	produce the following example:
	
	  Added a new job with job ID = 0
	
	MORE INFORMATION
	================
	
	In Windows NT 4.0, the Schedule service no longer understands internal commands
	as it did in Windows NT 3.51. The Schedule service in Windows NT 4.0, writes a
	confirmation that the job has been scheduled to the log file. To redirect output
	of internal commands to a text file, create a batch job and schedule the batch
	job using the "cmd /c" switch. Modifying the previous example, you would type:
	
	AT 10:00 cmd /c c:\batchfile.bat
	
	where the contents of batchfile.bat are:
	
	    Dir > c:\logfile.txt
	
	The resulting contents of c:\logfile.txt would be a directory listing of the
	current directory.
	
	Additional query words: prodnt at command scheduler winat
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb kbinfo
	
	=============================================================================
	

{% endraw %}
