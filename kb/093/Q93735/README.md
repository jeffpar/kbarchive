---
layout: page
title: "Q93735: WFWG Err Msg: The NetWare Shell Has Not Been Loaded..."
permalink: /kb/093/Q93735/
---

## Q93735: WFWG Err Msg: The NetWare Shell Has Not Been Loaded...

{% raw %}

	Article: Q93735
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Novell NetWare connectivity is installed and subsequently removed from
	Windows for Workgroups, NetWarn=1 is NOT removed from the [Windows] section of
	the WIN.INI file.
	
	Normally if the value of NetWarn= is 1, and if Novell NetWare connectivity is
	installed, and if MSIPX and NETX are not loaded, the following warning message
	appears when Windows for Workgroups is started:
	
	  The NetWare Shell has not been loaded.
	  All Network functions will be disabled.
	
	If Novell NetWare connectivity is removed, the warning message does not appear
	when Windows for Workgroups is started.
	
	MORE INFORMATION
	================
	
	Some applications, such as Fifth Generation Systems FastBack Plus Windows
	version 1.0, may cause Windows for Workgroups to display the above warning
	message, indicating that the NetWare shell has not been loaded, even though the
	message may be invalid because Novell NetWare connectivity may not be installed.
	This error may also cause the system to stop responding (hang).
	
	Workaround
	----------
	
	To work around the problem, use a text editor to change the NetWarn= value to 0
	in the [Windows] section of the WIN.INI file or remove the NetWarn= line
	entirely.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 net ware novell 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
