---
layout: page
title: "Q143189: Creating Separate FTP, Gopher, and WWW Text Log Files"
permalink: /kb/143/Q143189/
---

## Q143189: Creating Separate FTP, Gopher, and WWW Text Log Files

{% raw %}

	Article: Q143189
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Internet Information Server records FTP, Gopher and WWW server logon
	activities to the %SystemRoot%\System32\LogFiles directory by default. This
	article describes how to record the log information to three separate files.
	
	MORE INFORMATION
	================
	
	To write to different logs files, create three directories under
	%SystemRoot%\system32\LogFiles as follows:
	
	  %SystemRoot%\system32\LogFiles\FTP
	  %SystemRoot%\system32\LogFiles\Gopher
	  %SystemRoot%\system32\LogFiles\WWW
	
	1. From Internet Server Manager select one service at a time and click on the
	  "Logging" tab.
	
	2. Modify the "Log file directory" to point to the new corresponding path shown
	  above.
	
	3. Click on OK.
	
	4. Follow the procedure for steps 1 through 3 for FTP, Gopher, and WWW.
	
	5. Stop and restart all three services from the Internet Server Manager.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
