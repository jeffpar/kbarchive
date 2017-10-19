---
layout: page
title: "Q159565: SNMP Agent Does Not Respond After Returning from Suspend Mode"
permalink: /kb/159/Q159565/
---

## Q159565: SNMP Agent Does Not Respond After Returning from Suspend Mode

	Article: Q159565
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Advanced Power Management features and the computer returns
	from Suspend mode, SNMP Agent may not respond when you attempt to administer the
	computer with SNMP network management software.
	
	CAUSE
	=====
	
	SNMP Agent is not compatible with Advanced Power Management.
	
	RESOLUTION
	==========
	
	When the computer returns from Suspend mode, quit and restart Snmp.exe. To do
	so, type the following lines at a command prompt, pressing ENTER after each
	line:
	
	  " snmp -close
	  snmp " (without the quotation marks)
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
