---
layout: page
title: "Q139141: Debugging SMS/SQL Related Problems"
permalink: /kb/139/Q139141/
---

## Q139141: Debugging SMS/SQL Related Problems

{% raw %}

	Article: Q139141
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2,2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2, 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server uses SQL Server extensively. Therefore, it
	is necessary that you diagnose connection or access problems to SQL Server on a
	regular basis. You may also need to manipulate data stored in the SQL Server.
	
	MORE INFORMATION
	================
	
	A common function used to access SQL Server is the ability to log each SQL
	command into the existing SMS trace logs. "Select" or "update" statements appear
	as they are issued, which may slow down performance. To enable this function:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \SOFTWARE\Microsoft\SMS\Tracing
	
	3. From the Edit menu, select Add Value.
	
	4. Add the following:
	
	        Value Name: SQLEnabled
	        Data Type: REG_DWORD
	        Data: 1
	
	5. Choose OK and quit Registry Editor.
	
	6. Shutdown and restart Windows NT.
	
	Some SMS service components may need to be restarted for the change to take
	effect.
	
	Additional information is also available directly from SQL Server itself. By
	running i/SQL and issuing the following, the SQL\LOGS\ERRORLOG.* file(s) will
	also be updated with the commands being issued by each application:
	
	     dbcc traceon(-1,4032,3605)
	
	This configuration can be toggled off and on as follows:
	
	     dbcc traceoff(-1)
	
	  -or-
	
	     dbcc traceon(-1)
	
	These settings should not be active for normal use of the system and are intended
	for debugging purposes only. Once you obtain output in the respective log files,
	they can be used to determine more closely what is happening.
	
	Additional query words: prodsms sql trace tracing
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120 kbSMS200 kbSMS200SP1
	Version           : :1.0,1.1,1.2,2.0,2.0 SP1
	
	=============================================================================
	

{% endraw %}
