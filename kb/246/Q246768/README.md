---
layout: page
title: "Q246768: XCLN: Err Msg: VBScript: Team Folders: 424: There Has Been..."
permalink: kb/246/Q246768/
---

## Q246768: XCLN: Err Msg: VBScript: Team Folders: 424: There Has Been...

	Article: Q246768
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to manage information in a public folder in which Team Folders has
	been installed, you may receive one or both of the following error messages:
	
	  VBScript: Team Folders: 424: There has been an error creating an object on
	  this page.
	
	  Error code 1200: The Outlook permissions control didn't initialize properly.
	  Please contact your administrator to ensure that your browser can install
	  ActiveX controls and that the controls are available via either the Internet
	  or your intranet.
	
	CAUSE
	=====
	
	This issue generally occurs if clients that try to use Team Folders do not have
	access to the Internet. Unless the Codebase.inf file in the Tfkit folder is
	modified to point to an internal network shared drive, users are unable to
	download and install the ActiveX controls that are necessary to view and
	administer Team Folders.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Copy the following files from the folder that is created by the Team Folders
	  Kit Setup to a shared folder on your network:
	
	   - Oltfwiz.exe
	
	   - Oltfacl.cab
	
	   - Outlctlx.cab
	
	   - Codebase.bat
	
	   - Codebase.inf
	
	2. Use a text editor such as Notepad to open the Codebase.inf file in the shared
	  folder, and then change the string that follows ControlsURL= to the URL of
	  the shared folder. For example, if you placed these files in a shared folder
	  named Downloads on a Web server named Toolsrvr, you would change the
	  statement to the following:
	
	  ControlsURL="http://toolsrvr/downloads/"
	
	3. Instruct users who you want to be able to create Team Folders projects about
	  how to run the Codebase.bat file from the shared location. For example, you
	  can send interested users e-mail that contains a shortcut to the shared file.
	  When users run the Codebase.bat file, it installs the Team Folders Wizard and
	  configures the wizard to create folder home pages that load their controls
	  from your intranet location. To run Team Folders Wizard Setup so that it does
	  not require intervention by the end user, edit the Codebase.bat file and
	  replace "Oltfwiz.exe" with "Oltfwiz.exe /q."
	
	MORE INFORMATION
	================
	
	For additional information about how to deploy Team Folders, see the Team
	Folders Kit documentation that is installed when you run the Oltfkit.exe
	program.
	
	Additional query words: team folders OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000
	Issue type        : kbprb
	
	=============================================================================
	
