---
layout: page
title: "Q154074: Unable to View Unshared Printer in Windows NT 4.0 Printer Folder"
permalink: /kb/154/Q154074/
---

## Q154074: Unable to View Unshared Printer in Windows NT 4.0 Printer Folder

{% raw %}

	Article: Q154074
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Windows NT version 3.51, the Server view in Print Manager shows all
	printers on a server, even those that are not shared, to all remote users. In
	Windows NT 4.0, when a remote user is not an administrator or print operator of
	a server, the printer's folder will not show any unshared printers.
	
	CAUSE
	=====
	
	This is a design decision that was made when changing the user interface to the
	new shell.
	
	RESOLUTION
	==========
	
	To work around this problem, you can share the printer with a share name ending
	in a dollar sign ($). This will make the print share visible from Windows NT
	clients only.
	
	MORE INFORMATION
	================
	
	In Windows NT 4.0, when you are not an administrator of the print server, but
	you have full control of an unshared printer, you cannot see the printer to
	administer it. In Windows NT 3.51, you can see the printer in Print Manager even
	though it is not shared, and you could manage print jobs and configure the
	printer.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
