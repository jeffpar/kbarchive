---
layout: page
title: "Q149775: World Atlas: Program Hangs When You Click Statistic Button"
permalink: /kb/149/Q149775/
---

## Q149775: World Atlas: Program Hangs When You Click Statistic Button

	Article: Q149775
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 06-MAY-1999
	
	1996
	WINDOWS
	kbmm kbenv kbsetup kbhw kbprb kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 World Atlas for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Encarta 1996 World Atlas, when you click the Statistics (middle) button on
	the Locator, the program appears to stop responding (hang). You are able to move
	your mouse cursor around the screen, but clicking the mouse buttons does
	nothing, and you cannot activate any of the program menus.
	
	If you press and hold down the CTRL key while you press the ALT and DEL keys
	(CTRL+ALT+DELETE), the Close Program window opens. Encarta World Atlas is listed
	as not responding.
	
	RESOLUTION
	==========
	
	Improperly configured CD-ROM caching can cause this problem. To resolve the
	problem, use the steps below to turn off CD-ROM drive caching:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the System icon.
	
	3. On the Performance tab, click the File System button.
	
	4. Click the CD-ROM tab.
	
	5. In the Supplemental Cache Size: area of the File System Properties window,
	  drag the slider all the way to the Small setting.
	
	6. In the Optimize Access Pattern For: area of the File System Properties
	  window, select No Read-Ahead.
	
	7. Click Apply, click OK, and then click Close. If you are prompted to restart
	  Windows, click Yes.
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q140583 How To Configure CD-ROM Caching For Windows 95
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the 1996 edition of Encarta
	World Atlas for Windows.
	
	Additional query words: multimedia multi-media mmtitles kbmm crash compact disc sensor hanging hanged crashed crashes freeze frozen locked-up hang bombed down
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaWorldAtlas1996
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
