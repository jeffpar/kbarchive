---
layout: page
title: "Q177517: Removing Windows Multimedia Components Does Not Remove All Files"
permalink: kb/177/Q177517/
---

## Q177517: Removing Windows Multimedia Components Does Not Remove All Files

	Article: Q177517
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Add/Remove Programs tool in Control Panel to remove all of the
	Windows multimedia components, some .wav (Windows sound) files may not be
	removed from Windows\Media folder.
	
	RESOLUTION
	==========
	
	To work around this behavior, manually remove the .wav files located in the
	Windows\Media folder. To do so, follow these steps:
	
	NOTE: If you have saved any .wav files in the Windows\Media folder, you should
	make a backup copy of these files before you proceed.
	
	1. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	2. At the command prompt, type the following commands, pressing ENTER after each
	  command:
	
	  " cd\windows\media
	  del *.wav " (without the quotation marks)
	
	  NOTE: Press Y when you are prompted to delete the files.
	
	3. Quit the MS-DOS session by typing "exit" (without the quotation marks) at the
	  command prompt, and then pressing ENTER.
	
	MORE INFORMATION
	================
	
	When you follow the above steps, only the .wav files located in the
	Windows\Media folder are deleted. Files with an extension other than .wav are
	not deleted.
	
	The .wav files that remain in the Windows\Media folder after you remove Windows
	multimedia components differ, depending on the version of Windows that is
	installed on your computer and the multimedia components that are installed. The
	.wav files that remain in the Windows\Media folder may include some or all of
	the following files:
	
	Windows 95 Retail Version
	-------------------------
	
	Jungle Windows Exit.wav
	Musica Windows Exit.wav
	Robotz Windows Exit.wav
	The Microsoft Sound.wav
	Utopia Windows Exit.wav
	
	Windows 95 OEM Service Release 2 (OSR2)
	---------------------------------------
	
	Jungle Asterisk.wav
	Jungle Close.wav
	Jungle Default.wav
	Jungle Exclamation.wav
	Jungle Maximize.wav
	Jungle Menu Command.wav
	Jungle Menu Popup.wav
	Jungle Minimize.wav
	Jungle Open.wav
	Jungle Question.wav
	Jungle Recycle.wav
	Jungle Restore Down.wav
	Jungle Windows Exit.wav
	Jungle Windows Start.wav
	Musica Asterisk.wav
	Musica Close.wav
	Musica Default.wav
	Musica Exclamation.wav
	Musica Maximize.wav
	Musica Menu Command.wav
	Musica Menu Popup.wav
	Musica Minimize.wav
	Musica Open.wav
	Musica Question.wav
	Musica Recycle.wav
	Musica Restore Down.wav
	Musica Windows Exit.wav
	Musica Windows Start.wav
	Robotz Asterisk.wav
	Robotz Close.wav
	Robotz Default.wav
	Robotz Exclamation.wav
	Robotz Maximize.wav
	Robotz Menu Command.wav
	Robotz Menu Popup.wav
	Robotz Minimize.wav
	Robotz Open.wav
	Robotz Question.wav
	Robotz Recycle.wav
	Robotz Restore Down.wav
	Robotz Windows Exit.wav
	Robotz Windows Start.wav
	The Microsoft Sound.wav
	Utopia Asterisk.wav
	Utopia Close.wav
	Utopia Critical Stop.wav
	Utopia Default.wav
	Utopia Error.wav
	Utopia Exclamation.wav
	Utopia Maximize.wav
	Utopia Menu Command.wav
	Utopia Menu Popup.wav
	Utopia Minimize.wav
	Utopia Open.wav
	Utopia Question.wav
	Utopia Recycle.wav
	Utopia Restore Down.wav
	Utopia Restore Up.wav
	Utopia Windows Exit.wav
	Utopia Windows Start.wav
	
	Additional query words: wave multi media
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	
	=============================================================================
	
