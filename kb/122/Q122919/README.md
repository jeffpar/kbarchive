---
layout: page
title: "Q122919: Some Applications Unable to Print to or View Some Printers"
permalink: /kb/122/Q122919/
---

## Q122919: Some Applications Unable to Print to or View Some Printers

{% raw %}

	Article: Q122919
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbprint kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Windows NT version 3.1 to Windows NT version 3.5, some
	applications, such as Microsoft Word and Microsoft Excel, may not be able to
	view or print to newly created or connected printers if you have stopped and
	then restarted the Spooler service. This problem only occurs with the user
	account that was logged on when the Spooler service was stopped and restarted.
	
	CAUSE
	=====
	
	This problem is caused by incorrect security permissions being written to a
	section of the Registry from where some applications get printer data. Because
	this section is set to Read Only, new printers are not written to it and some
	applications will not be able to access the newly created printers.
	
	
	WORKAROUND
	==========
	
	To correct this problem, change Administrators to Full Control in both the
	Devices and PrinterPorts keys, using the Registry Editor as follows:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_CURRENT_USER subtree, go to the following subkey:
	
	  \SOFTWARE\Microsoft\Windows NT\CurrentVersion
	
	3. Select the Devices subkey and from the menu, select Security, Permissions.
	
	4. Change Administrators to Full Control and choose OK.
	
	5. Select the PrinterPorts subkey and from the menu, select Security,
	  Permissions.
	
	6. Change Administrators to Full Control and choose OK.
	
	7. Exit Registry Editor.
	
	8. Open the Properties Of A Created Printer dialog box in Print Manager, choose
	  OK, and the Created printers will be rewritten to the Registry. Connected To
	  Printers must be recreated.
	
	NOTE: This problem will occur again if the Spooler service is stopped and
	restarted. Use the above procedure if necessary.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT Workstation or Server version 3.51.
	
	Additional query words: prodnt powerpoint 6.00 6.00a 6.00c ntword wordnt winword recognize word6 default word for windows 5.00 5.00a 5.00c excel for windows
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
