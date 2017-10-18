---
layout: page
title: "Q185253: Cryptographic Service Provider Not Working After Service Pack 3"
permalink: kb/185/Q185253/
---

## Q185253: Cryptographic Service Provider Not Working After Service Pack 3

	Article: Q185253
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbProgramming kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Microsoft Windows NT Service Pack 3 when Microsoft Enhanced
	Cryptographic Service Provider (CSP) and Microsoft CyrptoAPI versions 1.0 and
	2.0 are installed on your computer, entries for the digital signature may be
	damaged or missing from the registry. If the CSP is not properly registered, it
	does not load and no error message is displayed.
	
	The Advapi32.dll file, included with Windows NT Service Pack 3, may generate
	either of the following error values:
	
	- 0x8009001A (NTE_KEYSET_ENTRY_BAD)
	
	- 0x80090006 (NTE_BAD_SIGNATURE)
	
	RESOLUTION
	==========
	
	A fix to this problem is available that makes the necessary changes to the
	registry. To obtain the fix, download the appropriate self-extracting executable
	file:
	
	+--------------------------------------------+
	| File name    | Date    | Size   | Platform | 
	+--------------------------------------------+
	| Rsaalpha.exe | 7/15/97 | 23,244 | Alpha    | 
	+--------------------------------------------+
	| Rsax86.exe   | 7/15/97 | 23,243 | Intel    | 
	+--------------------------------------------+
	
	These files can be obtained from the following Microsoft FTP site:
	
	  ftp://ftp.microsoft.com/softlib/mslfiles
	
	Each self-extracting executable file contains the following files:
	
	- Readme.txt
	
	- Rsaenh.reg
	
	The Readme.txt file contains instructions about how to merge the required keys
	into your registry, and the Rsaenh.reg file contains the registry key values
	needed to resolve the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	For more information about Microsoft Enhanced Cryptographic Service Provider and
	Microsoft CyrptoAPI, please see the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	For additional information about how to download files from the Microsoft FTP
	site, please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q119591
	  TITLE : How to Obtain Microsoft Support Files from Online Services
	
	
	======================================================================
	Keywords          : kbProgramming kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
