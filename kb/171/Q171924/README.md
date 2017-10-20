---
layout: page
title: "Q171924: MSN Sign-In Screen Appears When Starting Windows"
permalink: /kb/171/Q171924/
---

## Q171924: MSN Sign-In Screen Appears When Starting Windows

{% raw %}

	Article: Q171924
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,2.51,2.52,2.6,95
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95, you may be prompted to sign in to MSN, The Microsoft
	Network.
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- The Startup folder may contain a shortcut to MSN or to an e-mail client.
	
	- Microsoft Connection Manager may be the default service for all dial-up
	  Internet access. (MSN 2.5 only.)
	
	- A registry key is damaged or contains an incorrect value.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use the appropriate method:
	
	Remove the shortcut to MSN or your e-mail client from the Startup folder
	------------------------------------------------------------------------
	
	To do so, follow these steps:
	
	1. Right-click the Start button, and then click Open.
	
	2. Double-click the Programs folder.
	
	3. Double-click the Startup folder.
	
	4. Right-click the MSN shortcut icon, and then click Delete. Do the same for the
	  e-mail client shortcut icon if it is present in the Startup folder.
	
	Prevent Connection Manager from being the default service for all dial-up Internet access
	-----------------------------------------------------------------------------------------
	
	To do so, follow these steps:
	
	1. Right-click the MSN icon on the desktop, click Connection, and then click Yes
	  when you are prompted to delete the component's files.
	
	2. On the Options tab, click the Use this service for all dial-up Internet
	  access check box to clear it, and then click OK.
	
	3. Restart the computer.
	
	Reinstall MSN to correct the registry settings
	----------------------------------------------
	
	To do so, use the appropriate method:
	
	MSN Version 2.5 for Windows 95
	
	1. To uninstall MSN, please see the following article in the Microsoft Knowledge
	  Base: Q173274 <A0>How to Uninstall The Microsoft Network Version 2.5
	
	2. Reinstall MSN.
	
	MSN Version 2.52 for Windows 98
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Add/Remove Programs.
	
	2. On the Install/Uninstall tab, click any of the following entries, and then
	  click Add/Remove (Click Yes when you are prompted to delete the component's
	  files):
	
	  -Connection Manager
	  -Microsoft Chat 2.0
	  -MSN v2.5
	  -RealPlayer 4.0
	
	3. Click Start, point to Programs, Accessories, Communications and then click
	  Dial-Up Networking.
	
	4. Right-click any of the following Dial-Up Networking connections, and then
	  click Delete:
	
	  -MSN
	  -MSN Backup (for advanced use only)
	  -The Microsoft Network
	  -The Microsoft Network (Backup)
	
	5. Restart the computer.
	
	6. Close all ANTI-VIRUS and SYSTEM-MONITORING programs. For information about
	  closing anti-virus and system-monitoring programs, consult the program's
	  documentation or manufacturer.
	
	7. Insert the Windows 98 CD-ROM in the CD-ROM drive.
	
	8. If the Welcome to Windows 98 Setup screen appears, click Cancel.
	
	9. On the desktop click the Start, click Find, and then click "Files or
	  Folders".
	
	10. In the Named box type Msnstart.exe.
	
	11. In the Look in box select your CD ROM drive with your Windows 98 CD. Also
	  make sure that Include subfolders is checked and click Find Now.
	
	12. Double click Msnstart.exe, and then continue to follow the screen prompts.
	
	MSN Version 2.6 for Windows 95
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Add/Remove Programs.
	
	2. On the Install/Uninstall tab, click any of the following entries, and then
	  click Add/Remove:
	
	  Select each component in the following order:
	
	  -VRML Add-in 3.0
	  -Connection Manager
	  -Microsoft Chat 2.5
	  -MSN v2.6
	  -Microsoft Outlook Express (If using Win98 select Setup tab and remove check
	  from Outlook Express)
	  -Microsoft Internet Explorer 4.01 (NOTE: Not available on Win98)
	
	3. Repeat steps 2-3 to remove every program component.
	
	4. The MSN Setup program may also install any of the following programs. Repeat
	  steps 2-3 if you want to uninstall any of these programs:
	
	  -Microsoft Internet Explorer 3.02
	  -Microsoft Internet Mail and News 1.0
	  -Microsoft ActiveMovie
	  -Microsoft NetMeeting 2.0
	  -Interactive Music
	
	5. Restart the computer.
	
	6. Close all ANTI-VIRUS and SYSTEM-MONITORING programs. For information about
	  closing anti-virus and system-monitoring programs, consult the program's
	  documentation or manufacturer.
	
	7. Insert the MSN CD-ROM in the CD-ROM drive.
	
	  NOTE: This CD-ROM is sent to all current and new MSN subscribers.
	
	8. If the Welcome To MSN Setup screen appears, follow the prompts on the screen
	  to install MSN, and then skip step 4. If the Welcome To MSN Setup screen does
	  not appear, continue with the next step.
	
	9. Double-click My Computer on the desktop, double-click the CD-ROM drive
	  containing the MSN CD-ROM, and then double-click the Cdsetup.exe file.
	
	MORE INFORMATION
	================
	
	For information about installing MSN, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q159037 <A0> MSN Installation and Setup Questions & Answers
	
	  Q159870<A0>Questions and Answers About Setting Up the New MSN
	
	  Q174200<A0> How to Install The Microsoft Network Version 2.5
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.5,2.51,2.52,2.6,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
