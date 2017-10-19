---
layout: page
title: "Q235964: Recovery Operation for Certificate Server May Invalidate Keys"
permalink: /kb/235/Q235964/
---

## Q235964: Recovery Operation for Certificate Server May Invalidate Keys

	Article: Q235964
	Product(s): Internet Information Server
	Version(s): winnt:1.0,4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbinterop kbtool kbWinNT4sp6fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	- Microsoft Certificate Server version 1.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you back up certificate files from an existing certificate server and restore
	them to a second certificate server, when you reinstall the second certificate
	server you may find that the key at the end of the Use Existing Keys list in the
	Setup window is invalid. In addition, the key that corresponds to your
	Certificate Authority name may be invalid.
	
	CAUSE
	=====
	
	This behavior occurs because the SYSOCMGR command used to reinstall Certificate
	Server adds an invalid key to the registry.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	For more information about Certificate Server, refer to the following Release
	Notes included with Microsoft Windows NT 4.0 Option Pack:
	
	- Microsoft Certificate Server Version 1.0 Release Notes
	
	- Internet Information Server Version 4.0 Release Notes
	
	To ensure successful installation, the new certificate server must be based on
	the code obtained from the Certificate Server QFE. The Certificate Server QFE is
	available at the following FTP site:
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/certserv/
	
	For additional information about how to restore a certificate server and the
	tools involved, please see the following articles in the Microsoft Knowledge
	Base:
	
	  Q184695 Readme Notes for Certificate Server Update
	
	  Q185195 How to Use Key and Certificate Backup/Restore Utility
	
	
	Additional query words: security garbage
	
	======================================================================
	Keywords          : kbinterop kbtool kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search kbiisSearch kbiis400 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : winnt:1.0,4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
