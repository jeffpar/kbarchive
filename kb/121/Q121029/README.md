---
layout: page
title: "Q121029: Copying Audio Does Not Produce Sound in Destination"
permalink: /kb/121/Q121029/
---

## Q121029: Copying Audio Does Not Produce Sound in Destination

{% raw %}

	Article: Q121029
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:; :'96-'97,1993 edition,1994 edition,1995 edition
	Operating System(s): 
	Keyword(s): kbenv kbmm kbole kbsound kbimu
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf '96-'97 for Windows 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy a sound clip from an article in either Bookshelf or Encarta, paste
	the sound clip into another program, and then attempt to play the sound clip in
	that program, you may receive an error message about problems with the
	object/link, or you may not be able to play the sound clip.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions are true:
	
	- The entry for Sound Recorder in the Windows Registry is missing or damaged.
	
	- Sound Recorder is not installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that Sound Recorder is properly installed. To do
	so, use the appropriate method for your version of Microsoft Windows.
	
	Windows 98
	----------
	
	To verify that Sound Recorder is installed in Windows 98, follow these steps:
	
	1. Click Start button, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Windows Setup tab, click Multimedia, and then click Details.
	
	4. Click the Sound Recorder check box to clear it, and click OK. If the Sound
	  Recorder check box is already cleared, proceed to step 7.
	
	5. Click Apply.
	
	6. On the Windows Setup tab, click Multimedia, and then click Details.
	
	7. Click the Sound Recorder check box to select it, and click OK.
	
	8. Follow the instructions on the screen to finish installing Sound Recorder.
	
	9. To register Sound Recorder information in the Windows registry, click Start,
	  point to Programs, point to Accessories, point to Entertainment, and then
	  click Sound Recorder.
	
	If the issue continues to occur, reinstall Windows 98.
	
	Windows 95
	----------
	
	To verify that Sound Recorder is installed in Windows 95, follow these steps:
	
	1. Click Start button, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Windows Setup tab, click Multimedia, and then click Details.
	
	4. Click the Sound Recorder check box to clear it, and click OK. If the Sound
	  Recorder check box is already cleared, proceed to step 7.
	
	5. Click Apply.
	
	6. On the Windows Setup tab, click Multimedia, and then click Details.
	
	7. Click the Sound Recorder check box to select it, and click OK.
	
	8. Follow the instructions on the screen to finish installing Sound Recorder.
	
	9. To register Sound Recorder information in the Windows registry, click Start,
	  point to Programs, point to Accessories, point to Multimedia, and then click
	  Sound Recorder.
	
	If the issue continues to occur, reinstall Windows 95 and select the option to
	replace missing or damaged files.
	
	Windows 3.1x
	------------
	
	1. In the Accessories group in Program Manager, verify that Sound Recorder is
	  installed.
	
	2. To register Sound Recorder information in the Windows registry, double-click
	  the Sound Recorder icon.
	
	3. If the issue continues to occur, reinstall Encarta 95.
	
	  NOTE: Encarta 1995 Setup examines the Reg.dat file and attempts to Repair any
	  invalid Sound Recorder entries.
	
	4. If the issue continues to occur, rebuild the Reg.dat file.
	
	For additional information about how to rebuild the Reg.dat file in Windows 3.1x,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q80393 How to Rebuild the Default Windows REG.DAT File
	
	
	MORE INFORMATION
	================
	
	OLE-compatible programs use Sound Recorder to play sound clips. If the registry
	entries for Sound Recorder are missing or damaged, you may experience problems
	when you attempt to play a sound clip in an OLE- compatible program.
	
	Additional query words: 1995 multi media multimedia multi-media err msg doc cannot can't won't snd
	
	======================================================================
	Keywords          : kbenv kbmm kbole kbsound kbimu 
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbEncartaEnCyc1996 kbEncartaEnCyc1994 kbEncartaEnCyc1995Mac
	Version           : WINDOWS:; :'96-'97,1993 edition,1994 edition,1995 edition
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
