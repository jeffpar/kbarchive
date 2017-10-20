---
layout: page
title: "Q312611: MSB Dinosaurs: Err Msg:Setup32 Caused an Error in Msvfw32.dll"
permalink: /kb/312/Q312611/
---

## Q312611: MSB Dinosaurs: Err Msg:Setup32 Caused an Error in Msvfw32.dll

{% raw %}

	Article: Q312611
	Product(s): Microsoft Home Kids Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setup, you may receive the following error message:
	
	  MSB Setup32 caused an error in MSVFW32.DLL
	
	CAUSE
	=====
	
	This issue can occur if either of the following files is damaged, missing, or of
	the incorrect version.
	
	  Msvfw32.dll
	  Msvideo.dll
	
	RESOLUTION
	==========
	
	To resolve this behavior, rename the Msvfw32.dll and Msvideo.dll files, and then
	extract new copies of these files from your original Microsoft Windows compact
	disc (CD) (or from the \Windows\Install\Options or \Windows\Install\Cabs folder)
	to the Windows\System folder on your hard disk. To do this, follow these steps.
	
	Rename the Msvfw32.dll and Msvideo.dll Files
	--------------------------------------------
	
	1. Insert your Microsoft Windows 98 or Microsoft Windows Millennium Edition (Me)
	  Startup disk into the floppy disk drive of your computer, and then restart
	  your computer.
	
	  NOTE: If you do not have a Windows 98 or Windows Me Startup disk, click the
	  appropriate link below to view the article in the Microsoft Knowledge Base:
	
	  Q186300 How to Create a Windows 98 Startup Disk from MS-DOS
	
	  Q267287 How to Create a Startup Disk in Windows Me
	
	2. When the Windows 98 or Windows Me Startup menu appears, select "Start
	  computer with CD-ROM Support".
	
	3. Make a note of the drive letter of your CD-ROM drive, for example, E:.
	
	4. At the command prompt, type the following lines and press ENTER after each
	  line:
	
	  C:
	  cd Windows\System
	
	5. Rename the Msvfw32.dll and Msvideo.dll files file by using the .old
	  extension. To do this, type the following lines and press ENTER after each
	  line:
	
	  ren msvfw32.dll msvfw32.old
	  ren msvideo.dll msvideo.old
	
	Extract New Copies of the Msvfw32.dll and Msvideo.dll Files
	-----------------------------------------------------------
	
	1. Insert your Windows 98 or Windows Me compact disc (CD) into the CD-ROM or
	  DVD-ROM drive.
	
	2. At the command prompt, type the following lines and press ENTER after each
	  line:
	
	  A:
	  ext
	
	3. At the "Please enter the path to the Windows CAB files (a:)" prompt, type
	  "<drive>:\win98" (without the quotation marks) (if you are running
	  Windows 98) or type "<drive>:\win9x" (without the quotation marks) (if
	  you are running Windows Me), where <drive> is the drive letter of your
	  CD-ROM drive, and then press ENTER. For example, type:
	
	  E:\win98
	
	  -or-
	
	  E:\win9x
	
	NOTE: If you have an original equipment manufacturer (OEM) installation of
	Windows, the installation files may also be located in one of the following
	folders
	
	  <C>:\Windows\Options\Cabs (for Windows 98)
	  <C>:\Windows\Options\Install (for Windows Me)
	
	where <C> is the drive on which Windows is installed.
	
	If these files are on your computer, you do not need your Windows CD because you
	can extract the files from the appropriate folder on your hard disk. For
	example, for Windows Me, type "C:\Windows\Options\Install" (without the
	quotation marks), and then press ENTER.
	
	4. At the "Please enter the name(s) of the files(s) you want to extract" prompt,
	  type "msvfw32.dll msvideo.dll" (without the quotation marks), and then press
	  ENTER.
	
	5. At the "Please enter the path to extract to ("Enter" for current directory)"
	  prompt, type "C:\Windows\System" (without the quotation marks), and then
	  press ENTER.
	
	6. At the "Is this okay? (y/n)" prompt, type "Y" (without the quotation marks),
	  and then press ENTER.
	
	7. Remove your Windows 98 or Windows Me Startup disk, and then restart your
	  computer.
	
	8. Run Setup for Magic School Bus Explores in the Age of Dinosaurs.
	
	MORE INFORMATION
	================
	
	For additional information about how to extract original Windows files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	For additional information about how to use the System Configuration Utility tool
	in Windows Millennium Me to extract a file that is protected by the System File
	Protection feature, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265371 How to Extract and Replace a Protected File in Windows Me
	
	For additional information about Magic School Bus Explores in the Age of
	Dinosaurs, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q152408 Overview of Magic School Bus Explores in the Age of Dinosaurs
	
	  Q153434 MSB Dinosaurs: Minimum System Requirements for Windows
	
	Additional query words: kids mskids
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticDinosaurs kbMSBSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
