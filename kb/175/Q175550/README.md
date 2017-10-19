---
layout: page
title: "Q175550: How to Uninstall The Microsoft Network Version 2.0"
permalink: /kb/175/Q175550/
---

## Q175550: How to Uninstall The Microsoft Network Version 2.0

	Article: Q175550
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbmsn
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to uninstall MSN, The Microsoft Network, version 2.0
	from your computer.
	
	NOTE: You may need your Windows 95 CD-ROM or floppy disks to complete this
	procedure.
	
	MORE INFORMATION
	================
	
	To uninstall MSN 2.0, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. For each of the following components on the Install/Uninstall tab, click the
	  component, and then click Add/Remove.
	
	  NOTE: You must remove the components in the order in which they are listed
	  here.
	
	  VRML Add-In 3.0
	  MSN Program Viewer
	  MSN Program Viewer Controls
	  MSN Optional Controls
	  MSN Music & Animation Components
	
	4. If you are prompted to delete the component's files, click Yes.
	
	5. Repeat steps 3-4 to remove each program component.
	
	  NOTE: You must also remove any MSN components that you have installed that do
	  not appear on this list.
	
	  MSN may also have installed the following programs. Repeat steps 3-4 if you
	  want to uninstall any of these programs:
	
	  Microsoft Internet Explorer 3.0
	  Microsoft Internet Mail and News 1.0
	  Microsoft ActiveMovie
	  Microsoft Chat 1.1
	
	6. On the Windows Setup tab, click the The Microsoft Network check box to clear
	  it, and then click OK.
	
	7. Click Start, point to Programs, and then click Windows Explorer.
	
	8. Double-click the Program Files folder.
	
	9. Right-click the OnMSN folder, and then click Delete.
	
	10. Close Windows Explorer.
	
	11. Insert the MSN 2.0 CD-ROM into the CD-ROM drive. If the Auto Insert
	  Notification option is turned on, close the Welcome To MSN window that
	  Opens.
	
	12. Double-click My Computer.
	
	13. Right-click the MSN (CD-ROM drive) icon, and then click Explore.
	
	14. Double-click the Help folder.
	
	15. Double-click the Uninst.exe file. When you are prompted to continue, click
	  Yes.
	
	16. Click OK. Follow the instructions on the screen.
	
	17. When you are prompted to restart the computer, click Yes.
	
	18. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	19. Right-click an MSN connection, and then click Delete. Repeat this step until
	  all MSN connections are deleted.
	
	20. Close the Dial-Up Networking window.
	
	21. Click Start, point to Settings, and then click Control Panel.
	
	22. Double-click Network.
	
	23. Click Dial-Up Adapter, click Remove, and then click OK. You may be prompted
	  for your Windows CD-ROM or disks.
	
	24. When you are prompted to restart the computer, click No.
	
	25. Close all open windows on the screen.
	
	26. Click Start, click Shut Down, click Restart In MS-DOS Mode, and then click
	  OK.
	
	27. At the command prompt, type each of the following commands, and then press
	  ENTER after each command.
	
	  NOTE: When you press ENTER after typing each of the following DELTREE
	  commands, you should be prompted to confirm that you want to delete the
	  folder. If this prompt is not displayed, you may have typed the DELTREE
	  command incorrectly.
	
	  cd\windows
	  smartdrv
	  deltree tempor~1
	  deltree history
	  cd system
	  ren actxprxy.dll actxprxy.old
	  ren cachevu.dll cachevu.old
	  ren inetcfg.dll inetcfg.old
	  ren inetcpl.cpl inetcpl.old
	  ren mshtml.dll mshtml.old
	  ren shdocvw.dll shdocvw.old
	  ren shlwapi.dll shlwapi.old
	  ren url.dll url.old
	  ren urlmon.dll urlmon.old
	  ren wininet.dll wininet.old
	  ren wsock32n.dll wsock32n.old
	
	28. Type "exit" (without the quotation marks), and then press ENTER.
	
	For information about how to install MSN, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q159037 MSN Installation and Setup Questions & Answers
	
	  Q159870 Questions and Answers About Setting Up the New MSN
	
	  Q174240 The Microsoft Network Setup Stops Responding
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbsetup kbmsn 
	Technology        : kbMSNSearch kbMSN200
	Version           : WINDOWS:2.0
	Issue type        : kbhowto
	
	=============================================================================
	
