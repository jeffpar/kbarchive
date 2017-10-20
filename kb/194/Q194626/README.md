---
layout: page
title: "Q194626: Shared Folders Unable to Copy Files With Compression Enabled"
permalink: /kb/194/Q194626/
---

## Q194626: Shared Folders Unable to Copy Files With Compression Enabled

{% raw %}

	Article: Q194626
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Shared Folders is unable to copy files to an AS/400 folder with compression
	enabled. In addition, files greater than 6 KB are unable to be copied to the
	AS/400.
	
	CAUSE
	=====
	
	The compression header is not getting inserted into the compressed Request Unit
	(RU) properly if the first element in the RU to be compressed contains no data.
	
	If the Length-checked Compression Indicator (LCCI) bit is set in the Request
	Header (RH), the first 3 bytes in the RU makes up the compression header. The
	bytes should look like the following:
	
	- Byte 1 = 0x11 if using RLE compression or 0x21 if using LZ compression
	
	- Bytes 2 & 3 = length of the uncompressed RU
	
	In the case where there is no data, these bytes are all zeros (000000).
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 and 4.0
	Service Pack 1 for Windows NT. This problem was corrected in the latest SNA
	Server version 4.0 U.S. Service Pack. For information on obtaining this Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces): S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Compression can be enabled in the following places within SNA Manager for an
	AS/400 connection:
	
	- In the mode properties under the Mode Compression tab
	
	- In the connection properties, under the System Identification tab
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
