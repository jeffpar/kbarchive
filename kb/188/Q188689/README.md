---
layout: page
title: "Q188689: Converting From ASCII-EBCDIC Using CPICs CMCNVI and CMCNVO"
permalink: /kb/188/Q188689/
---

## Q188689: Converting From ASCII-EBCDIC Using CPICs CMCNVI and CMCNVO

	Article: Q188689
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server's CPIC libraries now provide data conversion support through the use
	of two new CPIC function calls.
	
	- Convert_Outgoing (CMCNVO) - The Convert_Outgoing() call is designed to
	  translate text strings from ASCII to EBCDIC and is issued before sending data
	  to a computer that uses EBCDIC encoding (for example, the host).
	
	- Convert_Incoming (CMCNVI) - The Convert_Incoming() is designed to translate
	  text strings from EBCDIC to ASCII and is typically issued after receiving
	  data from a computer that uses EBCDIC encoding.
	
	NOTE: These function calls do not take a conversation ID as input and can
	therefore, be used even if an active conversation does not exist.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain SNA Server Version 4.0 U.S Service Pack 2
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0, 3.0 SP 1, 3.0 SP
	2, 3.0 SP 3, 4.0, 4.0 SP 1. This problem was first corrected in SNA Server 3.0
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	The function call definitions for CMCNVO and CMCNVI are listed below.
	
	Convert_Incoming()
	------------------
	
	The Convert_Incoming call (function name cmcnvi) converts a string of EBCDIC
	characters into ASCII.
	
	NOTE: The return conversion can be performed using Convert_Outgoing.
	
	CM_ENTRY Convert_Incoming(
	 unsigned char FAR *string,
	 CM_INT32 FAR *string_length,
	 CM_INT32 FAR *return_code
	);
	
	Parameters
	----------
	
	string
	
	Supplied parameter. Specifies the EBCDIC string to be converted. It may contain
	any of the following characters:
	
	  Uppercase A-Z, lowercase a-z, 0-9, the period (.) and space
	  characters, and the special characters < > + - ( ) &
	  * ; : , ' ? / _ = ". 
	
	  string_length characters of this string will be replaced by ASCII    equivalents.
	
	string_length
	
	Supplied parameter. Specifies the number of characters to be converted (1 -
	32767).
	
	return_code
	
	The code returned from this call. The valid return codes are listed below.
	
	Return Codes:
	
	CM_OK Primary return code; the call executed successfully, the string parameter
	now contains the converted ASCII string.
	
	CM_PROGRAM_PARAMETER_CHECK Primary return code; the string_length parameter
	specified an invalid value.
	
	CM_PRODUCT_SPECIFIC_ERROR Primary return code; a product-specific error occurred
	and has been logged in the product's error log.
	
	State Changes:
	
	The conversation can be in any state. There is no state change.
	
	Remarks:
	
	When data is being received in buffer format in a basic conversation the data
	buffer may contain multiple logical records; each consisting of a two- byte
	length field (NN), followed by the data. The application must extract and
	convert each data string separately (not including the NN bytes). It must not
	attempt to convert the whole buffer in one operation, because this will make the
	NN values invalid.
	
	Convert_Outgoing()
	------------------
	
	The Convert_Outgoing call (function name cmcnvo) converts a string of ASCII
	characters into EBCDIC.
	
	NOTE: The return conversion can be performed using Convert_Incoming.
	
	CM_ENTRY Convert_Outgoing(
	 unsigned char FAR *string,
	 CM_INT32 FAR *string_length,
	 CM_INT32 FAR *return_code
	);
	
	Parameters:
	
	string - Supplied parameter. Specifies the ASCII string to be converted. It may
	contain any of the following characters:
	
	  Uppercase A-Z, lowercase a-z, 0-9, the period (.) and space
	  characters, and the special characters < > + - ( ) & * ; : , '  ?
	  / _= ".
	
	  string_length characters of this string will be replaced by EBCDIC 
	  equivalents.
	
	string_length - Supplied parameter. Specifies the number of characters to be
	converted (1 - 32767).
	
	return_code - The code returned from this call. The valid return codes are listed
	below.
	
	Return Codes:
	
	CM_OK Primary return code; the call executed successfully, the string parameter
	now contains the converted EBCDIC string.
	
	CM_PROGRAM_PARAMETER_CHECK Primary return code; the string_length parameter
	specified an invalid value.
	
	CM_PRODUCT_SPECIFIC_ERROR Primary return code; a product-specific error occurred
	and has been logged in the product's error log.
	
	State Changes:
	
	The conversation can be in any state. There is no state change.
	
	Remarks:
	
	When data is being received in buffer format in a basic conversation the data
	buffer may contain multiple logical records; each consisting of a two- byte
	length field (NN), followed by the data. The application must extract and
	convert each data string separately (not including the NN bytes). It must not
	attempt to convert the whole buffer in one operation, because this will make the
	NN values invalid.
	
	For additional information about character conversion support, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q139114 SNA Server Support for ASCII-EBCDIC Character Conversion
	
	
	Additional query words: ebcdic ascii convert conversion CPI-c appc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
