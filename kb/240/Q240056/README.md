---
layout: page
title: "Q240056: SMS: Forced Sites Registry Key Entry Causes Multiple Errors"
permalink: /kb/240/Q240056/
---

## Q240056: SMS: Forced Sites Registry Key Entry Causes Multiple Errors

	Article: Q240056
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Forced Sites registry key to assign Systems Management Server (SMS)
	clients to specific sites can causes the following problems:
	
	- The Sites tab in Control Panel may show random ASCII characters.
	
	- Only the core client components are installed.
	
	- The client does not receive advertisements.
	
	- Viewing the client from the collections node shows "Assigned = No."
	
	CAUSE
	=====
	
	To use this feature, the client's registry needs to be changed as follows:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Sites
	
	  REG_MULTI_SZ type named "Forced Sites"
	
	This should contain a list of site codes.
	
	The Microsoft Windows 95 registry editor does not allow users to add a
	REG_MULTI_SZ type, even though it is a supported registry type. The problem
	occurs when users add the value as a String (REG_SZ).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	To Install This Fix
	-------------------
	
	Place the Site4c.exe file on the Windows 95 client computer and run it with one
	of the following parameters:
	
	  SITE4C /? - Shows this text
	  SITE4C <XXX> - Adds the site code to the list
	  SITE4C /D <XXX> - Deletes the site code from the list
	  SITE4C /D* - Deletes all entries from the list
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
