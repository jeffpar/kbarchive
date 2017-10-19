---
layout: page
title: "Q214627: Saving a Document May Fail Across a Share Point"
permalink: /kb/214/Q214627/
---

## Q214627: Saving a Document May Fail Across a Share Point

	Article: Q214627
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): TSESP4Fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to save a file to your ROOTDRIVE, you may receive one of the
	following error messages:
	
	  Check the drive to make sure the door is closed and it contains the correct
	  disk or CD.
	
	  -or-
	
	  Your changes could not be saved to 'xxxxx.xx', but were saved to a temporary
	  document named 'xxxxxxxx'. Close the existing document, then open the
	  temporary document and save it under a new name.
	
	When you save a Microsoft Office document to a remote share, you may receive the
	following error message:
	
	  Check the drive to make sure the door is closed and it contains the correct
	  disk or CD.
	
	CAUSE
	=====
	
	These error messages will occur if the user who is currently logged on has a
	home directory (or Terminal Server home directory) specified in User Manager as
	Connect X: \\Server\Username. You will not see these error messages if a user's
	home directory (or Terminal Server home directory) is specified as Connect X:
	\\Server\Users\Username.
	
	NOTE: If you specify a home directory only, the user will get that home directory
	regardless of how the user logs on.
	
	If you specify a Terminal Server home directory only, the user will get this home
	directory only when the user logs on to the domain from any Terminal Server
	console or through the Terminal Server client. Otherwise, the path will be
	ignored.
	
	If you specify both a home directory and a Terminal Server home directory, the
	user will use the Terminal Server home directory when the user logs on to the
	domain from any Terminal Server console or through the Terminal Server client.
	
	This problem may also occur if the share was mapped using the MS-DOS SUBST
	command. The SUBST command is used by the compatibility scripts to map drives.
	This problem will most often occur if the user's home directory is on a remote
	computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	Method 1
	--------
	
	1. Share the folder above the user's folder.
	
	2. Set the user's home directory or Terminal Server home directory to be
	  \\Server\Users\Username.
	
	Method 2
	--------
	
	1. Edit the Usrlogon.cmd file located in the %SystemRoot%\System32 directory.
	  Find the following section:
	
	     Rem
	     Rem Map the User's Home Directory to a Drive Letter
	     Rem
	
	     Net Use %RootDrive% /D >NUL: 2>&1
	     Subst %RootDrive% /d >NUL: 2>&1
	     Subst %RootDrive% %HomeDrive%%HomePath%
	
	2. Make the above section look like this:
	
	     Rem
	     Rem Map the User's Home Directory to a Drive Letter
	     Rem
	
	     Net Use %RootDrive% /D >NUL: 2>&1
	     Subst %RootDrive% /d >NUL: 2>&1
	     If %HomePath% == \ Subst %RootDrive% %HomeShare%
	     If Not %Homepath% == \ Subst %RootDrive% %HomeDrive%%HomePath%
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	Additional query words: 4.00 wts tse normal.dot
	
	======================================================================
	Keywords          : TSESP4Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
