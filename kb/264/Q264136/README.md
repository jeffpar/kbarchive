---
layout: page
title: "Q264136: MCM2: &quot;Fatal Exception 0D&quot; Error Message When You Start Program"
permalink: kb/264/Q264136/
---

## Q264136: MCM2: &quot;Fatal Exception 0D&quot; Error Message When You Start Program

	Article: Q264136
	Product(s): Microsoft Home Games
	Version(s): 2.0; Win2000:98
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Motocross Madness 2, version 2.0 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Motocross Madness 2, you may receive the following
	error message on a blue screen
	
	  A Fatal Exception 0D has occurred at <xxxx:xxxxxx> in VxD APIX(01)
	
	where <xxxx:xxxxxx> is a string of random characters.
	
	CAUSE
	=====
	
	This behavior can occur if the Apix.vxd file is damaged or outdated.
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the Apix.vxd file with the version that is
	included in Microsoft Windows 98:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "apix.vxd" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. In the list of found files, right-click the Apix.vxd file that is located in
	  the Windows\System\Iosubsys folder, and then click Rename.
	
	5. Type "apix.old" (without the quotation marks), and then press ENTER.
	
	6. Close the Find: Files Named Apix.vxd window.
	
	7. Restart the computer.
	
	8. Insert the Windows 98 CD-ROM into your CD-ROM drive. Press and hold down the
	  SHIFT key as you insert the CD-ROM to prevent the Windows 98 CD-ROM from
	  starting automatically.
	
	9. Click Start, and then click Run.
	
	10. In the Open box, type "sfc.exe" (without the quotation marks), and then
	  click OK.
	
	11. Click "Extract one file from installation disk".
	
	12. In the "Specify the system file you would like to restore" box, type
	  "Apix.vxd" (without the quotation marks), and then click Start.
	
	13. In the Restore From box, type the following line, and then click OK
	
	  <cd-rom>:\Win98
	
	  where <cd-rom> is the drive letter of your CD-ROM drive.
	
	14. In the Save File In box, type the following line, and then click OK
	
	  <drive>:\windows\system\iosubsys
	
	  where <drive> is the drive letter of the hard disk on which Windows 98
	  is installed.
	
	MORE INFORMATION
	================
	
	The following version of the Apix.vxd file is known to be incompatible with
	Motocross Madness 2.
	
	+----------------------+
	| Version  | Date      | 
	+----------------------+
	| 4.55.996 | 6/21/1997 | 
	+----------------------+
	
	
	Additional query words: 2.00 msgame mcm2 motorcross corrupt incorrect version win98x
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu msgame 
	Technology        : kbOSWin98 kbOSWinSearch kbGamesSearch kbMotocrossSearch kbMotocrossM2
	Version           : :2.0; Win2000:98
	Issue type        : kbprb
	
	=============================================================================
	
