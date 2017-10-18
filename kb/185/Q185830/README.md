---
layout: page
title: "Q185830: Small Business Server Fax Ignores Retry Delay"
permalink: kb/185/Q185830/
---

## Q185830: Small Business Server Fax Ignores Retry Delay

	Article: Q185830
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set up the fax on the server to be available only at certain hours, the
	fax server ignores the retry delay value and retries immediately if the target
	fax is busy.
	
	RESOLUTION
	==========
	
	Set the fax printer to be always available.
	
	For Windows NT clients, a workaround is to configure the Discount rate period in
	Control Panel, Fax Server Tool. Select the Send tab instead, and then at the
	client choose to send the fax at discount rates (in Control Panel, Fax client).
	Then the retry characteristics will be used. This selection is not supported on
	Windows 95 or Windows 98 clients, however.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Small Business Server
	version 4.0 and 4.0a. We are researching this problem and will post additional
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem only occurs if you set up the fax on the server to be available
	only at certain hours. When sending a fax from a Windows 95 client and the
	number called is busy, the server keeps retrying with no delay although you have
	configured the fax service to wait a certain time between the retries.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin95search kbSBServSearch kbZNotKeyword3 kbSBServ400 kbSBServ400a
	Version           : WINDOWS:95; winnt:4.0,4.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
