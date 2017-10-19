---
layout: page
title: "Q133221: How to Install a Server-Based Windows 95 Setup"
permalink: /kb/133/Q133221/
---

## Q133221: How to Install a Server-Based Windows 95 Setup

	Article: Q133221
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork win95kbfaq
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to create a flat copy of Windows 95 on a network
	server so that you can run Setup from the server.
	
	Note that the information in this article applies only to the retail version of
	Windows 95; using Netsetup.exe is not supported with Windows 95 OEM Service
	Release 2 (OSR2).
	
	MORE INFORMATION
	================
	
	To create a flat copy of Windows 95 on a server, use the Netsetup.exe tool that
	is located on the Windows 95 CD-ROM. You can run Netsetup.exe only from a
	computer running Windows 95. You can create a copy of Windows 95 on the
	following server types:
	
	- Microsoft Windows NT
	
	- Microsoft LAN Manager 2.x
	
	- Microsoft Windows 95
	
	- LANtastic 5.x
	
	- Banyan VINES 5.52
	
	- DEC Pathworks 5.x
	
	- IBM OS/2 LAN Server 1.2 or later
	
	- Novell NetWare 3.x and 4.x
	
	- SunSelect PC-NFS 5.0
	
	To create a full copy of Windows 95 on a server, follow these steps:
	
	1. Double click the Netsetup.exe file in the Admin\Nettools\Netsetup folder on
	  the Windows 95 CD-ROM.
	
	2. Click the Set Path button.
	
	3. Type the network path for the copy of Windows 95.
	
	4. Click the Install button.
	
	5. Click the Installation Type option you want to use:
	
	     Option             Meaning
	     ----------------------------------------------------------
	     Server             This choice allows for a shared
	                        installation. Only .ini, .dat, and user
	                        files are stored in the local user's
	                        Windows folder.
	     Local Hard Drive   All Windows files are stored on the local
	                        hard disk.
	     User's Choice      User will be prompted for installation
	                        type.
	
	6. In the Path To Install From box, type the path for the Windows 95 CD-ROM.
	
	7. Click the Default option you want to use:
	
	     Option                 Meaning
	     ---------------------------------------------------------------
	     Create Default         You can create a custom Msbatch.inf file
	                            to automate the installation process.
	     Don't Create Default   An Msbatch.inf file is created using only
	                            the Installation Type option.
	
	After you make all your selections, Netsetup.exe copies all the Windows 95 files
	to the server. The following folders are created on the server:
	
	  Command
	  Config
	  Cursors
	  Fonts
	  Media
	  Program Files
	  System
	  INF
	  ShellNew
	  Suwin
	
	Additional query words: admin
	
	======================================================================
	Keywords          : kbnetwork win95 kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
