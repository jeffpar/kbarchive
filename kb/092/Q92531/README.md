---
layout: page
title: "Q92531: BUG: CreatePatternBrush() with Large Bitmap GP Fault"
permalink: /kb/092/Q92531/
---

## Q92531: BUG: CreatePatternBrush() with Large Bitmap GP Fault

{% raw %}

	Article: Q92531
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a machine with an 8514/a video adapter running the Microsoft Windows
	graphical environment with the standard 8514/a video driver, when an application
	calls the CreatePatternBrush() function to create a brush based on a bitmap
	larger than 8 pixels by 8 pixels, Windows terminates the application with an
	application execution error.
	
	CAUSE
	=====
	
	Contrary to the documentation for the CreatePatternBrush() function on page 114
	of the Microsoft Windows Software Development Kit (SDK) "Programmer's Reference,
	Volume 2: Functions" manual, this function does not trim a bitmap larger than 8
	pixels by 8 pixels to this size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Windows version 3.1.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: buglist3.10 3.10 gp-fault
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
