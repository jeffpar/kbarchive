---
layout: page
title: "Q149230: XCLN: Setup Error: &quot;Exchange Setup Was Interrupted...&quot;"
permalink: /kb/149/Q149230/
---

## Q149230: XCLN: Setup Error: &quot;Exchange Setup Was Interrupted...&quot;

{% raw %}

	Article: Q149230
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing the Windows 3.x version of the Microsoft Exchange client, you
	may receive the following error:
	
	  Microsoft Exchange setup was interrupted before your new software was fully
	  installed.
	
	  You can run Microsoft Exchange Setup in its entirety at a later time to
	  complete the installation.
	
	CAUSE
	=====
	
	This error appears when you have another older version of Mapi.dll already
	installed on your computer that has a newer version stamp -- a version number
	newer then the one being installed by Microsoft Exchange.
	
	For example, Novell GroupWise installs a pre-Exchange version of Mapi.dll that
	has a version stamp of 4.1. Before Exchange setup tries to copy Mapi.dll, it
	checks the version of the file. If the version of the previously installed file
	is newer than the one that setup is trying to install (4.0), the setup skips the
	file without copying it. This in turn causes the error.
	
	RESOLUTION
	==========
	
	To resolve the problem:
	
	
	- Delete the current Mapi.dll file from the Windows\System directory, and then
	  re-run Microsoft Exchange setup.
	
	  -or-
	
	- To correct this problem on multiple workstations, modify the Exchang.inf file
	  as outlined below.
	
	Steps to Modify Exchang.inf File
	--------------------------------
	
	1. Make a backup copy of your Exchang.inf file before proceeding.
	
	2. Use Notepad to open the Exchang.inf file.
	
	3. Find the following line in the [MAPI] section:
	
	  "mapi.dll"=5,mapi.dll,,,,1996-03-11,,1033,,,,,,,,
	     890464,SYSTEM,,,4.0.837.7,
	
	4. The number preceding the last comma is the version number of the Mapi.dll
	  file that is being installed. Change this number to be greater than the
	  version number of the Mapi.dll file you already have installed. For example,
	  if the currently installed file is version 4.1, change the line as follows:
	
	  "mapi.dll"=5,mapi.dll,,,,1996-03-11,,1033,,,,,,,,
	     890464,SYSTEM,,,4.1.0.1,
	
	5. Save Exchang.inf as a text file.
	
	6. Re-run setup.
	
	This will result in the 4.0.837.7 version of Mapi.dll being written to the
	Windows\System directory.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: NetWare WordPerfect Office
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
