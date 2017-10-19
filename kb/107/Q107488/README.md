---
layout: page
title: "Q107488: Encarta: Animations Fail with ATI Mach 32 and Mach 8 Cards"
permalink: /kb/107/Q107488/
---

## Q107488: Encarta: Animations Fail with ATI Mach 32 and Mach 8 Cards

	Article: Q107488
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 editions
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to play animations in Encarta if you are using an ATI Mach
	32 or Mach 8 video card. This problem occurs if the Device Bitmaps option is set
	to On (it is on by default).
	
	Microsoft has confirmed this to be a problem in Encarta, 1994 edition. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	NOTE: This problem has been found to occur with builds 1.5(59) and 2.0 of the ATI
	Mach 32 and Mach 8 video drivers. This problem has not been reproduced in
	Windows 95.
	
	For more information on ATI Mach video cards and drivers, contact the technical
	support department of ATI Technologies Inc. at (905) 882-2626.
	
	RESOLUTION
	==========
	
	To eliminate this problem, turn off the Device Bitmaps setting. To do this,
	follow these steps:
	
	1. Start the Mach FlexDesk Control Panel.
	
	  NOTE: The icon for this control panel is usually located in the Mach Utilities
	  program group in Program Manager. If you can't find the icon, you can create
	  a new one, or launch the utility using the Run option in the Program Manager
	  File menu. The filename of the utility is MXXPANEL.EXE, and it is located in
	  the Windows directory.
	
	2. Choose Advanced.
	
	3. Set Device Bitmaps to Off.
	
	4. Choose OK to close the Advanced Settings dialog box.
	
	5. Choose OK to close the FlexDesk Control Panel.
	
	6. Restart Windows to make the changes take effect.
	
	You should now be able to run Encarta animations successfully.
	
	MORE INFORMATION
	================
	
	When you are installing Encarta, if Setup detects an ATI Mach 8 or Mach 32 card,
	the following message appears:
	
	  Setup has detected your ATI Mach Video card. After Setup is complete, please
	  refer to the README.WRI file for important information on using this card
	  with Encarta.
	
	README.WRI contains the information covered in this article.
	
	Additional query words: 1994 multi media multimedia multi-media video cartoon action
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1994
	Version           : :1994 editions
	
	=============================================================================
	
