---
layout: page
title: "Q60508: Handling Link Timeouts on Host Connections"
permalink: kb/060/Q60508/
---

## Q60508: Handling Link Timeouts on Host Connections

	Article: Q60508
	Product(s): Microsoft LAN Manager
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- DCA/Microsoft Communications Server, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the DCA/Microsoft Communications Server Configuration program, you cannot set
	"No response timers/retry" values when the local link role is set to Secondary.
	Please note that these values are not enabled (grayed) when you choose
	Parameters from the Connections option of the Services menu.
	
	These timer values are only configurable when the local link role is Primary or
	Negotiable, which is only possible when you are communicating with a peer node.
	The configuration program was designed this way to make it easier to configure
	the product when the Communications Server link role is Secondary. In this case,
	Communications Server handles host poll timeouts in the following manner:
	
	1. If Communications Server has not been polled by the primary end (host or
	  primary partner peer node) in the last minute, a pop-up warning message is
	  generated to inform the user.
	
	2. If Communications Server still has not been polled by the primary end in the
	  past three minutes, the link is dropped.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbSNAServSearch kbDCAMSCommServ
	Version           : :1.0
	
	=============================================================================
	
