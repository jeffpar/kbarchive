---
layout: page
title: "Q134967: SMS: Audit Package Fails to Report MIF to Site"
permalink: kb/134/Q134967/
---

## Q134967: SMS: Audit Package Fails to Report MIF to Site

	Article: Q134967
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbAudit smsauditkbfaq
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Audited software property does not show up in the Systems Management Server
	Personal Computer Properties after you run an audit package on a Windows for
	Workgroups client that is part of a Windows NT domain within a Systems
	Management Server site.
	
	On Windows for Workgroups clients that are members of a Windows NT Systems
	Management Server domain and have both Microsoft and NetWare ODI networking
	protocols installed, the audit package fails when run from Package Command
	Manager. The following error is logged in the AUDIT16.LOG file on the client:
	
	     Job Status MIF not created.
	     Reading packages             [Done]
	     Scanning local drives        [Done]
	     Scanning packages            [Done]
	     Writing results              [Done]
	
	     A File error occurred:  File create error in MIF output file on network.
	     Job Status MIF not created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem was corrected in the latest Systems
	Management Server version 1.1 Service Pack. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbAudit smsaudit kbfaq
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
