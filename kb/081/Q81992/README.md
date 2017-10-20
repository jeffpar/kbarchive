---
layout: page
title: "Q81992: PRB: Two Builds of Same Windows Help File Not Identical"
permalink: /kb/081/Q81992/
---

## Q81992: PRB: Two Builds of Same Windows Help File Not Identical

{% raw %}

	Article: Q81992
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Help (.HLP) files generated from the same RTF source with the same version of
	the Windows Help Compiler are not identical. Even though the files work
	identically, a binary comparison of the file reveals differences.
	
	CAUSE
	=====
	
	Each Help file contains a time stamp indicating the compilation time, and
	contains buffers that have some uninitialized data.
	
	STATUS
	======
	
	This behavior results from design decisions made regarding Windows Help and is
	unlikely to change for the foreseeable future.
	
	Additional query words: 3.00 3.10 HC HC.EXE
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
