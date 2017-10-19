---
layout: page
title: "Q304334: PRB: Users w/ Proper Permissions Cannot GET Files on FTP Server"
permalink: /kb/304/Q304334/
---

## Q304334: PRB: Users w/ Proper Permissions Cannot GET Files on FTP Server

	Article: Q304334
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP3Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a File Transfer Protocol (FTP) client with proper permissions attempts to
	GET a file on an Internet Information Services (IIS) FTP server, you may receive
	the following error message:
	
	  550 filename.xxx: Access is denied
	
	CAUSE
	=====
	
	The file was previously deleted, but it remains on the FTP server because a
	handle to the file was open at the time of the deletion attempt. The file is
	actually pending deletion. This can result in a situation in which the Inetinfo
	process has an open file handle that prevents access of a file by any other
	local or remote user, and in which users are not disconnected on timeout. For an
	example of how this can occur, see the "More Information" section.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q159199 A File Cannot Be Deleted or Accessed on an NTFS Volume
	
	RESOLUTION
	==========
	
	Use Move.exe or the MoveFileEx API to move the file to another location before
	you delete it, so that the file does not appear in the folder contents on the
	FTP server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services 5.0.
	
	MORE INFORMATION
	================
	
	The FTP connection timeout does not close handles that are opened by a user.
	When a connection timeout occurs, the FTP server checks for a transfer in
	progress, which implies that a file handle is open. The FTP server resets the
	connection timeout when a transfer is in progress, so the handle remains open
	and the user remains connected.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Internet Explorer, open a .zip file by using FTP and leave the download
	  dialog box open.
	
	2. FTP by using Ftp.exe and GET the file. Note that the file downloads as
	  expected.
	
	3. At a command prompt, type "del c:\inetpub\ftproot\file.zip" (without the
	  quotation marks). The file appears to have been deleted.
	
	4. FTP by using Ftp.exe and download the file. You receive a "550: access
	  denied" error message.
	
	5. At a command prompt, attempt to delete the file. You again receive the
	  "access denied" error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP3Fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
