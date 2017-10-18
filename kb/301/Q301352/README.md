---
layout: page
title: "Q301352: SMS: Missing Status Messages on Large Distributions"
permalink: kb/301/Q301352/
---

## Q301352: SMS: Missing Status Messages on Large Distributions

	Article: Q301352
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the software distribution feature of Systems Management Server
	(SMS) to distribute software, a small percentage of the clients may not report
	the status properly in the Administrator console. The more clients per Client
	Access Point (CAP) that run the advertisement at the same time, the higher the
	percentage of clients that are missing the status. When you check the client
	computers manually, it appears that the program did run the advertisement
	successfully, and any software in that advertisement is present. The client logs
	are normal except for the Cqmgr32.log log file, which contains one or more
	entries that are similar to:
	
	  --Validating Item 'Item 61949725'
	  --Servicing Item 'Item 61949725'
	  --Inserted Item[Item 61949725] into list
	  --Trying to copy Item[Item 61949725], copy try no. 1
	  --Item[Item 61949725] NOT copied, already exists, set status to Remove
	  --Skipping Item 'Item 61949725', it is marked for deletion
	  --Removing Item 'Item 61949725'
	
	CAUSE
	=====
	
	The Cqmgr32.log file corresponds to Copy Queue Manager(CQMGR) on the client
	computer. The CQMGR component is the client component that is responsible for
	copying files from the client to the appropriate Inbox on an available CAP.
	During typical processing, CQMGR creates a random file name and then attempts to
	copy the file to the Inbox. If the file name is already in use, the operation
	does not succeed. When this occurs in the copy operation, the CQMGR component
	creates a new random file name and tries the operation again up to 50 times. The
	algorithm that is used in the fix associated with this article replaces the
	algorithm that is used to generate the random file names with a better algorithm
	that is not sensitive to time synchronization.
	
	This problem also exists with other files that the client components send to the
	CAP. However, it is most noticeable with status messages because they are most
	common.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
