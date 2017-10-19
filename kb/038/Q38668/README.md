---
layout: page
title: "Q38668: Mac DOS: Using Microsoft Mail with Windows/386"
permalink: /kb/038/Q38668/
---

## Q38668: Mac DOS: Using Microsoft Mail with Windows/386

	Article: Q38668
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.37,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, versions 1.37, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail (PC Client) will not run under versions of Windows/386 prior to
	version 2.10. In Windows/386, you have the option to run applications in Window
	or Full Screen mode and in one of three tasking options: Foreground, Background,
	and Exclusive. To run Mail within Windows/386, do the following:
	
	1. Start Windows/386.
	
	2. In the MS-DOS Executive window, run the MAIL386.PIF file. This file is
	  automatically copied to your Mail directory by the Setup program. A window
	  will appear with the DOS prompt.
	
	3. At the DOS prompt, type the appropriate command to start AppleTalk with the
	  network card you have installed in your system.
	
	4. Type "notifier" (without the quotation marks) to start the Notifier and sign
	  in to the Mail system.
	
	5. Type "mail" (without the quotation marks) to open your mailbox.
	
	6. When you're finished with your mailbox, choose Exit from the File menu to
	  return to the MS-DOS Executive window while remaining signed in to the Mail
	  system.
	
	MORE INFORMATION
	================
	
	If you are viewing the Mail window, an alert box will alert you to the arrival
	of new mail in your mailbox. If you are working with an application in
	Windows/386 and new mail arrives, you will hear a chime if you've chosen that
	option in Mail's Preferences window.
	
	Note: If you are using a TOPS FlashCard to connect your PC workstation to the
	AppleTalk network, you cannot run Mail under Microsoft Windows.
	
	Additional query words: 1.37 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN137DOS kbMailATN200DOS kbMailATN300DOS
	Version           : :1.37,2.0,3.0
	
	=============================================================================
	
