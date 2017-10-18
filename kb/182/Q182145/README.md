---
layout: page
title: "Q182145: SMS: Error in Prodspec.ini in WinNT 4.0 (KOR and CHT Versions)"
permalink: kb/182/Q182145/
---

## Q182145: SMS: Error in Prodspec.ini in WinNT 4.0 (KOR and CHT Versions)

	Article: Q182145
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP3,4.0
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP3 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	The correct version of the Prodspec.ini file will be included in the next
	service pack update to Windows NT.
	
	SYMPTOMS
	========
	
	A computer running inventory on the Korean (KOR) or Traditional Chinese (CHT)
	versions of Windows NT and Systems Management Server cannot differentiate
	between Windows NT Workstation and Windows NT Server. Specifically, the
	inventory rule in the NT40srv.pdf and NT40wks.pdf files cannot tell the
	difference between a computer running Windows NT Workstation 4.0 and Windows NT
	Server 4.0.
	
	CAUSE
	=====
	
	Windows NT 4.0 includes a file named Prodspec.ini. This file is used for Systems
	Management Server inventory to identify Windows NT 4.0 and differentiate between
	Windows NT Server and Windows NT Workstation. However, Korean and Traditional
	Chinese versions of Windows NT 4.0 include the same Prodspec.ini file
	(specifically, the Windows NT Workstation 4.0 version of Prodspec.ini is used
	for both). Therefore, the inventory rule in the NT40srv.pdf and NT40wks.pdf
	files cannot tell the difference between a computer running Windows NT
	Workstation 4.0 and Windows NT Server 4.0.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Locate the Prodspec.ini file in the Smssetup\Common\<Langdir>
	  directory, where <Langdir> is Korean or TChinese, depending on whether
	  you are using the Korean or Traditional Chinese version of Systems Management
	  Server 1.2 Service Pack 3.
	
	2. Create a job to distribute this file to your computers running Windows NT
	  Server 4.0 (using other hardware inventory data for the query). Make sure the
	  file is placed in the %Winroot%\System32 directory.
	
	At this point, the software inventory rule in the NT40srv.pdf file that comes
	with Systems Management Server 1.2 Service Pack 3 will be able to correctly
	detect Korean or Traditional Chinese Windows NT Server 4.0 computers.
	
	Additional query words: prodsms TChinese sp sp3 HW
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120SP3
	Version           : :1.2 SP3,4.0
	Issue type        : kbprb
	
	=============================================================================
	
