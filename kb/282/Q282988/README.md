---
layout: page
title: "Q282988: Microsoft Reader: Problems Starting, Unable to Display EULA"
permalink: kb/282/Q282988/
---

## Q282988: Microsoft Reader: Problems Starting, Unable to Display EULA

	Article: Q282988
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Reader, version 1.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start Microsoft Reader, you may receive the following error message:
	
	  The Microsoft Reader is unable to display the End User License Agreement.
	  The Microsoft Reader will now exit.
	
	-or-
	
	Microsoft Reader may not launch, instead, you may see an hourglass and hear hard
	drive activity. After a few moments the activity ceases and the hourglass
	disappears but Microsoft Reader does not start.
	
	CAUSE
	=====
	
	This issue can occur if one or more Registry Keys were not copied when you
	installed Microsoft Reader.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Uninstall Microsoft Reader
	--------------------------
	
	To uninstall Microsoft Reader:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Double-click Microsoft Reader.
	
	4. Follow the instructions on the screen to uninstall Microsoft Reader.
	
	Delete the Microsoft Reader registry keys
	-----------------------------------------
	
	To delete the Microsoft Reader registry keys:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. Select the following registry key:
	
	  HKey_Local_Machine\Software\Microsoft\eBook
	
	4. Press the DELETE key. When you are prompted to confirm the deletion, click
	  Yes.
	
	5. Select the following registry key:
	
	  HKey_Current_User\Software\Microsoft\eBook
	
	6. Press the DELETE key. When you are prompted to confirm the deletion, click
	  Yes.
	
	7. Select the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Uninstall\{3B14
	  33E1-8355-456F-9FED-CC9DE9FCFE31}
	
	8. Press the DELETE key. When you are prompted to confirm the deletion, click
	  Yes.
	
	9. Quit Registry Editor, and then restart the computer.
	
	Clean Boot the Computer
	-----------------------
	
	To clean boot the computer, use the appropriate method for your version of
	Microsoft Windows.
	
	Microsoft Windows 98:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Process Win.ini File
	   - Load Startup Group Items
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	For additional information about how to clean boot Windows 98, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in System Configuration Utility.
	
	Microsoft Windows 95:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold down the SHIFT key until the Windows startup
	  sequence is complete.
	
	3. Disable any anti-virus or disk tool programs installed on the computer.
	
	  For information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	4. Quit all running programs except Explorer and Systray. To do this, press
	  CTRL+ALT+DELETE, click the program that you want to quit, and then click End
	  Task.
	
	  If you receive a message that the program is busy or not responding, click End
	  Task again.
	
	  Repeat this step to quit all programs except Explorer and Systray.
	
	For additional information about how to clean boot Windows 95, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	NOTE: To restore your original Startup options, restart the computer normally,
	and then enable any anti-virus or disk tool programs installed on the computer.
	For information about how to enable these programs, see the printed or online
	documentation for the program.
	
	Download Microsoft Reader
	-------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  Reader Download site (http://www.microsoft.com/reader/download/default.htm)
	
	Release Date: Aug-08-2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	After you download the Microsoft Reader setup, double-click the file to install
	Microsoft Reader.
	
	Update the ContentDir value in the Registry
	-------------------------------------------
	
	In some cases after reinstalling Microsoft Reader, you may need to modify the
	following registry key: HKEY_Current_User\Software\Microsoft\eBook If Microsoft
	Reader doesn't start after reinstallation, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. Open the following registry key:
	
	  HKEY_Current_User\Software\Microsoft\eBook
	
	4. In the right pane, double-click ContentDir. Set the value to the My Library
	  folder on your computer. For example, if the My Library folder is located in
	  the My Documents folder on the C: drive, set the path to
	  "C:\MyDocuments\MyLibrary\"
	
	5. Quit Registry Editor, and then restart the computer.
	
	Additional query words: msreader
	
	======================================================================
	Keywords          :  
	Technology        : kbReaderSearch kbReader150
	Version           : :1.5
	Issue type        : kbprb
	
	=============================================================================
	
