---
layout: page
title: "Q130876: Printing Through HPMON(DLC) May Cause Print Subsystem to Hang"
permalink: /kb/130/Q130876/
---

## Q130876: Printing Through HPMON(DLC) May Cause Print Subsystem to Hang

{% raw %}

	Article: Q130876
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The system displays a dialog box containing the following message when you print
	to a network printer attached to the network through HPMON:
	
	  Spoolss.exe
	  The driver \driver\dlc failed to complete an i/o request in the allotted time.
	
	While the dialog is displayed, the print subsystem (SPOOLSS) and all applications
	interacting with it are locked up, until the dialog is cleared when you select
	OK.
	
	CAUSE
	=====
	
	On a Windows NT system with a large amount of DLC traffic, the thread writing
	data to a network attached printer may time-out while waiting for the I-frame to
	be transmitted. After timing out, the thread exits and in the thread termination
	processing, the system finds and cancels all outstanding I/O requests for this
	thread. A dialog box containing information regarding the failing driver is then
	displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt hang hung
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
