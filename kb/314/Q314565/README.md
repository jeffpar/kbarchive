---
layout: page
title: "Q314565: Games: IPF or Err Msg When Agreement Appears"
permalink: /kb/314/Q314565/
---

## Q314565: Games: IPF or Err Msg When Agreement Appears

{% raw %}

	Article: Q314565
	Product(s): Microsoft Home Games
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft Flight Simulator 2002 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 2000 
	- Microsoft Motocross Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the products listed at the beginning of this article, you
	may receive one of the following error messages.
	
	In Flight Simulator 2000:
	
	  FS2000 caused an invalid page fault in module Unknown.
	  FS2000 has caused an error in unknown
	
	In Flight Simulator 2002:
	
	  Error: unknown error in Riched32.dll
	
	In Motocross Madness 2:
	
	  MCM2 caused an IPF in module <unknown> at 0000:0005000B
	
	CAUSE
	=====
	
	This issue cane occur if the system file Riched32.dll is damaged or missing.
	
	RESOLUTION
	==========
	
	To resolve this issue, extract the Riched32.dll file from your Microsoft Windows
	installation source and save it to the C:\Windows\System folder. To do so,
	follow these steps in the order in which they are presented.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	Find the Riched32.dll File
	--------------------------
	
	1. Click Start, point to Find, and then click Files or Folders.
	
	2. In the Named box, type "Riched32.dll" (without the quotation marks), and then
	  click Find Now.
	
	NOTE: If you do not see the Riched32.dll file after the search process is
	finished, proceed directly to the next method, "Extract the Riched32.dll File."
	
	3. In the list of found files, right-click the Riched32.dll file, click Rename.
	  Type a new name for the Riched32.dll file (for example, Riched32.old), and
	  then press ENTER.
	
	NOTE: If you receive an "Access is denied" error message when you attempt to
	rename the Riched32.dll file, follow these steps:
	
	  a. Click Start, click Shut Down, click "Restart in MS-DOS mode", and then
	     click OK.
	
	  b. At the command prompt, type the following commands, pressing ENTER after
	     each command:
	
	  cd\windows\system
	  ren Riched32.dll Riched32.old
	  exit
	
	Extract the Riched32.dll File
	-----------------------------
	
	Extract the Riched32.dll file. To extract the file, follow the steps appropriate
	for your operating system.
	
	Microsoft Windows 98:
	
	1. Insert your Windows CD-ROM in your CD-ROM drive.
	
	2. Click Start, and then click Run.
	
	3. Type "sfc" (without the quotation marks), and then press ENTER.
	
	4. Click "Extract one file from installation disk".
	
	5. In the "Specify the system file you would like to restore" box, type
	  "Riched32.dll" (without the quotation marks), and then click Start.
	
	6. In the Extract File dialog box, click Browse next to the "Restore from" box,
	  and then browse to your CD-ROM drive.
	
	7. Type "<drive>:\Windows\System" (without the quotation marks) in the
	  "Save file in" box, if it is not already there. <drive> refers to the
	  letter of the drive where your /WINDOWS folder is located. This is usually C.
	
	8. Click OK.
	
	9. Click Skip in the Backup File dialog box, and then click OK.
	
	Microsoft Windows Millennium Edition:
	
	1. Click Start, and then click Run.
	
	2. Type "msconfig" (without the quotation marks), and then press ENTER.
	
	3. In the System Configuration Utility dialog box, click the General tab, and
	  then click Extract File.
	
	4. In the "Extract one file from installation disk" dialog box, type
	  "Riched32.dll" (without the quotation marks), and then click Start.
	
	5. In the "Restore from" box, type "<drive>:\Windows\options\install"
	  (without the quotation marks) where <drive> refers to the letter of the
	  drive where the \Windows folder is located. This is usually C.
	
	  NOTE: If the .cab files are not present on your hard drive, insert the Windows
	  Millennium Edition CD, and then type "<drive>:\Win9x" (without the
	  quotation marks), where <drive> refers to the drive letter of you
	  CD-ROM drive. This is often drive D.
	
	6. In the "Save file in" box, type "drive:\Windows\system" (without the
	  quotation marks), and then click OK.
	
	7. Click Skip in the Backup File dialog box.
	
	8. Click OK, and then click OK one more time to close the System Configuration
	  Utility dialog box.
	
	Microsoft Windows 2000:
	
	1. Click Start, and then click Run.
	
	2. Type "cmd" (without the quotation marks), and then press ENTER.
	
	3. At the command prompt, type the following command, and then press ENTER:
	
	  sfc /scannow
	
	This command invokes the System File Checker, which replaces the missing or
	renamed Riched32.dll file. You must be logged on as an administrator or as a
	member of the Administrators group to run System File Checker.
	
	MORE INFORMATION
	================
	
	The Riched32.dll file is located on your Windows 98 CD-ROM in the Wms.exe
	compressed file in the following folder:
	
	  \Tools\Oldwin95\Message\Us
	
	REFERENCES
	==========
	
	For additional information about extracting files in Windows, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch kbMotocrossSearch kbFlightSim2000 kbMotocrossM2 kbFlightSim2002 kbFlightSim2002Pro kbSimSearch
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
