---
layout: page
title: "Q164431: XADM: Errors Installing Exchange Server with CleanSweep"
permalink: /kb/164/Q164431/
---

## Q164431: XADM: Errors Installing Exchange Server with CleanSweep

{% raw %}

	Article: Q164431
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you running the Microsoft Exchange Server Setup program on a Windows NT
	Workstation computer or Windows NT Server computer, the following error message
	may appear:
	
	  The application failed to initialize properly (0xc0000005). Click OK
	  to terminate the application.
	
	This error message occurs at the beginning of Setup and causes Setup to
	terminate.
	
	CAUSE
	=====
	
	This error will occur if you have installed QuarterDeck CleanSweep v3.0 or v3.01
	on your computer.
	
	WORKAROUND
	==========
	
	In order to install Microsoft Exchange Server onto a computer that has
	CleanSweep installed, you must do one of the following:
	
	- Uninstall CleanSweep
	
	  You can install Exchange Server successfully after you remove the CleanSweep
	  software from your computer. Use the CleanSweep Setup Program to remove the
	  software and then restart the computer. After Exchange Server is installed,
	  CleanSweep can be reinstalled.
	
	  NOTE: When you remove CleanSweep from the computer, you will also remove all
	  of the installation logs from other software programs.
	
	- Temporarily Disable CleanSweep
	
	  To temporarily disable the QuarterDeck CleanSweep program:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe, as appropriate for your
	  version of Windows NT).
	
	2. Go to the following key in the registry:
	
	     HKEY_LOCAL_\Software\Microsoft\Windows NT\Current Version\Windows
	
	3. Double-click on the AppInit_DLLS value and delete the data value of APITRAP,
	  leaving the data field blank.
	
	4. Exit Registry Editor and restart the computer.
	
	5. After installing Microsoft Exchange Server, you can re-enable CleanSweep by
	  changing the data value of the Registry entry above back to "APITRAP"
	  (without quotes) and restarting the server.
	
	MORE INFORMATION
	================
	
	CleanSweep 3.0 is manufactured by Quarterdeck Corporation, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	For information about how to contact Quarterdeck Corporation, query in the
	Knowledge Base for one of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
