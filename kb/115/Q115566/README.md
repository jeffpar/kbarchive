---
layout: page
title: "Q115566: Open Multiple AVIs, Use of MCI_PUT Command"
permalink: /kb/115/Q115566/
---

## Q115566: Open Multiple AVIs, Use of MCI_PUT Command

	Article: Q115566
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbmm kbsample kb16bitonly kbOSWin310 kbOSWin300
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The AVIWIN sample demonstrates how you can open and close AVI files in the
	background while playing another AVI file. This sample also demonstrates the
	MCI_WINDOW and MCI_PUT commands.
	
	NOTE: The Open command takes 1 to 2 seconds to complete. On slower machines, the
	playback of one AVI is slightly disrupted if you try to open another AVI file in
	the background. This disruption might cause some video frames to be dropped or
	skipped.
	
	When you run the AVIWIN.EXE file, remember that you can only play an AVI if you
	have already opened it. The menu items are always enabled, even when the command
	should not be run. For example, the Play menu commands are always enabled, even
	when the MCI_PLAY command would fail. If you try to play an AVI before you open
	it, you get the following message box:
	
	  Reminder: Did you Open the first/second AVI? [Yes] [No]
	
	If you click "Yes," you see the error message that returned from the
	mciSendCommand() function. If you click "No," the focus returns to the
	AVIWIN.EXE file, and you are then able to open an AVI file.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Aviwin.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	This sample was written in Microsoft Visual C++ version 1.5. The source files of
	the AVIWIN are listed below and are contained in the archive file AVIWIN.EXE.
	
	  ABOUT.C
	  AVIWIN.C
	  AVIWIN.DEF
	  AVIWIN.H
	  AVIWIN.MAK
	  AVIWIN.RC
	  DIGITALV.H
	  README.TXT
	  RESOURCE.H
	
	Additional query words: MCI_PUT MCI_WINDOW softlib AVIWIN.EXE
	
	======================================================================
	Keywords          : kbfile kbmm kbsample kb16bitonly kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
