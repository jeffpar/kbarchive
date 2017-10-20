---
layout: page
title: "Q255861: &quot;Event Log File Is Corrupt&quot; Error When Opening an Event Log File"
permalink: /kb/255/Q255861/
---

## Q255861: &quot;Event Log File Is Corrupt&quot; Error When Opening an Event Log File

{% raw %}

	Article: Q255861
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open an event log file that was copied from the original file
	while the Event Log service was running, you may receive the following error
	message:
	
	  The event log file is corrupt.
	
	If you open event log files sent in e-mail using the Server Status tool in Small
	Business Server (SBS), you may also receive the same error message.
	
	CAUSE
	=====
	
	This behavior occurs because the Event Log service has an open handle to the
	*.evt file.
	
	RESOLUTION
	==========
	
	To work around this issue, use any of the following methods:
	
	- Open event log files using the Open command on the Log menu if you saved the
	  files using the Event Viewer Save As command on the Log menu.
	
	- Make copies of the original event log files without using the Save As command
	  if the Event Log service is disabled:
	
	  1. Set the Event Log service to disabled, and then restart the computer.
	
	  2. Copy the *.evt file(s) to another folder or computer. Event Viewer does
	     not start until the Event Log service is started.
	
	  3. Set the startup value for the Event Log service back to automatic, and
	     then start the service.
	
	- Use the Dumpel.exe resource kit tool to dump the event logs into a text file
	  while the Event Log service is running (for example, dumpel.exe -f system.out
	  -l system).
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q206848 Windows NT Service Pack 4.0 Tools Not Included on CD-ROM
	
	Additional query words: smallbiz damaged
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : winnt:4.0,4.0a,4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
