---
layout: page
title: "Q126275: Dinosaurs Hangs During Setup with ATI Mach32 Driver"
permalink: kb/126/Q126275/
---

## Q126275: Dinosaurs Hangs During Setup with ATI Mach32 Driver

	Article: Q126275
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dinosaurs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Microsoft Dinosaurs on a computer that has the ATI Mach32 video
	driver version 2.3 installed, your computer may stop responding (hang) when the
	CD-ROM is checking system performance.
	
	The installation screen will display the status message:
	
	  Checking system and testing CD-ROM performance.
	  This may take a few minutes.
	
	NOTE: This problem does not occur with Windows 95.
	
	RESOLUTION
	==========
	
	1. Double-click the Windows Setup icon located in the Main group.
	
	2. From the Options menu, choose Change System Settings.
	
	3. Click the down arrow button in the Display box, and scroll the list until you
	  see VGA. Click VGA and choose OK.
	
	  If the installation program cannot find the necessary files to install the VGA
	  display driver, you will see a message similar to:
	
	  Please insert the Microsoft Windows Disk, or a disk that contains the
	  file...
	
	  If the files on this disk can be found at a different location, for example,
	  on another drive, type a new path to the file below.
	
	  The message may vary depending upon the version of Microsoft Windows installed
	  on the system. Follow the instructions displayed to install the standard VGA
	  video driver.
	
	  If the VGA driver is currently installed on the system, a Change System
	  Settings dialog box appears with the message:
	
	  A driver for this display is already on the system. Do you want to use the
	  currently installed driver or install a new driver?
	
	4. Select Current.
	
	  NOTE: If you choose New, you will be prompted to insert the Windows disks as
	  noted in the message above.
	
	5. Restart Windows when prompted.
	
	6. Run Dinosaurs Setup.
	
	7. Change the display back to the Mach32 Driver by following steps 1 through 5
	  (and replacing VGA with ATI Mach32 Driver in step 3).
	
	MORE INFORMATION
	================
	
	When you switch back to the ATI Mach32 driver and restart Windows, you may get
	an error message stating:
	
	  A device has been specified more than once in the SYSTEM.INI file, or a
	  device specified in SYSTEM.INI conflicts with a device which is being loaded
	  by an MS-DOS device driver or application. Remove the duplicate entry from
	  the SYSTEM.INI file, and then restart Windows.
	
	  Device Duplicated: Mach32 Driver
	
	If the error occurs, edit the SYSTEM.INI file after exiting Windows, and remove
	the duplicate device driver entry.
	
	1. At an MS-DOS command prompt, type the following and press ENTER
	
	  "edit <drive>:\<windows>\system.ini" (without the quotation
	  marks)
	
	  where <drive> is your hard drive and <windows> is your Windows
	  directory. For example:
	
	  "edit c:\windows\system.ini" (without the quotation marks)
	
	2. Locate the [386enh] section and remove the duplicate device=Mach32 entry.
	
	3. Restart Windows.
	
	4. Dinosaurs should run properly.
	
	NOTES
	-----
	
	The Microsoft Dinosaurs README file, dated June 28, 1993 states:
	
	ATI PROBLEMS
	------------
	
	Microsoft Dinosaurs is incompatible with some advanced features used by some
	video cards such as the Mach32 chip set running the ATI drivers.
	
	For Dinosaurs to run on the ATI driver, the "256 color palette" control in the
	"Advanced features" of the "ATI Control Panel" needs to be set to ON. See your
	video card documentation for more information.
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	ATI Technologies Inc.: (905) 882-2626.
	
	The third-party products discussed here are manufactured by ATI Technologies
	Inc., a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding these products' performance or reliability.
	
	Additional query words: multi media multimedia multi-media mmtitleshangs hanging hanged crashed crash crashes freeze frozen locked locked-up lock hang bombed bomb down
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbDinosaurs100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
