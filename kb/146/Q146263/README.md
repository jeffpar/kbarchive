---
layout: page
title: "Q146263: XFOR: IMC Packages Failed Messages in ATT, DAT, or TXT"
permalink: /kb/146/Q146263/
---

## Q146263: XFOR: IMC Packages Failed Messages in ATT, DAT, or TXT

{% raw %}

	Article: Q146263
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Internet Mail Connector (IMC) creates a file and copies
	failed messages to the file. The file has an ATT, TXT, or DAT extension. The
	file extension assignment is done in the following manner:
	
	- If an inbound conversion fails, the raw message is copied to a file with the
	  TXT file extension. For example, the file name can be Att00xxx.txt.
	
	- MIME messages. If a parameter is not found in the headers that can be used as
	  an attachment name, IMC creates a file with the ATT file extension (either
	  from the MIME Type configuration or Content-Type header information). If the
	  MIME Content-Type is configured in the property page, the file with the ATT
	  file extension is used. If the Content-Type is not configured, the file with
	  the DAT file extension is used.
	
	- If no file name information is detected for non-MIME messages (in
	  X-MS-Attachment header or Begin header) and the bodypart is a UUENCODED
	  bodypart, IMC creates a file with the DAT file extension.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
