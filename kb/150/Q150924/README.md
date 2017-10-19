---
layout: page
title: "Q150924: PPT: Version 4.0 Clip Art Not Added to ClipArt Gallery 2.0/3.0"
permalink: /kb/150/Q150924/
---

## Q150924: PPT: Version 4.0 Clip Art Not Added to ClipArt Gallery 2.0/3.0

	Article: Q150924
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbole kbsetup kbdta kbclip
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Office for Windows 95 installs version 2.0 of Microsoft ClipArt
	Gallery. Microsoft Office for Windows, versions 4.2 and 4.3 install Microsoft
	ClipArt Gallery version 1.1.
	
	When you install Office for Windows 95 over a previous version of PowerPoint,
	your ClipArt gallery 1.1 index (the Artgalry.thm and Artgalry.idx files) should
	be merged with the ClipArt Gallery 2.0 index file (Artgalry.cag.)
	
	If this merge does not occur, you can add the PowerPoint 4.0 clip art to a new
	gallery. To do this, you need the following:
	
	- For each category of PowerPoint 4.0 clip art, you must have three
	  corresponding files ending with .pcs, .idx, and .thm in the same folder.
	
	- An entry for each category in the [IMPORT] section of the Artgalry.ini file
	  located in your Windows folder.
	
	To add the required files and create the required entries, run PowerPoint 4.0
	Setup to install the clip art.
	
	MORE INFORMATION
	================
	
	To install the clip art from PowerPoint 4.0 Setup, follow these steps:
	
	1. Run Setup.
	
	2. For installation type, click Complete/Custom.
	
	3. Clear the check box for all components except the Clip Art Files. The cleared
	  items are not installed.
	
	  When you clear Microsoft PowerPoint Program Files, the following message
	  appears:
	
	  This component is a vital part of this application. If it is not installed,
	  this application will not run correctly.
	
	  Ignore this message and click OK.
	
	4. Once you have only the Clip Art Files option selected, click continue.
	
	5. PowerPoint 4.0 Setup installs only the necessary clip art files to your
	  system.
	
	6. The next time you run the ClipArt Gallery, you should be prompted to Add New
	  Pictures
	
	If you already have the necessary files on your computer or network, you may
	create entries in the Artgalry.ini file. When you start the ClipArt Gallery, it
	reads those entries and loads the images.
	
	1. Locate the Artgalry.ini file in your Windows folder.
	
	2. Double-click Artgalry.ini to open it in Notepad. If you do not have an
	  Artgalry.ini file, you may create one using Notepad.
	
	3. Search for [IMPORT] in the file. If this section does not exist, type
	  "[IMPORT]" (without the quotation marks) on a new line.
	
	4. Below [IMPORT], include one line for each ClipArt Gallery category as
	  follows
	
	     File1=<path>,<category>.idx,<category>.thm,PowerPoint <desc.>
	
	  where <path> is the full path including the drive letter to the idx and
	  thm files for the category; <category> is the file name of those two
	  files; and <desc.> is the description of the category as it appears in
	  the ClipArt Gallery. Increment File1 so that the second line reads File2=,
	  the third line reads File3=, and so forth.
	
	5. Close the Artgalry.ini and save it to your Windows folder.
	
	6. When you run ClipArt Gallery next, it prompts you to add the new pictures.
	
	If you install PowerPoint 4.0 clip art to the default directories, the entries
	that Setup writes to the Artgalry.ini file are included below for reference:
	
	     [IMPORT]
	     PP400=+C:\POWERPNT\PCSFILES\,PP400.IDX,PP400.THM,PowerPoint
	     PP401=-C:\POWERPNT\PCSFILES\,ACADEMIC.IDX,ACADEMIC.THM,PowerPoint
	        Academic
	     PP402=-C:\POWERPNT\PCSFILES\,ANIMALS.IDX,ANIMALS.THM,PowerPoint
	        Animals
	     PP404=-C:\POWERPNT\PCSFILES\,BACKGRND.IDX,BACKGRND.THM,PowerPoint
	        Backgrounds
	     PP403=-C:\POWERPNT\PCSFILES\,BUILDING.IDX,BUILDING.THM,PowerPoint
	        Buildings
	     PP405=-C:\POWERPNT\PCSFILES\,BUSINESS.IDX,BUSINESS.THM,PowerPoint
	        Business
	     PP406=-C:\POWERPNT\PCSFILES\,CARTOONS.IDX,CARTOONS.THM,PowerPoint
	        Cartoons
	     PP407=-C:\POWERPNT\PCSFILES\,COMM.IDX,COMM.THM,PowerPoint
	        Communications
	     PP408=-C:\POWERPNT\PCSFILES\,CURRENCY.IDX,CURRENCY.THM,PowerPoint
	        Currency
	     PP409=-C:\POWERPNT\PCSFILES\,ELECTRNC.IDX,ELECTRNC.THM,PowerPoint
	        Electronics
	     PP4010=-C:\POWERPNT\PCSFILES\,ENERGY.IDX,ENERGY.THM,PowerPoint
	        Energy
	     PP4011=-C:\POWERPNT\PCSFILES\,ENTRTAIN.IDX,ENTRTAIN.THM,PowerPoint
	        Entertainment
	     PP4012=-C:\POWERPNT\PCSFILES\,FLAGS.IDX,FLAGS.THM,PowerPoint Flags
	     PP4014=-C:\POWERPNT\PCSFILES\,GESTURES.IDX,GESTURES.THM,PowerPoint
	        Gestures
	     PP4015=-C:\POWERPNT\PCSFILES\,HARDWARE.IDX,HARDWARE.THM,PowerPoint
	        Hardware
	     PP4016=-C:\POWERPNT\PCSFILES\,HOUSEHLD.IDX,HOUSEHLD.THM,PowerPoint
	        Household
	     PP4017=-C:\POWERPNT\PCSFILES\,INTLMAPS.IDX,INTLMAPS.THM,PowerPoint
	        Maps - International
	     PP4018=-C:\POWERPNT\PCSFILES\,LANDMARK.IDX,LANDMARK.THM,PowerPoint
	        Landmarks
	     PP4019=-C:\POWERPNT\PCSFILES\,PEOPLE.IDX,PEOPLE.THM,PowerPoint
	        People
	     PP4013=-C:\POWERPNT\PCSFILES\,PLANTS.IDX,PLANTS.THM,PowerPoint
	        Plants
	     PP4020=-C:\POWERPNT\PCSFILES\,SCIENCE.IDX,SCIENCE.THM,PowerPoint
	        Science & Medicine
	     PP4021=-C:\POWERPNT\PCSFILES\,SHAPES.IDX,SHAPES.THM,PowerPoint
	        Shapes
	     PP4022=-C:\POWERPNT\PCSFILES\,SIGNS.IDX,SIGNS.THM,PowerPoint Signs
	     PP4023=-C:\POWERPNT\PCSFILES\,SPORTS.IDX,SPORTS.THM,PowerPoint
	        Sports
	     PP4024=-C:\POWERPNT\PCSFILES\,TECHNOL.IDX,TECHNOL.THM,PowerPoint
	        Technology
	     PP4025=-C:\POWERPNT\PCSFILES\,TRANSPRT.IDX,TRANSPRT.THM,PowerPoint
	        Transportation
	     PP4026=-C:\POWERPNT\PCSFILES\,USMAPS.IDX,USMAPS.THM,PowerPoint
	        Maps - U.S.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q142720 CG2: Office Clip Art Is Not Available in ClipArt Gallery
	
	Additional query words: cag load add 8.0 ppt8 OFF97
	
	======================================================================
	Keywords          : kbole kbsetup kbdta kbclip 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
