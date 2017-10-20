---
layout: page
title: "Q156527: &quot;STOP: 0x00000093&quot; with Novell NetWare Client Services"
permalink: /kb/156/Q156527/
---

## Q156527: &quot;STOP: 0x00000093&quot; with Novell NetWare Client Services

{% raw %}

	Article: Q156527
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetupkbfaq
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install the Novell NetWare Client Service version 3.5b in Windows NT
	4.0, you may receive the following error message:
	
	  STOP: 0x00000093
	  INVALID_KERNEL_HANDLE
	
	You may also receive this message after upgrading from Windows NT 3.5x to Windows
	NT 4.0 if the NetWare Client Service was not removed before the upgrade.
	
	CAUSE
	=====
	
	The Novell NetWare Client Service version 3.5b for Windows NT 3.5x is not
	compatible with Windows NT 4.0. The Windows NT 4.0 upgrade process is unable to
	upgrade the Novell components.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, rename the Nwfs.sys file using the steps in the
	appropriate section below.
	
	Windows NT Installed on a FAT Partition
	---------------------------------------
	
	1. Start your computer using the MS-DOS option from the NT OS Loader. (If MS-DOS
	  is not an option, boot your computer using an MS-DOS boot disk.)
	
	2. Change directories to the Winnt\System32\Netware folder.
	
	3. Rename the Nwfs.sys file to Nwfs.old.
	
	4. Restart your computer and start Windows NT.
	
	Windows NT Installed on an NTFS Partition
	-----------------------------------------
	
	1. You can remove all the network cards from your machine, This will prevent the
	  network components from starting and allow you to logon without trapping. If
	  this does not work then you must install a parallel copy of Windows NT and
	  follow the remaining steps below.
	
	2. Log in to the new installation of Windows NT and run Command Prompt.
	
	3. Change directories to the Winnt\System32\Netware folder on the original
	  Windows NT installation.
	
	4. Rename the Nwfs.sys file to Nwfs.old.
	
	5. Restart the original installation of Windows NT.
	
	NOTE: The NetWare Client Service is unable to start without the Nwfs.sys file and
	may generate event log errors. After logging into Windows NT, you should
	completely remove the Novell NetWare Client Service using the following steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click the Services tab, click Novell NetWare Client Services, and then click
	  Remove.
	
	3. Click OK. When you are prompted to restart the computer, do so.
	
	After you have removed the Novell NetWare Client Service, use one of the
	following methods to gain access to NetWare resources on the network:
	
	- Install the Gateway Service for NetWare or the Client Service for NetWare
	  that is included with Windows NT Server or Windows NT Workstation.
	
	- Contact Novell Technical Support to obtain an updated client for Windows NT
	  4.0.
	
	MORE INFORMATION
	================
	
	The Novell NetWare Client Service is used with Windows NT 3.5x to access NDS
	(NetWare Directory Services) objects in a Novell 4.x tree. Windows NT 4.0
	includes a client for NetWare that allows access to NDS objects, but does not
	allow certain Novell tools to operate in Windows NT.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q149014
	  TITLE : Unable to Run Netadmin.exe or Nwadmin.exe
	
	Additional query words: 93 0x93 novell client
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
