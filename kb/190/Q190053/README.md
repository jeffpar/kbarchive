---
layout: page
title: "Q190053: XCLN: Adding Custom Applications to Active Setup with the ODK"
permalink: /kb/190/Q190053/
---

## Q190053: XCLN: Adding Custom Applications to Active Setup with the ODK

{% raw %}

	Article: Q190053
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article describes how to add other programs to the Active Setup to
	Customize install packages created by the Outlook Deployment Kit (ODK.)
	
	MORE INFORMATION
	================
	
	You can add custom components to the Active Setup during Stage 2 of the Outlook
	Deployment Wizard. You can add up to 10 custom components which your users may
	install along with Outlook and other Microsoft components you have selected.
	These custom components may be provided in the form of a self-extracting file or
	a compressed cabinet (.cab) file.
	
	It is recommended that you sign any custom code. Code-signing lets users know
	that they can trust your code before installing it on their computers. The
	default settings in Setup (and Internet Explorer) will reject unsigned code.
	
	Below are definitions of the various boxes that need to be filled out at this
	stage.
	
	Component
	---------
	
	Type the name of your component in this box.
	
	Location
	--------
	
	Type the path to your program, or click Browse to search for it.
	
	Command
	-------
	
	If you specify a .cab file, you must also specify a command to run it.
	
	GUID
	----
	
	If your program already has a globally unique identifier, or GUID, type it in
	this box. If your program doesn't have a GUID, then click Generate to assign a
	GUID. A GUID establishes a unique identity for programs, objects, and other
	items.
	
	Parameter
	---------
	
	You can specify any switches to run with your program.
	
	Size
	----
	
	Type the size of your program in kilobytes (KB).
	
	Version
	-------
	
	The version number helps you track versions of your program and ensure that the
	latest version is installed.
	
	Uninstall key
	-------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	This is the registry entry, or key, for your uninstall program. Registering your
	uninstall program enables users to remove your program by clicking the
	Add/Remove Programs icon in Control Panel. To register your uninstall program,
	add the entries for your application to the Uninstall subkey:
	
	  HKEY_LOCAL_computer\Software\Microsoft\Windows\CurrentVersion\ 
	  Uninstall\ApplicationName\UninstallString
	
	  ApplicationName = the display name of your program
	
	  UninstallString = path [ switches ]
	
	Both the ApplicationName and UninstallString values must be supplied and be
	complete for your uninstall program to appear in Control Panel. The path you
	supply to UninstallString must be the complete command line used to carry out
	your uninstall program. The command line you supply should carry out the
	uninstall program directly rather than from a batch file or subprocess.
	
	Verify
	------
	
	Programs installed over the Internet typically need "digital signatures" that
	identify their source and guarantee that the code hasn't changed since it was
	signed. Depending on safety settings, users can be warned before the program is
	downloaded. Certificate authorities can supply public and private keys needed to
	sign code. To determine whether the program has been digitally signed, click
	Verify.
	
	For current information about code signing, see the Microsoft Web site.
	
	Tools for building .cab files and creating Internet Express scripts are included
	in the ODK. Additional tools are available in the Microsoft Internet Client
	Software Development Kit (SDK). For more general information about Active Setup
	technology, see Active Setup.
	
	REFERENCES
	==========
	
	For more information on using the Microsoft Outlook 98 Deployment kit, click
	Browse Outlook 98 Deployment Kit on the opening screen of the compact disc.
	
	Additional query words: 98 ODW ODK
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
