---
layout: page
title: "Q172872: SMS: Application Group or Icons Not Created in WinNT 3.51 w/PCM"
permalink: kb/172/Q172872/
---

## Q172872: SMS: Application Group or Icons Not Created in WinNT 3.51 w/PCM

	Article: Q172872
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.2
	Operating System(s): 
	Keyword(s): kbinterop kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server provides the functionality to install
	applications in the background on Windows NT systems using the Package Command
	Manager (PCM) service. Program groups and icons may or may not be created,
	depending on the version of Windows NT used and the method used to create them.
	
	Microsoft Systems Management Server Installer offers two methods to create
	program groups and icons or shortcuts. One method is available for computers
	running Windows NT 3.5x, and both methods are available for computers running
	Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	On a computer running Windows NT 3.5x or 4.0, the Package Command Manager
	service (PCMSVC32) runs software installations under the context of a service
	account, in the background. One of the limitations of this method of
	installation is that Dynamic Data Exchange (DDE) communication to the shell
	(Program Manager in Windows NT 3.51 or Windows NT Explorer in Windows NT 4.0) is
	not available. Please consider the following when creating software installation
	packages with the Installer for deployment by means of PCMSVC32:
	
	- In Windows NT 3.51, the exclusive method for creating program groups and
	  icons relies on DDE. Therefore, when a setup program running through PCMSVC32
	  performs the DDE operation to create program groups and icons, it fails. No
	  groups or icons are created.
	
	- In Windows NT 4.0, group and icon creation through DDE is also available for
	  backwards compatibility, but it also fails when the package is sent through
	  PCMSVC32. Another method that does not rely on DDE is normally used, and
	  works correctly with PCMSVC32.
	
	Two Systems Management Server Installer script actions are available for program
	group and program icon or shortcut creation:
	
	- Add Progman Icons: This method is available in both Windows NT 3.51 and
	  Windows NT 4.0, but it does not work if used with PCMSVC32 because it uses
	  DDE.
	
	- Create Shortcut: This method is available in Windows NT 4.0 (but not Windows
	  NT 3.51) and works correctly if used with PCMSVC32 because it does not use
	  DDE. Note that you must specify the program groups as common, not personal,
	  groups. If a personal group is specified, it will only create the group and
	  shortcuts under the PCM service account profile, and will not be available to
	  the user.
	
	When developing scripts for deploying applications to Windows NT 4.0, you should
	always use the Create Shortcut script action. Note that the
	repackaging/installation expert in the Systems Management Server Installer will
	handle this automatically because it creates an IF-THEN block to use one of the
	two methods described above, based on whether the Windows NT Explorer shell
	(with Windows NT 4.0) is present.
	
	The logic can be summarized as:
	
	  IF
	  The Windows 95 (Windows NT 4.0) shell exists
	
	  THEN
	  Use the 'Create Shortcut' script action  //This is for Windows NT 4.0
	  and works correctly with PCMSVC32// 
	
	  ELSE
	  Use 'Add Progman Icons' script action //This is for Windows NT 3.51 and
	  fails with PCMSVC32// 
	
	In short, you cannot create program groups or items in Windows NT 3.51 when you
	are installing the application through PCMSVC32. When developing scripts for
	deploying applications to Windows NT 3.51 through PCMSVC32, you should create an
	additional package that runs through Package Command Manager on the desktop
	(PCMWIN32) to install the program groups and icons. You can make it mandatory
	and silent, but it must run in the context of the logged on user, in order to
	communicate with Program Manager and properly create program groups and icons.
	
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          : kbinterop kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
