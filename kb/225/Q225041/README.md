---
layout: page
title: "Q225041: Zone: How to Remove the Heartbeat ActiveX Control"
permalink: kb/225/Q225041/
---

## Q225041: Zone: How to Remove the Heartbeat ActiveX Control

	Article: Q225041
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbimu msgame
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to remove the Heartbeat ActiveX Control from your
	computer.
	
	MORE INFORMATION
	================
	
	To remove the Heartbeat ActiveX Control from your computer, use the appropriate
	method for your Web browser.
	
	Microsoft Internet Explorer 4.0 or Later
	----------------------------------------
	
	1. Quit Internet Explorer if it is running.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Internet.
	
	4. Under Temporary Internet Files, click Settings, and then click View Objects.
	
	5. Click the HearbeatCtl Class program file.
	
	  NOTE: If the HeartbeatCtl Class program file is damaged, it may be displayed
	  as a string of characters:
	
	  {AE1C01E3-0283-11D3-9B3F-00C04F8EF466}
	
	6. On the File menu, click Remove Program File. When you are prompted to confirm
	  the removal of the program file, click Yes.
	
	7. Restart your computer.
	
	If this fails to remove the program file, follow these steps:
	
	1. Click Start, click Run, and then type "cmd" (without the quotation marks) on
	  Windows NT-based systems, or "command" (without the quotation marks) on
	  Windows 9x-based systems, and then click OK.
	
	2. Type "cd \" (without the quotation marks) and press ENTER.
	
	3. Type cd and then the directory name of your Windows installation and press
	  ENTER.
	
	  NOTE: This is typically "winnt" (without the quotation marks) or "windows"
	  (without the quotation marks).
	
	4. Type "cd "downlo~1"" (without the quotation marks) (with the quotation marks
	  around downlo~1) and then press ENTER.
	
	5. Type "del heartbeat.inf" (without the quotation marks) and press ENTER.
	
	6. Type "del hrtbeat.ocx" (without the quotation marks) and then ENTER.
	
	7. Type "del zsetup.exe" (without the quotation marks) and then ENTER.
	
	8. Type "Exit" (without the quotation marks) and press ENTER.
	
	9. Restart your computer.
	
	NOTE: You may find the files are located within a folder called Conflict.x, where
	x is a sequential number starting at 1 and continuing for as long as there are
	Conflict folders. If the above steps do not work, try the the following steps:
	
	1. Repeat steps 1-4 above.
	
	2. Type "DIR" (without the quotation marks), and then press ENTER.
	
	3. If you find folders titled Conflict.x, type the following for your Windows
	  operating system, and then press ENTER:
	
	  Windows 98, Windows Millennium Edition, or Windows NT 4.0
	
	  "Deltree Conflict.x" (without the quotation marks)
	
	  where x is the number of the folder listed.
	
	  Windows 2000 or Windows XP
	
	  "Rmdir /s Conflict.x" (without the quotation marks)
	
	  where x is the number of the folder listed.
	
	4. Repeat this step for each Conflict.x folder listed.
	
	5. Type "Exit" (without the quotation marks), and then press ENTER to close the
	  Command Prompt.
	
	Additional query words: msgame igz msngz active-x
	
	======================================================================
	Keywords          : kbenv kbimu msgame 
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
