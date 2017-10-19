---
layout: page
title: "Q111095: BUG: Nonscrolling Region in Help File Topic Does Scroll"
permalink: /kb/111/Q111095/
---

## Q111095: BUG: Nonscrolling Region in Help File Topic Does Scroll

	Article: Q111095
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows Help file topic that has been formatted to provide a nonscrolling
	region does scroll.
	
	CAUSE
	=====
	
	A BUILDTAGS section was used in the Help project file to exclude the preceding
	topic from the build. The subsequent topic with formatting for a nonscrolling
	region will behave as if it was not formatted to be a nonscrolling region. In
	other words, the region will scroll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Help Compiler version 3.1. We
	are researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	Formatting for a nonscrolling region is specified by using the RTF \keepn format
	or by using the "Keep Paragraph With Next" command in Word for Windows.
	
	Additional query words: buglist3.10 3.10 Help Compiler non-scrolling
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
