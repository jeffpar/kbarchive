---
layout: page
title: "Q176132: XCON: Signed Message in DMS MTA Not Converted"
permalink: /kb/176/Q176132/
---

## Q176132: XCON: Signed Message in DMS MTA Not Converted

{% raw %}

	Article: Q176132
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A signed message submitted to the DMS MTA may fail content conversion for the
	P42 content. This may cause the MTA to crash, or the following event ID may be
	generated for the MSExchangeMTA service:
	
	  Event ID 210 -
	  An internal MTA error occurred.  Content conversion for message
	  C=<country code>;A=<ADMD>;L=<MTS-ID of message> failed. Conversion
	  error: 258, Object at fault: XXXXXXXX, Original content type:
	  60864801650201022A, New content type: 2A864886F7140501.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Support for the P42 protocol (Secure Data Network Systems Message Security
	Protocol Support) gives Microsoft Exchange Server DMS users the benefit of
	adding hardware-based (for example, Fortezza cards) end-to-end security
	including signed receipts, non-repudiation, privacy, and content integrity to
	their communications.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
