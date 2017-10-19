---
layout: page
title: "Q241151: MMC: All Sites Are Stopped and Opening a Web Site Causes Error"
permalink: /kb/241/Q241151/
---

## Q241151: MMC: All Sites Are Stopped and Opening a Web Site Causes Error

	Article: Q241151
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Internet Service Manager (ISM) in the Microsoft Management Console
	(MMC) is opened, all sites under the computer are shown in the Stopped state,
	even though they may actually be running.
	
	Also, attempting to open a Web site causes the following error message to be
	displayed:
	
	  Unable to enumerate files and directories because the following error
	  occurred:
	  The system cannot find the path specified.
	
	CAUSE
	=====
	
	The Windows user account that you are logged onto the computer with does not
	have the Administrator privilege.
	
	RESOLUTION
	==========
	
	Log onto the computer with a user account that has the Administrator privilege.
	
	If this fails to resolve the issue, delete the following key:
	HKCU\Software\Microsoft\Cryptography\Userkeys\MS_IIS_DCOM_CLIENT
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: user name username errmsg kberrmsg permission akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
