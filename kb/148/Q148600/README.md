---
layout: page
title: "Q148600: Updated OS/2 Client DLL Files Not Included in Service Pack 1"
permalink: kb/148/Q148600/
---

## Q148600: Updated OS/2 Client DLL Files Not Included in Service Pack 1

	Article: Q148600
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server 2.11 Service Pack 1 OS/2 client includes the following updated
	library files (instead of the updated OS/2 client DLL files):
	
	  acsrui.lib
	  acssli.lib
	  appc.lib
	  cpic.lib
	
	These library files are the same files as the ones in the SNA Server 2.11 SDK.
	
	The 211SP102.EXE file contains the updated OS/2 client DLL files (ACSRUI.DLL,
	ACSSLI.DLL, APPC.DLL, and CPIC.DLL). You can find this self- extracting file on
	the following service:
	
	- Internet (anonymous FTP)
	  ftp ftp.microsoft.com
	  Change to the Bussys/winnt/sna-public/fixes/sna211/ussp1 /client folder.
	  Get 211SP102.EXE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 1 for NT.
	
	MORE INFORMATION
	================
	
	These updated modules correct general API issues that are found on platforms
	such as 16-bit and 32-bit Windows clients. The API code is supported by common
	source modules for all client platforms. Therefore, the fixes to RUI, SLI, APPC
	and CPIC have also been implemented for the OS/2 client. For a description of
	LUA, APPC, and CPIC interface fixes, run SNASP1.HLP (included in SNA Service
	2.11 Service Pack 1).
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
