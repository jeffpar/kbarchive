---
layout: page
title: "Q37923: Mac DOS: Running TOPS Network Software and the Notifier"
permalink: /kb/037/Q37923/
---

## Q37923: Mac DOS: Running TOPS Network Software and the Notifier

	Article: Q37923
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use the TOPS AppleTalk network software provided with the TOPS FlashCard for
	the PC, you must turn off the Microsoft Mail (MS-DOS client) Notifier. You can
	do this by typing "notifier off" (without quotation marks) at the MS-DOS prompt
	or by choosing Exit And Sign Out from the File menu. If the Notifier is started
	automatically in your AUTOEXEC.BAT file, make sure the NOTIFIER ON command
	follows any commands that load the TOPS memory-resident software.
	
	If you have already installed the Notifier to run Mail, and you want to install
	the TOPS software, you must turn off the Notifier before installing the TOPS
	software. After you install the TOPS software, reinstall the Notifier by typing
	"notifier on" (without the quotation marks) at the MS-DOS prompt, then enter
	your mail user name and password when prompted.
	
	MORE INFORMATION
	================
	
	The TOPS FlashCard for the PC comes with additional software that allows you to
	set up your PC as a TOPS server. This software allows you to designate
	directories on your hard disk for use on the network (called "volumes") when you
	run the TOPS network software and then make these directories accessible to TOPS
	network users (called "publishing" a volume). Other TOPS network users can then
	access the files in the directory (called "mounting" a published volume).
	
	To acquire these capabilities, you must run two programs: TOPSTALK.EXE and
	TOPSKRNL.EXE. TOPS recommends that you install the TOPS software before you
	install any other memory-resident software. Attempting to run the TOPS software
	with the Notifier loaded in memory may disable the TOPS software or lock up the
	system.
	
	TOPS FlashCard for the PC is manufactured by Sun Microsystems, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	For more information about the TOPS FlashCard for the PC, call Sitka Technical
	Support at (415) 549-8737.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN300DOS kbMailATN310DOS
	Version           : :3.0,3.1
	
	=============================================================================
	
