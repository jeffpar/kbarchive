---
layout: page
title: "Q177038: Sounds Are Choppy or Not Played in Encarta and My Personal Tutor"
permalink: kb/177/Q177038/
---

## Q177038: Sounds Are Choppy or Not Played in Encarta and My Personal Tutor

	Article: Q177038
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0; :
	Operating System(s): 
	Keyword(s): kb3rdparty kbsound kbimukbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 99 
	- Microsoft Encarta 98 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Africana 
	- Microsoft My Personal Tutor: Sam's Hide and Seek Adventure, version 1.0 
	- Microsoft My Personal Tutor: Sky's Space Station Voyage, version 1.0 
	- Microsoft My Personal Tutor: Turru's Daring Sea Quest, version 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to play an animation with sound or a pronunciation in one of
	the Microsoft programs listed earlier in this article, you may experience one of
	the following symptoms:
	
	- Sounds may not play.
	
	- Sounds may be broken up or choppy.
	
	- Introductory sounds may be broken up or choppy.
	
	- Introductory sounds may be scratchy.
	
	- You may receive on of the following error messages:
	
	  - MMSYSTEM 320: All wave devices that can play files in this format are in
	  use. Try again when the wave device is free.
	
	  - Your sound card is in use by another application; try again when the sound
	  card is available.
	
	When you play a sound or video clip, sounds play correctly.
	
	NOTE: When you play a sound or video clip in Microsoft Encarta Africana, sounds
	may not be played.
	
	CAUSE
	=====
	
	This behavior can occur if RSX 3D Audio is installed on your computer. RSX 3D
	Audio is installed with some VRML browsers and 3D animation programs.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure RSX 3D Audio to work with the Microsoft
	programs listed earlier in this article. To do this, follow these steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Use Registry Editor to open the following registry key:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Intel\Realistic Sound Experience\2.0
	
	2. Modify the value data of the Device Type value to "wave" (without the
	  quotation marks).
	
	3. Quit Registry Editor, and then restart the computer.
	
	If these steps do not resolve the issue, remove RSX 3D Audio from your computer.
	To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Intel RSX 3D, and then click Add/Remove.
	
	4. When you are prompted to remove Intel RSX 3D, click Yes.
	
	5. Click OK, and then close Control Panel.
	
	To delete any copies of the Rsx.dll file remaining on your computer, follow these
	steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "rsx.dll" (without the quotation marks).
	
	3. Click Find Now.
	
	4. In the list of found files, right-click the Rsx.dll file, and then click
	  Delete. Repeat this step to delete any other copies of the Rsx.dll file that
	  remain on your computer.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Bookshelf 2000.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	As of February 1, 1999, Intel turns over all development, support, and licensing
	for RSX 3D to RAD Game Tools. Inc. For more information about RSX 3D, please see
	the following RAD Game Tools Web site:
	
	  http://www.radgametools.com/rsxmain.htm
	
	Additional query words: 1.00 mskids multi multi-media media mm mpt rxs stutter static garbled
	
	======================================================================
	Keywords          : kb3rdparty kbsound kbimu kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbZNotKeyword kbKidsSearch kbBookshelfSearch kbEncartaEncycSearch kbMPTSam kbMPTSky kbMPTTurru kbBookShelf1999 kbEncartaEnCyc1999 kbEncartaAfricana300 kbEncartaEnCyc1998
	Version           : WINDOWS:1.0; :
	Issue type        : kbprb
	
	=============================================================================
	
