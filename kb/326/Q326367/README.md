---
layout: page
title: "Q326367: Request Unit Sizes Greater Than 16 KB Are Incorrectly Calculated"
permalink: kb/326/Q326367/
---

## Q326367: Request Unit Sizes Greater Than 16 KB Are Incorrectly Calculated

	Article: Q326367
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4 Kbhostintegserv2000
	Last Modified: 25-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set an Advanced Program-to-Program Communications (APPC) Mode
	definition's Max Send RU Size or Max Receive RU Size to greater than 32 KB
	(32,768), the SNA Server service specifies primary and secondary maximum request
	unit (RU) size values that are not valid in a BIND request (BIND bytes 10 and
	11, respectively).
	
	As a result, the SNA Server service issues an SNA UNBIND command to end the
	session.
	
	CAUSE
	=====
	
	The SNA Server service is designed to limit the RU size to 16384 (16 KB) bytes,
	however, SNA Manager limits the RU size to 65527 bytes (65 KB).
	
	The SNA Server service handles the maximum RU size setting as follows:
	
	- If the maximum RU size is between 16384 and 32768, the SNA Server service
	  uses an RU size of 16384 bytes.
	
	- If the maximum RU size is greater than 32768, the SNA Server service uses an
	  invalid value for the RU size because the two-byte signed value overflows.
	
	WORKAROUND
	==========
	
	To prevent this problem from occurring, set maximum send and receive RU size
	values that are between 256 and 16384.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in SNA Server 4.0 and Host
	Integration Server 2000.
	
	
	MORE INFORMATION
	================
	
	The request unit (RU) size values represent the maximum size of the data message
	that can be sent or received between SNA Server and the Host. If an application
	has a data request that is larger than the maximum, the SNA Server service
	breaks this request into multiple blocks to fit each block in the maximum RU
	size.
	
	IMPORTANT: The minimum RU size on Host Integration Server 2000 is 256. The valid
	range for Max Send RU Size and Max Receive RU Size is from 256 through 16384;
	the default is 1024.
	
	The Host Integration Server 2000 Help documentation states that the valid Max
	Send RU Size and Max Receive RU Size value range is between 256 and 16384. If
	you use values that are greater than 65 KB (65535), and if you try to save or
	exit the APPC Mode Properties page, the following error message appears:
	
	  Please enter an integer between 256 and 65527
	
	This gives the incorrect impression that the supported values are 256 to 65527.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbsna400sp4 Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
