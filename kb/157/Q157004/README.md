---
layout: page
title: "Q157004: XCLN: Text Files Sent from Macintosh via IMC are Corrupted"
permalink: kb/157/Q157004/
---

## Q157004: XCLN: Text Files Sent from Macintosh via IMC are Corrupted

	Article: Q157004
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a text file on a Macintosh and attach it to a message that you
	send from the Microsoft Exchange Macintosh client over the Microsoft Exchange
	Internet Mail Connector (IMC), the file might contain extra characters at the
	beginning of the file. This will occur when the IMC is set up to use MIME to
	encode messages.
	
	CAUSE
	=====
	
	This problem is caused by the IMC converting these files to a MIME Content- Type
	of Text/AppleFile instead of Application/AppleFile.
	
	WORKAROUND
	==========
	
	- Strip the .TXT extension from the file before sending it.
	
	- Run ResEdit against the .TXT file before sending it. This will add a Resource
	  Fork and will be sent as a correct AppleDouble file.
	
	- Always send to the recipient in RTF format. This sends all messages in a
	  Application/MS-TNEF format which works fine if your sending to a system that
	  understands this MIME type, usually another IMC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The two major MIME types for Macintosh files are AppleSingle and AppleDouble.
	
	When they are sent over the IMC, you should see the following:
	
	- AppleSingle files are sent as Application/AppleFile
	
	- AppleDouble files sent as Multipart/AppleDouble with two additional
	  "sub-parts" of Application/AppleFile and Application/Octet-Stream (or another
	  if the exact file type can be determined).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbExchange400Mac
	Version           : WINDOWS:4.0; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
