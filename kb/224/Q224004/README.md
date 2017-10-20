---
layout: page
title: "Q224004: Encarta Err Msg: There Is a Problem with Your Sound Card..."
permalink: /kb/224/Q224004/
---

## Q224004: Encarta Err Msg: There Is a Problem with Your Sound Card...

{% raw %}

	Article: Q224004
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsound kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 98 Encyclopedia for Windows 
	- Microsoft Encarta 98 DVD-ROM Reference Suite for Windows 
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Reference Suite 99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play a sound in one of the programs listed at the beginning
	of this article, the sound may not be played, or you may receive the following
	error message:
	
	  There is a problem with your sound card configuration; Refer to your sound
	  card documentation or windows help to make sure your sound card is installed
	  properly.
	
	CAUSE
	=====
	
	This behavior can occur if the audio codec that the program uses to play sounds
	is missing, damaged, or installed improperly.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method for your version of Encarta
	Encyclopedia.
	
	Encarta Encyclopedia 99 and Encarta Africana
	--------------------------------------------
	
	To resolve this issue, copy the L3codeca.acm file from the Encarta Encyclopedia
	99 or Encarta Africana Installation CD-ROM to the Windows\System folder on your
	hard disk, and then verify that the System.ini file is properly configured. To
	do this, follow these steps:
	
	1. Insert the Installation and Resources CD-ROM for the program into your CD-ROM
	  drive. Press and hold down the SHIFT key when you insert the CD-ROM to
	  prevent the CD-ROM from starting automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	  <drive>:\aref\codec
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	4. Right-click the L3codeca.acm file, and then click Copy.
	
	5. Click Start, and then click Run.
	
	6. In the Open box, type "system" (without the quotation marks), and then click
	  OK.
	
	7. On the Edit menu, click Paste. If you are prompted to overwrite the file,
	  click Yes.
	
	8. Click Start, and then click Run.
	
	9. In the Open box, type "system.ini" (without the quotation marks), and then
	  click OK.
	
	10. In the following sections in the System.ini file, verify that each of the
	  following lines are present:
	
	  [drivers]
	  wave=mmsystem.dll
	
	  [drivers32]
	  msacm.L3acm=L3codeca.acm
	
	  [mci]
	  waveaudio=mciwave.drv
	
	  NOTE: If any of these lines do not appear in the System.ini file exactly as
	  they are list above, type a semicolon (;) at the beginning of the line,
	  press END, press ENTER, and then type the line exactly as it is listed
	  above.
	
	11. On the File menu, click Exit. If you are prompted to save the changes, click
	  Yes.
	
	Encarta 98 Encyclopedia and Earlier Versions
	--------------------------------------------
	
	1. Insert the Microsoft Windows 95/98 installation CD-ROM into your CD-ROM
	  drive. Press and hold down the SHIFT key when you insert the CD-ROM to
	  prevent the CD-ROM from starting automatically.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. Click the Windows Setup tab.
	
	5. In the Components box, click Multimedia, and then click Details.
	
	6. Click to clear the Audio Compression check box, click OK, and then click
	  Apply.
	
	7. In the Components box, click Multimedia, and then click Details.
	
	8. Click to select the Audio Compression check box, click OK, and then click OK
	  again.
	
	9. Close Control Panel.
	
	If the issue continues to occur, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q177038 Sounds Are Choppy or Not Played in Encarta and My Personal Tutor
	
	MORE INFORMATION
	================
	
	Encarta Encyclopedia 99 and Encarta Africana use the Fraunhofer IIS MPEG Layer-3
	codec for sound playback. Earlier versions of Encarta Encyclopedia use the
	standard Windows audio codecs for sound playback.
	
	
	Additional query words: multi multi-media media mm ee99 eafr ee98 ee97 ee96
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsound kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch _IKkbZNotKeyword4 kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc1999 kbEncartaEnCyc1998 kbEncartaReference98 kbEncartaReference99
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
