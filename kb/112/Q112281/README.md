---
layout: page
title: "Q112281: PC Ext: /ClockRollOver May Be Needed When BIOS Not Detected"
permalink: /kb/112/Q112281/
---

## Q112281: PC Ext: /ClockRollOver May Be Needed When BIOS Not Detected

{% raw %}

	Article: Q112281
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The system clock or Timestamp of the machine running the EXTERNAL.EXE program,
	MS-DOS Message Transfer Agent (MTA), included with version 3.2 of Microsoft Mail
	for PC Networks, may be incorrectly incremented by 24 hours, if the BIOS type
	cannot be detected properly.
	
	MORE INFORMATION
	================
	
	The ClockRollOver switch may need to be added to EXTERNAL.INI or to the command
	line, /ClockRollOver, of EXTERNAL.EXE, if difficulty is encountered in
	recognizing the BIOS type and date of the machine it is running on. In version
	3.2, this is set to a value of 1 (ON), by default. Setting this to a value of 0
	(OFF) will keep External from touching the system BIOS and should resolve the
	problem.
	
	A way to check if you will encounter this problem is by running MSD.EXE,
	Microsoft System Diagnostic utility, on the MTA machine. This can be
	accomplished by selecting the option Computer from the main menu after the
	utility is started. If it recognizes the BIOS, you probably do not have a
	problem, but if it does not then mail administrators should be aware of a
	possible need to include this switch at startup.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
