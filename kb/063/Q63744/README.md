---
layout: page
title: "Q63744: Macro Recorder Macros Take Priority Over Application Macros"
permalink: /kb/063/Q63744/
---

## Q63744: Macro Recorder Macros Take Priority Over Application Macros

{% raw %}

	Article: Q63744
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have more than one macro with the same key sequence, and one of the
	macros was created in the Recorder program packaged with Microsoft Windows
	version 3.0, Windows replays the Recorder-created macro instead of a macro
	created from other Windows-based applications.
	
	For example, if you write a macro in Microsoft Excel that is activated by the
	CTRL+A key sequence, and you also have a macro created for the Recorder
	application that uses CTRL+A, the Recorder macro is activated when you press
	CTRL+A. This occurs if Recorder is running in a window or as an icon.
	
	If the Recorder macro is set to play back into Any Application, the macro
	keystrokes are sent to the application that is running. If the Recorder macro is
	set to play back into Same Application, the Recorder attempts to switch control
	to the application where the macro was recorded and then play back into THAT
	application. If the application is not running, Recorder terminates with an
	error message.
	
	WORKAROUND
	==========
	
	To change Recorder's playback, do the following:
	
	1. From the Options menu, choose Preferences.
	
	2. The Default Preferences dialog box appears. Under Playback To, select Any
	  Application or Same Application.
	
	Additional query words: 3.00 3.00a 3.0 3.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
