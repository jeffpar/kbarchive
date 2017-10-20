---
layout: page
title: "Q159275: TN3270E DATA-TYPE Field with a Value of 0x08"
permalink: /kb/159/Q159275/
---

## Q159275: TN3270E DATA-TYPE Field with a Value of 0x08

{% raw %}

	Article: Q159275
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TN3270E Server sets the DATA-TYPE Field with a value of 0x08 to indicate a
	PRINT-EOJ.
	
	MORE INFORMATION
	================
	
	RFC 1647 contains the following text on the DATA_TYPE field:
	
	  8.1 The TN3270E Message Header
	
	     As stated earlier, each data message in TN3270E must be prefixed
	     by a header, which consists of five bytes and is formatted as
	     follows:
	
	     -----------------------------------------------------------
	     | DATA-TYPE | REQUEST-FLAG | RESPONSE-FLAG |  SEQ-NUMBER  |
	     -----------------------------------------------------------
	        1 byte        1 byte         1 byte         2 bytes
	
	  8.1.1 DATA-TYPE Field
	
	     The DATA-TYPE field indicates how the data portion of the message is
	     to be interpreted by the receiver.  Possible values for the DATA-TYPE
	     field are:
	
	        Data-type Name   Code                Meaning
	        --------------   ----   ---------------------------------
	        3270-DATA        0x00   The data portion of the message
	                                contains only the 3270 data stream.
	
	        SCS-DATA         0x01   The data portion of the message
	                                contains SNA Character Stream data.
	
	        RESPONSE         0x02   The data portion of the message
	                                constitutes device-status information
	                                and the RESPONSE-FLAG field indicates
	                                whether this is a positive or negative
	                                response (see below).
	
	        BIND-IMAGE       0x03   The data portion of the message is
	                                the SNA bind image from the session
	                                established between the server and the
	                                host application.
	
	        UNBIND           0x04   The data portion of the message is
	                                an Unbind reason code.
	
	        NVT-DATA         0x05   The data portion of the message is to
	                                be interpreted as NVT data.
	
	        REQUEST          0x06   There is no data portion present in
	                                the message.  Only the REQUEST-FLAG
	                                field has any meaning.
	
	        SSCP-LU-DATA     0x07   The data portion of the message is
	                                data from the SSCP-LU session.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
