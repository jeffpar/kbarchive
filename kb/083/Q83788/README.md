---
layout: page
title: "Q83788: How to Use the LandScapeOrient=Angle Setting"
permalink: kb/083/Q83788/
---

## Q83788: How to Use the LandScapeOrient=Angle Setting

	Article: Q83788
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Windows version 3.1, the LandScapeOrient setting must be placed in
	the [ModelName,Port] section of the WIN.INI file, not in the [PostScript]
	section in order to function. For example:
	
	Correct:        [Apple LaserWriter II NTX,LPT3]
	advflags=696
	header=1
	landscapeorient=270
	
	Incorrect:      [PostScript,LPT1]
	ATM=placeholder
	landscapeorient=270
	
	If the [ModelName,Port] section cannot be found, you can force the setting to be
	written to the WIN.INI file, as follows:
	
	1. Open Control Panel and choose the Printers icon.
	
	2. Select the active PostScript printer and choose the Setup button.
	
	3. Choose the OK button, then the Close button.
	
	With Aldus PageMaker Version 4.0
	--------------------------------
	
	If you are working with PageMaker version 4.0, you will have to reinstall the
	target printer to refer to your specific printer:
	
	1. From the PageMaker menu, choose the File command.
	
	2. Select the Target Printer option, and then choose your printer's
	
	name.
	
	MORE INFORMATION
	================
	
	[Modelname,Port] LandScapeOrient [default: 90]
	----------------------------------------------
	
	This setting in the WIN.INI file determines the angle that the paper is rotated
	to obtain landscape orientation. Earlier versions of the Windows PostScript
	driver used 270-degree rotation. However, this rotation setting is opposite to
	the 90-degree rotation that most other laser printers use. To return to the
	previous version of landscape orientation, change this value to 270.
	
	Printing imported images (encapsulated PostScript [EPS] files, for example) in
	landscape orientation from some applications (for example, Aldus PageMaker 4.0)
	may result in improper placement or orientation of the image. Changing the
	setting to 270 may work around the problem.
	
	
	Additional query words: 3.10 3.1 driver 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
