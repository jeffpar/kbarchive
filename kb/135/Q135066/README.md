---
layout: page
title: "Q135066: PC MAPI: How to Schedule Mail Messaging on Windows NT"
permalink: /kb/135/Q135066/
---

## Q135066: PC MAPI: How to Schedule Mail Messaging on Windows NT

{% raw %}

	Article: Q135066
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Electronic mail messages can be sent automatically under Microsoft Windows NT
	when you use the Messaging Application Programming Interface (MAPI), included
	with Microsoft Mail for PC Networks. The following steps outline how to
	configure the system to send a message without requiring a user to be logged in
	at the Windows NT workstation.
	
	MORE INFORMATION
	================
	
	The following steps assume that a working version of a Simple MAPI application
	(in this example referred to as MAPISEND.EXE) has been developed and does not
	require any user intervention to send an electronic mail message.
	
	1. Configure the NT Registry such that the HKEY_USERS on Local
	  Machine\DEFAULT\Software\Microsoft\Mail \Microsoft Mail has the correct
	  settings, such as the following:
	
	     Login:REG_SZ, ServerPath:REG_SZ, and Password:REG_SZ
	
	  As a minimum, these fields will need to exist for automatic login to the
	  desired postoffice to occur. Modifications for these entries can be modified
	  using the REGEDT32.EXE utility.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk
	
	2. Configure the Scheduler service. The Scheduler service can be activated via
	  the Windows NT Services icon found in the Control Panel.
	
	3. Select Scheduler, and set Startup to Automatic. The System Account should be
	  checked (this will allow mail to be sent automatically, regardless of whether
	  a user is logged in or not).
	
	4. Set the scheduled time using the Windows NT AT command. For example, run the
	  application every Monday at 2:30 p.m. (assuming the time set on the
	  workstation is not at or past this time):
	
	        AT 2:30pm /every:monday "C:\TOOLS\MAPISEND.EXE"
	
	  The Interact with Desktop option is not required on either the command line
	  parameters to AT or the Scheduler Service configuration. For the syntax on
	  the AT command, type "AT /?" (without the quotation marks) at the MS-DOS
	  prompt.
	
	Additional query words: 3.00 3.20 Windows NT visual basic vb
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
