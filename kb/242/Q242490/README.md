---
layout: page
title: "Q242490: DistMgr Package Removal Does Not Work If Package Share Not Empty"
permalink: /kb/242/Q242490/
---

## Q242490: DistMgr Package Removal Does Not Work If Package Share Not Empty

{% raw %}

	Article: Q242490
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbSoftwareDist kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you distribute multiple packages using a common share and then attempt to
	issue a removal for any of the packages, Distribution Manager (DistMgr) removes
	the package successfully but does not succeed when it attempts to delete the
	common share. This behavior occurs because the share is not empty. The following
	error is logged in the Distmgr.log file:
	
	  The package share directory <path> is not empty, cannot remove the
	  share <name>.
	
	DistMgr attempts the share removal process a number of times.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the common Systems Management Server (SMS)
	package share, or specify unique share names for each package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, follow these steps on the SMS site server:
	
	1. Stop the SMS Executive and SMS Site Component Manager services.
	
	2. Replace the Distmgr.dll file in the <Sms_root>\Bin\<Platform>
	  folder with the version obtained from the hotfix.
	
	3. Restart the SMS Executive and SMS Site Component Manager services.
	
	Additional query words: prodsms distmgr removal
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbSoftwareDist kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
