---
layout: page
title: "Q117605: Printer Names May Change When Administered Remotely"
permalink: /kb/117/Q117605/
---

## Q117605: Printer Names May Change When Administered Remotely

{% raw %}

	Article: Q117605
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some printer names are truncated when you administer them from a remote machine.
	
	MORE INFORMATION
	================
	
	The problem arises if the name of the printer plus the name of the server
	(including pathname slashes; "\") exceeds the 32-character limit.
	
	For example, if you name a printer ThisIsALongPrinterNameThatWillGe, which is
	exactly 32 characters, and configure it on a machine named SERVER, the printer
	name is changed to ThisIsALongPrinterNameT when you administer it remotely. That
	is because the full path is:
	
	  \\server\ThisIsALongPrinterNameT
	
	and the server and path information (\\server\) require that the printer name be
	truncated an equal amount (9 characters) to stay within the 32-character limit.
	
	NOTE: This happens only if the user logged on has at least server operator
	priviledges.
	
	
	The server name is added to any printer that is administered remotely and is then
	counted as part of the name. If this pushes the name beyond the 32-character
	maximum, Print Manager truncates the name to within limits.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.1. This
	problem was corrected in Windows NT Workstation or Server version 3.5.
	
	Additional query words: prodnt printman
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
