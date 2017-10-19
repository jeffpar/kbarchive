---
layout: page
title: "Q96697: Using ANSI Characters with the CHOICE Command"
permalink: /kb/096/Q96697/
---

## Q96697: Using ANSI Characters with the CHOICE Command

	Article: Q96697
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CHOICE command prompts you to make a choice in a batch program. It displays
	a specified prompt and pauses for you to choose from among a specified set of
	keys. You can only use this command in batch programs.
	
	The CHOICE command allows only one key to be used per selection. For example, you
	cannot use "12" as a key selection. CHOICE interprets this as "1" and "2";
	however, you can use the ANSI character set equivalent for 12 by holding down
	the ALT key and pressing the appropriate key combination on the numeric keypad.
	Not all combinations work, but you can use up to 222 different entries from the
	255 available. The table below details which characters work.
	
	  Key Combination    Work?
	  ---------------    -----
	
	  0-27               No
	  28-31              Yes
	  32                 No
	  33-255             Yes (some exceptions noted below)
	
	MORE INFORMATION
	================
	
	ALT+37 displays the percent sign (%). If you use the percent sign in a batch
	file, it acts as a replaceable parameter. You must use two percent signs (one
	immediately after the other) to use the % symbol. To do this, press the ALT+37
	key combination twice.
	
	ALT+47 displays the forward slash (/). The forward slash does not work with
	CHOICE.
	
	ALT+60 displays the opening bracket (<). The opening bracket represents a
	redirector and does not work with CHOICE.
	
	ALT+62 displays the closing angle bracket (>). The closing bracket represents
	a redirector and does not work with CHOICE.
	
	ALT+124 displays the pipe character (|). The pipe represents the MS-DOS pipe and
	does not work with CHOICE.
	
	ALT+127 represents the DEL (delete) key. The DEL key does not work with the
	CHOICE command.
	
	ALT+255 represents SPACEBAR. This character works if you press ALT+255. It does
	not work if you press SPACEBAR.
	
	If you use the extended characters between 128 and 165, use the /S switch to
	treat choice keys at case sensitive.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
