---
layout: page
title: "Q174528: DOC ERR: Creating a New Debugging Information File"
permalink: /kb/174/Q174528/
---

## Q174528: DOC ERR: Creating a New Debugging Information File

{% raw %}

	Article: Q174528
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Control Panel System tool to set Recovery options on the
	Startup/Shutdown tab, right-clicking and selecting What's This? on the Overwrite
	any existing file check box, you receive a text box that states:
	
	  Select this check box to overwrite any existing file with the same name
	  you typed in the Write debugging information to box.
	
	  If this check box is cleared, then Windows NT will create a new
	  debugging information file if a file with this name already exists."
	
	MORE INFORMATION
	================
	
	The What's This? Help message should read:
	
	  Select this check box to overwrite any existing file with the same name
	  you typed in the Write debugging information to box.
	
	  If this check box is cleared, then Windows NT will not create a new
	  debugging information file if a file with this name already exists.
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	ARTICLE-ID: Q130536
	TITLE : Windows NT Does Not Save Memory Dump File After a Crash.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: memory.dmp, system properties
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
