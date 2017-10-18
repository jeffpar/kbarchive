---
layout: page
title: "Q71224: SetKBD.exe Dynamically Loads Keyboard DLL"
permalink: kb/071/Q71224/
---

## Q71224: SetKBD.exe Dynamically Loads Keyboard DLL

	Article: Q71224
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbfile kbsample
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SetKBD.exe is a sample that dynamically loads a new keyboard dynamic-link
	library (DLL) by altering the "keyboard.dll=" setting in the "[keyboard]"
	section of the System.ini configuration file. By calling the NewTable function
	in the keyboard driver, SetKBD.exe loads the new keyboard DLL and sets the
	keyboard driver to reflect this new DLL. SetKBD.exe also obtains and displays
	the current settings of the physical keyboard type and subtype, but does not
	change them. SetKBD.exe obtains these values by calling the GetKeyboardType
	function.
	
	The Readme.txt file in the \Keyboard directory of the Microsoft Windows Device
	Development Kit (DDK) version 3.0 refers to the SetKBD.exe application. However,
	this application is not included in the DDK distribution. This application is
	available for download from the Microsoft Download Center.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Setkbd.exe
	  (http://download.microsoft.com/download/winddk/sample2/3.1/W31/EN-US/Setkbd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The specification of SetKBD.exe differs from that in the Readme.txt file of the
	DDK because SetKBD.exe does not change the settings of the physical keyboard. On
	many systems, changing the physical keyboard settings (without actually changing
	the physical keyboard) might hang the system. If it is necessary to physically
	change keyboards, the Windows Setup program handles this sufficiently.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample 
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300
	Version           : :3.0
	Issue type        : kbinfo
	
	=============================================================================
	
