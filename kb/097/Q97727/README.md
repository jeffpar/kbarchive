---
layout: page
title: "Q97727: WFWG: NET START Prompts for Logon on 80286-Based Computers"
permalink: /kb/097/Q97727/
---

## Q97727: WFWG: NET START Prompts for Logon on 80286-Based Computers

{% raw %}

	Article: Q97727
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A computer with an 80286 processor is capable of running Windows for Workgroups
	in standard mode only. The standard mode of Windows for Workgroups requires that
	the real-mode network redirector be started for network functionality before
	Windows for Workgroups is started.
	
	On an 80286-based computer, the NET START statement in the AUTOEXEC.BAT file
	starts the real-mode redirector and prompts the user for logon information. On a
	computer with an 80386 or higher processor, the NET START statement does not
	normally start the real- mode redirector.
	
	MORE INFORMATION
	================
	
	When Windows for Workgroups is installed on a 80286-based computer, the
	statement AutoStart=full is added to the SYSTEM.INI file in the [network]
	section. This parameter causes the NET START statement in the AUTOEXEC.BAT file
	to perform a binding of the network protocol(s) to the network adapter as well
	as starting the full real-mode redirector. The redirector then prompts the user
	for a logon name.
	
	For additional information about values for the AutoStart= line, refer to page
	6-65 of the "Microsoft Windows for Workgroups Resource Kit" for version 3.1 or
	query on the following words in the Microsoft Knowledge Base:
	
	  net start and autostart
	
	Additional query words: 3.10 3.1 redirector
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
