---
layout: page
title: "Q131199: STRAVINSKY: ^K Character Displayed in Corner of Screen"
permalink: kb/131/Q131199/
---

## Q131199: STRAVINSKY: ^K Character Displayed in Corner of Screen

	Article: Q131199
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the lower right corner of the Stravinsky screen there is a ^K (K with an
	accent above it) character where there should be an arrow (triangle pointing
	right). Clicking the ^K character advances you to the next screen, just as
	clicking the arrow would.
	
	CAUSE
	=====
	
	The program is using the ANSI 0157 character of the V1 Lucida Sans font
	(v1sp.fon) for this character. If v1sp.fon is not the correct version or is
	corrupt, you can get the wrong character for 0157, such as the ^K.
	
	RESOLUTION
	==========
	
	To correct the problem, remove the V1 Lucida Sans font and reinstall it from the
	\STRAV\MSSTP\SHARED directory of the Stravinsky CD. Make sure that when you
	remove the font you delete its font file (v1sp.fon) from the hard disk.
	
	Steps to remove the font are discussed below for Windows 3.x and Windows 95. Use
	the appropriate steps for your operating system. For more information about how
	to perform this task in Windows, see your Windows printed documentation or
	online Help.
	
	For Windows 3.x
	---------------
	
	1. In Program Manager, double-click the Control Panel, usually located in the
	  Main program group.
	
	2. Double-click the Fonts icon.
	
	3. Select the V1 Lucida Sans font and choose Remove.
	
	4. Select Delete Font File From Disk, and choose Yes.
	
	5. Choose the Add button.
	
	6. Select your CD-ROM drive and the \strav\msstp\shared directory.
	
	  The V1 Lucida Sans font should then be listed
	
	7. Select V1 Lucida Sans. Make sure the Copy Fonts To Windows Directory box is
	  checked. Choose OK.
	
	For Windows 95
	--------------
	
	1. Click Start, point to Settings and Click Control Panel.
	
	2. Double-click the Fonts folder.
	
	3. Click V1 Lucida Sans, and on the File menu, choose Delete.
	
	4. When asked if want to delete the font, click Yes.
	
	5. On the Fonts File menu, click Install New Font.
	
	6. Click your CD-ROM drive. Click the \strav\msstp\shared directory. The V1
	  Lucida Sans font should then be listed
	
	7. Click V1 Lucida Sans. Make sure the Copy Fonts To Windows Folder box is
	  checked and choose OK.
	
	Additional query words: mmtitles kbmm international symbol accent composer title
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMStravinsky
	Version           : WINDOWS:1.0
	
	=============================================================================
	
