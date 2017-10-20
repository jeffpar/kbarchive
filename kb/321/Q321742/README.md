---
layout: page
title: "Q321742: Dungeon Siege: How to Troubleshoot Setup Errors"
permalink: /kb/321/Q321742/
---

## Q321742: Dungeon Siege: How to Troubleshoot Setup Errors

{% raw %}

	Article: Q321742
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dungeon Siege, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes the error messages that you may receive when you try to
	install Dungeon Siege. It describes how to troubleshoot the issue and how to
	resolve the issue if it can be resolved.
	
	MORE INFORMATION
	================
	
	When you try to install Dungeon Siege, you may receive an error message similar
	to one or more of the following:
	
	  Dungeon Siege Setup encountered an error while reading the file <file
	  name>. Make sure that the disc is properly inserted in the CD-ROM drive,
	  and then click Retry.
	
	  -or-
	
	  Dungeon Siege Setup encountered a disk error while writing to the file
	  <file name>. Make sure your hard disk is not full, and that the file is
	  not in use.
	
	  -or-
	
	  Dungeon Siege Setup cannot continue because your hard disk is full or
	  write-protected. Close any applications, delete unnecessary files from this
	  drive, and then try again.
	
	To troubleshoot and resolve this issue, use one or more of the following
	methods.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	Method 1: Install Dungeon Siege from a Different CD-ROM Drive or DVD Drive
	--------------------------------------------------------------------------
	
	Try to install Dungeon Siege from another CD-ROM drive or DVD drive on the same
	computer or a different computer. If the installation is successful in this
	test, the problem may be that the original CD-ROM or DVD-ROM drive is not
	properly reading the disc. To resolve this issue, contact your computer
	manufacturer or your CD-ROM or DVD-ROM drive manufacturer.
	
	Method 2: Run Scandisk and Defrag
	---------------------------------
	
	1. Restart your computer by using a Windows Startup disk.
	
	2. At the command prompt, type "scandisk /surface" (without the quotation
	  marks), and then press ENTER.
	
	  The process starts automatically.
	
	3. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Disk Defragmenter.
	
	4. Click the drive that you want to defragment, and then click Defragment.
	
	  The process begins automatically.
	
	Method 3: Rebuild the Virtual Memory File
	-----------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System, click the Performance tab, and then click Virtual
	  Memory.
	
	3. Click "Let me specify my own virtual memory settings", and then specify the
	  virtual memory file location and size.
	
	4. Click OK, and then click OK.
	
	Method 4: Clear the Temporary Files
	-----------------------------------
	
	1. Start Windows Explorer.
	
	2. Locate the following folder, and then open it:
	
	  C:\Windows\Temp
	
	3. On the Edit menu, click Select All, and then press DELETE.
	
	4. When you are prompted to confirm the deletion, click Yes.
	
	5. Close Windows Explorer.
	
	Method 5: Run XCopy to Check the CD-ROM or DVD-ROM Drive
	--------------------------------------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "cmd" (without the quotation marks), and then click OK.
	
	3. Type the following and then press ENTER, where drive is the letter of your
	  CD-ROM or DVD-ROM drive:
	
	  "xcopy drive :\*.* /s > c:\test1" (without the quotation marks)
	
	  If the XCopy process fails, your disc is damaged and cannot be read.
	
	Method 6: Install Dungeon Siege on a Network Computer
	-----------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Install Dungeon Siege on a network computer, "computer B."
	
	2. On computer B, turn on sharing on the Dungeon Siege folder.
	
	3. On computer B, click Start, and then click Run.
	
	4. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	5. In the Registry Editor, locate the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\MicrosoftGames\DungeonSeige
	
	6. On the File menu, click Export.
	
	7. In the Export Registry File dialog box, in the "File name" box, type "ds.reg"
	  (without the quotation marks).
	
	8. In the "Save in" box, locate the following folder, and then open it:
	
	  C:\Program Files\Microsoft Games\Dungeon Siege
	
	9. Click Save.
	
	10. Connect the computer that you originally used to install Dungeon Siege,
	  "computer A," to computer B by means of your home network.
	
	11. On computer B, copy the Dungeon Siege folder to the following folder on
	  computer A:
	
	  C:\Program Files\Microsoft Games
	
	12. On computer A, locate the following file:
	
	  C:\Program Files\Microsoft Games\Dungeon Siege\DS.reg
	
	13. When you are prompted to confirm the registry setting, click OK.
	
	14. Right-click a blank space on the desktop, point to New, and then click
	  Shortcut.
	
	15. Use the Browse button to locate the following file, and then click it:
	
	  C:\Program Files\Microsoft Games\Dungeon Siege\DungeonSiege.exe
	
	16. Click OK, and then click Next.
	
	17. Click Finish to complete the installation process.
	
	  Dungeon Siege should now be installed on computer A.
	
	Method 7: Exchange or Return Dungeon Siege
	------------------------------------------
	
	If troubleshooting methods 1 through 6 do not resolve this issue, contact your
	vendor to exchange or return the product.
	
	REFERENCES
	==========
	
	For additional information about how to troubleshoot CD-ROM or DVD drive issues,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q218617 How to Troubleshoot CD-ROM or DVD-ROM Read Issues
	
	  Q126380 Troubleshooting CD-ROM Problems in Windows
	
	  Q314096 How to Troubleshoot CD-ROM Drive Problems in Windows XP
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch _IK kbDungeonSiege
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
