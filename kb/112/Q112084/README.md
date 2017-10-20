---
layout: page
title: "Q112084: PRB: SET TALK ON Does Not Work with SET STATUS BAR ON"
permalink: /kb/112/Q112084/
---

## Q112084: PRB: SET TALK ON Does Not Work with SET STATUS BAR ON

{% raw %}

	Article: Q112084
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b; WINDOWS:2.5,2.5a,2.5b,3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SET TALK command is ON, but command output does not display on the desktop.
	
	CAUSE
	=====
	
	The SET STATUS BAR command is ON. This displays a Windows-style status bar,
	which prevents the display of the command output controlled by the SET TALK
	command.
	
	RESOLUTION
	==========
	
	Use the character-based status bar, which is displayed by the command SET STATUS
	ON.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In FoxPro for MS-DOS, any time the SET TALK command is ON, command output is
	displayed in the active output area (usually the desktop). In FoxPro for Windows
	and Visual FoxPro, however, the type of status bar in effect determines whether
	the SET TALK output is displayed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following in the Command window:
	
	        SET TALK ON
	        SET STATUS BAR ON
	        x = "test"
	
	  Note that the character string "test" does not display on the desktop.
	
	2. Type the following in the Command window:
	
	        SET STATUS ON
	        x = "test"
	
	Note that the character string "test" now displays on the desktop.
	
	For more information about the two types of status bars used in FoxPro for
	Windows and FoxPro for Macintosh, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q93585 Using the Two Status Bar Styles in FoxPro
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: FoxMac FoxWin 2.50 question mark question-mark output vfoxwin vfoxmac akz
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:2.5b,3.0b; WINDOWS:2.5,2.5a,2.5b,3.0,3.0b,5.0,5.0a
	
	=============================================================================
	

{% endraw %}
