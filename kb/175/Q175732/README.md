---
layout: page
title: "Q175732: Installing and Using the KiXtart Login Processor Tool"
permalink: kb/175/Q175732/
---

## Q175732: Installing and Using the KiXtart Login Processor Tool

	Article: Q175732
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	NOTE: This article provides information about a tool that is not supported
	by Microsoft Product Support Services. This article is provided for
	informational purposes only; Microsoft makes no guarantee that this tool
	functions properly.
	
	SUMMARY
	=======
	
	The KiXtart (Kix32.exe) tool included on the Windows NT Server Resource Kit
	version 4.0 CD-ROM provides some networking functionality for Windows NT that is
	not built-in to the Windows NT user interface. KiXtart is a login script
	processor and enhanced batch language for Windows NT.
	
	MORE INFORMATION
	================
	
	You can use the KiXtart free-format scripting language to conditionally display
	information, set environment variables, start programs, connect to network
	drives, read or edit the Registry, and change the current drive and directory.
	In addition, KiXtart provides the following features:
	
	- Program Group Control
	
	- .ini file management
	
	Some Usage Examples
	-------------------
	
	Here are some ways that KiXtart is commonly used:
	
	- Although Windows NT does not provide the capability to perform a MAP ROOT
	  command, you can utilize the KiXtart free-format scripting language to
	  simulate the effect of a MAP ROOT command in Windows NT. A MAP ROOT command,
	  typically found in a NetWare login script, allows you to provide access to a
	  shared network resource without granting access to the parent directory of
	  that resource.
	
	- Through the Windows NT user interface, you cannot prevent a user from viewing
	  other users' home directories. In Windows NT, you can always see the
	  directory, although you may not be able to view the contents of the
	  directory. Using KiXtart, you can map a drive directly to a user's shared
	  resource, thereby preventing a user from traversing other users' home
	  directories.
	
	Installing KiXtart
	------------------
	
	To install KiXtart, install the Windows NT Server Resource Kit. To do so, run
	Setup.exe from the Resource Kit CD-ROM.
	
	NOTE: When you install the Windows NT Server Resource Kit, the KiXtart program
	files are placed in the Ntreskit\Kix95 directory.
	
	Starting KiXtart
	----------------
	
	To start KiXtart, type "KIX32" (without the quotation marks) at a command prompt,
	or specify "KIX32" (without the quotation marks) as the logon script for a
	user.
	
	KiXtart References
	------------------
	
	For additional information about using KiXtart, see the following resources:
	
	- The Kix32.doc file in your Ntreskit\Kix95 directory.
	
	- The Web site at http://kixtart.org/.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
