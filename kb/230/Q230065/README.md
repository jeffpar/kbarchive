---
layout: page
title: "Q230065: How to Use Virtual Directories for Newsgroups"
permalink: kb/230/Q230065/
---

## Q230065: How to Use Virtual Directories for Newsgroups

	Article: Q230065
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To create a virtual directory for a newsgroup, perform the following steps:
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	2. Right-click Default NNTP Site, click New, and then click Virtual Directory.
	
	3. In the New Virtual Directory Wizard dialog box, type the Newsgroup name, and
	  then click Next.
	
	  NOTE: This is NOT case sensitive.
	
	4. Provide the physical path for the directory, and then click Finish.
	
	From now on, the .nws files for articles in the newsgroup will be stored in the
	specified virtual directory, rather than the default location of
	C:\InetPub\nntpfile\root\<NewsgroupName>.
	
	MORE INFORMATION
	================
	
	If no articles were created for the newsgroup before the virtual directory was
	created, then the .xix subject files will also be stored in the virtual
	directory.
	
	However, if articles did exist before the virtual directory was created, the .nws
	files for those articles, along with the existing .xix subject files, will
	continue to reside in the C:\InetPub\nntpfile\root\<NewsgroupName>
	location.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: folder vdir nntp server akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
