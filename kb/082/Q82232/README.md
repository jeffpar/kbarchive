---
layout: page
title: "Q82232: CopyMetaFile() Creates Incorrectly Sized Destination"
permalink: /kb/082/Q82232/
---

## Q82232: CopyMetaFile() Creates Incorrectly Sized Destination

{% raw %}

	Article: Q82232
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an application calls CopyMetaFile() to create a copy of a metafile, the
	size of the metafile is listed incorrectly in the destination metafile. The
	destination size is three words larger than the source metafile.
	
	MORE INFORMATION
	================
	
	The debugging version of Windows 3.1 contains code to validate the size of a
	memory metafile. This code walks through every record in a metafile and computes
	the total size. The code compares the computed size with the size listed in the
	header. If the sizes do not match, the debugging version of Windows displays the
	following message:
	
	  Metafile has incorrect size
	
	In most cases, this message indicates a corrupted or incorrectly formed metafile.
	However, this message is also generated as a result of copying an existing
	metafile due to the problem detailed above.
	
	NOTE: By itself, the "metafile has incorrect size" message is harmless and can be
	safely ignored. However, under certain circumstances, the debugging version of
	Windows will also display the following message:
	
	  Metafile is not terminated properly
	
	This message indicates a more serious problem because, as the validation code
	walked through the array of metafile records, it did not locate a terminator
	record. An attempt to play an improperly terminated metafile usually results in
	a General Protection Fault (GP-Fault). To prevent this fault, GDI aborts the
	call to PlayMetaFile and returns failure.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
