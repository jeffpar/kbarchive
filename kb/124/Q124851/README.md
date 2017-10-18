---
layout: page
title: "Q124851: MSB Human: Program Hangs in Classroom"
permalink: kb/124/Q124851/
---

## Q124851: MSB Human: Program Hangs in Classroom

	Article: Q124851
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	- Microsoft Bob, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a Zeos Pentium computer with a Diamond Stealth 64 video card
	and a Turtle Beach Monte Carlo sound card, your computer may stop responding
	(hang) when you enter the classroom in Magic School Bus Explores the Human Body,
	or when you run Microsoft Bob.
	
	This behavior may occur on machines using a Turtle Beach Monte Carlo sound card
	with various video and microprocessor configurations.
	
	CAUSE
	=====
	
	The way the MIDI is configured on this system causes the computer to stop
	responding.
	
	RESOLUTION
	==========
	
	To properly configure the Monte Carlo sound card on the Zeos Pentium, follow the
	steps below. These steps discuss .ini files. For more information about .ini
	files and information about how to perform this task in Windows, see your
	Windows printed documentation or online Help.
	
	
	1. Make a backup copy of the System.ini file, located in the Windows directory.
	
	2. Run the Switch Drivers utility for the Monte Carlo sound card. Select the
	  Standard driver and restart Windows. If restarting fails and leaves you at
	  the MS-DOS prompt, type "win" (without the quotation marks) to return to
	  Windows.
	
	3. From the File menu in Program Manager, choose Run. In the Command line box,
	  type "sysedit" (without the quotation marks), and choose OK.
	
	4. Edit the System.ini file and make the following changes to the corresponding
	  sections (DO NOT delete any information from the sndsys.drv or m16midi.drv
	  sections):
	
	        [sndsys.drv]
	        interrupt=7
	        duplex=half
	        dmaadc=1
	        dmadac=1
	
	        [m16midi.drv]
	        interrupt=11
	
	  NOTE: If 7 does not work in the interrupt= line, try 10.
	
	5. Restart your computer.
	
	MORE INFORMATION
	================
	
	For more information about the Turtle Beach Monte Carlo sound card, contact
	Turtle Beach Systems at (510) 624-6200.
	
	The products discussed here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 1.00 kids mskids msb-hb msbhb schoolbus frizzle frizz liz magicbus magic_bus sound board soundcard chipset display musical instrument digital interface w_bob bob crash midi hangs hanging hanged crashed crashes freeze frozen locked locked-up lock hang bombed bomb down winmsbhuman msbhuman
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbBOBSearch kbBOB100 kbScholasticHuman kbMSBSearch
	Version           : WINDOWS:1.0
	
	=============================================================================
	
