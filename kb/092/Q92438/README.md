---
layout: page
title: "Q92438: PC Ext: External Mail Program's -Qx Option"
permalink: /kb/092/Q92438/
---

## Q92438: PC Ext: External Mail Program's -Qx Option

{% raw %}

	Article: Q92438
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The External Mail program in Microsoft Mail supports an undocumented -Qx option
	that supplements the documented -V (verbose) option. The -Qx option reports on
	major operations and displays the results in the Activity section of the
	External program screen.
	
	The four -Qx options are as follows:
	
	- Q1 reports main points of the program when scanning and delivering mail.
	
	- Q2 reports the state of the serial buffer.
	
	- Q3 reports the state of the P1 files in versions 3.2 and 3.0. It is not
	  available in Microsoft Mail version 2.1.
	
	- Q4 reports memory usage.
	
	Each option places its report in the "LAN Postoffice Mail Activity" section of
	External's program screen.
	
	The -Q4 option does not log any information into the SESSION.LOG file. The memory
	usage information reported by -Q4 is cryptic, especially in Microsoft Mail
	version 2.1.
	
	The -Qx options are meant for advanced developers and product support personnel
	to help them debug programs and troubleshoot problems. Because of the technical
	and cryptic nature of the -Qx reports, they can be misleading to less technical
	users.
	
	Additional query words: 2.10 3.00 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2,3.5
	
	=============================================================================
	

{% endraw %}
