---
layout: page
title: "Q97824: Embedding Sound Files in Excel 3.x"
permalink: /kb/097/Q97824/
---

## Q97824: Embedding Sound Files in Excel 3.x

	Article: Q97824
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.x of Microsoft Excel for Windows is one of the first applications to
	use OLE. It predates much of the OLE functionality described in the current
	specifications used by Microsoft Windows operating system version 3.1.
	
	Because Excel 3.x is older than the current OLE specification, it behaves
	differently than other, more recent, OLE client applications.
	
	In Excel 3.x, you cannot play embedded objects; you can only edit them. Multiverb
	objects, such as Sound or Note-It objects, cannot be played or run. If you try
	to play an embedded object by double-clicking it, the respective editing program
	comes up instead.
	
	For example, if you run Quick Recorder and embed a .WAV file, the icon will be
	displayed. However, when you double-click to play the file, the Quick Recorder
	will run instead.
	
	Excel 4.0 fully implements the OLE 1.0 specification.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
