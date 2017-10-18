---
layout: page
title: "Q243171: Advertisements Are Received by Clients Outside the Collection"
permalink: kb/243/Q243171/
---

## Q243171: Advertisements Are Received by Clients Outside the Collection

	Article: Q243171
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbAdvertisement kbSoftwareDist kbsms200sp2fix
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a new advertisement, one or more Systems Management Server
	(SMS) clients outside the targeted collection may receive the advertised
	program.
	
	CAUSE
	=====
	
	This problem occurs when the SMS site server assigns an instruction file that
	was previously assigned to a client to another client. This condition occurs
	when advertisement instruction files are deleted from the
	SMS\Inboxes\Offerinf.box folder by the SMS Offer Manager component or manually.
	
	This deletion can occur when an advertisement is deleted and the corresponding
	instruction files are set to zero bytes in size. Later, SMS Offer Manager
	deletes the zero-byte files.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	WORKAROUND
	==========
	
	Because the client's local .lkp file still indicates the name of the old
	instruction file, you must delete these files from the client's local
	%SystemRoot%\MS\SMS\Clicomp\Swdist32\CAP folder. To eliminate any potential for
	this problem, delete all of the files and folders in the CAP folder from all SMS
	clients. This forces the SMS client to rebuild this information from the data on
	the client access point (CAP).
	
	Because this behavior is associated with deleting an advertisement, you can also
	avoid the problem by not deleting advertisements. Instead of deleting an
	advertisement, you can disable an advertised program on the Advanced tab of the
	program's properties.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbAdvertisement kbSoftwareDist kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
