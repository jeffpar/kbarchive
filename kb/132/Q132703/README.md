---
layout: page
title: "Q132703: HOWTO: Set Up SourceSafe for the Macintosh Manually"
permalink: /kb/132/Q132703/
---

## Q132703: HOWTO: Set Up SourceSafe for the Macintosh Manually

{% raw %}

	Article: Q132703
	Product(s): Microsoft SourceSafe
	Version(s): MACINTOSH:3.04,3.1
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Macintosh, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An alternative to running 'UserStartup SSInst' to setup SourceSafe on the
	Macintosh is to set up the environment variables and settings for SourceSafe
	manually.
	
	MORE INFORMATION
	================
	
	The following procedure describes how to setup SourceSafe for Macintosh manually
	for use with the Macintosh Programmers Workshop (MPW) or ToolServer.
	
	1. Start MPW or ToolServer (see your documentation on these tools for additional
	  information on setting up and using these tools).
	
	2. Open the startup script for MPW or ToolServer and add an entry that sets the
	  SSDIR environment variable to the folder where the SRCSAFE.INI file is
	  located (by default this will be the SrcSafe folder).
	
	  For example, if you are using MPW and your SRCSAFE.INI file is located in the
	  SrcSafe folder, your entries would be:
	
	        set ssdir "HD:srcsafe:"
	        export ssdir
	
	  where 'HD' is your harddrive name and 'srcsafe' is the SourceSafe folder.
	
	3. Add an entry that sets the SSUSER environment variable to a valid username.
	  If you are running SourceSafe for the first time, and you have not added any
	  usernames, use the username 'guest'.
	
	  For example, if you are using MPW your entry would be:
	
	        set ssuser guest
	        export ssuser
	
	  NOTE: For additional information, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q131956 How to Run the Macintosh SourceSafe SSADMIN Tool
	
	4. Add an entry that creates an alias 'ss' for the SourceSafe Macintosh
	  executable.
	
	  For example, if you are using MPW your entry would be:
	
	        alias ss "HD:srcsafe:mac:ss"
	
	  where 'HD' is the harddrive name and 'srcsafe:mac:ss' is the complete path to
	  the SourceSafe executable.
	
	5. Close and restart MPW or ToolServer. You should be able to execute SourceSafe
	  commands, for example:
	
	        ss dir
	
	REFERENCES
	==========
	
	Please see the 'SourceSafe 3.04 Command Line Reference', or 'SourceSafe 3.1
	Reference Manual' for additional information on SourceSafe commands.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword3 kbSSafe304Mac kbSSafe310Mac
	Version           : MACINTOSH:3.04,3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
