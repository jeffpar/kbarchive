---
layout: page
title: "Q160268: Missing TN3270E Header on Data to Client"
permalink: /kb/160/Q160268/
---

## Q160268: Missing TN3270E Header on Data to Client

{% raw %}

	Article: Q160268
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbnetserv
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Occasionally the Microsoft TN3270E Server will not add a TN3270E header to a
	data message destined for the TN3270E client. This can cause the client's
	session hang.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 and 2.11
	Service Pack 1. This problem was corrected in the latest Microsoft SNA Server
	2.11 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	In order to support several of the new functions in TN3270E, a header must
	prefix each data message. The header contains a DATA-TYPE field, which tells the
	receiver how to interpret the data portion of the message.
	
	Some possible values for the DATA-TYPE field are:
	
	        Data-type Name Code                Meaning
	        --------------   ----   ---------------------------------
	        3270-DATA        0x00      The data portion of the message
	                                   contains only the 3270 data stream.
	
	        RESPONSE         0x02      The data portion of the message
	                                   constitutes device-status information
	                                   and the RESPONSE-FLAG field indicates
	                                   whether this is a positive or negative
	                                   response (see below).
	
	        BIND-IMAGE       0x03      The data portion of the message is
	                                   the SNA bind image from the session
	                                   established between the server and the
	                                   host application.
	
	        UNBIND           0x04      The data portion of the message is
	                                   an Unbind reason code.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbnetserv 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
