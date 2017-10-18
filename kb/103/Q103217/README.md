---
layout: page
title: "Q103217: SAMPLE: Synchronizing Applications with CD Audio"
permalink: kb/103/Q103217/
---

## Q103217: SAMPLE: Synchronizing Applications with CD Audio

	Article: Q103217
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbmm kbsample kb16bitonly kbOSWin310
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This technical article describes a simple technique that uses the Media Control
	Interface (MCI) to synchronize events in a Microsoft Windows-based application
	with audio from a CD. The following topics are covered:
	
	- MCI message interface
	
	- Audio CD time formats
	
	- Owner-draw graphical buttons
	
	- Extending the idea to other time sources
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Singacd.exe
	  (http://download.microsoft.com/download/platformsdk/sample62/3.1/W31/EN-US/SINGACD.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Four pieces of sample code included with this article create four applications:
	PLAYACD, a simple CD controller; SINGACD, a sing-along application that shows
	the lyrics to a CD as it plays; TIMEACD, an authoring tool to create the lyric
	files used by the sing-along application; and SINGAWAV, an application that
	demonstrates synchronizing to a waveform.
	
	The SINGACD sample application shows how to use the media control interface (MCI)
	to synchronize an application with CD audio in Microsoft(R) Windows(TM).
	
	SINGACD displays a moving ball above the lyrics of a song. The ball moves in time
	with the music and (ideally) stays above the current word in the song. Achieving
	this synchronization involves a two-part process: The first part involves
	displaying the entire line of text at the right time; the second part involves
	placing the ball over the correct word in the line.
	
	SINGACD has the following components:
	
	- The PLAYACD application is a very simple controller for the MCI CD audio
	  device.
	
	- The TIMEACD application is a tool for authoring lyric files.
	
	- The SINGAWAV sample is a modified version of SINGACD that opens and plays a
	  specific wave file and lyric file.
	
	Additional query words: kbfile softlib SINGACD.EXE
	
	======================================================================
	Keywords          : kbfile kbmm kbsample kb16bitonly kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
