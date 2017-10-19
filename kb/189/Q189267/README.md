---
layout: page
title: "Q189267: Multimedia: Program Hangs or Error Message When Starting"
permalink: /kb/189/Q189267/
---

## Q189267: Multimedia: Program Hangs or Error Message When Starting

	Article: Q189267
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbsetup kbimukbfaq
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 99 
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Virtual Globe 99, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the programs listed earlier in this article, you may
	encounter either of the following symptoms:
	
	The program appears to stop responding (hang). You receive an error message
	similar to one of the following:
	
	  An essential component is not operating properly and some features of the
	  encyclopedia will not work. Click Help to learn how to correct the problem.
	  Click OK to continue without fixing the problem. Click Cancel to exit the
	  encyclopedia.
	
	  Enc99.exe caused an invalid page fault in module Dirapi.dll.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Remove and then Reinstall the Program
	-------------------------------------
	
	To remove and then reinstall the program, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. In the list of installed programs, click the program, and then click
	  Add/Remove.
	
	4. Follow the instructions on the screen to remove the program.
	
	5. Close Control Panel, and then restart the computer.
	
	6. Reinstall the program.
	
	If the issue continues to occur, proceed to the next method.
	
	Reinstall Macromedia Shockwave Director Separately
	--------------------------------------------------
	
	To reinstall Macromedia Shockwave Director separately, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line:
	
	  c:\windows\system\macromed
	
	3. Right-click the Director folder, and then click Delete. If you are prompted
	  to confirm the deletion, click Yes.
	
	4. Insert the program's CD-ROM into the CD-ROM drive. Press and hold down the
	  SHIFT key when you insert the CD-ROM to prevent Setup from starting
	  automatically.
	
	5. Click Start, and then click Run.
	
	6. In the Open box, type the following line, and then click OK:
	
	  "<drive>:\Support\Shkwave" (without the quotation marks)
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	7. Double-click Sw61inst.exe.
	
	  NOTE: If you receive the following error message
	
	  Error registering the OCX
	
	  C:\Windows\System\Macromed\Director\SwDir.dll
	
	  follow the instructions in the "Run the Axdist Installer" section later in
	  this article, and then repeat this section.
	
	If the issue continues to occur, proceed to the next method.
	
	Run the Axdist Installer
	------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line, and then click OK:
	
	  <drive>:\Aref\System
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	3. Double-click Axdist.exe.
	
	4. Repeat the steps in the "Reinstall Macromedia Shockwave Director Separately"
	  section earlier in this article.
	
	
	Additional query words: multi-media world atlas evg
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbsetup kbimu kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbBookShelf1999 kbEncartaEnCyc1999 kbEncartaVirtGlobe99
	Version           : WINDOWS:1.0
	Issue type        : kbhowto
	
	=============================================================================
	
