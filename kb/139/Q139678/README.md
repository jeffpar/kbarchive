---
layout: page
title: "Q139678: APPC Problem Handling AP_PGM Security with NULL Password"
permalink: kb/139/Q139678/
---

## Q139678: APPC Problem Handling AP_PGM Security with NULL Password

	Article: Q139678
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an APPC application issues an Allocate using AP_PGM conversation security and
	specifies a password of NULL (where the remote system is configured with
	conversation security and a zero-length password), the Allocate will fail with a
	sense code of 080F6051 (AP_SECURITY_NOT_VALID).
	
	CAUSE
	=====
	
	Instead of sending a zero length password in the FMH-5 Attach message, the SNA
	Server APPC library sends a 1-byte password set to a value of "0x40", instead of
	specifying a NULL password as it should.
	
	RESOLUTION
	==========
	
	Microsoft has updated the files, WAPPC32.DLL (for Windows NT), WINAPPC.DLL (for
	Windows 3.x), and APPC.DLL (for OS/2), to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 2.00 2.10 2.11 prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
