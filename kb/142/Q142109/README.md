---
layout: page
title: "Q142109: Writer: ErrMsg: Integer Divide by Zero with STB Vision"
permalink: kb/142/Q142109/
---

## Q142109: Writer: ErrMsg: Integer Divide by Zero with STB Vision

	Article: Q142109
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1 
	- the operating system: Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Creative Writer on a Windows 3.x system using an STB Vision Display
	Meta driver from Gateway 2000, you may have trouble printing cards to a
	Hewlett-Packard (HP) DeskJet 500 series printer. You may receive the following
	error message:
	
	  Application Error: Integer Divide by Zero.
	
	This occurs with version 1.24 of the STB Vision Display Meta driver.
	
	RESOLUTION
	==========
	
	To resolve the problem, use the following steps:
	
	1. In Program Manager, go to the Main group, then open Control Panel.
	
	2. Run the Vision Control Panel.
	
	3. Click Control Display
	
	4. Change resolution to 16 colors.
	
	5. Click OK
	
	6. Click Restart Windows.
	
	7. Return to Creative Writer and print the card.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q115071 Writer: Difficulty Printing Card to HP DeskJet
	
	  NOTE: If you have programs which require 256 colors, repeat the above
	  process, except change the number of colors to 256. Each time you want to
	  print cards in Creative Writer, you will need to follow the above steps to
	  change the colors back to 16, and so on.
	
	MORE INFORMATION
	================
	
	These steps are valid for version 1.24 of the STB Vision Display Meta driver
	dated 1/3/95 and later. (The version can be found in Vision Control Panel,
	Control Display, Help, About.)
	
	
	Additional query words: kids mskids artist maggie max writer mczee hangs printing prints card freezes crashes hp hewlett packard desk jet hpdj hpdeskjet simply the best kbmm homekids homekid error message err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeProdSearch kbZNotKeyword6 kbCreativeWriter100 kbCreativeWriter110 kbOSWin310
	Version           : WINDOWS:1.0,1.1,3.1
	
	=============================================================================
	
