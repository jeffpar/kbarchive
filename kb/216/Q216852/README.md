---
layout: page
title: "Q216852: Device Settings in Printer Properties Will Reset to Default"
permalink: /kb/216/Q216852/
---

## Q216852: Device Settings in Printer Properties Will Reset to Default

	Article: Q216852
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Device settings in printer properties on the print server will be reset to
	default when viewed by the client.
	
	RESOLUTION
	==========
	
	To work around this problem, avoid having different languages on the server and
	the clients. If this is not practical, the Rasddui.dll and Rasddui.hlp file from
	the server may be used on the client (in the
	%systemroot%\system32\spool\drivers\w32x86\2 directory for Windows NT 4.0).
	Mixing different language versions is not recommended by Microsoft, but, for
	Windows NT 4.0, this may be the only working workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	MORE INFORMATION
	================
	
	If Windows NT Server and a Windows NT Workstation are used in different
	languages, device settings in the printer properties are reset to default only
	by opening the printer properties on the client (even without changing any
	settings). For this to happen, the user must have the right to change printer
	settings, for example to be able to change the needed paper forms.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q190835 Paper Bin Displays Incorrect Form to Tray Assignment
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
