---
layout: page
title: "Q239633: World Atlas 2000: Error Messages When You Use InterActivity"
permalink: /kb/239/Q239633/
---

## Q239633: World Atlas 2000: Error Messages When You Use InterActivity

	Article: Q239633
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Interactive World Atlas 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an InterActivity in Microsoft Encarta World Atlas 2000, you may
	receive a series of error messages similar to the following:
	
	  Msref.dll has detected an error in the URL syntax. Did you include the
	  required Cmd=... Param?
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- Macromedia Shockwave Director is not installed correctly on your computer.
	
	- One of the components of Macromedia Shockwave Director is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Remove and Reinstall Encarta World Atlas 2000
	---------------------------------------------
	
	To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. In the list of installed programs, click Microsoft Encarta World Atlas 2000,
	  and then click Add/Remove.
	
	4. Follow the instructions on the screen to remove the program.
	
	5. Close Control Panel.
	
	6. Insert the Encarta World Atlas Installation and Resources CD-ROM into the
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
	
	Additional query words: multi multi-media media mm ewa2k animation interactive errors
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaWorldAtlas2000
	Version           : WINDOWS:
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
