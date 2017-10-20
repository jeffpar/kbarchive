---
layout: page
title: "Q221153: Control Panel Does Not Open"
permalink: /kb/221/Q221153/
---

## Q221153: Control Panel Does Not Open

{% raw %}

	Article: Q221153
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbtool win95 win98
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open Control Panel, your computer may stop responding (hang) or
	your screen may refresh, and Control Panel does not open. You also cannot open
	Control Panel if you boot your computer in Safe Mode.
	
	CAUSE
	=====
	
	This behavior is caused by a damaged .cpl file. These files populate Control
	Panel with tools.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow the steps in the section for the operating
	system that you are using.
	
	Windows 2000
	------------
	
	The .cpl files for Windows 2000 are located in the %SystemRoot%\System32 folder.
	The default location for this folder is in the C:\Winnt\System32 folder.
	
	1. Create a new folder on your desktop called "temp" (without quotation marks).
	  To do this, right click and empty area on your desktop, point to New, click
	  Folder, and then type "temp" (without the quotation marks).
	
	2. Move all of the .cpl files out of the System32 folder and into the Temp
	  folder that you created.
	
	3. Verify that Control Panel opens. Note that Control Panel does not contain
	  icons after you move all of the .cpl files out of the System32 folder.
	
	4. Move the .cpl files back into the System32 folder, one at a time, and then
	  open Control Panel after you move each file to verify that Control Panel
	  opens.
	
	5. If you move a .cpl file back into the System32 folder, and Control Panel does
	  not open, delete the file, or replace the file with a known, good .cpl file.
	
	Additional Information:
	
	You can find the base Windows 2000 .cpl files on your Windows 2000 CD-ROM. The
	files are located in the i386 folder, and are denoted by ".CP_" (without
	quotation marks).
	
	To expand these files:
	
	1. Insert your Windows 2000 CD-ROM in your CD-ROM drive.
	
	2. Click Start, click Run, type "cmd" (without the quotation marks) in the Open
	  box, and then press ENTER.
	
	3. At the prompt, type the following command:
	
	  "expand <CD-ROM drive>:\i386\<file_name>.cp_
	  <drive_letter>:\temp\<file_name>.cpl" (without the quotation
	  marks)
	
	  Where <CD-ROM drive> is the drive letter for your CD-ROM drive,
	  <file_name> is the name of the .cpl file, and <drive_letter> is
	  the drive letter where your Temp folder is located (for example, type "expand
	  e:\i386\ncpa.cp_ c:\temp\ncpa.cpl" (without the quotation marks)).
	
	NOTE: You can also double-click each .cpl file to determine if it runs. When you
	double-click a .cpl file, the associated Control Panel tool runs.
	
	Windows NT
	----------
	
	The default location for the .cpl files in Windows NT is in the
	%SystemRoot%\System32 folder.
	
	1. Create a new folder on your desktop called "temp" (without quotation marks).
	  To do this, right click and empty area on your desktop, point to New, click
	  Folder, and then type "temp" (without the quotation marks).
	
	2. Move all of the .cpl files out of the System32 folder and into the Temp
	  folder that you created.
	
	3. Verify that Control Panel opens. Note that Control Panel does not contain
	  icons after you move all of the .cpl files out of the System32 folder.
	
	4. Move the .cpl files back into the System32 folder, one at a time, and then
	  open Control Panel after you move each file to verify that Control Panel
	  opens.
	
	5. If you move a .cpl file back into the System32 folder, and Control Panel does
	  not open, delete the file, or replace the file with a known, good .cpl file.
	
	Additional Information:
	
	You can find the base Windows NT .cpl files on your Windows NT CD-ROM. The files
	are located in the i386 folder, and are denoted by ".CP_" (without quotation
	marks).
	
	To expand these files:
	
	1. Insert your Windows NT CD-ROM in your CD-ROM drive.
	
	2. Click Start, click Run, type "cmd" (without the quotation marks) in the Open
	  box, and then press ENTER.
	
	3. At the prompt, type the following command:
	
	  "expand <CD-ROM drive>:\i386\<file_name>.cp_
	  <drive_letter>:\temp\<file_name>.cpl" (without the quotation
	  marks)
	
	  Where <CD-ROM drive> is the drive letter for your CD-ROM drive,
	  <file_name> is the name of the .cpl file, and <drive_letter> is
	  the drive letter where your Temp folder is located (for example, type "expand
	  e:\i386\ncpa.cp_ c:\temp\ncpa.cpl" (without the quotation marks)).
	
	NOTE: You can also double-click each .cpl file to determine if it runs. When you
	double-click a .cpl file, the associated Control Panel tool runs.
	
	Windows 95 and Windows 98
	-------------------------
	
	The .cpl files for Windows 95 and Windows 98 are located in the
	%SystemRoot\System folder.
	
	1. Create a new folder on your desktop called "temp" (without quotation marks).
	  To do this, right click and empty area on your desktop, point to New, click
	  Folder, and then type "temp" (without the quotation marks).
	
	2. Move all of the .cpl files out of the System32 folder and into the Temp
	  folder that you created.
	
	3. Verify that Control Panel opens. Note that Control Panel does not contain
	  icons after you move all of the .cpl files out of the System32 folder.
	
	4. Move the .cpl files back into the System32 folder, one at a time, and then
	  open Control Panel after you move each file to verify that Control Panel
	  opens.
	
	5. If you move a .cpl file back into the System32 folder, and Control Panel does
	  not open, delete the file, or replace the file with a known, good .cpl file.
	
	Additional Information:
	
	In Windows 98, all of the base Control Panel .cpl files are on your Windows 98
	CD-ROM and are located in the compressed Win98_28.cab file.
	
	In Windows 95, all of the base Control Panel .cpl files are on your Windows 95
	CD-ROM and are located in the compressed Win95_11.cab file. However, the
	Inetcpl.cpl file is in the compressed Win95_09.cab file, and the Jetadmin.cpl
	file is in the compressed Win95_16.cab file.
	
	For information about how to extract files for Windows 95 or Windows 98, please
	view the following Knowledge Base article:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	NOTE: You can also double-click each .cpl file to determine if it runs. When you
	double-click a .cpl file, the associated Control Panel tool runs.
	
	Additional query words: hang freeze refresh
	
	======================================================================
	Keywords          : kbtool win95 win98 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWinAdvServSearch kbZNotKeyword3 kbWin98
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
