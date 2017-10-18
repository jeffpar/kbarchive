---
layout: page
title: "Q190164: Using Terminal Server as a User Workstation"
permalink: kb/190/Q190164/
---

## Q190164: Using Terminal Server as a User Workstation

	Article: Q190164
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the Terminal Server console as a user workstation has advantages.
	Developing applications in a multi-user environment is not recommended, but
	developers may want to use Terminal Server as a workstation. If you use the
	Terminal Server client directly on the Terminal Server console as the normal
	desktop, then you have the option to disconnect the session. When you
	disconnect, use RAS to connect to the network while off-site, and use the client
	on a remote computer to reconnect to the normal desktop on the Terminal Server.
	
	MORE INFORMATION
	================
	
	Here are some suggestions for using Terminal Server as a single user
	workstation.
	
	1. Use the Terminal Server Client on the console as the normal desktop to allow
	  reconnection from remote sites.
	
	2. Use a minimum of 64 MB of RAM.
	
	3. Set the IdleWinStationPoolCount to 0 (zero). You find this setting under
	  HKEY\LOCAL\MACHINE\System\CurrentControlSet\Control\Terminal Server. This
	  setting tells Terminal Server not to create any idle sessions until needed,
	  saving you two instances of WinLogon and CSRSS.
	
	
	4. If you don't use NetDDE, then remove the Nddeagnt.exe from the list of
	  processes that start when a user logs on. This value is set in the UserInit
	  value under the HKLM\Software\Microsoft\Windows NT\CurrentVersion\WinLogon
	  key.
	
	5. For remote access, turn off Menu & Window animated effects by setting the
	  MinAnimate flag to zero (0) (a string containing a zero). This value is
	  located under HKEY\CURRENT_USER\Control Panel\Desktop\WindowMetrics.
	
	6. Turn off Smooth Scrolling in Internet Explorer 4.0.
	
	7. Consider sharing the RDP client if you frequently work at different computers
	  and would like to get your normal desktop. This allows you to connect to the
	  client share, and to run MSTSC.EXE remotely, without having to install the
	  client everywhere you work.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
