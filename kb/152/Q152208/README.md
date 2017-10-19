---
layout: page
title: "Q152208: Julia Child Err Msg: Insufficient Memory to Function"
permalink: /kb/152/Q152208/
---

## Q152208: Julia Child Err Msg: Insufficient Memory to Function

	Article: Q152208
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmmkbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Julia Child: Home Cooking with Master Chefs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click any of the buttons at the bottom of the main screen (Contents,
	Chefs, Recipes, Lessons, Julia's Kitchen, Index, Back, or Options) in Julia
	Child , you receive the following error message:
	
	  Insufficient memory to function properly. Please close other applications or
	  documents.
	
	CAUSE
	=====
	
	The error message may be caused by a missing entry in the [mci extensions]
	section of the Win.ini file.
	
	RESOLUTION
	==========
	
	Verify that an [MCI Extensions] section exists in the Win.ini file. Then make
	sure the section contains the correct entries. For example, the following
	entries are required for Julia Child to run properly:
	
	      [MCI Extensions]
	      avi=AVIVideo
	      wav=waveaudio
	
	If the above entries do not exist or are incorrect, make the necessary changes
	using a text editor such as Microsoft Notepad.
	
	For more information about how to accomplish these tasks in Windows, see your
	Windows printed documentation or online Help.
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm launch launching start error win31
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmm kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbJuliaChild
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
