---
layout: page
title: "Q168444: Windows 95 Setup Problems with Plug and Play Program Active"
permalink: kb/168/Q168444/
---

## Q168444: Windows 95 Setup Problems with Plug and Play Program Active

	Article: Q168444
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Windows 95, you may receive the following error
	message:
	
	  A fatal exception 0E has occured at 0028:xxxxxxxx in VxD VMM(06) + xxxxxxxx
	
	Or, you may receive one of the following types of error messages:
	
	  A Vwin32 error message displayed on a blue screen.
	
	  A registry error message.
	
	  A general protection (GP) fault error message.
	
	CAUSE
	=====
	
	This issue can occur if you have a Plug and Play program active in memory when
	you try to install Windows 95.
	
	RESOLUTION
	==========
	
	To resolve this issue, install Windows 95 from a command prompt. To do so,
	follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the the Startup menu.
	
	2. At the command prompt, type
	
	  " <drive>:\setup.exe " (without the quotation marks)
	
	  where <drive> is the drive containing your original Windows 95 Setup
	  disk or CD-ROM.
	
	NOTE: You must have real-mode CD-ROM drivers installed to use this method. If you
	do not have real-mode CD-ROM drivers installed, you cannot access the CD-ROM
	drive when you restart your computer to a command prompt.
	
	Additional query words: gpf
	
	======================================================================
	Keywords          : kberrmsg kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
