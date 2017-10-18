---
layout: page
title: "Q90237: After Dark AD-DOS Can Cause Suspended Print Jobs"
permalink: kb/090/Q90237/
---

## Q90237: After Dark AD-DOS Can Cause Suspended Print Jobs

	Article: Q90237
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are printing from an MS-DOS-based application that is NOT set up to run
	in the background (through a .PIF file), AD-DOS suspends the print job.
	
	CAUSE
	=====
	
	AD-DOS.COM is a terminate-and-stay-resident (TSR) program that comes with
	Berkeley System's After Dark. When loaded, it allows After Dark to run a screen
	saver when you are running MS-DOS Prompt in full screen mode.
	
	When you are printing from MS-DOS Prompt and AD-DOS activates, the print jobs are
	suspended until the system receives keyboard or mouse input to clear AD-DOS.
	
	The print job is not harmed in any way; it is just suspended until the screen
	saver is cleared from the screen.
	
	WORKAROUND
	==========
	
	To avoid the problem, do one of the following:
	
	- Do not load AD-DOS.COM.
	
	- Set up the application to run in the background in a .PIF file.
	
	- Set the AD-DOS time-out period to a high value so the current print jobs can
	  finish.
	
	- Press a key or move the mouse occasionally to prevent AD-DOS from activating.
	
	After Dark is manufactured by Berkeley Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 printing print AD-DOS AD-DOS.COM After Dark ad berkley berkely burkley 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
