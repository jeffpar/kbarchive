---
layout: page
title: "Q157963: Setacl.exe Not Available in Windows NT 4.0"
permalink: /kb/157/Q157963/
---

## Q157963: Setacl.exe Not Available in Windows NT 4.0

{% raw %}

	Article: Q157963
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an administrator attempts to secure the Microsoft Windows NT system by
	changing the default Windows NT file system (NTFS) file and directory
	permissions set up on the <%systemroot%> and/or the default system
	directories and subdirectories, some functions, such as users' ability to log on
	to the network, may be impaired. In extreme cases, the system may display a blue
	screen error message on startup.
	
	In Windows NT version 3.5x, it was possible to reset the default permissions on
	the system files using the Setacl.exe command. This is not possible in Windows
	NT version 4.0.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q153094
	  TITLE : Restoring Default Permissions to Windows NT System Files
	
	
	MORE INFORMATION
	================
	
	The process that Windows NT Setup uses to create an NTFS partition and set the
	default permissions was changed in Windows NT 4.0. In Windows NT 3.5x, Setup
	would schedule two programs to run during the final reboot phase. The first
	program, Autoconv.exe, would convert the file system to NTFS format. The second
	program, Setacl.exe, would set the default permissions on the newly created NTFS
	system partition. These programs run independently from Setup and, therefore,
	could be rescheduled as noted in the above article.
	
	In Windows NT 4.0, Setup was changed. The conversion to NTFS still works the same
	way, by scheduling Autoconv.exe. However, this is done at the end of the
	Text-mode portion of Setup so that the conversion happens when Setup is booting
	into GUI-mode before Setup finishes copying all files into the system. At the
	very end of GUI-mode, Setup calls a function that sets the default permissions
	based on the Perms.inf file. This function is not a program that runs
	independently from the Setup process; therefore, it cannot be rescheduled like
	previous versions. This is by design.
	
	WORKAROUND
	==========
	
	Reinstall Windows NT into a separate directory. This will allow you to restore
	your operating system files %systemroot% from a backup tape that contains the
	correct default permissions to allow the operating system to boot and function
	normally. After Windows NT is restored and restarted, you can delete the
	parallel copy of Windows NT.
	
	
	-OR-
	
	Use the NT v4.0 Resource Kit utility called FIXACLS.EXE.
	
	FIXACLS.EXE can be found in the NT v4.0 Resource Kit Supplement Two.
	
	When system permissions have been lost, FIXACLS can restore default permissions
	to the system files. For example, the Windows NT convert command only converts
	your file system to NTFS. It does not set the default permissions after the
	conversion. FIXACLS fills this gap.
	
	To use FIXACLS, your user account needs "Backup files and folders" privileges on
	the computer where the files and folders are stored, and you must be logged on
	as a member of the Administrators group for the domain or computer where your
	user account is defined. Otherwise, "Access denied" error messages may occur.
	
	FIXACLS sets the permissions to the values defined in %SYSTEMROOT%\INF\PERMS.INF.
	Therefore, access to this file is also required to run FIXACLS.
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
