---
layout: page
title: "Q150311: Call Forwarding Feature May Not Work"
permalink: kb/150/Q150311/
---

## Q150311: Call Forwarding Feature May Not Work

	Article: Q150311
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Phone, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The call forwarding feature of Microsoft Phone does not work properly after you
	enable it.
	
	CAUSE
	=====
	
	Some telephone exchanges activate call forwarding immediately after the call
	forward code and phone number are entered. Other exchanges activate call
	forwarding after someone answers the called phone or after call forwarding to
	the same number twice.
	
	RESOLUTION
	==========
	
	Microsoft Phone's call forwarding feature works the same way as a physical phone
	works on these exchanges, except that the call is hung up automatically after
	dialing. In essence, the number must be dialed twice for forwarding to be
	enabled.
	
	NOTE: You must have subscribed to call forwarding from your phone company in
	order for Microsoft Phone's call forwarding features to work.
	
	MORE INFORMATION
	================
	
	There is a default 5 second delay after the modem finishes dialing and hangs up.
	This delay is needed for the telephone system to respond to the call forward
	request before hanging up. If the timeout is too small, the call forwarding
	feature will not work.
	
	For additional information, please contact your modem manufacturer about
	obtaining an updated *.inf file.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbMSHardwareSearch kbPhone
	Version           : :1.0
	
	=============================================================================
	
