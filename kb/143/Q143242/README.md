---
layout: page
title: "Q143242: Externally Locked System Files Can Cause SP Update Failure"
permalink: /kb/143/Q143242/
---

## Q143242: Externally Locked System Files Can Cause SP Update Failure

{% raw %}

	Article: Q143242
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When applying a Service Pack for Windows NT Workstation or Server version 4.0,
	the update process may pause and display a dialog that one of the files it is
	trying to update is currently locked, and cannot be replaced. It gives the
	option to retry, abort the update, or to skip copying the file. If the file is
	skipped, the system may be left in an unstable state, causing system crashes or
	unpredictable behavior.
	
	RESOLUTION
	==========
	
	To work around this problem, quit all non-essential programs using Task Manager
	or the Kill.exe tool included with the Microsoft Windows NT 4.0 Resource Kit.
	
	WORKAROUND
	==========
	
	Be sure to choose to allow the update program to create an Uninstall directory.
	If a system file, such as Ntdll.dll, should be locked, do not choose to skip the
	file. Choose to abort the update, and re-run the update program without
	restarting the computer. This time, choose to uninstall the service pack. This
	should return your system to a stable state, and you can remove the application
	which is causing the service pack installation failure. If, during update, you
	chose to not create an Uninstall directory, abort the update process and use the
	Emergency Repair Disk to return your system to a stable configuration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00 Service
	Pack 2. For information on obtaining the Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Some applications and add-on components for Windows NT can cause system
	components to be locked and nonreplaceable. One example of this is the Compaq
	Insight Manager. This can cause update to fail to replace the Ntdll.dll file or
	other important system files. During startup, a system which has had the Service
	Pack applied, but has the original Ntdll.dll, will crash.
	
	You must disable any such applications before applying Service Packs.
	
	SEE Knowledge base Article:
	
	  Article ID: Q166160
	  TITLED : Stop C000021a after applying Windows NT 4.0 Service Pack
	
	
	Additional query words: prodnt SP2 SP3
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
