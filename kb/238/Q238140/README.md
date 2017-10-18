---
layout: page
title: "Q238140: Reference Products: Find Feature Does Not Function Properly"
permalink: kb/238/Q238140/
---

## Q238140: Reference Products: Find Feature Does Not Function Properly

	Article: Q238140
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0; :
	Operating System(s): 
	Keyword(s): kbenv kbui kbimu
	Last Modified: 19-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 99 
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Reference Suite 99 
	- Microsoft Encarta Virtual Globe 99, version 1.0 
	- Microsoft Bookshelf 2000 
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Reference Suite 2000 
	- Microsoft Encarta Interactive World Atlas 2000 
	- Microsoft Encarta World English Dictionary 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Find feature in the programs listed at the beginning
	of this article, you may experience the following symptoms:
	
	- The insertion point may disappear after you type the first letter.
	
	- No search results may be displayed.
	
	- The Find button may not appear in the upper-left corner of the program
	  window.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- The program CD-ROM is dirty or damaged.
	
	- You are running one or more memory-resident programs that interfere with the
	  operation of the program.
	
	- Certain files on your computer are missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Test for CD-ROM Read Errors
	---------------------------
	
	Test to determine whether your CD-ROM drive can read the CD-ROM disk properly.
	For additional information about how to troubleshoot CD-ROM read errors, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Issues
	
	If the issue continues to occur, proceed to the next method.
	
	Clean Boot Your Computer
	------------------------
	
	To clean boot your computer, use the appropriate steps for your version of
	Microsoft Windows.
	
	Microsoft Windows 98:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click System Information.
	
	2. On the Tools menu, click System Configuration Utility.
	
	3. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Process Win.ini File
	   - Load Startup Group Items
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in the System Configuration Utility tool.
	
	For additional information about how to clean boot Windows 98, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	
	Microsoft Windows 95:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold down the SHIFT key until the Windows startup
	  sequence is complete. This prevents any programs from being loaded
	  automatically when Windows starts.
	
	3. Quit all running programs except Explorer and Systray. To do this, follow
	  these steps:
	
	  a. Press CTRL+ALT+DELETE.
	
	  b. Click the program you want to quit, and then click End Task.
	
	  c. If you receive a message that the program is busy or not responding, click
	     End Task again.
	
	  Repeat this step until you have quit all programs except Explorer and Systray.
	
	4. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	For additional information about how to clean boot Windows 95, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	If the issue continues to occur, proceed to the next method.
	
	Delete All Files Related to the Find Feature
	--------------------------------------------
	
	Delete all files on your computer related to the Find feature:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line (including the quotation marks), and
	  then click OK:
	
	  "C:\Program Files\Common Files\Microsoft Shared"
	
	3. Right-click the Information Retrieval folder, and then click Delete.
	
	4. Click Yes To All.
	
	5. Right-click the Reference Titles folder, and then click Delete.
	
	6. Click Yes To All.
	
	7. Close any open folders and quit any programs running on your computer.
	
	8. Reinstall the program.
	
	If the issue continues to occur, proceed to the next method.
	
	Remove and Reinstall the Program
	--------------------------------
	
	To remove and reinstall the program:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click the program you want to remove.
	
	4. Follow the instructions on the screen to remove the program. If you are
	  prompted to restart your computer, do so.
	
	5. Reinstall the program.
	
	  NOTE: When you remove Microsoft Encarta Reference Suite 99 or 2000, you remove
	  all of the programs included in the Reference Suite.
	
	If the issue continues to occur, proceed to the next method.
	
	Manually Register the Required Files
	------------------------------------
	
	To manually register the files required by the program:
	
	1. Click Start, point to Find, and then click "Files or Folders."
	
	2. In the Named box, type "regsvr32.exe" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. Click Start, and then click Run.
	
	5. In the Open box, type the following line (including the quotation marks), and
	  then click OK:
	
	  "C:\Program Files\Common Files\Microsoft Shared\Information Retrieval"
	
	6. Drag the following files and drop them on top of the Regsvr32.exe file in the
	  "Find: Files or Folders" window. You should receive a message stating that
	  registration was successful for each file.
	
	  NOTE: You may not see every file in the following lists.
	
	  Reference 2000 Products:
	
	   - Itcc51.dll
	   - Itircl51.dll
	   - Itss51.dll
	
	  Reference 99 Products:
	
	   - Itcc50.dll
	   - Itircl50.dll
	   - Itss50.dll
	
	7. In the Open box, type the following line (including the quotation marks), and
	  then click OK:
	
	  "C:\Program Files\Common Files\Microsoft Shared\Reference Titles"
	
	8. Drag the following files and drop them on top of the Regsvr32.exe file in the
	  "Find: Files or Folders" window. You should receive a message stating that
	  registration was successful for each file.
	
	  NOTE: You may not see every file listed in the following tables.
	
	  Reference 2000 Products:
	
	  +----------------------------------------------------------------------------------------------------------+
	  | File name    | Encarta Encyclopedia | Encarta Interactive World Atlas | Encarta World English Dictionary | 
	  +----------------------------------------------------------------------------------------------------------+
	  | Refjic.dll   | Yes                  | Yes                             | Yes                              | 
	  +----------------------------------------------------------------------------------------------------------+
	  | Refmenu.dll  | No                   | Yes                             | No                               | 
	  +----------------------------------------------------------------------------------------------------------+
	  | Refsv.dll    | Yes                  | No                              | No                               | 
	  +----------------------------------------------------------------------------------------------------------+
	  | Sfc10.ocx    | Yes                  | Yes                             | Yes                              | 
	  +----------------------------------------------------------------------------------------------------------+
	  | Treedata.dll | Yes                  | No                              | No                               | 
	  +----------------------------------------------------------------------------------------------------------+
	  | Wheeled.dll  | No                   | No                              | Yes                              | 
	  +----------------------------------------------------------------------------------------------------------+
	  | Wheel2ee.dll | Yes                  | No                              | No                               | 
	  +----------------------------------------------------------------------------------------------------------+
	
	  Reference 99 Products:
	
	  +-------------------------------------------------------------------------+
	  | File name    | Bookshelf | Encarta Encyclopedia | Encarta Virtual Globe | 
	  +-------------------------------------------------------------------------+
	  | Imagectl.dll | Yes       | Yes                  | Yes                   | 
	  +-------------------------------------------------------------------------+
	  | Msref.dll    | No        | No                   | Yes                   | 
	  +-------------------------------------------------------------------------+
	  | Refmenu.dll  | No        | No                   | Yes                   | 
	  +-------------------------------------------------------------------------+
	  | Refsv.dll    | No        | Yes                  | No                    | 
	  +-------------------------------------------------------------------------+
	  | Treedata.dll | No        | Yes                  | No                    | 
	  +-------------------------------------------------------------------------+
	  | Xbkswhl      | No        | Yes                  | No                    | 
	  +-------------------------------------------------------------------------+
	  | Xtract.dll   | No        | Yes                  | Yes                   | 
	  +-------------------------------------------------------------------------+
	  | Xtreectl.dll | No        | Yes                  | Yes                   | 
	  +-------------------------------------------------------------------------+
	
	Additional query words: 1.00 multi multi-media media mm pinpointer ers99 ers2k
	
	======================================================================
	Keywords          : kbenv kbui kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbBookShelf2000 kbBookShelf1999 kbEncartaEnCyc2000 kbEncartaEnCyc1999 kbEncartaReference99 kbEncartaReference2000 kbEncartaVirtGlobe99 kbEncartaWorldAtlas2000
	Version           : WINDOWS:1.0; :
	Issue type        : kbprb
	
	=============================================================================
	
