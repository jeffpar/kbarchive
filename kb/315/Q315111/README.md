---
layout: page
title: "Q315111: Encarta 2002/2003: Error Reading from File ... DWINTL"
permalink: /kb/315/Q315111/
---

## Q315111: Encarta 2002/2003: Error Reading from File ... DWINTL

	Article: Q315111
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Reference Library 2003 - DVD Edition 
	- Microsoft Encarta Reference Library 2002 - DVD Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install one of the Encarta Reference Library products listed at
	the beginning of this article, you may receive the following error message:
	
	  Error reading from file: <drive>:\<path>\DWINTL.DLL
	
	where <drive> represents the drive letter of your DVD drive and
	<path> represents the path to the Dwintl.dll file.
	
	CAUSE
	=====
	
	This issue can occur if your computer has Universal Disk Format (UDF) disabled.
	
	NOTE: Although UDF is not required to run the Encarta Reference Library DVD, some
	DVD-ROM drives may have problems reading some DVD-ROM discs if UDF is disabled.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Method 1: Troubleshoot CD-ROM Read Errors
	-----------------------------------------
	
	Click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Errors
	
	If the steps in the article do not resolve the issue, proceed to the next
	method.
	
	Method 2: Enable UDF for DVD-ROM Drives
	---------------------------------------
	
	To enable UDF for DVD-ROM drives, follow these steps:
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. Click Advanced.
	
	3. Click to clear the "Disable UDF File System" check box, and then click OK.
	
	4. Click OK. When you are prompted to restart your computer, click Yes.
	
	When your computer restarts, UDF is disabled and you should be able to install
	Encarta Reference Library.
	NOTE: By default, UDF is enabled in Windows. Therefore, another program (such as
	CD-RW software) may not work correctly if you enable UDF. You may need to
	disable UDF again in order for the other program to work normally.
	
	
	Additional Troubleshooting Procedures
	-------------------------------------
	
	Use the procedures described in this section to further troubleshoot this issue:
	
	Inspect the Disc:
	
	Remove the disc from the drive and inspect the disc for damage such as warping or
	large scratches. If the disc is damaged, contact the manufacturer regarding a
	replacement CD.
	
	If you experience problems with a DVD disc, ensure that you place the DVD in a
	DVD drive not a CD-ROM drive.
	
	Clean the Disc:
	
	To clean the CD-ROM or DVD-ROM, use a disc cleaning kit, or gently wipe the
	silver side of the disc with a soft, lint-free cotton cloth. Do not use a paper
	cloth because it can scratch the disc. Wipe the disc from the center, outward.
	Do not use a circular motion as this can scratch the disc.
	
	If this does not resolve the issue, clean the disc using a water-dampened cloth
	or a commercial CD or DVD cleaning solution. Dry the disc thoroughly before you
	place it in the drive.
	
	Test the Disc in a Different Drive:
	
	If your computer has multiple CD-ROM, CD-R, CD/RW or DVD drives, test the disc in
	the other drive. For DVDs, ensure the drive bears a DVD logo on the front. If
	the disc works in another drive, the original drive may not be properly reading
	the disc. Please seek help from your computer or disc drive manufacturer.
	
	If the disc is clean and it does not work in another drive, it may be damaged and
	you may have to replace it. See the section "Obtaining a Replacement Disc"
	below.
	
	Clean the Drive:
	
	You can clean the disc drive using a CD-ROM or DVD drive cleaning disc, which are
	available in most computer or home electronics stores. Before you purchase a
	drive cleaning disc, try troubleshooting the issue using the remaining
	procedures that are described in this section.
	
	Test Disc Read with Copy or Xcopy:
	
	Copy and Xcopy are command-line utilities that will usually uncover a disc read
	issue. If Copy and Xcopy complete successfully, the issue is unlikely to be a
	problem reading the disc. A failure to copy can indicate drive or system
	problems and illustrate the need for further troubleshooting.
	
	To test disc read using Copy and Xcopy, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open dialog box, type "cmd" (without the quotation marks), and then
	  press ENTER.
	
	3. At the prompt, type one of the following commands:
	
	   - To copy a folder:
	
	  "copy <discdrive>:\<foldername><drive>:\psstest /V "
	  (without the quotation marks)
	
	   - To copy the entire disk:
	
	  "xcopy <discdrive>:\*.* <drive>:\psstest /V /E " (without the
	  quotation marks)
	
	NOTE: <discdrive> is the drive letter of the CD-ROM or DVD drive,
	<foldername> is the name of the folder containing files you need to access
	on the disk, and <drive> is the letter of your system hard disk drive
	
	4. Press ENTER.
	
	5. If you receive a "Does psstest specify a file name or directory name?"
	  message, press F.
	
	6. If you receive an "Overwrite ... (Yes/No/All)?" message, press A.
	
	NOTE: If you use the /V switch with Copy or Xcopy, the copied files are checked
	to make sure that the files were copied correctly. However, the task may take
	longer to complete if you use the /V switch.
	
	Quit Unnecessary Software:
	
	Software that is running on your computer may interfere with reading the disc,
	for example, antivirus software, firewall software, or anti-crash software. If
	you disable the unnecessary software, and then restart the computer, you may be
	able to read from the disc.
	
	For additional information about how to start Microsoft Windows XP without
	unnecessary software, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	After you have performed a clean boot of Windows XP, close any remaining programs
	by following these steps:
	
	1. Quit all open programs.
	
	2. Right-click each icon in the notification area, and then click Exit.
	
	NOTE: The notification area is located at the far right of the taskbar, near the
	clock. Some programs listed in the notification area will not have Exit listed
	on the shortcut menu and you may need to click Quit, Close, or Disable depending
	on the choices available for that program.
	
	3. Press CTRL+ALT+DEL, and then click Task Manager.
	
	4. In Windows Task Manager, click Applications.
	
	5. No programs should appear under the Task list. If any programs appear, click
	  to select the program, and then click End Task.
	
	6. Repeat step 5 until the Task list is empty.
	
	7. Quit Windows Task Manager.
	
	Switch the Drive Controller to DMA Mode:
	
	If you switching the CD-ROM or DVD drive to DMA from PIO, you may resolve the
	issue. For additional information on how to switch your computer's drive
	controller to DMA mode, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q310751 MA/PIO Settings Are Hard to Find in Windows XP
	
	MORE INFORMATION
	================
	
	For additional information about problems installing Encarta Reference Library,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q248263 Error 1305 During Installation
	
	For additional information about troubleshooting DVD or CD-ROM issues, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q314096 How to Troubleshoot CD-ROM Drive Problems in Windows XP
	
	  Q308012 Resources for Troubleshooting DVD Problems in Windows XP
	
	  Q306318 Troubleshooting DVD Playback in Windows Media Player for XP
	
	  Q306319 How to Troubleshoot Audio CD Creation in Windows Media Player
	
	  Q315350 Incorrect Function Err Msg When Accessing CD-ROM Drive
	
	Additional query words: 1305 dwintl.dll
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbEncartaSearch kbMMSearch kbEncartaRef2002DVD
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
