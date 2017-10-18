---
layout: page
title: "Q152183: Home Products Err Msg: Invalid Dynamic Link Call to a DLL"
permalink: kb/152/Q152183/
---

## Q152183: Home Products Err Msg: Invalid Dynamic Link Call to a DLL

	Article: Q152183
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,95; :1.0,1997 edition
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbmm kbtlckbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 3D Movie Maker for Windows, version 1.0 
	- Microsoft Close Combat for Windows 1.0 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	- Microsoft NBA Full Court Press for Windows, version 1.0 
	- Microsoft Wine Guide for Windows, version 1.0 
	- the operating system: Microsoft Windows 95 
	- Scholastic's Magic School Bus series: Explores the Rainforest for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	- Microsoft Windows Entertainment Pack, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run one of the programs listed at the top of this article on a
	Windows 95 computer with an STB Powergraph 64 video card or an S3 Vision 968 PCI
	video card, you may receive the following error message:
	
	  Your program is making an invalid dynamic link call to a .dll file.
	
	This error occurs when you are using the Video English without STB Vision 95
	display driver.
	
	This error also occurs in Flight Simulator, version 6.0 if you are using the S3
	Trio 32/64 PCI display driver from STB.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the following steps:
	
	1. Click the Start button, and then click Run.
	
	2. In the Open box, type "sysedit" (without the quotation marks) and click OK.
	  This opens the System Configuration Editor, with several files open and
	  displayed on the screen.
	
	3. Click the title bar of Win.ini to bring it to the front.
	
	4. On the Search menu, click Find.
	
	5. In the Find box, type "drawdib" (without the quotation marks), and then click
	  Next.
	
	6. In the [drawdib] section, add the following entry:
	
	  dva=0
	
	NOTE: If there is no [drawdib] section, add the following to the Win.ini file:
	
	  [drawdib]
	  dva=0
	
	7. On the File menu, click Save.
	
	8. Exit the System Configuration Editor.
	
	9. Restart Windows.
	
	The program should now run successfully.
	
	MORE INFORMATION
	================
	
	The "dva=0" entry turns off direct video access (DVA) and DCI. DVA and DCI allow
	video images to be sent directly to the screen. If a program detects the display
	type incorrectly, problems can occur using DVA and DCI. Some of these problems
	can be severe (such as general protection (GP) faults in Gdi.exe). When you turn
	off DVA and DCI, video images must be drawn through GDI. Although using GDI can
	be slower than direct access, it is safer.
	
	Additional query words: 1.00 6.00 msbrain rain forest rainforest kids mskids msb msbss frizz kbmm multimedia multi-media multi media dynamic link invalid solar dll magicbus schoolbus Nickelodeon basketball homegame s3 trio32 PCI fs6 fs95 display adapter enc97
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbmm kbtlc kbfaq
	Technology        : kbOSWin95 kbOSWinSearch kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbGamesSearch kbFlightSimSearch kbZNotKeyword kbKidsSearch kbCloseCombatSearch kbEncartaEncycSearch kbWinEntPkSearch kbWinEntPk100 kbCloseCombat kbFlightSim95 kbNBAFullCourtPress kb3dMovieMaker kbWine100 kbScholasticOcean kbScholasticSolar kbScholasticDinosaurs kbScholasticEarth kbScholasticRainForest kbEncartaEnCyc1997 kbMSBSearch kbSimSearch
	Version           : WINDOWS:1.0,95; :1.0,1997 edition
	Issue type        : kbprb
	
	=============================================================================
	
