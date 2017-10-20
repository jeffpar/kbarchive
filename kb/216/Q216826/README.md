---
layout: page
title: "Q216826: SMSINST: How to Create a Silent Uninstall for SMS Installer Prog"
permalink: /kb/216/Q216826/
---

## Q216826: SMSINST: How to Create a Silent Uninstall for SMS Installer Prog

{% raw %}

	Article: Q216826
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120 kbAdvertisement kbPackage kbsmsInst kbSoftwareDist
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server 2.0, you can uninstall a program when it is no
	longer advertised.
	
	In SMS Installer programs created with uninstall support, the uninstall process
	brings up a dialog box that prompts the user to select an Automatic or a Custom
	uninstall. In some cases, it might be necessary to have a silent uninstall that
	does not bring up any dialog boxes.
	
	MORE INFORMATION
	================
	
	You can create a silent uninstall in one of the following ways:
	
	Method 1
	
	Modify the UNINSTAL.IPF before compiling your program. SMS Installer includes
	UNINSTAL.IPF (located in Program files\Microsoft SMS Installer\Include) when
	uninstall support is selected. You can modify this file with the script editor
	view of SMS Installer. Modify the registry statement highlighted below with
	'=> <='
	
	  If APPTITLE Not Equal "" then
	     If System has Windows 95 Shell
	        Registry Key Software\Microsoft\.....
	  =>    Registry Key Software\Microsoft\......   <=
	     Else
	        .
	        .
	     End Block
	  End Block
	
	Change the value from:
	
	  "%UNINSTALL_PATH%" "%_LOGFILE_PATH_%" "%APPTITLE% Uninstall"
	
	to:
	
	  "%UNINSTALL_PATH%" /S "%_LOGFILE_PATH_%" "%APPTITLE% Uninstall"
	
	Save the script but do not compile it. All programs compiled after the
	modification of uninstal.ipf will have quiet uninstall automatically enabled.
	
	Method 2
	
	Modify the uninstall string in the client's registry after the program is
	installed. All programs with uninstall support create the following registry
	key:
	
	HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\<Program name>
	
	A string value 'UninstallString' is also created and its data is the path to
	uninstal.exe + install log file + application name.
	For example, the key would be the following for a program called Bogo Games:
	
	HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\Bogo Games
	
	and the UninstallString Data would be similar to "C:\Program Files\Bogo
	Games\UNINSTAL.EXE "C:\Program Files\Bogo Games\INSTALL.LOG"
	
	To make the uninstall silent, you need to add a "/S" (without the quotation
	marks) after UNINSTAL.EXE. The UninstallString would become "C:\Program
	Files\Bogo Games\UNINSTAL.EXE /S "C:\Program Files\......""
	
	Additional query words: prodsms installer silent quiet
	
	======================================================================
	Keywords          : kbsms200 kbsms120 kbAdvertisement kbPackage kbsmsInst kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200 kbSMSI200
	Version           : WINDOWS:2.0; winnt:2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
