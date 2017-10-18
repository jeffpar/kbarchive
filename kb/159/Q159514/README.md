---
layout: page
title: "Q159514: Encarta 97: Error Messages When Launching Collages"
permalink: kb/159/Q159514/
---

## Q159514: Encarta 97: Error Messages When Launching Collages

	Article: Q159514
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbhowto
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start a collage in the Deluxe edition of Microsoft Encarta
	Encyclopedia 1997 edition, you receive the following error message:
	
	  Encarta
	
	  Problem finding or loading files. Please close other programs and try again.
	  If the problem persists, run Encarta Setup again. Encarta will now exit.
	
	RESOLUTION
	==========
	
	If you just finished installing Encarta, try restarting Windows and then try to
	start a Collage.
	
	  - or -
	
	Remove and reinstall the video codecs from Add/Remove Programs feature located in
	the Control Panel. Verify that all the necessary program files are in place.
	
	Removing and Reinstalling Video Codecs
	--------------------------------------
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click the Windows Setup tab.
	
	4. In the Components list box, scroll to and click Multimedia.
	
	5. Click Details.
	
	6. If the Video Compression option is selected, it may not be installed
	  properly, and needs to be removed. To remove it, do the following:
	  a. Clear the check box for this option, and then click OK.
	
	  b. Click OK again to complete the removal.
	
	  c. Repeat steps 2-5 to return to the Video Compression option in Add/Remove
	     Programs.
	
	7. Make sure the Video Compression box is selected.
	
	8. Double-click the Multimedia component. Click OK, then click OK again. Follow
	  the on-screen instructions.
	
	Verifying the Files
	-------------------
	
	Make sure the following files exist on your hard drive, and that they are located
	in the specified location and are not marked Read-Only or Hidden.
	
	File                 Location
	----                 ---------
	
	Msvidc32.dll         C:\Windows\System
	Am16.dll             C:\Windows\System
	Amf16.dll            C:\Windows\System
	Msvcrt40.dll         C:\Windows\System
	Enctitle.dll         C:\Program Files\Microsoft Reference\Encarta
	                    Encyclopedia
	E97spam.ini          C:\Program Files\Microsoft Reference\Encarta
	                    Encyclopedia
	
	For more information about how to accomplish these tasks in Windows, see your
	Windows printed documentation or online Help.
	
	MORE INFORMATION
	================
	
	A Collage is a scrolling arrangement of media that acts as a "front-end" to a
	cross-section of Encarta content.
	
	The selections of a Collage's content links are driven by its topic. Examples of
	Collage topics are "The Birth of Television", "The Coral Reef", or "Famous
	American Speeches".
	
	NOTE: The Collage feature is only available in Encarta 1997 Deluxe edition and
	requires Windows 95 or Windows NT 4.0
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles kbmm Collage Encarta errmsg error message
	
	======================================================================
	Keywords          : kbhowto 
	Technology        : kbOSWin95 kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997Del
	Version           : WINDOWS:95
	
	=============================================================================
	
