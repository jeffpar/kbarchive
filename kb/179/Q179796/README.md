---
layout: page
title: "Q179796: XWEB: Setup Error Installing Exchange 5.5 OWA Components"
permalink: /kb/179/Q179796/
---

## Q179796: XWEB: Setup Error Installing Exchange 5.5 OWA Components

	Article: Q179796
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Internet Information Server (IIS) version 4.0 for
	Windows NT 4.0 from the Windows NT Option Pack and attempt to load the Outlook
	Web Access (OWA) components from Exchange Server 5.5, the following Setup error
	message may appear:
	
	  "Setup has detected that you are not running a set of Windows NT related
	  fixes required for Outlook Web Access. Please see the Release Notes for
	  further instructions."
	
	  Microsoft Exchange Server Setup
	  ID no: c1037997
	
	CAUSE
	=====
	
	Window NT 4.0 post Service Pack 3 hotfixes are not installed.
	
	WORKAROUND
	==========
	
	To work around this problem, download the following hotfix from Microsoft:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postsp3/roll-up
	
	NOTE: Roll-upa.exe is the hotfix for the Alpha platform. Roll-upi.exe is the
	hotfix for the Intel platform. Both files are self-extracting executables.
	
	MORE INFORMATION
	================
	
	From the Microsoft Exchange 5.5 CD Release Notes in the System Requirements
	Section:
	
	Windows NT Server SP3 is required to install Microsoft Exchange Server. It is
	strongly recommended that you upgrade your Microsoft Exchange Server computer to
	Windows NT SP4 when it is available. Until that time, you should install the hot
	fixes that are available from
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postsp3/roll-up
	
	If you are using Microsoft Exchange Server in a clustering environment, these hot
	fixes are required. If you install Microsoft Outlook Web Access on your
	Microsoft Exchange Server computer, these hot fixes are strongly recommended.
	
	Also, For additional information on the Roll-up Post Sp3 Hotfix, please see the
	following articles in the Microsoft Knowledge Base:
	
	  q147222 Group of Hotfixes for Exchange 5.5 and IIS 4.0
	
	  q150734 List of Bugs Fixed in Windows NT 4.0 Service Packs (Part 1)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbiisSearch kbExchangeSearch kbExchange550 kbiis400 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : :4.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
