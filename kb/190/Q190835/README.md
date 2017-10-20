---
layout: page
title: "Q190835: Paper Bin Displays Incorrect Form to Tray Assignment"
permalink: /kb/190/Q190835/
---

## Q190835: Paper Bin Displays Incorrect Form to Tray Assignment

{% raw %}

	Article: Q190835
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The form to tray assignment that is configured on the print server is not used
	on the client computer. For example, if you configure the A4 format on the
	server, the Letter format may appear on the client.
	
	MORE INFORMATION
	================
	
	If a Windows NT client makes a printer connection, it copies the Form To Tray
	Assignment data from the server to the client.
	
	
	The following is an example of the data for an NEC Pinwriter P6:
	
	  Tractor Feed: <A4>
	  Sheet Feeder - Bin 1: <not available>
	  Manual Paper Feed: <not available>
	
	Perform the following steps to view this data:
	
	1. Click Start, point to Settings, and then click Printers.
	
	2. Right-click the printer, click Properties, click the Device Settings tab, and
	  then view the data for Form To Tray Assignment.
	
	Internally, the paperbin names on the client and server are compared. If they are
	identical, the correct values are displayed under the printer's device settings.
	In this case, Tractor Feed displays Letter instead of A4.
	
	CAUSE
	=====
	
	This problem may occur when your environment consists of servers and clients
	running different language versions of Windows NT.
	
	To make sure a known paperbin is selected, the German client-side Rasddui.dll
	file compares its own paperbin names with the paperbin names available for the
	print server's printer. Because of a localization issue, the names do not match
	and, therefore, the configured form on this paperbin is not found and a default
	value is set.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
