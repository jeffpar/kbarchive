---
layout: page
title: "Q176427: Daorisc.exe Installs DAO for Alpha (RISC)"
permalink: kb/176/Q176427/
---

## Q176427: Daorisc.exe Installs DAO for Alpha (RISC)

	Article: Q176427
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbfile kbDAOsearch kbVC500bug kbVC600fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, used with:
	   - Microsoft Visual C++, 32-bit Editions, version 5.0, on platform(s):
	      - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DAO SDK that was provided with Visual C++ 5.0 (RISC Edition) does not
	install correctly. A new version is now available to correct the problem. Users
	on Alpha Visual C++ version 5.0 will not be able to access the DAO components
	until the updated DAO SDK is installed.
	
	The file Daorisc.exe (5.5 MB) is a self-extracting archive that extracts the new
	DAO SDK for RISC. Alpha users should run the Setup.exe located in the disk1
	directory.
	
	NOTE: The ALPHA version of the Jet Database Engine does not contain the
	Installable ISAMs (Microsoft Excel, Microsoft FoxPro, and so on). The ALPHA
	version of Jet allows access only to Jet Database .mdb files.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Daorisc.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	DAO does not support replication on the Alpha, even with this patch.
	
	Additional query words: DAO SDK RISC ALPHA
	
	======================================================================
	Keywords          : kbfile kbDAOsearch kbVC500bug kbVC600fix 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
