---
layout: page
title: "Q247099: Access Denied Connecting to FTP Directory Using &quot;Connect As&quot;"
permalink: kb/247/Q247099/
---

## Q247099: Access Denied Connecting to FTP Directory Using &quot;Connect As&quot;

	Article: Q247099
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When accessing an FTP site whose Home Directory connects to a remote share using
	a UNC path with the "Connect As" feature, one of the following symptoms might
	occur:
	
	- The Access Control List (ACL) permissions of the user account logged onto the
	  FTP session are not used to determine the access permissions for the Home
	  Directory.
	
	- The following error occurs:
	
	  Access Denied
	
	CAUSE
	=====
	
	This is by design. The Home Directory uses the credentials of the user account
	and password specified in the "Connect As" feature to connect to the UNC. All
	access permissions to the Home Directory are determined by the ACLs for that
	"Connect As" user account.
	
	Therefore, the credentials (and associated permissions) for the user account that
	was used to log onto the FTP site are not used to determine access to the UNC
	Home Directory.
	
	RESOLUTION
	==========
	
	To avoid these problems, do one of the following, depending on your situation:
	
	- Do not use the UNC and "Connect As" feature for the Home Directory. Instead,
	  specify a Home Directory on the local computer.
	
	- Specify a user account for the "Connect As" feature that has the appropriate
	  ACL permissions needed by the FTP site users.
	
	MORE INFORMATION
	================
	
	The settings for the UNC and "Connect As" option are specified in the Home
	Directory tab of the FTP site's property sheet in the MMC. The user account
	specified in the "Connect As" option must be a local user account on both the
	FTP site computer as well as the UNC file server computer, or must be a domain
	user account.
	
	Additional References
	---------------------
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q239120 Create a Secure FTP Directory that Uses Password Authentication
	
	  Q237987 FTP GET Does Not Work Correctly on UNC Virtual Directories
	
	  Q201771 How To Set Up an FTP Site So That Users Log Onto Their Folders
	
	  Q195259 FTP Site Mapped to a Remote Share May Have Access Problems
	
	  Q185377 Users Cannot Access FTP or Web Site
	
	
	Additional query words: virtual directory vdir remote share granted storage device restricted ntfs username privileges access Universal Naming Convention
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
