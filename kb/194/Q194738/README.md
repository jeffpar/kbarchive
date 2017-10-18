---
layout: page
title: "Q194738: Err Msg: An error occurred loading the Distributed Password..."
permalink: kb/194/Q194738/
---

## Q194738: Err Msg: An error occurred loading the Distributed Password...

	Article: Q194738
	Product(s): The Microsoft Network
	Version(s): 2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN versions 2.5, 2.51, 2.52, 2.6 
	- Microsoft Outlook Express for Windows 98 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you are connected to MSN, The Microsoft Network, you may receive an error
	message similar to one of the following error messages when you attempt to
	retrieve e-mail using Outlook Express:
	
	  An error occurred loading the Distributed Password Authentication Components.
	  Account: 'MSN Mail', Server: 'pop3.email.msn.com', Protocol: POP3, Server
	  Response: '.', Port: 110, Secure (SSL): No, Error Number: 0x800CCC00.
	
	  Unable to logon to server using secure password authentication Components.
	  Account: 'MSN Mail', Server: pop3.email.msn.com',
	  Protocol: POP3, Server Response: '.',
	  Port: 110, Secure (SSL): No,
	  Error Number: 0x800CCC18
	
	You may also receive the following error message when you attempt to connect to
	an MSN Premier Web page:
	
	  Access denied.
	
	This issue can occur in MSN version 5.0 or Windown 98 Second Edition if
	Digest.dll is missing or corrupt.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	Uninstall Internet Explorer
	---------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Add/Remove Programs icon and uninstall Internet Explorer.
	
	3. After the uninstall is complete, restart the computer.
	
	4. Click Start, point to Settings, and then click "Find Files or Folders".
	
	5. In the Named box, type Msnsspc.dll, and then click Find Now.
	
	6. In the list of found files, right-click Msnsspc.dll, click Rename, type old
	  at the beginning of each filename, and then press ENTER.
	
	7. Repeat the previous two steps with each of the files listed below:
	
	  MSAPSSPC.DLL
	  MSVCRT40.DLL
	  MFC40.DLL
	
	Reinstall Internet Explorer 4.x
	-------------------------------
	
	1. Insert the MSN CD-ROM into the CD-ROM drive. Press and hold down the SHIFT
	  key when you insert the CD-ROM to prevent the MSN Setup program from starting
	  automatically.
	
	2. Double-click My Computer.
	
	3. Right-click the MSN (CD-ROM drive) icon, and then click Explore.
	
	4. Double-click the Ie40 folder or the Ie401folder.
	
	5. Double-click the Ie4setup.exe file. Follow the instructions on the screen to
	  install Internet Explorer.
	
	Reinstall Internet Explorer 5.0
	-------------------------------
	
	1. Insert your Microsoft Internet Explorer 5.0 CD-ROM into your CD-ROM
	  drive.Press and hold down the SHIFT key when you insert the CD-ROM to prevent
	  the Setup program from starting automatically.
	
	2. Click Start, point to Settings and then click Files Or Folders.
	
	3. In the Named box, type ie5setup.exe.
	
	4. In the Look In box, click the CD-ROM drive that contains the Internet
	  Explorer CD-ROM.
	
	5. Click Find Now.
	
	6. In the list of found files, double click on ie5setup.exe and follow the
	  prompts to reinstall the program.
	
	7. If you are prompted to restart the computer, do so.
	
	Windows 98
	----------
	
	1. Click Start, point to Settings, and then click "Find Files or Folders".
	
	2. In the Named box, type Msapsspc.dll Msnsspc.dll Msvcrt40.dll Mfc40.dll, and
	  then click Find Now.
	
	3. In the list of found files, right-click each file, click Rename, and then
	  type old at the beginning of each filename.
	
	4. Press ENTER. Continue until the list of found files is empty.
	
	5. Close the Find window.
	
	6. Extract new copies of the Msapsspc.dll, Msnsspc.dll, Msvcrt40.dll, and
	  Mfc40.dll files from your original Windows 98 CD-ROM into the Windows\System
	  folder using the System File Checker tool.
	
	7. To start the System File Checker tool, click Start, click Run, type sfc.exe
	  in the Open box, and then click OK.
	
	For information about how to use the System File Checker tool to extract a file,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Use Registry Editor to open the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\control\SecurityProviders
	
	2. If necessary, modify the value data of the SecurityProviders value to include
	  msapsspc.dll, msnsspc.dll.
	
	3. Quit Registry Editor, and then restart the computer.
	
	Additional query words: 4.0 msnetwork microsoft-net m.s.n. outexw98
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbOSWin98 kbOSWinSearch kbMSNSearch kbOutlookExpressSearch kbZNotKeyword3 kbOutlookExpress98Search kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : :2.5,2.51,2.52,2.6
	Issue type        : kbprb
	
	=============================================================================
	
