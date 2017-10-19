---
layout: page
title: "Q112277: PC Win: StripGatewayHeaders Requires FIPS TEXTBORDER"
permalink: /kb/112/Q112277/
---

## Q112277: PC Win: StripGatewayHeaders Requires FIPS TEXTBORDER

	Article: Q112277
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The StripGatewayHeaders=1 option for MSMAIL.INI in versions 3.0, 3.0b, and 3.2
	of Microsoft Mail for Windows only works if the version of the Gateway creates
	the FIPS TEXTBORDER field on messages inbound to MS Mail.
	
	The FIPS TEXTBORDER is a binary field that tells the Mail for Windows how many
	lines of the message text are actually header. If the gateway does not support
	this field then using this option would give undesired results--a corrupted
	message.
	
	Please note that all 2.1 and earlier versions of gateways do not create
	TEXTBORDER.
	
	MORE INFORMATION
	================
	
	StripGatewayHeaders=<0/1/2>
	---------------------------
	
	If this entry is 1, then message header text (coming above the dashed line) will
	be stripped from Mail messages that arrive via a gateway. Set the entry to 0 if
	you want to see the extended information supplied by the gateways, which
	typically includes things like message identifiers specific to the foreign mail
	system. Message header text supplied by native Mail clients is always stripped.
	
	The default value is 1 (you do not see gateway information).
	
	Setting the option to 2 will strip everything except X.400 headers.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
