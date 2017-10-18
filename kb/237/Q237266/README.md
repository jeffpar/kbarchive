---
layout: page
title: "Q237266: Encarta 2000 Err Msg: An Essential Component Is Not Operating..."
permalink: kb/237/Q237266/
---

## Q237266: Encarta 2000 Err Msg: An Essential Component Is Not Operating...

	Article: Q237266
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are running Microsoft Encarta Encyclopedia 2000, you may receive the
	following error message:
	
	  An essential component is not operating properly and some features of the
	  encyclopedia will not work. Click Help to learn how to correct the problem.
	  Click OK to continue without fixing the problem. Click Cancel to exit the
	  encyclopedia.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- Macromedia Shockwave Director is not installed correctly on your computer.
	
	- One of the components of Macromedia Shockwave Director is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Remove and Reinstall Encarta Encyclopedia 2000
	----------------------------------------------
	
	To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. In the list of installed programs, click Microsoft Encarta Encyclopedia 2000,
	  and then click Add/Remove.
	
	4. Follow the instructions on the screen to remove the program.
	
	5. Close Control Panel.
	
	6. Insert the Encarta Encyclopedia Installation and Resources CD-ROM into the
	  CD-ROM drive, and then follow the instructions on the screen to reinstall the
	  program.
	
	If the issue continues to occur, proceed to the next method.
	
	Remove and Reinstall Macromedia Shockwave Director
	--------------------------------------------------
	
	To remove and reinstall Macromedia Shockwave Director:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the drive letter of the hard disk on which Microsoft
	  Windows is installed, followed by a COLON (:), and then click OK.
	
	3. On the File menu, point to New, and then click Folder.
	
	4. Right-click the New Folder folder, and then click Rename.
	
	5. Type "OldShockwave" (without the quotation marks).
	
	6. Double-click the OldShockwave folder.
	
	7. Click Start, and then click Run.
	
	8. If you are using Microsoft Windows 95 or Microsoft Windows 98, type the
	  following line in the Open box, and then click OK
	
	  <drive>:\Windows\System\Macromed
	
	  where <drive> is the drive letter of the hard disk on which Windows is
	  installed.
	
	  If you are using Microsoft Windows NT 4.0, type the following line in the Open
	  box, and then click OK
	
	  <drive>:\Winnt\System32\Macromed
	
	  where <drive> is the drive letter of the hard disk on which Windows is
	  installed.
	
	9. In the Macromed folder, click to select the Director folder, and then press
	  and hold down the CTRL key as you click to select the Shockwave folder and
	  the Shock7 folder, if it exists.
	
	10. On the Edit menu, click Cut.
	
	11. Click the OldShockwave folder on the taskbar.
	
	12. On the Edit menu, click Paste.
	
	13. Insert the Encarta Installation and Resources CD-ROM into the CD-ROM drive.
	  Press and hold down the SHIFT key when you insert the disc to prevent Setup
	  from starting automatically.
	
	14. Click Start, and then click Run.
	
	15. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\Support\Shkwave\Sw70inst.exe
	
	  where <cd-rom> is the drive letter of the CD-ROM or DVD-ROM drive.
	
	16. Follow the instructions on the screen to reinstall Macromedia Shockwave
	  Director.
	
	MORE INFORMATION
	================
	
	For additional information about removing Shockwave registry keys, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q281833 Multimedia: Tool to Remove Shockwave Registry Keys
	
	If after completing the steps the problem remains, restart your computer and
	follow the steps again. Be careful to follow each step exactly as outlined.
	
	
	Additional query words: multi multi-media media mm ee2k report guide interactivity animation
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
