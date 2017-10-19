---
layout: page
title: "Q183464: Windows NT Remote Boot Clients Lose Enhanced Keyboard Support"
permalink: /kb/183/Q183464/
---

## Q183464: Windows NT Remote Boot Clients Lose Enhanced Keyboard Support

	Article: Q183464
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Following a remote program load (RPL) boot from a Windows NT server, enhanced
	keyboard functionality is lost on the client for some applications.
	
	CAUSE
	=====
	
	The Rpldisk.sys driver, used during the initial phase of a remote boot,
	mistakenly clears a bit in the BIOS area in the memory of the client system that
	indicates whether the attached keyboard is an enhanced keyboard.
	
	Applications that check this flag to determine how to interact with the keyboard
	will fail to detect an enhanced keyboard, and may elect not to use enhanced
	keyboard functions.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix.
	
	This fix should have the following time stamp:
	
	  04/02/98  10:14a                26,761 Rpldisk.sys (Intel)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	An MS-DOS client can check the status of the enhanced keyboard flag using
	Debug.com. At the debug prompt, type "d 40:96 L1" (without the quotation marks).
	You will see a line like the following:
	
	  0040:0090                    10                                    .
	
	The enhanced keyboard flag is set if the value in the middle of the line is 10.
	If, instead of the value 10 you see the value 00, the enhanced keyboard flag is
	clear. Type "q" to exit from debug.
	
	Rpldisk.sys only clears this flag if the keyboard is used to respond to the
	following login prompt:
	
	Type remoteboot username, or press enter if it is XXXXXXX:
	
	If this prompt is allowed to time out, the flag will be left unchanged.
	
	Additional query words: lanman ripl
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
