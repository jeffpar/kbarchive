---
layout: page
title: "Q121234: Running Macintosh Installer from a Package Subfolder"
permalink: kb/121/Q121234/
---

## Q121234: Running Macintosh Installer from a Package Subfolder

	Article: Q121234
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsAdmin smsadmin
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Macintosh software package is created that contains the actual Installer in
	a subfolder of the root of the original source package, and the package is then
	distributed to a Macintosh client, the following message appears and Installer
	cancels:
	
	  The files needed for this installation could not be found on your server
	  volume "SMS_SHR." Please contact your network administrator.
	
	CAUSE
	=====
	
	This problem can be caused by a path name syntax error in the Command Line box
	in the Command Line Properties dialog box of the Systems Management Server
	Administrator program for the package.
	
	RESOLUTION
	==========
	
	Make sure that if there is an executable file inside a subfolder of the package
	root, that the path begins with a colon (:), followed by the folder names and
	ending with the name of the executable file. If there are spaces in any of the
	folder or file names, then the entire path needs to be surrounded by quotation
	marks. For example, ":Master Set 1:Installer" for a package named "Mac Fonts,"
	which includes folders Master Set 1, Master Set 2, and so on, and the Installer
	application inside Master Set 1 is the executable file.
	
	The path needs to begin with a colon because while MS-DOS, PC-DOS, and clone
	operating systems use a backslash (\) to delimit paths, Apple Macintosh System
	software uses a colon (:). Without the leading colon, the Macintosh System
	software interprets any path as starting with a volume name.
	
	Additional query words: sms prodsms mac systems management
	
	======================================================================
	Keywords          : kbnetwork kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
