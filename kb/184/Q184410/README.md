---
layout: page
title: "Q184410: How to Use Msinfo32.exe to Optimize CD-ROM Cache Settings"
permalink: kb/184/Q184410/
---

## Q184410: How to Use Msinfo32.exe to Optimize CD-ROM Cache Settings

	Article: Q184410
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,2.0,5.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbtool kbimu kbHardware
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 3D Movie Maker for Windows, version 1.0 
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Automap Trip Planner for Windows, version 5.0 
	- Microsoft Barney Goes to the Circus, version 1.0 
	- Microsoft Barney Under the Sea, version 1.0 
	- Microsoft Fun on the Farm with Barney, version 1.0 
	- Microsoft Beyond the Limit: Ultimate Climb, version 1.0 
	- Microsoft Bookshelf 98 for Windows 
	- Microsoft Cinemania 
	- Microsoft Close Combat for Windows 1.0 
	- Microsoft Complete Gardening for Windows, version 1.0 
	- Microsoft Creative Writer for Windows, version 2.0 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 98 Encyclopedia for Windows 
	- Microsoft Encarta 98 DVD-ROM Reference Suite for Windows 
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Encyclopedia Standard 2001 for Windows 
	- Microsoft Encarta Reference Suite 99 
	- Microsoft Encarta Reference Suite 2000 
	- Microsoft Encarta Reference Suite 2001 
	- Microsoft Encarta 96 World Atlas for Windows 
	- Microsoft Encarta Interactive World Atlas 2000 
	- Microsoft Encarta Interactive World Atlas 2001 
	- Microsoft Encarta World English Dictionary 
	- Microsoft Encarta World English Dictionary 2001 
	- Microsoft Expedia Streets 98 
	- Microsoft Expedia Streets 98 Deluxe, version 1.0 
	- Microsoft Expedia Trip Planner 98 
	- Microsoft Greetings Workshop, version 2.0 
	- Microsoft Koi and the Kola Nuts, version 1.0 
	- Microsoft Music Central for Windows, 1996, 1997 edition 
	- Microsoft My Personal Tutor: Alphabet Playhouse, version 1.0 
	- Microsoft My Personal Tutor: Mathopolis, version 1.0 
	- Microsoft My Personal Tutor: Preschool Workshop, version 1.0 
	- Microsoft My Personal Tutor: Reader Railway, version 1.0 
	- Microsoft Nickelodeon 3D Movie Maker for Windows, version 1.0 
	- Microsoft NBA Full Court Press for Windows, version 1.0 
	- Microsoft Office 97 Professional Edition for Windows 
	- Microsoft Outwars, version 1.0 
	- Microsoft Paul Bunyan, version 1.0 
	- Microsoft Picture It!, version 2.0 
	- Microsoft Plus! for Kids, version 1.0 
	- Microsoft Reader's Digest Complete Do-It-Yourself Guide for Windows, version 1.0 
	- Microsoft Soccer, version 1.0 
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Microsoft System Information tool to
	optimize CD-ROM performance in Windows.
	
	The Microsoft System Information tool is located on the installation CD-ROM for
	each of the Microsoft programs listed at the beginning of this article. Some of
	these programs also install Microsoft System Information into the following
	folder on the hard disk:
	
	  Program Files\Common Files\Microsoft Shared\Msinfo
	
	For additional information about how to locate Microsoft System Information on
	the installation CD-ROM of a Microsoft program, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q154883 Home Products Containing Multimedia Version of Msinfo32.exe
	
	MORE INFORMATION
	================
	
	To use the Microsoft System Information utility to optimize CD-ROM performance
	in Windows, follow these steps:
	
	1. Insert the CD-ROM for one of the programs listed at the beginning of this
	  article into the CD-ROM drive. Press and hold down the SHIFT key as you
	  insert the CD-ROM to prevent the program from starting automatically.
	
	2. Locate the Msinfo32.exe file on the CD-ROM and copy it to the desktop.
	
	  For information about how to copy files in Windows, see your Windows printed
	  documentation or online Help, or see the following article in the Microsoft
	  Knowledge Base:
	
	  Q133277 Windows 95/98: How to Copy a File
	
	3. On the desktop, right-click My Computer, and then click Properties.
	
	4. On the Performance tab, click File System.
	
	5. On the CD-ROM tab, move the "Supplemental cache size" slider all the way to
	  the left (the Small position).
	
	6. In the "Optimize access pattern for" box, click No Read-Ahead.
	
	7. Click OK, and then click Close.
	
	8. When you are prompted to restart the computer, click Yes.
	
	9. On the desktop, double-click the Msinfo32.exe file.
	
	10. Under System Info, click CD-ROM, and then note the following values:
	   - Data Transfer Rate
	
	     NOTE: To comply with the Multimedia Personal Computer Level 2 (MPC2)
	     specification, this value must be at least 300.0 KB/s. The Data Transfer
	     Rate must be 600.0 KB/s or faster if you want to run a program that
	     requires a quad-speed CD-ROM drive.
	
	   - CPU Util @ 300KB/s
	
	     NOTE: To comply with the MPC2 specification, this value must be no higher
	     than 60 percent. For best performance, this value should be no higher than
	     30 percent, and a value less than 10 percent is ideal.
	
	   - Data Transfer Integrity
	
	     NOTE: This value should always be "Tested OK."
	
	11. Click Refresh (!) on the toolbar, and then note the new values. Repeat this
	  step four times, and then calculate and record the average values for Data
	  Transfer Rate and CPU Util @ 300KB/s. If the value for Data Transfer
	  Integrity is not "Tested OK" after any test, record the configuration as
	  "Data Suspect," and then proceed to the next step.
	
	12. Quit the Microsoft System Information tool.
	
	13. Repeat steps 3-12 for each "Supplemental cache size" slider position.
	
	14. Repeat steps 3-8 to change the value in the "Optimize access pattern for"
	  box to match the actual CD-ROM drive speed.
	
	15. Repeat steps 3-12 for each "Supplemental cache size" slider position.
	
	  NOTE: Do not change the value in the "Optimize access pattern for" box that
	  you set in step 14.
	
	16. Use your notes to determine which configuration achieves the best CD-ROM
	  performance with no loss of data integrity. This is the optimal
	  configuration of the CD-ROM drive.
	
	17. Repeat steps 3-8 to change the position of the "Supplemental cache size"
	  slider and the value in the "Optimize access pattern for" box to match the
	  optimal configuration of the CD-ROM drive.
	
	In most cases, you can optimize CD-ROM performance in Windows 95 by moving the
	"Supplemental cache size" slider all the way to the right (the Large position)
	and then clicking the actual CD-ROM drive speed in the "Optimize access pattern
	for" box. However, in some cases you may achieve better results with reduced
	cache settings. The following table shows how different combinations of CD-ROM
	cache settings typically affect CD-ROM drive performance:
	
	  Supplemental
	  Cache Size     No Read-Ahead         Actual CD-ROM speed
	  --------------------------------------------------------
	
	  Small          Data Transfer Rate:   Data Transfer Rate:
	                 Slowest               Slower
	
	                 CPU Util @ 300KB/s:   CPU Util @ 300KB/s:
	                 Heaviest              Lighter
	
	  Large          Data Transfer Rate:   Data Transfer Rate:
	                 Faster                Fastest
	
	                 CPU Util @ 300KB/s:   CPU Util @ 300KB/s:
	                 Heavier               Lightest
	
	NOTE: In the "Optimize access pattern for" box, click only No Read-Ahead or the
	setting that matches the speed of the CD-ROM drive. If you click a setting that
	is faster than the speed of the CD-ROM drive, you may experience one or more of
	the following problems:
	
	- Performance of the CD-ROM drive decreases significantly.
	
	- Media files on CD-ROM skip or stutter when you play them.
	
	- You receive an "Error reading file" or "Cannot read from drive" error message
	  when you attempt to open a file on a CD-ROM.
	
	- The computer stops responding (hangs) when you attempt to open a file on a
	  CD-ROM.
	
	Additional query words: multi multi-media media mm mskids msgame
	
	======================================================================
	Keywords          : kbenv kbhw kbtool kbimu kbHardware 
	Technology        : kbOfficeSearch kbHomeProdSearch kbHomeMMsearch kbAOE kbAutomapSearch kbEncartaSearch kbExpediaSearch kbGamesSearch _IKkbZNotKeyword4 kbZNotKeyword kbPictureItSearch kbPlusKids kbKidsSearch kbOffice97Search kbBookshelfSearch kbPlusSearch kbOutwarsSearch kbOutwars kbCloseCombatSearch kbAOESearch kbEncartaEncycSearch kbGreetingsWorkSearch kbOffice97 kbZNotKeyword3 kbCineManiaSearch kbExpediaStreets98 kbExpediaStreets98del kbCloseCombat kbCreativeWriter200 kbSoccer kbPJPaulBunyan kbAutomapTripPlanner500 kbBarneyCircus100 kbBarneyUnderSea100 kbUltimateClimb100 kbBookShelf1998 kbCompleteGardening kbFunFarm100 kbMusicCentral kbMPTAlphabet kbMPTMathopolis kbMPTPreschool kbMPTReader kbNBAFullCourtPress kb3dMovieMaker kbPJKoi kbScholasticDinosaurs kbScholasticEarth kbGreetingsWork200 kbEncartaEnCyc1996 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc2000 kbEncartaEnCyc1999 kbPictureIt200 kbEncartaEnCyc1998 kbEncartaReference98 kbEncartaReference99 kbEncartaReference2000 kbEncartaReference2001 kbEncartaWorldAtlas2001 kbEncartaWorldAtlas2000 kbEncartaWorldAtlas1996 kbEncartaWorldEngDict2001 kbMusicCentral1996 kbMusicCentral1997 kbDoItYourself kbMSBSearch
	Version           : :1.0,2.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
