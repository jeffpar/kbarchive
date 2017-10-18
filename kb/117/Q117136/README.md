---
layout: page
title: "Q117136: Extra Characters in MS-DOS Session with Voice Pilot Active"
permalink: kb/117/Q117136/
---

## Q117136: Extra Characters in MS-DOS Session with Voice Pilot Active

	Article: Q117136
	Product(s): Miscellaneous Windows Products
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Extraneous characters appear while you are typing at an MS-DOS command prompt or
	in an MS-DOS-based application within Windows. For example, a period (.) or a
	carriage return appears without any keyboard input.
	
	CAUSE
	=====
	
	This behavior occurs when the Windows Sound System Voice Pilot (VP) is active.
	VP 2.0 does not automatically turn the microphone off when you run an MS-DOS
	session in Windows. It continues to recognize words from both a vocabulary
	associated with MS-DOS sessions (or the default vocabulary, if there is no
	vocabulary associated with MS-DOS sessions) and the global vocabulary. The
	global vocabulary is always active when the microphone and VP are active.
	
	RESOLUTION
	==========
	
	To avoid this behavior, put the microphone into sleep mode or turn the
	microphone off prior to running the MS-DOS session. To put the microphone into
	sleep mode, say "go to sleep" before you start, or from within, the MS- DOS
	session. To turn the microphone off, choose the Microphone button on the Voice
	Pilot tool bar or press the CTRL+ALT key combination from anywhere in Windows
	(not from within the MS-DOS session).
	
	MORE INFORMATION
	================
	
	Windows Sound System 2.0 Voice Pilot operates correctly in an MS-DOS session in
	Windows. For example, you could train each letter of the alphabet so that you
	could type by simply saying the letters. When the Voice Pilot picks up
	background noises or misinterprets a voice command, extraneous characters may
	appear.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Select Voice Pilot.
	
	2. Turn on the microphone.
	
	3. Choose the MS-DOS Prompt icon.
	
	4. Say "cut" to generate a period or "enter" to generate a carriage return.
	
	"Cut" maps to SHIFT+DEL; therefore, saying "cut" in MS-DOS sends a SHIFT+DEL key
	combination, which translates to a period, to the MS-DOS- based application.
	"Enter" translates to a carriage return as expected. This behavior is by design.
	
	Additional query words: 2.00 <enter>
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	Version           : :2.0
	
	=============================================================================
	
