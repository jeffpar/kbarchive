---
layout: page
title: "Q238596: Midtown Madness Err Msg: EBU90B4 Caused an Invalid Page Fault..."
permalink: /kb/238/Q238596/
---

## Q238596: Midtown Madness Err Msg: EBU90B4 Caused an Invalid Page Fault...

	Article: Q238596
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Midtown Madness, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Midtown Madness, you may receive the
	following error message:
	
	  EBU90B4 caused an invalid page fault in module Oleaut32.dll.
	
	RESOLUTION
	==========
	
	To work around this issue, copy the contents of Midtown Madness CD-ROM to your
	hard disk drive:
	
	1. Insert the Midtown Madness CD-ROM into the CD-ROM drive. Press and hold down
	  the SHIFT key when you insert the CD-ROM to prevent the program from starting
	  automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line (including the quotation marks), and
	  then click OK
	
	  ""<drive>:\program files"" (without the quotation marks)
	
	  where <drive> is the drive letter of the hard disk on which Microsoft
	  Windows is installed.
	
	4. Right-click a blank area in the Program Files window, point to New, and then
	  click Folder.
	
	5. Type "microsoft games" (without the quotation marks), and then press ENTER.
	
	6. Double-click the Microsoft Games folder.
	
	7. Right-click a blank area in the Microsoft Games window, point to New, and
	  then click Folder.
	
	8. Type "midtown madness" (without the quotation marks), and then press ENTER.
	
	9. Click Start, and then click Run.
	
	10. In the Open box, type the following line, and then click OK
	
	  <cdrom>:\
	
	  where <cdrom> is the drive letter of the CD-ROM drive.
	
	11. On the Edit menu, click Select All.
	
	12. Press and hold down the CTRL key, and then click each of the following
	  folders to cancel the selection of these folders:
	
	   - DirectX
	
	   - Indeo
	
	   - MCM
	
	13. On the Edit menu, click Copy.
	
	14. Right-click inside the Midtown Madness folder you created in step 8, and
	  then click Paste.
	
	15. Double-click the Midtown.exe file to start Midtown Madness.
	
	MORE INFORMATION
	================
	
	If you continue to encounter problems, you may need to install Microsoft DirectX
	6.1 from the Midtown Madness CD-ROM:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following line, and then click OK
	
	  <cdrom>:\directx\dxsetup.exe
	
	  where <cdrom> is the drive letter of the CD-ROM drive.
	
	3. Follow the instructions on the screen to install DirectX.
	
	Additional query words: 1.0 midmad ipf gpf general protection dx direct-x
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbMidtownMadSearch kbMidtownMadness
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
