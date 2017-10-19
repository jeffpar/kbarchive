---
layout: page
title: "Q108830: PC Win: StripGatewayHeaders Limited to 75 Recipients"
permalink: /kb/108/Q108830/
---

## Q108830: PC Win: StripGatewayHeaders Limited to 75 Recipients

	Article: Q108830
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2 of Microsoft Mail for Windows includes in the [Microsoft Mail]
	section of MSMAIL.INI the StripGatewayHeaders switch to remove extra headers
	from foreign systems being displayed in the body of the message. This switch
	does not work for messages with 76 recipients or more.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for Windows. We are researching this problem and will post new information here
	in the Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If this entry is 1 (the default), message header text (coming above the dashed
	line) is stripped from Mail messages that arrive through a gateway.
	
	If this entry is 0, you see the extended information supplied by the gateways,
	which typically includes information such as message identifiers specific to the
	foreign mail system.
	
	If this entry is 2, all gateway headers except those from the X.400 Gateway are
	stripped. Message header text supplied by native Mail for PC Networks clients is
	always stripped.
	
	Only the Mail for PC Networks transport supports this entry.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
