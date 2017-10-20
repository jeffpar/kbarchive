---
layout: page
title: "Q175384: TN3270 Client Hangs with Keyboard Locked on Some Host Screens"
permalink: /kb/175/Q175384/
---

## Q175384: TN3270 Client Hangs with Keyboard Locked on Some Host Screens

{% raw %}

	Article: Q175384
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a TN3270 client is connecting through the SNA Server TN3270 Service, on
	certain host screens, the TN3270 client keyboard remains locked in an XCLOCK
	state. A native 3270 client does not have this problem.
	
	This problem occurs with the TN3270 Service included with Microsoft SNA Server
	version 3.0, 3.0 Service Pack 1 (SP1), and 3.0 Service Pack 2 (SP2).
	
	CAUSE
	=====
	
	The client keyboard lock occurs when the host application sends a 3270 message
	to the client and indicates an End Bracket (EB), but the WCC field in the 3270
	message does not unlock the keyboard. (That is, bit 6 in the WCC field is set to
	"0" which means that the keyboard is locked.) Because a TN3270 client never
	receives the SNA Request/Response Header (RH), it is not aware of the EB
	indicator and does not determine that the keyboard should be unlocked. Because
	the host application does not unlock the keyboard properly in the WCC byte, the
	TN3270 emulator's keyboard remains locked.
	
	This problem does not occur with a native 3270 emulator because it receives the
	SNA RH, and unlocks the keyboard when it receives an EB, even if the 3270 WCC
	field does not unlock the keyboard.
	
	RESOLUTION
	==========
	
	An update to the SNA Server TN3270 Service is available from Microsoft to
	correct this problem. With the update TN3servr.exe file applied, the TN3270
	server monitors for the EB indicator on host messages, and if it is set, will
	automatically set the WCC Bit 6 (keyboard state) to 1 to notify the TN3270
	client that the keyboard should be unlocked.
	
	WORKAROUND
	==========
	
	The only workaround available for this problem is to modify the host application
	so that it properly sets the WCC bit 6 to unlock the keyboard on host screens
	which exhibit the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, 3.0 SP1, and 3.0
	Service Pack 2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna snatn3270 xclock tn3270e
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
