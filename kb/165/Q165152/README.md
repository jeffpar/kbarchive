---
layout: page
title: "Q165152: Error Message: User32.dll Was Relocated in Memory..."
permalink: /kb/165/Q165152/
---

## Q165152: Error Message: User32.dll Was Relocated in Memory...

	Article: Q165152
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During Setup, you may receive the following error message:
	
	  User32.dll was relocated in memory. The application will not run properly.
	  The relocation occurred because the DLL C:\WINNT\SYSTEM32\RPCRT4.dll occupied
	  an address range reserved for Windows NT System DLL's. The vendor supplying
	  the DLL should be contacted for a new DLL.
	
	When you click OK, the following error message may occur:
	
	  An error has been encountered that prevents setup from continuing. Setup was
	  unable to initialize network installation components. The specific error code
	  is 2.
	
	When you click OK, the computer reboots and the sequence is repeated
	continuously.
	
	CAUSE
	=====
	
	During an upgrade from Windows NT 3.51 to Windows NT 4.0, the Rpcrt4.dll file
	may not be upgraded. If for some reason this file is not updated to the 4.0
	version and the User32.dll file is updated to the 4.0 version, the files
	conflict in memory. Rpcrt4.dll loads in an area of memory in which User32.dll
	tries to load. User32.dll is then relocated in memory but fails.
	
	The Windows NT 4.0 version has the following properties:
	
	  11/18/96  01:38a 302,352 rpcrt4.dll
	
	The Windows NT 3.51 version has the following properties:
	
	  05/26/95  10:57a 229,648 rpcrt4.dll
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods.
	
	Method 1
	--------
	
	If you have access to another computer with Windows NT 4.0, copy the Rpcrt4.dll
	file from the %SystemRoot%\system32\drivers folder on the other computer to the
	corresponding folder on your computer.
	
	NOTE: To use this method, Windows NT must be installed on a FAT partition and you
	must be able to access the hard disk using MS-DOS, Windows 95, or a boot disk.
	
	Method 2
	--------
	
	If you can dual-boot Windows NT and Windows 95 on your computer, follow these
	steps:
	
	1. Start Windows 95.
	
	2. From a command prompt in Windows 95, expand the Rpcrt4.dll file from the I386
	  folder on the Windows NT 4.0 CD-ROM to the %SystemRoot%\system32\drivers
	  folder of your original Windows NT installation. For example, type the
	  following command:
	
	  expand rpcrt4.dl_ %systemroot%\system32\drivers\rpcrt4.dll
	
	  NOTE: To properly expand files from the Windows NT CD-ROM, you must use the
	  Expand.exe utility included with Windows NT. The Windows NT Expand.exe
	  utility can only be run from a command prompt in a 32-bit environment such as
	  Microsoft Windows 95 or Windows NT.
	
	3. Restart your computer and complete the Windows NT installation.
	
	NOTE: To use this method, Windows NT must be installed on a FAT partition.
	
	Method 3
	--------
	
	1. Install Windows NT to a different folder on your hard drive.
	
	2. Copy the Rpcrt4.dll file from the %SystemRoot%\system32\drivers folder in the
	  new Windows NT installation to the corresponding folder in the original
	  installation.
	
	3. Restart your computer and complete the original Windows NT installation.
	
	4. When the upgrade process is complete, remove the temporary Windows NT
	  installation, and then delete any entries in the Boot.ini file that are
	  entered for that installation.
	
	Additional query words: error
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
