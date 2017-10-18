---
layout: page
title: "Q150323: Computer Appears to Stop Responding Restarting in MS-DOS Mode"
permalink: kb/150/Q150323/
---

## Q150323: Computer Appears to Stop Responding Restarting in MS-DOS Mode

	Article: Q150323
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a computer with an XGA display adapter, when you attempt to restart
	your computer in MS-DOS mode, your computer may appear to stop responding (hang)
	at a black screen.
	
	CAUSE
	=====
	
	The XGA driver does not properly switch the XGA adapter out of XGA mode.
	
	RESOLUTION
	==========
	
	At the black screen where the computer appears to hang, type the command "mode
	co80" (without the quotation marks) and press ENTER. This resets the display
	mode, so that the command prompt is visible. Note that you are not able to see
	the "mode co80" command as you type it.
	
	To prevent having to type "mode co80" each time you restart in MS-DOS mode, use
	the appropriate method:
	
	Method 1
	--------
	
	1. Using the Find command, locate the "Exit to Dos.pif" file.
	
	2. Right-click the "Exit to Dos.pif" file, and then click Properties.
	
	3. Click the Program tab, and then edit the Cmd line so that it reads:
	
	  C:\Windows\Command.com /k mode co80
	
	4. Click OK.
	
	Method 2
	--------
	
	1. Using the Find command, locate the "Exit to Dos.pif" file.
	
	2. Right-click the "Exit to Dos.pif" file, and then click Properties.
	
	3. Click the Program tab, click Advanced, click "Specify a new MS-DOS
	  configuration", and then edit the Autoexec.bat file to add this command as
	  the first line:
	
	  C:\Windows\Command\mode co80
	
	4. Click OK, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
