---
layout: page
title: "Q102211: Stacker Conversion Hangs at &quot;Loading DoubleSpace Setup...&quot;"
permalink: /kb/102/Q102211/
---

## Q102211: Stacker Conversion Hangs at &quot;Loading DoubleSpace Setup...&quot;

	Article: Q102211
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run CONVERT.BAT from the Stacker Conversion Disk, the following message
	is displayed:
	
	  Press ENTER at the DoubleSpace Setup Welcome screen to begin converting your
	  Stacker drives.
	
	  Loading DoubleSpace Setup...
	
	CAUSE
	=====
	
	CONVERT.BAT displays the above message and calls the MS-DOS CHOICE command with
	the following parameters to pause for five seconds before continuing
	
	  choice /ty,5 /n > nul
	
	where "/ty,5" allows CHOICE to accept only the "Y" key or to default to "Y" after
	five seconds and continue; "/n" causes CHOICE not to prompt for user input;
	"> nul" redirects output from CHOICE so that it is not displayed on screen.
	
	This problem occurs if a key other than "Y" is pressed when the message appears.
	Once pressed, the countdown timer stops and waits for the required key to be
	pressed. The computer appears to be hung at that screen although it is actually
	waiting for the "Y" key to continue.
	
	WORKAROUND
	==========
	
	If the computer appears to stop responding (hang) when this message appears on
	the screen, press the letter "Y" on the keyboard to continue the DoubleSpace
	conversion.
	
	Additional query words: dblspace 6.00 dos6 stopped
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
