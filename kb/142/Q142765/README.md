---
layout: page
title: "Q142765: Cdplayfx.exe - Form Shows How to Play Audio CDs"
permalink: /kb/142/Q142765/
---

## Q142765: Cdplayfx.exe - Form Shows How to Play Audio CDs

	Article: Q142765
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbmm kbsample kbvfp300 kbvfp500 kbvfp600
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Cdplayfx.exe is a sample containing a Visual FoxPro form that shows, by example,
	how to use some of the multimedia functionality available on the Windows
	platform via DLL calls.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Cdplayfx.exe
	  (http://download.microsoft.com/download/fox26win/Utility/1/WIN98/EN-US/Cdplayfx.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The following files are included in the file Cdplayfx.exe:
	
	  Eject.bmp
	  Next.bmp
	  Play.bmp
	  Prev.bmp
	  Stop.bmp
	  Cdplay.scx
	  Cdplay.sct
	  Readme.txt
	
	The form CDPLAY is an example of how you can use DECLARE - DLL to register a
	Windows API function that allows you to control an audio CD from within Visual
	FoxPro. The Readme.txt file that is included explains the calls that are made
	and the functionality of the objects on the form.
	
	REFERENCES
	==========
	
	You can find more information on command strings that you can send by using
	mciSendString() in the following resources:
	
	- "Multimedia Programmer's Reference," included with the Windows 3.1 Software
	  Development Kit (SDK).
	
	- "Multimedia Programmer's Guide," included with the Windows 3.1 SDK.
	
	- MCISTRWH.HLP, a Windows Help file included with Microsoft Visual C++,
	  Professional Edition, version 1.X.
	
	Additional query words: cd-rom compact disc disk play
	
	======================================================================
	Keywords          : kbfile kbmm kbsample kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
