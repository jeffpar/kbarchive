---
layout: page
title: "Q273777: Logging Fails with Event ID 2 &quot;The Data is the Error&quot;"
permalink: /kb/273/Q273777/
---

## Q273777: Logging Fails with Event ID 2 &quot;The Data is the Error&quot;

{% raw %}

	Article: Q273777
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There are no corresponding logs in the c:\%Systemroot%\System32\LogFiles
	directory for any of the Web services included in Internet Information Server
	(IIS) 4.0.
	
	NOTE: The drive letter may be different if Windows NT has been installed on a
	different partition.
	
	The following error message is logged in the Event Viewer:
	
	  Event ID: 2
	  Source: IISLog
	  "The data is the error"
	
	For each Web request from clients, there is a corresponding error message in the
	Event Viewer.
	
	CAUSE
	=====
	
	By default, IIS uses the user who is currently logged on to write the logs. It
	obtains the credentials of the current user from the current thread that is
	executing in the Identify.exe process.
	
	When IIS is unable to run under the thread that is currently logged on, it
	reverts to the system account. In this case, the underlying NTFS permissions
	require the system account to have permissions to the
	c:\%Systemroot%\System32\LogFiles folder. The permission needed for the system
	account is Full Control.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. In Windows Explorer, open the c:\%Systemroot%\System32\LogFiles folder.
	
	2. Right-Click the LogFiles folder, and then click Properties.
	
	3. Click the Security tab, and then click Permissions.
	
	4. Click Add, and then change the Type of Access for the system account to Full
	  Control. Click OK three times.
	
	To verify that the error message no longer occurs, check the
	c:\%Systemroot%\System32\LogFiles folder for log files being written.
	
	Additional query words: failure logging
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
