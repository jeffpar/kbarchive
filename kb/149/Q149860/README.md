---
layout: page
title: "Q149860: Older Version of CTL3D.DLL Causes &quot;Not Enough Memory&quot; Message"
permalink: kb/149/Q149860/
---

## Q149860: Older Version of CTL3D.DLL Causes &quot;Not Enough Memory&quot; Message

	Article: Q149860
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to launch a 16-bit Windows application and are using an older
	version CTL3D.DLL, you may get a message stating there is "Not enough memory."
	
	MORE INFORMATION
	================
	
	CTL3D.DLL is a dynamic-link library (DLL) file used to give an application's
	user interface three- dimensional visual effects around such elements as edit
	fields, option buttons, and dialog boxes. CTL3D.DLL is installed and used only
	by Windows 16-bit applications; 32-bit applications use CTL3D32.DLL.
	
	If you get a "Not enough memory" message while trying to launch a 16-bit Windows
	application, and if you suspect an older version of CTL3D.DLL is causing the
	problem, contact the application vendor for an updated copy of the DLL.
	
	
	Additional query words: ctl3d ctl3d.dll memory
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
