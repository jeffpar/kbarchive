---
layout: page
title: "Q188660: PRB: Troubleshooting Active Movie Problems in Mastering Series"
permalink: /kb/188/Q188660/
---

## Q188660: PRB: Troubleshooting Active Movie Problems in Mastering Series

	Article: Q188660
	Product(s): Microsoft Mastering Series
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Mastering Products, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article provides some basic troubleshooting methods for movie clip problems
	in Microsoft Mastering Series applications. It focuses on the following issues:
	
	- You cannot view movie clips.
	
	- Movies stop after two seconds.
	
	- The video plays well, but there is no audio.
	
	RESOLUTION
	==========
	
	Try one or all of the following methods to correct these problems:
	
	- Find and manually delete Quartz.dll, AMovie.ocx, ActMovie.exe from your local
	  machine. Reinstall Active Movie from the Mastering CD by starting AMovie.exe.
	
	- See if the .avi file that you are trying to view is associated with Active
	  Movie. For additional information, click the article number below to view the
	  article in the Microsoft Knowledge Base:
	
	  Q176221 ActiveMovie May Not Play .avi, .mov, or .mpg Files
	
	- Install the new updated Marissa.dll. For additional information, click the
	  article number below to view the article in the Microsoft Knowledge Base:
	
	  Q188445 PRB: Marisa.dll Causes Movie Clip Errors in Mastering Series
	
	- Uninstall and reinstall the multimedia components. This replaces any
	  corrupted or damaged video and audio codecs. You must have the Windows or
	  Windows NT CD so you can reinstall the components. Do the following:
	
	  1. In the Control Panel, double-click the Add/Remove Programs icon.
	
	  2. Click the Windows Setup tab.
	
	  3. Select Multimedia, and click Details.
	
	  4. Select the Video Compression check box. If it is already selected, clear
	     the check box to remove it and then go back through these steps to
	     reinstall it.
	
	  5. Click OK, and click OK again.
	
	- Install Microsoft DirectX, which has the latest Active Movie 2.0 components.
	  Microsoft DirectX is available for download from the Microsoft site:
	
	  http://msdn.microsoft.com/directx/ (http://msdn.microsoft.com/directx/)
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q142179 Troubleshooting .avi File Playback Problems in Windows 95
	
	  Q176221 ActiveMovie May Not Play .avi, .mov, or .mpg Files
	
	  Q141801 Troubleshooting Audio Codecs in Windows 95
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
