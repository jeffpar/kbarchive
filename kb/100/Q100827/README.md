---
layout: page
title: "Q100827: PC Ext: Version Differences in External Program -W Option"
permalink: /kb/100/Q100827/
---

## Q100827: PC Ext: Version Differences in External Program -W Option

{% raw %}

	Article: Q100827
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The -W option in the External Mail program (EXTERNAL.EXE) specifies a postoffice
	that is connected through a wide-area network (WAN), and functions differently,
	depending on which version of Microsoft Mail for PC Networks you are running.
	
	In versions 3.0, 3.0a and 3.2 of Mail, EXTERNAL.EXE with the -W option transfers
	the mail from the local postoffice to the WAN postoffice, but will not deliver
	it to the individual users.
	
	In version 2.1, EXTERNAL.EXE with the -W option transfers the mail to the WAN
	postoffice and delivers it to the individual users.
	
	MORE INFORMATION
	================
	
	To minimize the amount of network traffic, EXTERNAL.EXE was modified in Mail
	versions 3.0 and later to transfer mail to the WAN postoffice but not deliver
	it. The responsibility for delivering the mail should be handled by a local
	workstation running EXTERNAL.EXE. If there is not a local workstation running
	EXTERNAL.EXE, the mail will never be delivered to the final recipient.
	
	Additional query words: 2.10 3.00 3.20 MTA
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	

{% endraw %}
