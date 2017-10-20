---
layout: page
title: "Q86718: DOCERR: Setup Toolkit _MSTEST &quot;Bad Destination Value&quot; Error"
permalink: /kb/086/Q86718/
---

## Q86718: DOCERR: Setup Toolkit _MSTEST &quot;Bad Destination Value&quot; Error

{% raw %}

	Article: Q86718
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the _MSTEST application in the Microsoft Windows Setup Toolkit processes a
	Setup information (.INF) file, processing stops with the error message
	
	  Bad Destination value in INF File Description line.
	
	CAUSE
	=====
	
	The sixth file property of each file's description must be empty.
	
	RESOLUTION
	==========
	
	Modify the .INF file to remove any value from the sixth file property of each
	file description. Specify each file's destination directory as a parameter to
	the function that adds the file to the copy list (AddSectionFilesToCopyList,
	AddSectionKeyFileToCopyList, or AddSpecialFileToCopyList).
	
	MORE INFORMATION
	================
	
	The "Microsoft Windows Software Development Kit: Setup Toolkit for Windows"
	manual documents the "Files" section of the .INF file format on pages 118-121.
	On page 119, in Table A.1, the sixth property in a file description is called
	the destination property and is documented to contain the destination directory
	for the file. This is incorrect; the sixth field of a file entry must be blank.
	
	Additional query words: 3.10 no32bit docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
