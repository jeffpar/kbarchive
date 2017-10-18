---
layout: page
title: "Q93167: MS-DOS Shell Limited to 2000 Tokens"
permalink: kb/093/Q93167/
---

## Q93167: MS-DOS Shell Limited to 2000 Tokens

	Article: Q93167
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start MS-DOS Shell, the DOSSHELL.INI file is read into memory. Each
	unique item in the DOSSHELL.INI file is stored as a token (there is a 2000 token
	limit). When this limit is reached, any action that causes MS- DOS Shell to
	write to the DOSSHELL.INI file (which requires a new token) causes the computer
	to beep. For example, the computer beeps when you try to add a New Program
	Object.
	
	MORE INFORMATION
	================
	
	A token is a word, a string of text, or a symbol. The following DOSSHELL.INI
	file entry would be represented in memory by three tokens; one for the word
	"help," one for the equal sign, and one for the string of text to the right of
	the equal sign:
	
	  help = Starts the MS-DOS command prompt
	
	Once a token has been used to represent a word, string, or symbol, each
	additional occurrence of the word, string, or symbol does not require an
	additional token. For example, the following block of text uses 11 tokens:
	
	  startup = filemanager
	  filemanagermode = shared
	  sortkey = name
	  pause = disabled
	  explicitselection = disabled
	  swapmouse = disabled
	
	Only one token is used to represent each occurrence of the equal sign and one
	token is used to represent each occurrence of the word "disabled."
	
	What Happens When New Tokens Are Added
	--------------------------------------
	
	The text on the left of the equal sign is usually a common word (such as
	"sortkey," "pause," "swapmouse," and so on) that is used repeatedly in the
	DOSSHELL.INI file. Therefore, each new line added to the DOSSHELL.INI file
	usually requires only one new token for the string to the right of the equal
	sign.
	
	If you reach the 2000 token limit, you can remove unneeded lines to make room for
	additional Program Objects or other items.
	
	The following items can usually be removed without significantly impacting your
	MS-DOS Shell configuration:
	
	- Color schemes you do not use.
	
	- Default program items and groups you don't use.
	
	- Help text (If you don't need or use it).
	
	
	Additional query words: 5.00 5.00a 6.00 dos shell dos-shell
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	
