---
layout: page
title: "Q141949: Changes in the SYS(0) Function in Visual FoxPro"
permalink: /kb/141/Q141949/
---

## Q141949: Changes in the SYS(0) Function in Visual FoxPro

{% raw %}

	Article: Q141949
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In earlier versions of FoxPro, the SYS(0) function returned a name from the
	network such as the UserName from Novell. Many developers used this function to
	determine the login of the user, to keep track of who had which files open, and
	so on.
	
	In Visual FoxPro, the SYS(0) function does not look to the network. It may return
	all pound signs or it may return an unexpected name, depending on how Windows is
	set up.
	
	In Visual FoxPro 3.0, SYS(0) returns information from the Windows configuration
	files. In Windows for Workgroups, it returns the ComputerName and UserName from
	the [Network] section of the System.ini file. In Windows 95, it returns the
	ComputerName and what seems to be the first login name from the Registry. (In
	other words, if you logged into two different servers with two different login
	IDs, Sys(0) would only return the first one.)
	
	This behavior is by design, in order to make the function more compatible with a
	larger number of networks.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
