---
layout: page
title: "Q175373: Solar Err Msg: MMTASK Caused an Invalid Page Fault in Module..."
permalink: kb/175/Q175373/
---

## Q175373: Solar Err Msg: MMTASK Caused an Invalid Page Fault in Module...

	Article: Q175373
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kberrmsg kbSysSettings
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Magic School Bus Explores the Solar System for Windows, version
	1.0, you may receive the following error message:
	
	  MMTASK caused an invalid page fault in module UNKNOWN.
	
	CAUSE
	=====
	
	This error message can be caused by one of the of the following:
	
	- The system date on your computer is set to a date later than 2037.
	
	- In Windows 95/98, DCI support is enabled in your System.ini file.
	
	- In Windows 3.1x, you do not have a DVA=0 line in the Win.ini file.
	
	RESOLUTION
	==========
	
	First, check your computer's system date using the "Check System Date" section
	in this article. If that does not resolve the problem, use either the "Microsoft
	Windows 95/98: Check for DCI Support" or the "Microsoft Windows 3.1x: Add DVA=0"
	section in this article (depending on your version of Windows) to resolve the
	problem.
	
	Check System Date
	-----------------
	
	If the system date is set to a date later than the year 2037, you can receive
	this error message and you may encounter additional problems. To change the date
	to the current year or to a year earlier than 2037, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Date/Time.
	
	3. On the Date & Time tab, in the Date area, use the up or down arrows to
	  set the year to the current year.
	
	Microsoft Windows 95/98: Check for DCI Support
	----------------------------------------------
	
	To check for DCI support, follow these steps in Windows:
	
	1. Click Start, and then click Run.
	
	2. In the Open: box, type the following, and then click OK:
	
	  " sysedit " (without the quotation marks)
	
	  This opens the System Configuration Editor.
	
	3. On the Window menu in System Configuration Editor, click
	  C:\Windows\System.ini (where C:\Windows is the drive and folder where Windows
	  is installed). This brings the text in the System.ini file to the front.
	
	4. In the [Drivers] section of the System.ini file, place a semicolon (;) in
	  front of the following line:
	
	  DCI=RFMDCI
	
	  The line should now look like this:
	
	  ;DCI=RFMDCI
	
	5. In the [Display] section of the System.ini file, place a semicolon (;) in
	  front of the following line:
	
	  DCI-Support=On
	
	  The line should now look like this:
	
	  ;DCI-Support=On
	
	6. On the File menu, click Save.
	
	7. On the File menu, click Exit.
	
	8. Shut down Windows, and restart your computer.
	
	9. Start Magic School Bus again.
	
	Microsoft Windows 3.1x: Add DVA=0
	---------------------------------
	
	To add DVA=0 to the Win.ini file, follow these steps:
	
	1. On the File menu in Program Manager, click Run.
	
	2. In the Command Line box, type the following, and then click OK:
	
	  " sysedit " (without the quotation marks)
	
	  This opens the System Configuration Editor.
	
	3. On the Window menu in System Configuration Editor, click C:\Windows\Win.ini
	  (where C:\Windows is the drive and folder where Windows 3.1x is installed).
	  This brings the text in the Win.ini file to the front.
	
	4. On the Search menu, click Find.
	
	5. In the Find box type the following, and then click next:
	
	  " drawdib " (without the quotation marks)
	
	6. In the [drawdib] section of the Win.ini file, add the following line:
	
	  " dva=0 " (without the quotation marks)
	
	  NOTE: If there is no [drawdib] section in your Win.ini file, add the following
	  lines to the Win.ini file:
	
	  [drawdib] dva=0
	
	7. On the File menu, click Save.
	
	8. On the File menu, click Exit.
	
	9. Shut down Windows 95, and restart your computer.
	
	10. Start Magic School Bus again.
	
	MORE INFORMATION
	================
	
	The DVA=0 entry in the Win.ini file turns off Direct Video Access (DVA) and DCI.
	DVA and DCI allow video images to be sent directly to the screen. If a program
	detects the display type incorrectly, problems can occur using DVA and DCI. When
	you turn off DVA and DCI, video images must be drawn through the Graphics Device
	Interface (GDI). Although using GDI may be slower than direct access, it is
	safer.
	
	The behavior described in this article can occur with the following video cards:
	
	- Number 9 video cards
	
	  NOTE: Many Number 9 video cards change the DCI= line in the [Display] section
	  of the System.ini file to: DCI=Display.
	
	- Cirrus Logic 5434 PCI video card
	
	- Creative Labs 3D Video Blaster video card
	
	- Diamond Stealth 3D 2000
	
	- Matrox Millennium
	
	- S3 Vision 968 video card
	
	- Venus 1 MB video card
	
	Number 9 has developed updated video drivers for Windows 95. These drivers do not
	correct the problem described in this article.
	
	The problem described in this article can also occur with a MIRO 12SD video card.
	To resolve this issue, follow the steps in the "Microsoft Windows 95/98: Check
	for DCI Support" section of this article, but in step 4 place the semicolon (;)
	in front of the line that reads:
	
	  dci=mirodci
	
	Additional query words: ipf unknown gpf GP Fault general protection
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kberrmsg kbSysSettings 
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticSolar kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
