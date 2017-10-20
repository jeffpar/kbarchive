---
layout: page
title: "Q194686: X400: Error 58 Message Displayed and Connection Ends"
permalink: /kb/194/Q194686/
---

## Q194686: X400: Error 58 Message Displayed and Connection Ends

{% raw %}

	Article: Q194686
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send a message to a foreign system through the Microsoft
	Mail Gateway to X.400, an Error 58 message may be displayed and the connection
	may end unexpectedly. When this occurs, the Microsoft Mail Gateway to X.400
	repeatedly attempts to send the message again. Each time, the error message is
	displayed, and the connection ends unexpectedly. However, the original message
	and all subsequent messages are successfully sent to the foreign system. Note
	that this problem is known to occur with ISODE/OpenPath systems.
	
	CAUSE
	=====
	
	This problem occurs when the foreign system sends a "please token" session
	protocol data unit (SPDU) in a different transport protocol data unit (TPDU)
	than the "activity end" SPDU. The Microsoft Mail Gateway to X.400 does not
	properly handle this type of communication.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name      Version
	  ----------------------
	  X400gate.exe   3.2.9
	
	This hotfix has been posted to the following Internet location as X400gy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to X.400
	version 3.2.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
