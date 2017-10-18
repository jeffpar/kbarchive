---
layout: page
title: "Q140839: Disk and Setup Problems with Win16 to Win32 Thunking DLL Files"
permalink: kb/140/Q140839/
---

## Q140839: Disk and Setup Problems with Win16 to Win32 Thunking DLL Files

	Article: Q140839
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
	
	There are two issues with the Win16 to Win32 thunking DLL files:
	
	- The \CLIENTS\WINNT\<Processor>\THUNK directory on the SNA Server 2.11
	  compact disc misses the critical SNAHLP32.DLL file. This file provides all
	  the mapping between the 16-bit and 32-bit interfaces.
	
	  NOTE: The SNA Server 2.11 compact disc includes the Win16 to Win32 thunking
	  DLLs in both of the following directories:
	
	   - <Processor>\SYSTEM\THUNK
	
	   - \CLIENTS\WINNT\<Processor>\SYSTEM\THUNK
	
	  where <Processor> stands for the I386, ALPHA, MIPS, or PPC processeor
	  names that are used depending on what platform you are installing the SNA
	  Server or Windows NT client on.
	
	- When you install a Windows NT client, the \THUNK directory and files are not
	  copied to the hard drive even though they should be copied to the
	  <snaroot>\SYSTEM\THUNK\ directory.
	
	  NOTE: When you install the SNA Server, the \<Processor>\SYSTEM\THUNK\*.*
	  files are copied properly to the server <snaroot>\SYSTEM\THUNK\*.*
	  directory.
	
	  NOTE: <Processor> stands for the I386, ALPHA, MIPS, or PPC processeor
	  names that are used depending on what platform you are installing the SNA
	  Server or Windows NT client on.
	
	RESOLUTION
	==========
	
	Microsoft has updated the SNA Server SETUP.EXE file to copy the \THUNK directory
	and files to client computer during the Windows NT SNA client installation.
	
	In addition, SNAHLP32.DLL will be included in the
	CLIENTS\WINNT\<Processor>\THUNK directory on the next SNA Server compact
	disc.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
