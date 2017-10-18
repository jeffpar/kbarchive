---
layout: page
title: "Q153094: Restoring Default Permissions to Windows NT System Files"
permalink: kb/153/Q153094/
---

## Q153094: Restoring Default Permissions to Windows NT System Files

	Article: Q153094
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When an administrator attempts to secure the Microsoft Windows NT system by
	changing the default Windows NT file system (NTFS) file and directory
	permissions set up on the <%winnt_root%> and/or the default system
	directories and subdirectories, some functions, such as users' ability to log on
	to the network, may be impaired. In extreme cases the system may blue screen on
	startup. If the system starts, the default permissions can be restored. If the
	system blue screens, the original system can be restored by installing a second
	copy of Windows NT.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The following procedure does not work in Windows NT 4.0. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q157963 Setacl.exe Not Available in Windows NT 4.0
	
	
	If the System Starts
	--------------------
	
	Use the following procedures to restore the default permissions on the system
	files in the <winnt_root> and all default subdirectories.
	
	1. Logon as administrator.
	
	2. The built-in SYSTEM account needs access to the Windows NT default
	  directories and subdirectories. To get this access, do the following:
	
	  a. In File Manager use Security/Permissions to grant the SYSTEM account FULL
	     CONTROL to the root directory of the NTFS volume that contains Windows NT.
	
	  b. Next, either click to select the "Replace Permissions on Subdirectories"
	     option, which gives SYSTEM access to the entire volume,
	
	     -or-
	
	     go to the system's root directory (typically, WINNT35) and give SYSTEM full
	     control of that directory and all subdirectories. SYSTEM should always
	     have full control of all system files.
	
	3. Start Registry Editor (Regedt32.exe).
	
	4. Go to the following registry location:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager
	
	5. Double-click the value BootExecute.
	
	6. Under BootExecute, you may find a few entries, such as:
	
	  autocheck autochk *
	
	  After any entries, add on a separate line:
	
	  "setacl /a \DosDevices\<systemdrive>:\<winnt_root>
	  \System32\winperms.txt \DosDevices\<systemdrive>:" (without the
	  quotation marks)
	
	  NOTE: This added entry should all be on the same line under the autocheck
	  entry.
	
	  Here <systemdrive> is the drive that Windows NT is installed on and
	  <winnt_root> is the Windows NT root directory on that drive.
	
	  After adding the change on a typical system, the BootExecute entry looks like
	  this while in the reged32 multi-string editor:
	
	  autocheck autochk *
	  setacl /a \DosDevices\c:\winnt35\system32\winperms.txt \DosDevices\c:
	
	7. Click OK to save the changes.
	
	8. Exit the registry editor and restart the computer.
	
	When the computer restarts, the system will set security on the system files just
	as it does when converting from FAT to NTFS file systems.
	
	No Additional file security needs to be placed on the Windows NT system files if
	they are residing on NTFS. Any further restrictions may curtail the ability of
	users to log on to the individual computer or the domain.
	
	However, it is possible to restrict user access to system files. As long as the
	SYSTEM account has full control of all system files, user access (usually
	through the group EVERYONE) can be restricted.
	
	NOTE: Microsoft recommends using the default permissions for Windows NT. Changing
	these permissions may make it impossible for users to log on, print, access
	logon scripts, or gain access to other necessary functions. As with using the
	Registry Editor, make these changes at your own risk. Always have a recovery
	plan in case you need to revert to a previous setup.
	
	The minimum permissions necessary to log on (again, assuming SYSTEM has full
	control of the volume root and all system directories and files) are:
	
	    System_root (e.g. c:\winnt35) ------------ Everyone - READ
	    System_root\system32 --------------------- Everyone - READ/EXECUTE
	    System_root\system32\repl\import\scripts - Everyone - READ/EXECUTE
	         (only if your users have logon scripts)
	
	Depending on your environment, additional permissions may be necessary.
	
	If The System Does Not Start (Blue Screen with STOP 21A)
	--------------------------------------------------------
	
	If the administrator has modified permissions, rebooted the computer, and now
	receives a blue screen, then the most likely cause is that the SYSTEM account
	does not have adequate access to the system files and directories.
	
	To restore access:
	
	1. Install a new copy of Windows NT into a new directory on the same volume as
	  the existing copy. Of course, you will need to start up with the boot disks.
	
	WARNING: If you install a new copy of NT in the same directory as the existing
	copy, you will erase the existing copy, all existing accounts, and so on.
	
	2. Boot to the new copy of Windows NT.
	
	3. Use File Manager to give the System account Full Control of the volume root
	  and all system files and directories.
	
	You should now be able to boot to the original copy of Windows NT. Follow the
	instructions in the "If the System Starts" section of this article to restore
	default permissions on your system.
	
	
	Additional query words: prodnt security
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
