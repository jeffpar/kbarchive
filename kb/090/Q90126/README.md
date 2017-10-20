---
layout: page
title: "Q90126: Mail Demonstration Does Not Run Under Norton Desktop"
permalink: /kb/090/Q90126/
---

## Q90126: Mail Demonstration Does Not Run Under Norton Desktop

{% raw %}

	Article: Q90126
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Microsoft Mail Schedule+ demonstration package is run on a computer that
	has Norton Desktop for Windows installed as the default shell, the recorder
	program used to install and run the demonstration fails with the following error
	message:
	
	  Recorder Playback Aborted!
	
	CAUSE
	=====
	
	The Recorder macro uses features found in the Program Manager to run the
	demonstration. When Norton Desktop is installed as the shell, these features
	cannot be found and the demonstration aborts with the above error message.
	
	RESOLUTION
	==========
	
	To correct this problem, Program Manager must be used as the shell while running
	this demonstration program.
	
	Norton Desktop is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: ndw 3.00 3.00a 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
