---
layout: page
title: "Q203003: SMS: Erratic Mouse Behavior During Remote Control Session"
permalink: kb/203/Q203003/
---

## Q203003: SMS: Erratic Mouse Behavior During Remote Control Session

	Article: Q203003
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbsms200bug
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You experience problems with cursor movements during a remote control session,
	such as:
	
	- The cursor movements are very erratic and slow, and you are unable to point
	  and click from both the server and the client.
	
	- During a remote control session, the cursor does not change on the server
	  when you resize an object on a client, but the resized pointer is visible on
	  the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Remote Control Performance
	--------------------------
	
	You can improve remote control performance by performing the following steps:
	
	- Enable 16-color viewing on the client.
	
	- Suppress the client background wallpaper for Windows NT clients. For Windows
	  95 and Windows 98 clients, even if suppress client wallpaper is enabled, you
	  must disable and then reenable this option.
	
	- If you do not need Administrators in languages other than English, then you
	  should remove any others that are on the Permitted Viewers list. To access
	  this list to remove them, in the SMS Administrator console, go to Client
	  Agents. Right-click Remote Tools Client Agent, and then select Properties.
	
	- For Windows NT computers, enable video acceleration.
	
	- Make sure to use Run Length Encoding (RLE) compression.
	
	- Disable the Active Desktop.
	
	For more information on Remote Tools, please refer to the "Systems Management
	Resource Guide", Chapter 9 - Remote Tools for the Advanced User.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
