---
layout: page
title: "Q81871: Controlling the CD Using mciSendCommand()"
permalink: /kb/081/Q81871/
---

## Q81871: Controlling the CD Using mciSendCommand()

{% raw %}

	Article: Q81871
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbmm kbsample kb16bitonly kbOSWin310
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Playcd.exe is a file in the Microsoft Download Center that demonstrates how an
	application developed for Microsoft Windows can play a music CD (compact disk)
	in a CD-ROM (compact disk read-only memory) drive. Playcd.exe has two parts: the
	PLAYCD application and the PLYCD dynamic-link library (DLL).
	
	The Playcd.exe application does very little by itself. It calls functions in the
	PLYCD DLL to play the CD.
	
	The PLYCD DLL contains code to control the CD-ROM player. PLYCD includes
	functions to play the CD, pause, move forward and backward by tracks, determine
	the position within the CD, and eject the CD from the drive. PLYCD interacts
	with the Media Control Interface (MCI) using the mciSendCommand() API.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Playcd.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: PLAYCD
	
	======================================================================
	Keywords          : kbfile kbmm kbsample kb16bitonly kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
