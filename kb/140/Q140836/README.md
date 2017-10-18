---
layout: page
title: "Q140836: Windows 95 AFTP Client Reports WINAPPC.DLL is Corrupt"
permalink: kb/140/Q140836/
---

## Q140836: Windows 95 AFTP Client Reports WINAPPC.DLL is Corrupt

	Article: Q140836
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After installing the Windows 95 SNA Server client you receive the following
	error when running AFTP:
	
	  The c:\sna95\system\winappc.dll file appears to be corrupt.
	  Reinstall the file and try again.
	
	This problem occurs sporadically.
	
	CAUSE
	=====
	
	There is a Win16-bit version of WINAPPC.DLL present on your Win32-bit platform
	(that is, Windows 95 or Windows NT). The AFTP client links to the 16-bit
	WINAPPC.DLL but expects a 32-bit version of WINAPPC.DLL.
	
	RESOLUTION
	==========
	
	AFTP.EXE has been modified so that it now calls WAPPC32.DLL directly.
	
	Microsoft has updated the following files to correct this problem:
	
	  <snaroot>\SYSTEM\AFTP.EXE
	  <snaroot>\SYSTEM\AFTPAPI.EXE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 aftp appc sp1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
