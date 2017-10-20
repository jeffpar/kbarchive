---
layout: page
title: "Q94756: LMLogon=YES/NO is Not Recognized by Control Panel"
permalink: /kb/094/Q94756/
---

## Q94756: LMLogon=YES/NO is Not Recognized by Control Panel

{% raw %}

	Article: Q94756
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The LMLogon= setting in the [network] section of the SYSTEM.INI file determines
	functionality in Windows for Workgroups and Workgroup Connections with a LAN
	Manager Domain.
	
	Workgroup Connections requires the LMLogon=YES switch for functionality. This is
	different from the way Control Panel in Windows for Workgroups adds this switch.
	Any modifications made through the Control Panel Network interface within
	Windows for Workgroups set the LMLogon value to Zero (0) or one (1).
	
	There is a problem when this setting is equal to "YES" (altered by Workgroup
	Connections). The LAN Manager Settings dialog box in the Windows for Workgroups
	Control Panel, Network, Networks Options, does not show Log On To LAN Manager
	Domain as selected. In other words, the check box appears to not be selected.
	However, Windows for Workgroups behaves as if the Log On To LAN Manager Domain
	is selected.
	
	MORE INFORMATION
	================
	
	The LAN Manager Settings dialog box in Control Panel, Network, Networks Options,
	Settings does not display a check in the box next to Log On To LAN Manager
	Domain if LMLogon=YES is specified in the [network] section of the SYSTEM.INI
	file. If this box is selected in Control Panel, the SYSTEM.INI setting are
	changed to LMLogon=1 and LAN Manager validation is enabled.
	
	It is possible to be logged on and validated by a LAN Manager server that is
	password protected and never be prompted for a password. This can happen if you
	are using LAN Manager validation and either LMLogon=1 or LMLogon=YES. However if
	you are using LMLogon=YES, Control Panel never indicates that LAN Manager has
	been loaded. This can make it seem as if Windows for Workgroups is allowing
	unsecured access to a secure server. In actuality, you have been properly
	validated and the password is part of the password cache.
	
	It is also possible to never type in a password, not even a Windows for
	Workgroups password, and have access to a LAN Manager server that is password
	protected. In this situation, the Windows for Workgroups password was originally
	entered as null (enter key), then password caching was selected, and at some
	point the LAN Manager password was typed in and recorded as part of the cache.
	With validation turned on and LMLogon=1 or LMLogon=YES, you can gain access to
	the server without typing any password. As above, you would receive no
	indication that LAN Manager had been loaded if LMLogon=YES.
	
	NOTE: When null is entered as the Windows for Workgroups password, the prompt to
	logon to Windows for Workgroups is bypassed.
	
	For more information on Workgroup Connections settings, query on the following
	words in the Microsoft Knowledge Base:
	
	  Workgroup and Connections and LMLogon
	
	Additional query words: 3.10 Logon
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
