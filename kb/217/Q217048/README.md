---
layout: page
title: "Q217048: Lmsdk/Netwksta: Programmatically Log Off Domain from Win95/98"
permalink: /kb/217/Q217048/
---

## Q217048: Lmsdk/Netwksta: Programmatically Log Off Domain from Win95/98

	Article: Q217048
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98
	Operating System(s): 
	Keyword(s): kbfile kbnetwork _IK12469 kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a programmatic workaround for the problem described in the
	following Microsoft Knowledge Base article:
	
	  Q157174 Windows NT Logon Script Does Not Run on Windows 95 RAS Client
	
	On Win9x, if a mobile user tries to log on to a domain when the mobile machine is
	not connected, the user will receive the following error message:
	
	  No Domain Server was available to validate your password. You may not be able
	  to gain access to some network resources. OK, Cancel.
	
	If the user clicks OK and then later uses RAS to dial in to a domain, the logon
	script won't run because the machine assumes it has already logged on to the
	domain. The workaround is to call the 16-bit LAN Man API NetWkstaSetUID2 to
	programmatically log off the domain before using RAS to dial into the domain.
	
	The 16-bit Microsoft LAN Manager Programmer's ToolKit version 2.1 is provided
	with this Microsoft Knowledge Base article for your convenience. A Visual C
	version 1.52 MS-DOS project demonstrating the NetWkstaSetUID2 API to log off a
	domain is also provided.
	
	To use the sample, run "netwks16 -d yourdomain -f 3" (without the quotation
	marks) in an MS-DOS console window. This logs you off the domain.
	
	NOTE: This method should be used only if you encounter the problem described in
	the KB article above. Furthermore, Microsoft does not recommend programmatically
	logging off or on to a domain, because it opens up possible security problems if
	the program stores and/or retrieves the password.
	
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Download Lmsdk.exe now
	
	  Download Netwksta.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbnetwork _IK12469 kbgraphxlinkcritical 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95,98
	Issue type        : kbinfo
	
	=============================================================================
	
