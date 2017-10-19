---
layout: page
title: "Q253205: Long Event to Trap Translator Description Causes Error Message"
permalink: /kb/253/Q253205/
---

## Q253205: Long Event to Trap Translator Description Causes Error Message

	Article: Q253205
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Eventrap.exe tool to translate a Microsoft Windows NT event and
	you enter description text longer than 2,048 bytes, the following error message
	appears:
	
	  Please enter no more than 2,048 characters.
	
	One common occurrence of this problem involves Microsoft SNA Server event ID 23.
	
	CAUSE
	=====
	
	This problem is caused by the method used to create the dialog box for the event
	text. One of the parameters for this dialog box, which is created by the
	Microsoft Foundation Class library, is maximum buffer size. The maximum buffer
	size is currently 2,048 bytes. The hotfix described below changes the maximum
	buffer size to 16,384 bytes.
	
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
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms 2048
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
