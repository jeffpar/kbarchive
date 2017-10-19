---
layout: page
title: "Q242418: INFO: Using the Visual Studio Installer with Visual FoxPro"
permalink: /kb/242/Q242418/
---

## Q242418: INFO: Using the Visual Studio Installer with Visual FoxPro

	Article: Q242418
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbsetup kbAppSetup kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Studio Installer is a new tool which you can use to make more
	sophisticated setups than the Setup Wizard allows (in many cases). Visual Studio
	Installer uses the new Windows Installer technology, which is geared towards
	reducing total cost of ownership by allowing finer control over the setup
	process and allowing applications to repair themselves.
	
	MORE INFORMATION
	================
	
	The Visual Studio Installer is available to registered users of Visual Studio or
	its component parts at
	http://msdn.microsoft.com/vstudio/downloads/vsi/default.asp. Installs are
	created through the Visual Studio shell, which will feel familiar to users of
	Visual Basic or Visual InterDev. Most of the components, though, will feel
	familiar to Visual FoxPro users. For instance, the Properties window is almost
	the same, and the Project Explorer is much like Visual FoxPro's Project
	Manager.
	
	The Visual Studio installer also allows finer control over the installation
	process. You can add dialogs (such as Register User) and customize the
	appearance of the various dialogs. For example, you can choose not to show a
	copyright notice on the opening screen, or you can add a splash screen.
	
	You will not want to use the Visual Studio Installer if your application requires
	a post-setup executable. The Windows Installer setup process treats everything
	as a transaction that can be rolled back if necessary. The post-setup executable
	is outside the knowledge of Windows Installer; therefore, Windows Installer
	cannot undo any changes the executable makes. For this reason, Visual Studio
	Installer does not support the use of a post-setup executable. It also does not
	support Microsoft Graph runtime installations. Visual Studio Installer does
	support DCOM and remote automation use, but it requires adding keys to the
	registry. The Visual FoxPro 6 Setup Wizard is more flexible in this case.
	
	REFERENCES
	==========
	
	For more information, please see the Visual Studio Installer help file and the
	following White Paper:
	
	  Using Visual Studio Installer for Distributing Visual FoxPro 6.0 Applications
	  (http://msdn.microsoft.com/library/techart/usingvsi.htm)
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbsetup kbAppSetup kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
