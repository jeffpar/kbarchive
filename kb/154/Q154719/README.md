---
layout: page
title: "Q154719: XCON: MTA: Line Wrap When Using ISO 6937 Bodypart"
permalink: /kb/154/Q154719/
---

## Q154719: XCON: MTA: Line Wrap When Using ISO 6937 Bodypart

{% raw %}

	Article: Q154719
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure the X.400 Connector to use the ISO 6937 bodypart to transfer
	messages to a remote X.400 system, a line wrap occurs after 80 characters. This
	is true even if the X.400 Connector is not configured for message text
	word-wrap. This may cause problems on the receiving side (for example, when
	sending data such as Postscript over a connector using ISO 6937).
	
	CAUSE
	=====
	
	The "X/Open CAE API to Electronic Mail" specification recommends a line- length
	limit of 80 characters in the ISO 6937 bodypart. This specification was replaced
	by ISO 14361, which also supports the following limitation:
	
	  Each line may contain 0-80 graphic characters for guaranteed rendition.
	
	However, in the ISO 6937 definition, there is no such limitation, and there may
	be cases when enforcing this limitation may not be desirable. The following is a
	quote from the ISO 6937 standard:
	
	  iso6937BodyPart DEFINITIONS EXPLICIT TAGS ::=
	  BEGIN
	  BodyPart ::= CHOICE {
	           [0]  IMPLICIT ISO646Text,
	           [1]  IMPLICIT TLX,
	           [2]  IMPLICIT Voice,
	           [3]  IMPLICIT G3Fax,
	           [4]  IMPLICIT TIF0,
	           [5]  IMPLICIT TTX,
	           [6]  IMPLICIT Videotex,
	           [7]  NationallyDefined,
	           [8]  IMPLICIT Encrypted,
	           [9]  IMPLICIT ForwardedIPMessage,
	           [10] IMPLICIT SFD,
	           [11] IMPLICIT TIF1,
	           [12] IMPLICIT ODA,
	           [13] IMPLICIT ISO6937Text}
	
	  ISO6937Text ::= SEQUENCE {
	     SET { repertoire [0] IMPLICIT INTEGER OPTIONAL
	     SEQUENCE OF ISO6937Line }
	  ISO6937Line ::= [0] IMPLICIT OCTET STRING
	  END
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0.
	This problem was corrected in the latest Microsoft Exchange Server 4.0 and 5.0
	U.S. Service Packs. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This fix changes the behavior of an X.400 Connector using ISO 6937. If message
	text word-wrap is set to Never, the length of a line in the message body is no
	longer limited.
	
	When implementing this fix, an administrator should be aware that it may affect
	the interoperability with remote X.400 message transfer agents (MTAs). This will
	be true if a remote X.400 MTA expects the length of a line to be limited to 80
	characters. If there are any X.400 MTAs connected that do expect the limitation,
	you need to set the message text word-wrap.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
