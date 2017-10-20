---
layout: page
title: "Q97736: Paradox for Windows Cannot Access WFWG Shared Directory"
permalink: /kb/097/Q97736/
---

## Q97736: Paradox for Windows Cannot Access WFWG Shared Directory

{% raw %}

	Article: Q97736
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	In Windows for Workgroups, when you try to open a file in a shared directory on
	another machine from Paradox for Windows, you receive the following error
	message:
	
	  Network initialization failed, cannot access Network lock file.
	
	WORKAROUND
	==========
	
	To access files on other machines in a Windows for Workgroups network, you need
	to use the SUBST command locally, at the server machine (the computer with the
	shared directory), before you start Windows for Workgroups. For more
	information, check your Paradox documentation for information about using
	Paradox on a peer-to-peer network.
	
	The SUBST command lets you substitute a string for a path and allows you to
	associate a path with a drive letter. For more information about SUBST, refer to
	your MS-DOS "User's Guide" or MS-DOS Help.
	
	If you don't want to use SUBST with your Windows for Workgroups configuration,
	you can use DoubleSpace. If you already have DoubleSpace installed, run
	DBLSPACE.EXE and choose Create New Drive from the Compress menu. If you have not
	yet installed DoubleSpace and you don't want to compress your hard drive(s), run
	DBLSPACE.EXE and choose Custom Setup. When you create the new drive, choose the
	drive letter required by Paradox.
	
	NOTE: You may also want to resize the drive so that it doesn't take up more disk
	space than is required for the Paradox files.
	
	MORE INFORMATION
	================
	
	If you continue to have problems with Paradox for Windows, please contact
	Borland technical support.
	
	Additional query words: 3.10 3.11 6.0 6.2 6.22 compression
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
