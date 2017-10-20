---
layout: page
title: "Q133305: Installing a LAN Manager MS-DOS Client Over the Network"
permalink: /kb/133/Q133305/
---

## Q133305: Installing a LAN Manager MS-DOS Client Over the Network

{% raw %}

	Article: Q133305
	Product(s): Microsoft Windows NT
	Version(s): 2.2b,2.2c,3.1; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft LAN Manager, versions 2.2b, 2.2c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how the LAN Manager version 2.2 MS-DOS Enhanced
	workstation can be installed over the network from a Windows NT server provided
	the Over-the-Network (OTN) installation share has been previously created on a
	LAN Manager version 2.2 server, and the OTN installation share directory
	structure is still available. This article assumes that you have already
	performed successful OTN installations as described in Chapter 5 of the LAN
	Manager Installation and Configuration Guide.
	
	MORE INFORMATION
	================
	
	To install a LAN Manager 2.2 MS-DOS Enhanced workstation over the network from a
	Windows NT server:
	
	1. Transfer the existing OTN installation share from a LAN Manager version 2.2
	  server to a Windows NT server. The directory structure must be duplicated
	  exactly. For example, create a NINSTALL directory on the Windows NT server,
	  and then copy all files and subdirectories from the LAN Manager server
	  NINSTALL directory to the Windows NT server NINSTALL directory.
	
	2. If the new OTN installation share is in a different domain than the original,
	  edit the installation template files (*.TEM) on the Windows NT server to show
	  the correct domain entry as follows:
	
	  Domain = <domain>
	
	3. Edit the AUTOEXEC.BAT file on the OTN installation boot disks to point to the
	  correct server and OTN share as follows:
	
	  net use <drive_letter>: \\<server>\<share>
	
	4. Share the NINSTALL directory on the Windows NT server, and give the group
	  Everyone the Read permission.
	
	5. Enable the Guest account so it does not require a password.
	
	6. Boot MS-DOS workstations with the OTN installation floppy disk and install
	  LAN Manager.
	
	Additional query words: prodnt 3.10 2.2b 2.2c
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWinNT310Search kbLanManSearch kbLanMan220b kbLanMan220c
	Version           : :2.2b,2.2c,3.1; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
