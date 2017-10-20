---
layout: page
title: "Q183097: Event Log May Not Grow to Configured Size"
permalink: /kb/183/Q183097/
---

## Q183097: Event Log May Not Grow to Configured Size

{% raw %}

	Article: Q183097
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although you have increased the "Maximum Log Size" in Event Viewer from the
	default of 512 KB to a very high value, the corresponding event log file does
	not grow beyond a certain size.
	
	CAUSE
	=====
	
	With Event Viewer, you can specify a maximum log size of 4 GB separately for
	every log (System, Security, and Application). In the current design of the
	event log facility, however, the log file does not grow over approximately 300
	MB depending on the memory situation. If the log is configured to "Do not
	overwrite events," new events will not be written.
	
	RESOLUTION
	==========
	
	Avoid setting the event log this high. Depending on the amount of events, back
	up and clear the event log on a regular basis, and configure the log to
	"Overwrite Events as Needed."
	
	To back up the log, you can use Windows NT Backup, or DUMPEL from the Windows NT
	Resource Kit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
