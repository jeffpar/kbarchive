---
layout: page
title: "Q165587: TrueType Not Printing on Remote Print Servers"
permalink: /kb/165/Q165587/
---

## Q165587: TrueType Not Printing on Remote Print Servers

{% raw %}

	Article: Q165587
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.00
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing from a Windows NT 4.0 client to a Windows NT 4.0 computer sharing
	a printer, some documents will print with the wrong font. One single job may
	print correctly, but successive jobs may not print correctly. If the printer is
	paused when these jobs are spooled, they print correctly.
	
	CAUSE
	=====
	
	This problem occurs when printing multiple documents that contain TrueType fonts
	not available on the print server: if a job containing font information is
	present in the printer queue when another such job starts spooling, the font
	will not be used for the latter job. As long as the first job remains in the
	printer queue, all jobs that start spooling to the printer will not include the
	necessary font information if the job uses TrueType fonts that the print server
	does not have available.
	
	WORKAROUND
	==========
	
	To work around this problem, install all TrueType fonts available to print
	clients on the Windows NT print server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt garbage bad incorrect download ttf
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.00
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
