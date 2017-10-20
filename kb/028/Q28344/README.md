---
layout: page
title: "Q28344: PRB: PlayMetaFile() Not as Fast as More Complex Technique"
permalink: /kb/028/Q28344/
---

## Q28344: PRB: PlayMetaFile() Not as Fast as More Complex Technique

{% raw %}

	Article: Q28344
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The PlayMetaFile() function is slower than using a loop that contains the
	EnumMetaFile() and PlayMetaFileRecord() commands.
	
	CAUSE
	=====
	
	PlayMetaFile() takes longer because it plays the metafile records, and it also
	performs several additional steps:
	
	1. Verifies that its handle parameter points to a valid metafile.
	
	2. Locks the metafile.
	
	3. Saves all objects in the device context (pens, brushes, regions, etc.).
	
	4. Plays the metafile records.
	
	5. Restores all objects in the display context. PlayMetaFile() will restore
	  default objects if other restoration fails.
	
	6. Unlocks the metafiles.
	
	7. Deletes all objects created while playing the metafile.
	
	To achieve this speed advantage, the callback function specified in
	EnumMetaFile() would call only PlayMetaFileRecord(). The actual speed of
	execution is determined by the amount of processing done in the EnumMetaFile()
	callback function.
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
