---
layout: page
title: "Q208611: Urban Assault: Error Message While Installing Movie Player"
permalink: /kb/208/Q208611/
---

## Q208611: Urban Assault: Error Message While Installing Movie Player

	Article: Q208611
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu msgame KbDirectX
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Urban Assault, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Urban Assault, you may receive an error message similar to the
	following while Setup attempts to install the movie player:
	
	  Rundll32 caused a Stack Fault in module Oleaut32.dll.
	
	When you click Close, the installation program continues to run.
	
	You may also receive this error message when you manually run the DirectX Media
	installation program (Dxmedia.exe) from the Urban Assault CD-ROM.
	
	CAUSE
	=====
	
	This behavior can occur if outdated ActiveMovie, DirectShow, or DirectX Media
	files are installed on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the outdated ActiveMovie, DirectShow, or DirectX
	Media files, and then reinstall DirectX Media from the Urban Assault CD-ROM. To
	do this, follow these steps:
	
	1. Verify that Windows Explorer is configured to show all files. To do this,
	  follow these steps:
	
	  a. Double-click the My Computer icon on the desktop.
	
	  b. On the View menu, click Options or Folder Options.
	
	  c. On the View tab, click Show All Files, and then click OK.
	
	2. Click Start, point to Find, and then click Files Or Folders.
	
	3. In the Named box, type "actmovie.exe amovie.ocx quartz.dll" (without the
	  quotation marks), and then click Find Now.
	
	4. In the list of found files, right-click the Actmovie.exe file, and then click
	  Delete. When you are prompted to confirm the file deletion, click Yes. Repeat
	  this step to delete all copies of the Actmovie.exe, Amovie.ocx, and
	  Quartz.dll files in the list of found files.
	
	5. Close the "Find: Files Named Actmovie.exe Amovie.ocx Quartz.dll" window.
	
	6. Insert the Urban Assault CD-ROM into the CD-ROM drive. Press and hold down
	  the SHIFT key as you insert the CD-ROM to prevent the program from starting
	  automatically.
	
	7. Click Start, and then click Run.
	
	8. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\Directx\Dxmedia\Dxmedia.exe
	
	  where <cd-rom> is the drive letter of the CD-ROM drive that contains the
	  Urban Assault CD-ROM.
	
	9. Follow the instructions on the screen to reinstall DirectX Media.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Urban Assault,
	version 1.0.
	
	MORE INFORMATION
	================
	
	To install Urban Assault without installing DirectX Media, follow these steps:
	
	1. Insert the Urban Assault CD-ROM into the CD-ROM drive. Press and hold down
	  the SHIFT key as you insert the CD-ROM to prevent the program from starting
	  automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\Setup.exe /skipdxm
	
	  where <cd-rom> is the drive letter of the CD-ROM drive that contains the
	  Urban Assault CD-ROM.
	
	4. Follow the instructions on the screen to install Urban Assault.
	
	DirectX Media is a family of application programming interfaces (APIs) and
	controls for multimedia that provides rich support for interaction and
	integration of different media types for the development of online and digital
	media authoring applications.
	
	Additional query words: 1.00 msgame ua
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu msgame KbDirectX 
	Technology        : kbGamesSearch kbUrbanAssault
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
