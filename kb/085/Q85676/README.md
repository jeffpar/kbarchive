---
layout: page
title: "Q85676: Windows Help and Help Compiler Capacity Limits"
permalink: /kb/085/Q85676/
---

## Q85676: Windows Help and Help Compiler Capacity Limits

{% raw %}

	Article: Q85676
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following lists the limits of the Windows Help application, version 3.1.
	These limits are subject to change in future versions.
	
	Paragraph size(1): approximately 32,000 bytes
	Topic title string length: 127 characters
	Topics per RTF source file: approximately 32,700
	Topics per help file: 42,000,000
	By-reference bitmaps per help file : 32,767
	Help file size: approximately 2,157,000,000 bytes (2 gigabytes) Topic footnote
	character limit: 1023 characters
	
	Keywords per help file: limited only by file size
	Keyword length: 255 bytes
	Topics per keyword(2): < 800
	Browse sequence length: limited only by the number of topics
	
	Bookmarks per help file: limited only by file size
	Annotations per topic: 1
	Annotations per help file: 32,767
	
	History list length: 40 topics
	Text that can be copied to clipboard: limited only by machine memory
	
	Macro length: 512 characters
	
	Main windows per topic: 1
	Secondary windows per topic: 5
	
	1. The maximum paragraph size includes graphics pasted into the RTF source.
	  Therefore, each pasted graphic is limited to 32,000 bytes. To work around
	  this limitation, import large bitmaps by reference.
	
	2. Performance degrades for files with more than several hundred topics. The
	  Search dialog box displays a maximum of 400 topics.
	
	Additional query words: no32bit 3.10 HC HCP.EXE HC31.EXE WinHelp
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
