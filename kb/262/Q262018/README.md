---
layout: page
title: "Q262018: SMS: SMS Installer Error Message Using Oracle ODBC Script Items"
permalink: kb/262/Q262018/
---

## Q262018: SMS: SMS Installer Error Message Using Oracle ODBC Script Items

	Article: Q262018
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.2,2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsInst kbsms200preSP3fix
	Last Modified: 07-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Systems Management Server (SMS) Installer program to create a
	script that will install the Oracle ODBC items, you may receive the following
	error message:
	
	  The include script C:\program files\Microsoft SMS
	  Installer\include\odbc32or.ipf could not be opened.
	
	CAUSE
	=====
	
	This problem occurs when the Systems Management Server Installer is installed on
	a workstation or server because the Odbc32or.ipf file is missing. This file is
	not part of the package that is expanded during the installation. Note that this
	problem only occurs with Systems Management Server Installer versions
	2.00.00.0091 and earlier.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          : kb3rdparty kbtool kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsInst kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMSI100 kbSMSI200
	Version           : :1.0,1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
