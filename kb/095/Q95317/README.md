---
layout: page
title: "Q95317: Use of SET BELL to Play a Waveform (.WAV) File in FoxPro"
permalink: /kb/095/Q95317/
---

## Q95317: Use of SET BELL to Play a Waveform (.WAV) File in FoxPro

	Article: Q95317
	Product(s): Microsoft FoxPro
	Version(s): 2.5x 2.60 2.60a 3.00 | 2.5x 2.60
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft FoxPro for Windows and Macintosh, the SET BELL command can be used
	to assign a sound file in waveform (.WAV) format to be activated instead of the
	default bell.
	
	MORE INFORMATION
	================
	
	Using the SET BELL Command in FoxPro for Windows
	------------------------------------------------
	
	The following commands assign the waveform file CHIMES.WAV to the FoxPro bell and
	play that sound:
	
	     SET BELL TO "CHIMES.WAV", 1
	     ? CHR(7)
	
	NOTE: 1, the second parameter of the SET BELL command, has no effect when the
	bell is set to a waveform file; however, a numeric value must still be passed as
	the second parameter.
	
	The above SET BELL command will cause a syntax error in Microsoft FoxPro version
	2.5 for MS-DOS because this functionality is not currently available in the
	MS-DOS version of FoxPro.
	
	To play a waveform file, an appropriate sound driver must be installed in the
	Windows Control Panel by using the Drivers icon. For more information on
	installing sound drivers, see the "Microsoft Windows User's Guide."
	
	NOTE: Setting the bell to a .WAV file on a machine without a sound driver does
	not give an error, but it will not work and the bell won't reset properly after
	issuing "SET BELL TO <freq>,<duration>" (without the quotation
	marks).
	
	Using the SET BELL Command in FoxPro for Macintosh
	--------------------------------------------------
	
	The following commands assign the different waveform files to the FoxPro bell and
	play the sounds:
	
	     SET BELL TO "quack",0
	     ?? CHR(7)
	
	     SET BELL TO "droplet",0
	     ?? CHR(7)
	
	Any sound whose name appears in the Sound Control Panel can be used as the FoxPro
	bell, including sounds that you record. Just use the name that appears for the
	sound in the Sound Control Panel in the SET BELL TO command.
	
	Additional query words: kbsound VFoxWin FoxWin FoxMac 2.50 2.50a 2.50b 2.50c wave beep wavefile form recording
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : 2.5x 2.60 2.60a 3.00 | 2.5x 2.60
	
	=============================================================================
	
