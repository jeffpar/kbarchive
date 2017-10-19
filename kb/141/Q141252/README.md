---
layout: page
title: "Q141252: Corrupted or Symbol Font Used for Text"
permalink: /kb/141/Q141252/
---

## Q141252: Corrupted or Symbol Font Used for Text

	Article: Q141252
	Product(s): Microsoft Automap
	Version(s): 1.0,1.1,1.1a,1.1b,2.0,5.0
	Operating System(s): 
	Keyword(s): kbenv kbtlc kbimukbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Age of Empires, version 1.0 
	- Microsoft Automap Streets Plus for Windows, version 5.0 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a, 1.1b, 2.0 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a, 1.1b 
	- Microsoft Encarta 96 World Atlas for Windows 
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	- Microsoft Flight Simulator 98 
	- Microsoft NFL Fever 2000, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the programs listed at the top of this article, the
	displayed text is replaced by symbols or appears in another language.
	
	CAUSE
	=====
	
	The problem may be the result of either of the following:
	
	- Your system has a damaged font file in the Fonts folder.
	
	  -or-
	
	- Corel Draw Font Minder is enabled.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the following steps:
	
	To remove a damaged font from the Fonts folder in Windows
	---------------------------------------------------------
	
	1. Close the program listed at the top of this article.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Fonts.
	
	4. Move the Monotype Sorts font onto your Desktop using a drag-and-drop
	  operation.
	
	5. Restart the program listed at the top of this article.
	
	To disable the Font Minder feature if you are running Corel Draw
	----------------------------------------------------------------
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. On the View menu, click Options or Folder Options.
	
	3. Click the File Types tab.
	
	4. In the Registered File Types list, click True Type Font File, and then click
	  Edit.
	
	5. In the Actions box of the Edit File Types dialog box, click Open, and then
	  click Edit.
	
	6. In the Application Used To Perform Action box, delete the reference to the
	  Font Minder, and then type the following
	
	  c:\<windows>\fontview.exe
	
	  where <windows> is the path where the fontview.exe file is located.
	
	7. Click OK.
	
	MORE INFORMATION
	================
	
	If the symptoms continue after you attempt to resolve the problem using the
	steps listed above, perform the following steps:
	
	1. Close the program listed at the top of this article.
	
	2. Drag the Monotype Sorts font now located on your Desktop and drop it back
	  into the Fonts folder.
	
	  For more information about how to perform drag-and-drop operations in Windows,
	  see your Windows printed documentation or online Help.
	
	3. Move the MS Reference 1 and MS Reference 2 fonts onto your Desktop using a
	  drag-and-drop operation.
	
	4. Restart the program listed at the top of this article to test for the problem
	  behavior.
	
	If the problem still continues, try the following steps:
	
	1. Close the program listed at the top of this article.
	
	2. Drag the MS Reference 1 and MS Reference 2 fonts now located on your Desktop
	  and drop them back into the Fonts folder.
	
	3. Beginning with the first font listed in the Fonts folder, move five to ten
	  fonts at a time to the Desktop.
	
	4. Move each of the fonts back to the Fonts folder (one at a time).
	
	5. To determine if the text displays correctly, test the program by starting the
	  program listed at the top of this article after you move each font back to
	  the Fonts folder.
	
	6. If the program resumes erratic behavior, remove the last font you placed back
	  into the Fonts folder, and delete it. If the program works properly after
	  you've moved all (that is, all five to ten of the fonts that you previously
	  removed from the Fonts folder) the fonts back into the Fonts folder, you'll
	  need to continue testing until you find the corrupted file by repeating steps
	  3-5 above with another five to ten fonts until text in the program displays
	  correctly.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: multi-media mmtitles kbmm world atlas symbols font greek mono type auto map flt sim fs95 aoe setup cfs
	
	======================================================================
	Keywords          : kbenv kbtlc kbimu kbfaq
	Technology        : kbHomeProdSearch kbAOESearch kbZNotKeyword kbNFLFever2000 kbNFLSearch kbZNotKeyword2 kbBookshelfSearch kbSimSearch kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim98 kbFlightSim95 kbCreativeWriter100 kbCreativeWriter200 kbAutomapStreetsPlus500 kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbCreativeWriter110 kbCreativeWriter110a kbCreativeWriter110b kbFineArtist100 kbFineArtist110 kbFineArtist110a kbFineArtist110b _IKkbbogus kbHomeMMsearch kbAOE kbAutomapSearch kbEncartaSearch kbGamesSearch kbFlightSimSearch kbEncartaWorldAtlas1996
	Version           : :1.0,1.1,1.1a,1.1b,2.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
