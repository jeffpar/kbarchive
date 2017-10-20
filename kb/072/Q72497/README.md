---
layout: page
title: "Q72497: BUG: FatalExit() Interacts Through Terminal Only"
permalink: /kb/072/Q72497/
---

## Q72497: BUG: FatalExit() Interacts Through Terminal Only

{% raw %}

	Article: Q72497
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbnokeyword
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under the debugging version of Windows, when a debugger is not in use and the
	FatalExit() function interacts with the user, the interaction is through a
	terminal connected to the AUX port and not through the console keyboard and a
	secondary monitor if one is installed.
	
	RESOLUTION
	==========
	
	In versions of Windows earlier than version 3.0, and in Windows 3.0 real mode,
	the device driver OS.SYS can be installed to redirect information form FatalExit
	() to a secondary monitor and the console keyboard. Under Windows 3.0 standard
	and enhanced modes and under Windows 3.1 OX.SYS will only redirect output and
	the console keyboard will not be redirected. After a FatalExit () call has
	occured, the computer must be rebooted to regain control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a limitation of the Windows SDK versions 3.0
	and 3.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
