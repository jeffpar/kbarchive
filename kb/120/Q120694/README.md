---
layout: page
title: "Q120694: Anthems or Other MIDI Files Play Quietly or Inaudibly"
permalink: /kb/120/Q120694/
---

## Q120694: Anthems or Other MIDI Files Play Quietly or Inaudibly

{% raw %}

	Article: Q120694
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1.0a,1993 edition,1994 edition,3.0,3.1,3.11
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 09-NOV-2001
	
	WINDOWS
	kbusage kbmm
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Multimedia Beethoven, versions 1.0, 1.0a 
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Encarta for Windows versions 1993 edition, 1994 edition 
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	- the operating system: Microsoft Windows versions 3.0, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MIDI files such as the Anthems may not be audible or the sound may be very quiet
	compared to digitized sound (.WAV) files played in the same program.
	
	RESOLUTION
	==========
	
	If Anthems or other MIDI files play very quietly on your computer, try to turn
	up the MIDI volume for your sound card.
	
	Almost all sound cards come with a software program to control the volume levels
	of MIDI files (synthesized), digitized waveform files, and CD Audio sound (red
	book audio). The control to make the Anthems play louder is the MIDI volume
	control. Try increasing the volume level for MIDI files and test it in Media
	Player from the Accessories group.
	
	Consult the sound card documentation for the method to modify sound volume
	levels.
	
	MORE INFORMATION
	================
	
	Steps To Test Volume Level
	--------------------------
	
	1. In Media Player, on the Device menu, click MIDI Sequencer.
	
	  NOTE: If MIDI Sequencer is not listed, the sound card or sound card software
	  is not configured correctly for MIDI files to play in Windows. Contact the
	  sound card manufacturer for more information.
	
	  Once MIDI Sequencer is selected, an Open dialog box appears with the file
	  Canyon.mid listed in the Windows directory.
	
	2. Click Canyon.mid and then click OK.
	
	3. Click the Play button. This button is marked with a triangle pointing to the
	  right.
	
	If no sound is heard, increase volume and test again.
	
	If an error message is generated, contact the sound card manufacturer.
	
	If the volume has been increased to maximum, and the sound has not improved,
	reduce the volume to two-thirds of maximum and try the steps below. If turning
	up the MIDI volume control does not have any effect on the loudness of the MIDI
	files, you may have an incorrect MIDI Mapper setting in your Control Panel. To
	check and see if you MIDI Mapper settings are correct, do the following:
	
	1. Open the Windows Control Panel, usually located in the Main group of Program
	  Manager.
	
	2. Double-click the MIDI Mapper icon.
	
	3. Click the Edit button.
	
	4. The third column in the middle of the screen contains 16 different port
	  names. They should all say the same thing, having them all set to something
	  other than [NONE].
	
	5. Once you update the MIDI Mapper, click OK. Click Yes and then click Close.
	
	6. You should now be able to exit the Control Panel and play MIDI files,
	  including the Anthems.
	
	Another possible cause of this problem is a corrupt Midimap.cfg file. You may be
	able to correct this by doing the following:
	
	1. In File Manager, on the File menu, click Search.
	
	2. In the Search For box, type "midimap.cfg" (without the quotation marks).
	
	3. In the Start From box, type "<drive>:\" (without the quotation marks),
	  where <drive> is your hard drive. For example, if you hard drive is
	  drive C, type "c:\" (without the quotation marks).
	
	4. Select Search All Subdirectories.
	
	5. Click OK. Midimap.cfg should be found in at least two places on the hard
	  drive:
	
	   - C:\Windows\System (this assumes that Windows is in C:\Windows)
	   - A directory containing your sound card software
	
	6. Make note of the directory location of the copy of Midimap.cfg that came with
	  the sound card, and exit Windows to MS-DOS.
	
	7. Copy Midimap.cfg from the sound card software directory to C:\Windows\System.
	  Click Yes if asked to overwrite the file.
	
	8. Restart Windows.
	
	Additional query words: msn_bookshelf multi media multimedia multi- WAV wave mid anthem music
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbZNotKeyword kbKidsSearch kbBookshelfSearch kbMMBeethoven100 kbMMBeethoven100a kbBookShelf1996 kbBookShelf1997 kbScholasticHuman kbScholasticSolar kbEncarta1994 kbEncarta1993 kbOSWin310 kbOSWin311 kbOSWin300 kbMSBSearch
	Version           : :1.0,1.0a,1993 edition,1994 edition,3.0,3.1,3.11
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
