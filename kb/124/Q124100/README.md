---
layout: page
title: "Q124100: PC Win WRmt: Upgrading Windows for Workgroups Mail"
permalink: /kb/124/Q124100/
---

## Q124100: PC Win WRmt: Upgrading Windows for Workgroups Mail

{% raw %}

	Article: Q124100
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to successfully install version 3.2x of Microsoft Mail for Windows or
	version 3.2x of Microsoft Mail Remote for Windows over Microsoft Windows for
	Workgroups version 3.11, certain Windows for Workgroups Mail files must be
	deleted prior to running 3.2x of Mail for Windows or Mail Remote for Windows
	SETUP.EXE.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups Mail components have a more recent internal version stamp
	than version 3.2x of Mail for Windows or Mail Remote for Windows files. The
	setup process is designed to check this version stamp during installation and
	ensure that the most recent version of the file is installed or remains on the
	disk. Since many Workgroup component files share the same file names as Mail for
	Windows and Mail Remote for Windows files, the Workgroup files remain on the
	disk.
	
	In the case of upgrading a Workgroups client to the Mail for Windows, the
	Workgroups Mail client components will remain and will continue to operate when
	running against version 3.2 of Microsoft Mail for PC Networks postoffice.
	Additionally, Mail for Windows setup will update the Windows for Workgroups
	MSMAIL.INI and enable spell checking, demonstrations, and Apple Macintosh (MAC)
	file type translation tables.
	
	The Windows for Workgroups Mail files are designed to integrate with and
	support:
	
	1. Microsoft At Work Fax technology designed into Windows for Workgroups.
	
	2. Unified logon/mail sign-in (the user's mail password can be cached in the
	  Workgroups USERNAME.PWL file). This prevents the user from having to enter a
	  password when mail is launched.
	
	3. An Optimize Local Mail File option (enabled by selecting the Mail menu and
	  choosing Options) for optimizing performance when storing the MMF file
	  locally (Windows for Workgroups default) on a compressed volume (Doublespace,
	  Drivespace, Stacker, etc.).
	
	Version 3.2x of Microsoft Mail for Windows files do not have this integration and
	support. This only poses a problem if the Windows for Workgroups user needs to
	incorporate one or more of the Microsoft Mail updates (Application Note
	updates/bug fixes) to the mail files. The mixing of these versions is not
	supported. Therefore, if even one of these updates is required, then the Windows
	for Workgroups client should be fully upgraded to 3.2x of Mail for Windows.
	
	NOTE: This will result in the loss of At Work Fax and unified logins. Special
	considerations will need to be addressed if the Workgroups user has selected the
	Doublespace option.
	
	In summary, either the Windows for Workgroups machine must maintain the full set
	of Windows for Workgroups Mail specific files (listed below), or the files
	should be deleted prior to running 3.2x of Mail for Windows setup. This will
	update the required files for Mail for Windows.
	
	To update the Windows for Workgroups Mail client to version 3.2x of Mail for
	Windows:
	
	NOTE: If Windows for Workgroups files must be replaced with Mail for Windows
	files, the following procedure should be performed for all Windows for
	Workgroups client machines prior to deleting the Windows for Workgroups Mail
	files.
	
	1. If At Work Fax has been enabled, it should be disabled by opening the Control
	  Panel, and selecting Fax, Remove.
	
	2. Sign-in to Mail. Check that the Optimize Local Mail File is set to Highest
	  Security. Select OK.
	
	  (If the options are grayed out, this indicates that the user's MMF is stored
	  on the postoffice, not locally). Alternatively, the user could move the MMF
	  to the postoffice by selecting the Mail menu and choosing Options, Server,
	  and then selecting the Postoffice option under Storage.
	
	3. (Optional) If the users have adequate disk space available, consider having
	  them Export All Folders in their MMF (select the File menu and choose, Export
	  folder...). This creates a transportable backup of the MMF.
	
	4. Exit and Sign Out of Mail. Exit Windows for Workgroups.
	
	Delete the Windows for Workgroups Mail files listed below, prior to running 3.2x
	of Mail Remote for Windows SETUP.EXE.
	
	NOTE: The files prefaced with * are Mail specific files that load when MSMAIL.EXE
	is launched. Files prefaced with # are files that are Mail specific, but are
	called when some menu item within mail is selected. Both the \WINDOWS and the
	\WINDOWS\SYSTEM subdirectories should be checked for copies of these files.
	MSMAIL.EXE and MSMAIL.HLP may reside elsewhere on the disk as well.
	
	*AB       DLL        97,600 11-01-93   4:11a
	#IMPEXP   DLL        66,560 11-01-93   4:11a
	*MAILMGR  DLL        51,632 11-01-93   4:11a
	*MAILSPL  EXE        51,792 11-01-93   4:11a
	*MSMAIL   EXE       302,528 11-01-93   4:11a
	#MSMAIL   HLP        76,521 11-01-93   4:11a
	*MSSFS    DLL       266,464 11-01-93   4:11a
	*PABNSP   DLL        44,672 11-01-93   4:11a
	*STORE    DLL       235,072 11-01-93   4:11a
	#WGPOMGR  DLL        80,224 11-01-93   4:11a
	
	Microsoft Mail Remote for Windows
	---------------------------------
	
	Mail Remote for Windows will not function properly when installed into a standard
	Windows for Workgroups version 3.11 installation (due to file version stamps).
	If only Remote Mail functionality is desired, then the above procedure should be
	performed prior to running Remote Mail's SETUP.EXE. If both LAN-based Mail (full
	3.2x Mail for Windows) and Mail Remote for Windows functionality is desired
	(switched through the Mail Selector Icon), then:
	
	1. Execute the above procedures.
	
	2. Run version 3.2x of Mail for Windows SETUP.EXE.
	
	3. Run Mail Remote for Windows SETUP.EXE.
	
	Additional query words: 3.20 Setup WFW update
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
