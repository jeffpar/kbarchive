---
layout: page
title: "Q218466: How to Publish Phonebooks Using Phone Book Administrator"
permalink: /kb/218/Q218466/
---

## Q218466: How to Publish Phonebooks Using Phone Book Administrator

	Article: Q218466
	Product(s): Internet Information Server
	Version(s): WINDOWS:4.01,4.01a,5.0; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Explorer Administration Kit versions 4.01, 4.01a, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Connection Manager Administration Kit to
	publish a phone book to users of the Connection Manager.
	
	MORE INFORMATION
	================
	
	Publishing Phone Books
	
	  After the Connection Point Services(CPS) Phone Book Administrator(PBA) has
	  been used to create a phone book containing dial-up entries, the phone book
	  may be released and distributed to users from an FTP site. Phone books are
	  published by first creating a phone book release, then posting the release to
	  an FTP server.
	
	  Only those Points Of Presence (POPs) listed as In Service are included in a
	  Phone Book release. Note that the Phone Book Administrator will not publish a
	  Phone Book unless changes have been made since the last time the Phone Book
	  was published.
	
	Use the following steps to release and post the phone book database and files:
	
	1. Click Start, point to Programs, point to Windows NT 4.0 Option Pack, point to
	  Internet Connection Services for RAS, and then click Phone Book
	  Administrator.
	
	2. Select the phone book in the Phone books list.
	
	3. If you have not done so already, specify the Connection Point server address
	  to post the phone book files and database by clicking Options, and then
	  typing the server address, user name, and password.
	
	4. On the Tools menu, click Publish Phone Book.
	
	5. In the Publish Phone Book dialog box, type the path name of a release
	  directory.
	
	6. Click Create. The phone book, .cab, and version files are created and placed
	  in the release directory.
	
	7. Click Post.
	
	8. Click Close.
	
	NOTES
	
	- If you specify a release directory on a remote computer, you may have to
	  reset the directory every time you publish a phone book. Every time you
	  propagate a phone book by posting, it increments the version number of the
	  phone book. If you post to multiple servers, the version numbers will be
	  inaccurate. To propagate a phone book to multiple servers, use the Content
	  Replication System (CRS) in Microsoft Site Server 2.0.
	
	- You must enable write permissions on PBData in the FTP site directory. To do
	  this, use the following steps:
	
	  1. Click Start, point to Programs, point to Windows NT 4.0 Option Pack, and
	     then click Internet Service Manager.
	
	  2. Expand the Default FTP Site and right-click PBData.
	
	  3. Select Properties.
	
	  4. In the FTP Site directory, check the Write permissions box.
	
	- Make sure that allow only anonymous connections is not selected for the FTP
	  directory:
	
	  1. Click Start, point to Programs, point to Windows NT 4.0 Option Pack, and
	     then click Internet Service Manager.
	
	  2. Right-click the Default FTP Site. Select Properties.
	
	  3. Click the Security Accounts tab and clear the Allow Only Anonymous
	     Connections checkbox, if checked.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbIEsearch kbIEAKSearch kbiis400 kbIEAK401 kbIEAK401a kbIEAK500
	Version           : WINDOWS:4.01,4.01a,5.0; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
