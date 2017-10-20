---
layout: page
title: "Q91020: Shared WFWG Directory on Novell NetWare Server Is Disconnected"
permalink: /kb/091/Q91020/
---

## Q91020: Shared WFWG Directory on Novell NetWare Server Is Disconnected

{% raw %}

	Article: Q91020
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows for Workgroups from a shared network directory (created by
	using the SETUP /A command), File Manager allows you to disconnect the network
	drive from which you are running Windows for Workgroups, without a warning, when
	the shared directory is on a Novell NetWare server.
	
	When you run a SETUP /N configuration with Windows 3.1, this is not possible. The
	NetWare dialog in Windows 3.1 does not allow you to disconnect a search drive.
	
	With Windows for Workgroups, you can disconnect any network drive, even when it's
	a NetWare search drive.
	
	If you disconnect the network drive from which Windows for Workgroups is running,
	the machine may stop responding (hang).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1 and version 3.11. We are researching this problem and will post new
	information here as it becomes available.
	
	Additional query words: 3.10 wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
