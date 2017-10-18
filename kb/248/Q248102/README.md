---
layout: page
title: "Q248102: Cannot Uninstall Service Pack"
permalink: kb/248/Q248102/
---

## Q248102: Cannot Uninstall Service Pack

	Article: Q248102
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 3 or later to your computer running
	Windows NT 4.0 Server, Windows NT 4.0 Workstation, Windows NT 4.0 Server
	Enterprise Edition, or Windows NT 4.0, Terminal Server Edition, you may not be
	able to uninstall the service pack.
	
	CAUSE
	=====
	
	This issue can occur if the service pack has been applied more than once.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you apply Service Pack 4 to a Windows NT 4.0 Service Pack 3-based computer,
	all of the files to be overwritten by Service Pack 4 are copied to an uninstall
	folder. At this point, the uninstall folder contains the files needed to
	uninstall Service Pack 4, and restore the computer to the state it was in before
	the application of the service pack. This uninstall folder includes Service Pack
	3 files and any hotfixes that are replaced by Service Pack 4.
	
	If Service Pack 4 is applied to the computer a second time, and the uninstall
	option is selected, the uninstall folder is overwritten with Service Pack 4
	files. Because the computer already has Service Pack 4 applied, the files copied
	to the uninstall folder are Service Pack 4 files, and the ability to restore the
	computer to Service Pack 3 is lost.
	
	To avoid this situation:
	
	- Make a full system backup before you apply any service pack.
	
	- If you must re-apply a service pack, do not create an uninstall folder.
	
	- Always read any Readme.txt files associated with the service pack, and make
	  sure you understand the information completely before you apply the service
	  pack to your computer.
	
	A computer experiencing this issue has the option to uninstall the service pack
	in the Add/Remove Programs tool in Control Panel, and the uninstallation process
	will appear to work. However, the uninstallation process is restoring the same
	files that are currently installed on the computer. Even though the
	uninstallation appears to work, the blue operating system Loader screen that is
	displayed at system startup will indicate which service pack has been applied to
	your computer. In this case, the applied service pack number will not decrement
	after the uninstallation is performed.
	
	Attempting to "manually" uninstall a service pack by manually copying files from
	a prior service pack to your computer is not recommended and is not supported by
	Microsoft. Attempting to manually uninstall a service pack can cause
	unpredictable system behavior, including the inability to start the computer. If
	a backup is not available and the files in the uninstall folder have been
	overwritten, it is not possible to revert to a previous service pack.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : winnt:4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
