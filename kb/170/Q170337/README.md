---
layout: page
title: "Q170337: XADM: User Manager Can Cause File in Use Errors"
permalink: /kb/170/Q170337/
---

## Q170337: XADM: User Manager Can Cause File in Use Errors

{% raw %}

	Article: Q170337
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install or upgrade Microsoft Exchange Server, you may receive a message
	that says Exchange cannot continue because a DLL is in use.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	Exit the User Manager for Domains program. If the problem still persists, check
	the task list and remove the Usrmgr.exe task.
	
	  -or-
	
	In Windows NT 4.0, open the Task Manager by using the CTRL-ALT-Delete key
	combination or right-click on the taskbar. Go to the Processes page of the
	Windows NT Task Manager and select the processes you want to end. Then click the
	End Process button.
	
	  -or-
	
	In Windows NT 3.51, use the Pviewer.exe program in the Windows NT Resource Kit to
	kill running processes.
	
	  -or-
	
	Try rerunning the Exchange installation program.
	
	Note: There may be several User Manager processes left dormant depending on how
	many times you have opened and closed User Manager while your server is having
	these symptoms.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
