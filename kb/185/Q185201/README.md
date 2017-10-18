---
layout: page
title: "Q185201: Err Msg: An Error Occurred Loading the Distributed Password..."
permalink: kb/185/Q185201/
---

## Q185201: Err Msg: An Error Occurred Loading the Distributed Password...

	Article: Q185201
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.51,2.52,2.6,4.0,4.01; Win2000:95,98
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN versions 2.51, 2.52, 2.6 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- Microsoft Internet Explorer versions 4.0, 4.01 for Windows 95 
	- Microsoft Outlook Express version 4.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are connected to MSN, The Microsoft Network, you may receive an error
	message similar to either of the following when you attempt to retrieve e-mail
	using Microsoft Outlook Express:
	
	  
	
	- An error occurred loading the Distributed Password Authentication Components.
	  Account: 'MSN Mail', Server: 'pop3.email.msn.com', Protocol: POP3, Server
	  Response: '.', Port: 110, Secure (SSL): No, Error Number: 0x800CCC00.
	
	- Unable to logon to server using secure password authentication Components.
	  Account: 'MSN Mail', Server: pop3.email.msn.com', Protocol: POP3, Server
	  Response: '.', Port: 110, Secure (SSL): No, Error Number: 0x800CCC18
	
	You may also receive the following error message when you attempt to connect to
	an MSN Premier Web page:
	
	  Access denied.
	
	CAUSE
	=====
	
	This behavior can occur if the certain .dll files have been corrupted or the
	Windows 95 registry contains incorrect information.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	Upgrade
	-------
	
	We recommend you first upgrade to the current versions of MSN, Internet Explorer,
	and Outlook Express. To download or order the your free latest version of MSN,
	go to http://free.msn.com/upgrade.asp. This version contains both the latest
	versions of Internet Explorer and Outlook Express.
	
	An upgrade should solve this problem.
	
	Delete certain .dll files and reinstall IE4.x
	---------------------------------------------
	
	To resolve this issue without upgrading try first deleting the potentially bad
	.dll files and reinstalling Internet Explorer 4.0.
	(NOTE: Upgrading your software is the recommended solution.)
	Follow these steps:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type msapsspc.dll msnsspc.dll Msvcrt40.dll Mfc40.dll
	  Msvcirt.dll, and then click Find Now.
	
	3. In the list of found files, right-click each file, and then click Delete.
	  Continue until the list of found files is empty.
	
	4. Close the Find:Files Named... window.
	
	5. Insert the MSN CD-ROM into the CD-ROM drive. Press and hold down the SHIFT
	  key when you insert the CD-ROM to prevent the MSN Setup program from starting
	  automatically.
	
	6. Double-click My Computer.
	
	7. Right-click the MSN (CD-ROM drive) icon, and then click Explore.
	
	8. Double-click the Ie40 folder or the Ie401 folder.
	
	9. Double-click the Ie4setup.exe file. Follow the instructions on the screen to
	  install Internet Explorer.
	
	10. When you receive the message stating that the most recent versions of some
	  or all items are already installed, click Reinstall All Components, and then
	  click OK.
	
	11. When you are prompted to restart the computer, do so.
	
	If necessary and if using Microsoft Windows 98 follow these steps in addition to
	the above:
	
	1. Click Start, point to Find, and then click Files or Folders.
	
	2. In the Named box, type wsock32.dll ws2_32.dll, and then click Find Now.
	
	3. In the list of found files, right-click each file, and then click Delete.
	  Continue until the list of found files is empty.
	
	4. Close the window.
	
	5. Extract new copies of the wsock32.dll and ws2_32.dll files from your original
	  Windows 98 CD-ROM into the Windows\System folder using the System File
	  Checker tool.
	
	6. To start the System File Checker tool, click Start, click Run, type sfc.exe
	  in the Open box, and then click OK.
	
	7. Select Extract on file from the installation desk
	
	8. Type the .dll file you want to extract and click Start.
	
	For more information about using the System File Checker, see the following
	article in the Microsoft Knowledge Base: Q185836; Description of the System File
	Checker Tool.
	
	Repair the Security Providers Key in the Windows Registry
	---------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before
	you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	If you want to resolve the problem without upgrading and the steps above do not
	resolve the problem, then try repairing the SecurityProviders key in the windows
	registry. (NOTE: Upgrading your software is the recommended solution.) Follow
	these steps:
	
	1. Click start
	
	2. Click run, in the open box type the following command regedit.
	
	3. Use the Registry Editor to locate the SecurityProviders key in the following
	  registry key: Windows 95:
	  <B>HKEY_LOCAL_MACHINE\System\CurrentControlSet\control\ </B>
	
	  Windows 98:
	  <B>HKEY_LOCAL_MACHINE\System\CurrentControlSet\control\SecurityProviders </B>
	
	4. If there is no SecurityProviders then proceed to step 8 if there is a value
	  then proceed with step 5.
	
	5. Right click the value SecurityProviders in the right hand pane.
	
	6. Click delete.
	
	7. Confirm value deletion.
	
	8. Right-click a blank space in the right hand panel.
	
	9. Point to New.
	
	10. Click String Value, type SecurityProviders.
	
	11. Right click the new value SecurityProviders, click modify.
	
	12. In the value data box type: msnsspc.dll, msapsspc.dll
	
	13. Click ok.
	
	14. Press F5 to refresh the registry
	
	15. Restart your PC
	
	Additional query words: 4.0 msnetwork microsoft-net m.s.n. outexw95
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbOSWin98 kbOSWin95 kbIEsearch kbOSWinSearch kbMSNSearch kbOutlookExpressSearch kbIE95Search kbZNotKeyword3 kbOutlookExpress95Search kbIE400Win95 kbIE401Win95 kbOutlookExpress400Win95 kbMSN252 kbMSN251 kbMSN260
	Version           : WINDOWS:2.51,2.52,2.6,4.0,4.01; Win2000:95,98
	Issue type        : kbprb
	
	=============================================================================
	
