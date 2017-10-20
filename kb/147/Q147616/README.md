---
layout: page
title: "Q147616: Current History Registry Key Is Not Updated Properly"
permalink: /kb/147/Q147616/
---

## Q147616: Current History Registry Key Is Not Updated Properly

{% raw %}

	Article: Q147616
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDespooler smsdespooler
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Although jobs in Systems Management Server have been successfully canceled and
	removed, the following registry key continues to grow with package ID
	information:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\SMS\COMPONENTS
	     \SMS_Despooler\Current History
	
	CAUSE
	=====
	
	Systems Management Server does not purge the registry information.
	
	
	RESOLUTION
	==========
	
	If you cancel or remove a job, do the following:
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SOFTWARE\MICROSOFT\SMS\COMPONENTS\SMS_Despooler\Current History
	
	2. Manually remove canceled or non-existing package ID entries.
	
	3. Quit Registry Editor.
	
	4. Shut down and restart Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in System Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDespooler smsdespooler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
