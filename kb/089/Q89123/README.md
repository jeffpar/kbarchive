---
layout: page
title: "Q89123: Setting the TEMP Variable on a Novell Network"
permalink: /kb/089/Q89123/
---

## Q89123: Setting the TEMP Variable on a Novell Network

{% raw %}

	Article: Q89123
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Windows on a Novell NetWare network, check the SET TEMP= variable
	for the following:
	
	- You must have both read and write privileges (rights) to the directory where
	  the SET TEMP= variable is pointed.
	
	- The above directory must exist and normally be empty when Windows is not
	  running.
	
	- You cannot share a TEMP directory with other users.
	
	MORE INFORMATION
	================
	
	After you do a network installation of Windows (SETUP /N) to your local hard
	drive, or your user directory on the network, you can either set your TEMP
	directory to the local hard drive or subdirectory on the network.
	
	Local Hard Drive
	----------------
	
	If you install your user files on your local hard driver, then the SET TEMP=
	should also be set to your local hard drive. You already have full privileges to
	it.
	
	User Directory on Server
	------------------------
	
	If you have your personal Windows files in your user directory on the server,
	then the SET TEMP= can be pointed to a directory on your local hard drive if you
	have one, or a TEMP subdirectory under your user directory. If you use the user
	directory, make sure you have read and write privileges to that directory and
	the TEMP subdirectory.
	
	You should use the Novell MAP ROOT command in mapping to the user directory on
	the server. For more information on this procedure, refer to the NETWORKS.WRI
	file shipped with Windows.
	
	For example, assuming "Robert's" user directory has been map rooted as M:, and
	the TEMP directory is under Robert's user directory, then SET TEMP=M:\TEMP is
	the proper syntax in the AUTOEXEC.BAT file. If SET
	TEMP=F:\USERS\BOB\WINDOWS\TEMP is used, Windows may complain about insufficient
	disk space or memory.
	
	With Windows, it is usually best to have only one drive mapping for any given
	directory -- whether it is a mapped drive or a search drive -- and have only one
	path to access it.
	
	Additional query words: 3.10 3.11 3.00 3.00a calendar.exe paintbrush paintbrush.exe print printing 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
