---
layout: page
title: "Q176706: &quot;Could Not Load or Run&quot; Error Message When You Start Windows"
permalink: kb/176/Q176706/
---

## Q176706: &quot;Could Not Load or Run&quot; Error Message When You Start Windows

	Article: Q176706
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Kids, version 1.0 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive one or more instances of the following error message when you
	start Windows:
	
	  Desktop! Could not load or run <program name> specified in the Win.ini
	  file. Make sure the file exists on your computer or remove the reference to
	  it in the Win.ini file.
	
	CAUSE
	=====
	
	You can receive this error message if you have restricted family members from
	running a program that is on the "Run=" or "Load=" line in the Win.ini file.
	
	Programs on the "Run=" or "Load=" line in the Win.ini file run every time you
	start Windows.
	
	RESOLUTION
	==========
	
	To resolve this problem, you can either remove the restricted programs from the
	"Run=" or "Load=" line in the Win.ini file, or add them to the list of allowed
	programs in Protect It!
	
	To remove a program from the "Run=" or "Load=" line, use the following steps. You
	should remove any program that is listed in the error message described in the
	Symptoms section of this article.
	
	1. Click Start, and then click Run.
	
	2. Type the following line in the Open box, and then click OK:
	
	  " sysedit " (without the quotation marks)
	
	3. Click the Win.ini window to bring it to the front.
	
	4. In the [Windows] section, locate the "Load=" and "Run=" lines.
	
	5. Remove the program or programs that appeared in the error message.
	
	6. On the File menu, click Save.
	
	7. On the File menu, click Exit.
	
	8. Click Start, click Shut Down, click Restart The Computer, and then click Yes.
	
	For information about adding allowed programs in Protect It!, start Protect It!,
	type your Protect It! key, click OK, and then click Help.
	
	Additional query words: user log on password
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch _IKkbbogus kbGamesSearch kbPlusKids kbPlusSearch
	Version           : WINDOWS:1.0,95
	Issue type        : kbprb
	
	=============================================================================
	
