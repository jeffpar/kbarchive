---
layout: page
title: "Q269782: XADM: Err 3355443765 Starting Information Store After Restore"
permalink: /kb/269/Q269782/
---

## Q269782: XADM: Err 3355443765 Starting Information Store After Restore

{% raw %}

	Article: Q269782
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Information Store after a restore is performed, you may
	receive an error of 3355443765 reported by the Information Store service.
	
	CAUSE
	=====
	
	This issue is caused by a gap in the log files within the log directory.
	
	RESOLUTION
	==========
	
	Look at the Restore In Progress key to determine which logs should be there.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CURRENTCONTROLSET/SERVICES/MSEXCHANGEIS/RESTORE IN
	  PROGRESS
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	3. Make a note of the following values:
	
	  HighLog Number:
	  LowLog Number:
	
	  The values will translate to the name of the log files. For example, if the
	  HighLog Number is 0x1268, the log file would be named edb01268.log.
	
	4. Quit Registry Editor.
	
	The only log files that should be present are the log files starting with the
	LowLog log file and continuing on and including the HighLog log file. Any other
	log files in that directory (including edb.log) are not needed and should be
	renamed or moved unless you are performing a No Loss Restore, in which log files
	after the HighLog number are in place and will play through.
	
	The Information Store should start after you rename the incorrect log files.
	
	Additional query words: 3355443765 restore HighLog LowLog
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
