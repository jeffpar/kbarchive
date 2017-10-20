---
layout: page
title: "Q181624: LPR Port No Longer Appears as an Available Printer Port"
permalink: /kb/181/Q181624/
---

## Q181624: LPR Port No Longer Appears as an Available Printer Port

{% raw %}

	Article: Q181624
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	LPR Port no longer appears as an available printer port and the printers that
	were previously configured for this port no longer exist.
	
	CAUSE
	=====
	
	This problem may occur for any of the following reasons:
	
	- You installed third-party printing software (such as Lexmark or
	  Hewlett-Packard's JetAdmin printing software).
	
	- There is a corrupt port.
	
	NOTE: JetDirect is no longer supported by HP. They now use SDI (Simple Device
	Installation) to install network printers. For more information on this, see:
	
	http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj05973
	or
	http://www.hp.com/cposupport/networking/support_doc/bpj06765.html
	
	HP recommends a new software admin package (TCP/IP / IPX/SPX Based). For further
	information see:
	
	http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06723
	or
	http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06724
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print
	  \Monitors
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Remove any third-party monitors listed here. For example, Lexmark installs
	  the following:
	
	  Lexmark update
	  Lexmark DLC network port
	  Lexmark TCP/IP network port
	
	4. In Control Panel services, stop and restart the Spooler service.
	
	If you continue to have problems, remove and reinstall the TCP/IP Printing
	service, reinstall the printer, and then reapply the latest Windows NT service
	pack.
	
	For more information on how to remove the Lexmark MarkVision monitor, please see
	the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q155516
	  TITLE : How to Remove the Lexmark MarkVision Monitor
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
