---
layout: page
title: "Q123058: Closing Timed-Out Applications Without Choosing End Task"
permalink: /kb/123/Q123058/
---

## Q123058: Closing Timed-Out Applications Without Choosing End Task

{% raw %}

	Article: Q123058
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kbfix3.50.sp2
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log off or shutdown a Windows NT computer while 16-bit Windows- based
	networking applications are running, a dialog box with the application's name in
	the title bar appears stating that the Windows application cannot respond to the
	End Task request. The dialog presents three choices: Wait, End Task, and Cancel.
	
	CAUSE
	=====
	
	This problem occurs when the application time-out due to heavy network traffic.
	
	RESOLUTION
	==========
	
	You can configure Windows NT so that it closes the application by default,
	instead of displaying the dialog box. To do so:
	
	1. Install the latest U.S. Service Pack for Windows NT version 3.5.
	
	2. Add one of the following keys to the registry under the HKEY_CURRENT_USER
	  subtree:
	
	  \CONTROL PANEL\DESKTOP\HUNGAPPTIMEOUT
	
	  After an application times-out, any you choose the Task List End Task button,
	  the dialog box is displayed.
	
	  \CONTROL PANEL\DESKTOP\WAITTOKILLAPPTIMEOUT
	
	  After a log off or shutdown command is issued, and an application times-out,
	  the dialog is displayed.
	
	  \CONTROL PANEL\DESKTOP\AUTOENDTASKS
	
	  Any non-zero value causes End Task to automatically be selected; the dialog
	  box is not displayed.
	
	STATUS
	======
	
	For information on obtaining the Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt logoff
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
