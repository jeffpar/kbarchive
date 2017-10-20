---
layout: page
title: "Q126405: PRB: Cannot Hear Bell in FoxPro for Windows"
permalink: /kb/126/Q126405/
---

## Q126405: PRB: Cannot Hear Bell in FoxPro for Windows

{% raw %}

	Article: Q126405
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have installed multimedia software or a sound board, using CHR(7) to ring
	the bell may no longer work in FoxPro. The bell is silent whether you SET BELL
	TO a wave file, or to the normal system bell.
	
	CAUSE
	=====
	
	The multimedia software installed TIMER.DRV as a device driver in the [DEVICE]
	section of the SYSTEM.INI file. TIMER.DRV is causing a conflict with FoxPro and
	the bell is not ringing.
	
	WORKAROUND
	==========
	
	There are two possible resolutions to the problem:
	
	1. Remove TIMER.DRV by choosing the Control Panel Drivers icon, highlighting the
	  TIMER.DRV entry, and clicking the Remove push button.
	
	2. Use the steps outlined in the following article in the Microsoft Knowledge
	  Base:
	
	  Q102585 How to Play Waveform (.WAV) Files in FoxPro for Windows
	
	  This article explains how to use FOXTOOLS.FLL to call the Windows multimedia
	  API to play a sound file. This article will work regardless of which
	  multimedia driver is installed, or whether or not a sound board is installed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For more information, please see the following related articles in the Microsoft
	Knowledge Base:
	
	  Q102736 SET BELL TO Does Not Work with PC Speaker Driver
	
	  Q95317 Use of SET BELL to Play a Waveform (.WAV) File in FoxPro
	
	Additional query words: FoxWin VFoxWin 2.50 2.50a 2.50b 2.60 2.60a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	

{% endraw %}
