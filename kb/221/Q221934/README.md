---
layout: page
title: "Q221934: Err Msg: 530 User &lt;Username&gt; Cannot Log In, Home Directory..."
permalink: kb/221/Q221934/
---

## Q221934: Err Msg: 530 User &lt;Username&gt; Cannot Log In, Home Directory...

	Article: Q221934
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an FTP utility to connect to a Microsoft FTP site, the following
	error occurs:
	
	  530 User <username> cannot log in, home Directory Inaccessible.
	  Login failed.
	
	CAUSE
	=====
	
	This problem occurs when the home directory of the FTP site does not exist or
	the user does not have Read permissions to the home directory.
	
	RESOLUTION
	==========
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	2. Right-click the default FTP site folder, and then click Properties.
	
	3. On the "Home Directory" tab, verify that the "Local Path" listed is valid,
	  and that the "Read" check box is checked.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q170854 FTP Login Fails with Err. Msg: Home Directory Inaccessible
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: login log on logon file transfer prototol open user name akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	
	=============================================================================
	
