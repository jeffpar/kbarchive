---
layout: page
title: "Q90343: LAN Manager Logon Scripts Cause System Integrity Violations"
permalink: /kb/090/Q90343/
---

## Q90343: LAN Manager Logon Scripts Cause System Integrity Violations

{% raw %}

	Article: Q90343
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive a system integrity violation error while running a Microsoft LAN
	Manager logon script.
	
	CAUSE
	=====
	
	Microsoft LAN Manager logon scripts are batch files that are run by the LAN
	Manager domain controller upon verification of user logon. This LAN Manager
	feature is set up on the LAN Manager server.
	
	Logon scripts can be enabled in Windows for Workgroups by installing LAN Manager
	as a secondary network and setting the logon feature in Control Panel. When
	Windows for Workgroups logs on and the user is verified by the LAN Manager
	domain controller, the logon scripts are run automatically in an MS-DOS virtual
	machine (VM). These scripts are given a maximum of 30 seconds to run before
	Windows for Workgroups regains control and finishes loading. If the LAN Manager
	logon script runs for more than 30 seconds, you receive the system integrity
	violation error.
	
	WORKAROUND
	==========
	
	To work around this problem, either shorten the logon scripts or disable this
	feature in Control Panel, or on the LAN Manager domain controller.
	
	MORE INFORMATION
	================
	
	Usually LAN Manager logon scripts are used to reconnect network shares
	automatically for the user. Because Windows for Workgroups has persistent net
	connections, it is no loner necessary to use these scripts for that purpose and
	it's better not to do so.
	
	Sometimes logon scripts are used to run programs such as virus scanners or other
	utilities from the server. In this case, you may want to create a batch file (or
	edit your AUTOEXEC.BAT file) that starts the Windows for Workgroups real-mode
	redirector, connects to the server where the virus scanner exists, runs it, and
	disconnects the share. For example:
	
	     c:\windows\net start full
	     net use v: \\server\share
	     v:\virus\scan.exe
	     net use v: /d
	     c:\windows\net stop
	
	To Disable Logon Scripts in Control Panel
	-----------------------------------------
	
	1. Run Control Panel and choose the Network icon.
	
	2. Choose the Networks button.
	
	3. Select Microsoft LAN Manager in the Other Networks In Use list box.
	
	4. Choose the Settings button.
	
	5. Clear the Log On To LAN Manager Domain check box.
	
	See your LAN Manager administrator if you want to disable logon scripts on the
	LAN Manager domain controller, although this is not necessary if you have
	disabled it in Control Panel.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
