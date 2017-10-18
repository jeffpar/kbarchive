---
layout: page
title: "Q143665: PPT7: Animation Player for ActiveX Available"
permalink: kb/143/Q143665/
---

## Q143665: PPT7: Animation Player for ActiveX Available

	Article: Q143665
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbappnote kbfile kbprint kbdta kbPrinting kbGraphxLink
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	You can use the Microsoft PowerPoint Animation Player for ActiveX to view
	PowerPoint presentations complete with animation and sound effects in a 32-bit
	Web browser. This player has two parts: the Player (Axplayer.exe) and the
	Publisher (Axpub.exe).
	
	If you install the Player, you will be able to view the animation in a PowerPoint
	presentation posted on the Web. If you install the Publisher, you can also
	create your own animated presentations for the Web using PowerPoint 95.
	
	The files Axpub.exe and Axplayer.exe are now available from Microsoft. For
	information about obtaining these files, see the "To Obtain These Files" section
	of this article.
	
	Description of Axplayer.exe
	---------------------------
	
	If you choose to download just the Animation Player, you get a self-extracting
	Setup program named Axplayer.exe. Double-click this file to install the
	following files to your \Program Files\Common Files\ActiveX Animation Player
	folder:
	
	  Readme.txt       1KB
	  Surge.exe    1,271KB
	  Surgprox.dll    37KB
	  Uninst.exe      56KB
	
	If you have Netscape Navigator installed, the following file is installed to the
	Netscape plugins folder:
	
	  Npsurge.dll     27KB
	
	Description of Axpub.exe
	------------------------
	
	Axpub.exe is a self-extracting file that runs a Setup program. When you
	double-click this file, all of the files included with Axplayer.exe are
	installed as well as these three files:
	
	  Surge.ppa       96KB
	  Surgeui.dll     60KB
	  Template.htm     1KB
	
	If you do not have PowerPoint 95 installed on your system, Axpub.exe will only
	install the player files.
	
	Registry Entries
	----------------
	
	PowerPoint depends on registration entries to find the Animation Player files in
	order to provide you with the ability to convert PowerPoint slides to Web pages.
	The entries are just like what you find for other add-ins which is how
	PowerPoint knows to add this feature to the File menu.
	
	You'll find a key in the registry under HKEY_CURRENT_USER that tells the location
	of the surge.ppa file and the initial function within that file.
	
	  \Software\Microsoft\Office\PowerPoint\7.0\Addins\Surge
	
	     Initfunction  DeNileMain
	     Path          C:\Program Files\Common Files\ActiveX Animation
	                        Player\surge.ppa
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	TO OBTAIN THESE FILES
	---------------------
	
	To obtain Axpub.exe:
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Axpub.exe now
	  (http://download.microsoft.com/download/powerpoint95/Utility/1/WIN98/EN-US/axpub.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	To Obtain Axplayer.exe:
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Axplayer.exe now
	  (http://download.microsoft.com/download/office97pro/utility4/1/WIN98/EN-US/AXPLAYER.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: kbfile axpub axplayer exe
	
	======================================================================
	Keywords          : kbappnote kbfile kbprint kbdta kbPrinting kbGraphxLink 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : :7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
