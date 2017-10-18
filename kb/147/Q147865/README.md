---
layout: page
title: "Q147865: Incorrect Error Message Displayed When Dialing Analog Line"
permalink: kb/147/Q147865/
---

## Q147865: Incorrect Error Message Displayed When Dialing Analog Line

	Article: Q147865
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an ISDN modem with Dial-Up Networking to dial an analog phone line,
	you may receive the following error message if there is no answer on the analog
	line:
	
	  The computer is not receiving a response from the modem. Check that the modem
	  is plugged in, and if necessary, turn the modem off, and then turn it back
	  on.
	
	CAUSE
	=====
	
	This error message is caused by an incorrect parameter passed from the NDIS WAN
	Miniport drivers. When this happens, Dial-Up Networking displays the generic
	error message stated above.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ISDN Accelerator Pack for
	Microsoft Internet Explorer 2.0 version 1.0. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
