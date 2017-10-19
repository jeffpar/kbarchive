---
layout: page
title: "Q99716: SMTP: Attachments Named ATT1, ATT2, ATT#"
permalink: /kb/099/Q99716/
---

## Q99716: SMTP: Attachments Named ATT1, ATT2, ATT#

	Article: Q99716
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail users opening messages originating from a SMTP mail environment
	may show attachment names as "ATT1," "ATT2," and so on.
	
	The Microsoft Mail Gateway to SMTP generates these attachment names if the
	message is coming from a foreign SMTP mail system (meaning not another Microsoft
	SMTP Gateway) which adheres to the RFC 1154 standard of handling attachments.
	
	NOTE: If the message is sent from another Microsoft Mail SMTP gateway, a
	Microsoft-proprietary header field called "X-MS-Attachment:" exists, which holds
	the filename of the attachment. The creation of this header is compliant with
	the RFC 1154 standard.
	
	Because the header is proprietary, other SMTP vendors will not have it as part of
	the message. In this case, the SMTP Gateway creates its own attachment names as
	"ATT1," " ATT2," and so on.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
