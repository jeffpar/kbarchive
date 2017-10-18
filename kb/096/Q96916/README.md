---
layout: page
title: "Q96916: PC WRmt: Problems Regaining Control with Some Screen Savers"
permalink: kb/096/Q96916/
---

## Q96916: PC WRmt: Problems Regaining Control with Some Screen Savers

	Article: Q96916
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail Remote version 3.2 for Windows works as expected with the screen
	saver built into Microsoft Windows version 3.1. However, Mail may not work as
	expected with the IdleWild screen saver provided with the Microsoft Windows
	Entertainment Pack or with other non-standard screen saver applications for
	Windows.
	
	CAUSE
	=====
	
	If some Windows screen savers become active while the Mail Remote for Windows
	connection dialog box is communicating with the modem, the user may be unable to
	regain control of the system until the connection dialog box has completed its
	communication.
	
	If a screen saver follows the published protocol (which IdleWild does not), Mail
	Remote for Windows can process the WM_SYSCOMMAND SC_SCREENSAVE message and
	return a nonzero value to prevent the screen saver from becoming active.
	
	RESOLUTION
	==========
	
	In most screen savers, Mail Remote for Windows regains control if you press the
	ENTER or ESC key or the SPACEBAR, or if you move the mouse.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
