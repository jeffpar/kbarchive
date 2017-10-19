---
layout: page
title: "Q228324: SMS: Delete File(s) &quot;Remove Dir. Containing Files&quot; Option Fails"
permalink: /kb/228/Q228324/
---

## Q228324: SMS: Delete File(s) &quot;Remove Dir. Containing Files&quot; Option Fails

	Article: Q228324
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Remove Directory Containing Files option of the Delete File(s) action in the
	Script Editor view of Systems Management Server Installer may fail to remove the
	target directory. If you try to manually delete the directory using Windows
	Explorer, the following error might appear:
	
	  Cannot remove folder <directory name>: There has been a sharing
	  violation. The source or destination file may be in use.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server 2.0. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q236325 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	This problem was first corrected in Systems Management Server 2.0 Service Pack
	Service Pack 1.
	
	Additional query words: prodsms installer smsinst
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200 kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0; winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
