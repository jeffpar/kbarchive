---
layout: page
title: "Q111596: BUG: Dr. Watson Fails to Write Log File"
permalink: /kb/111/Q111596/
---

## Q111596: BUG: Dr. Watson Fails to Write Log File

{% raw %}

	Article: Q111596
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assume that the drive for the Windows directory is substituted using the MS- DOS
	SUBST command. For example:
	
	  subst w: c:\win31
	
	Under this condition, Dr. Watson fails to write to its log file, either the
	default DRWATSON.LOG or any other changed log filename. In fact, when the Dr.
	Watson icon is double-clicked, the message box that follows shows the log
	filename as W:\\DRWATSON.LOG, which is incorrect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: buglist3.10 3.10 gpf gp-fault trap gp fault
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
