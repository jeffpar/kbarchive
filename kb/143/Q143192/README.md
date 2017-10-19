---
layout: page
title: "Q143192: Access Is Denied Error in Internet Service Virtual Directory"
permalink: /kb/143/Q143192/
---

## Q143192: Access Is Denied Error in Internet Service Virtual Directory

	Article: Q143192
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply the new service properties for your File Transfer Protocol
	(FTP), Gopher, and World Wide Web (WWW) servers, the following error message
	appears in the Directories tab of the server Service Properties:
	
	  Access is denied.
	
	This error appears after you create a virtual publishing directory in Microsoft
	Internet Service Manager by specifying a link to an existing network share in
	universal naming convention (UNC) format.
	
	CAUSE
	=====
	
	This problem occurs if the user account information is missing in the
	Directories tab of the FTP, Gopher, and WWW server Service Properties.
	
	RESOLUTION
	==========
	
	To correct this problem, enter the correct user account information as follows:
	
	1. Run Internet Service Manager again.
	
	2. Select the computer name for the service. From the Properties menu, select
	  Service Properties.
	
	3. Choose the Directories tab and select the publishing directory.
	
	4. Choose Edit Properties.
	
	5. Enter the account information in the following format and choose OK:
	
	  User Name: <domain name>\<user name>
	  Password: <Password for user name>
	
	6. In the Service Properties dialog box, choose Apply and then choose OK.
	
	7. In the main window of Internet Service Manager, select the computer and the
	  service you just changed.
	
	8. From the Properties menu, select Service Properties. Choose the Directories
	  tab. The error message has disappeared.
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis100
	Version           : :1.0
	
	=============================================================================
	
