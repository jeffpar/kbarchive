---
layout: page
title: "Q234916: SMS: Internal Err. in Admin. Console When Refreshing Pkg. Status"
permalink: /kb/234/Q234916/
---

## Q234916: SMS: Internal Err. in Admin. Console When Refreshing Pkg. Status

	Article: Q234916
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbMMC kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsAdmin
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On sites with a large number of packages, the Microsoft Management Console (MMC)
	Administrator Console may display a message box titled "Internal Error" when you
	attempt to open or refresh one of the nodes under Package Status. The message
	box text is:
	
	  An error occurred during your last operation. Please shut down the Systems
	  Management Server Administrator's Console and restart it. For debugging
	  information, press the More Information button.
	
	The message box may take a long time to come up. If you press the More
	Information button on the message box, it usually looks like the following:
	
	  _com_error exception in MMC Admin UI!
	
	  Description:	Factory Enumeration Failure
	  HRESULT:	0xEEEE0001
	  File:	E:\OPAL\mmcadminui\Support\SMS_NMGR\NMGR_NodeData.cpp
	  Line:	221
	  <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
	  Description:	XXXXX
	
	In the text above, XXXXX is usually something like:
	
	  SQL Err>> DBProcess is DEAD or not enabled.
	  SQL Err>> Invalid operator for datatype op: UNKNOWN TOKEN
	
	Or some other text indicating that there is a problem with the SQL Server.
	
	Other symptoms include an access violation (AV) in SQL Server. Additionally, the
	connection between the SMS Provider and SQL Server may stop responding. The SMS
	Provider will time out in about 10 minutes. When this happens, the Package
	Status nodes in the MMC Administrator Console will show the hourglass and appear
	to have stopped responding until the "Internal Error" message box comes up.
	
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	
	Additional query words: prodsms hang hangs hung admin timout
	
	======================================================================
	Keywords          : kbMMC kbsms200 kbsms200bug kbsms120 kbsms120bug kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
