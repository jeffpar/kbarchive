---
layout: page
title: "Q135729: Kids: Screen Turns White or Computer Hangs When Playing Videos"
permalink: /kb/135/Q135729/
---

## Q135729: Kids: Screen Turns White or Computer Hangs When Playing Videos

	Article: Q135729
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	- the operating system: Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select a topic that features a video (.avi) in one of the programs
	listed at the top of this article, your computer may stop responding (hang) or
	the screen may fade to white.
	
	This behavior has been reported on Compaq Presario and Compaq Prolinea
	computers.
	
	It has also been reported that Windows 3.x may quit and exit you to the MS- DOS
	command prompt.
	
	RESOLUTION
	==========
	
	NOTE: The following steps involve editing .ini files. For more information about
	how to perform this task in Windows, see your Windows printed documentation or
	online Help.
	
	To resolve the problem, do the following:
	
	1. On the File menu in Program Manager, click Run.
	
	2. On the command line, type the following and click OK:
	
	  " Sysedit " (without the quotation marks)
	
	3. Click the Win.ini file in the System Configuration Editor.
	
	4. Locate the [Drawdib] section in the Win.ini file. If one doesn't already
	  exist, create it.
	
	5. In the [Drawdib] section, insert the following line:
	
	  "dva=0" (without the quotation marks)
	
	6. On the File menu in the System Configuration Editor, click Exit.
	
	7. When you are prompted to save the Win.ini, click Yes.
	
	8. Exit, then restart Windows.
	
	After following these steps, the programs listed at the top of this article
	should run successfully.
	
	
	MORE INFORMATION
	================
	
	The "dva=0" entry turns off direct video access (DVA) and DCI. DVA and DCI allow
	video images to be sent directly to the screen. If a program detects the display
	type incorrectly, problems can occur using DVA and DCI. Some of these problems
	can be severe (such as general protection (GP) faults in Gdi.exe). When you turn
	off DVA and DCI, video images must be drawn through GDI. Although using GDI can
	be slower than direct access, it is safer.
	
	Additional query words: mskids kids tad series explore kbmm world people nature ss msbss msb-ss magic bus magic_bus hosed compaq cirrus video movie movies animation win 311 31 split fade green white classroom report reports flashes fades hangs hanging hanged crashed crash crashes freeze frozen locked locked-up lock hang bombed bomb down gpf g-p general protection winmsbsolar msbsolar homekids homekid
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbZNotKeyword kbZNotKeyword2 kbKidsSearch kbExplorapediaNature100 kbExplorapediaPeople100 kbScholasticSolar kbOSWin310 kbOSWin311 kbOSWin300 kbOSWin300a kbMSBSearch
	Version           : WINDOWS:1.0,3.x
	
	=============================================================================
	
