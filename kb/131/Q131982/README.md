---
layout: page
title: "Q131982: Job Prints While Spooling Option Ineffective With LPR"
permalink: /kb/131/Q131982/
---

## Q131982: Job Prints While Spooling Option Ineffective With LPR

{% raw %}

	Article: Q131982
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5,3.51 
	- Microsoft Windows NT Workstation version 3.5,3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Print Manager, choose either Create Printer or Printer Properties
	from the Printer menu, choose Details, and select Job Prints While Spooling for
	a printer that prints using LPR, the option has no effect when you print.
	
	CAUSE
	=====
	
	Enabling the Job Prints While Spooling option saves time by sending the first
	part of the print job to the print device as soon as the spooler receives it,
	rather than waiting for the entire job to finish spooling before sending it to
	the print device. Technically, this option tells the local print provider to
	despool print jobs to the print monitor (LPR in this case) before the local
	print provider has finished receiving the print job. If the print monitor
	immediately starts sending the print job to the print device, then this option
	saves time as described above.
	
	Most print monitors send data immediately upon receiving it, but LPR cannot. Per
	LPR specification (RFC1179), the LPR print monitor and command line utility
	supplied with Windows NT, always send a control file with each data file. The
	control file includes a count of the number of bytes in the data file. As a
	result, LPR cannot send any part of the data file until it sends the control
	file, and it cannot send the control file until it has received the entire data
	file from the local print provider. This negates the effect of the Job Prints
	While Spooling option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt PPC PowerPC
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
