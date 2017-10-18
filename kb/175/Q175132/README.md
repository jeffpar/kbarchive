---
layout: page
title: "Q175132: MGET Command Returns Unintelligible Characters from IBM Host"
permalink: kb/175/Q175132/
---

## Q175132: MGET Command Returns Unintelligible Characters from IBM Host

	Article: Q175132
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the File Transfer Protocol (FTP) tool included with Windows 95 to
	send the MGET command to an IBM Host FTP server, the server may return extended
	or unintelligible characters. For example, you may receive the following
	characters from the server:
	
	  ftp> bin
	  200 Representation type is Image
	  ftp> mget txt*
	  mget ptpaeptp=ptp=ptp(? Y
	  Error opening local file ptpaeptp=ptp=ptp(
	  ptpaeptp=ptp=ptp(:Invalid argument
	  ftp>
	
	CAUSE
	=====
	
	This behavior can occur when you set the FTP tool to Image mode (binary).
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	IBM Host (mainframe or mini-computer [S/38 or AS/400]) uses Extended Binary
	Coded Decimal Interchange Code (EBCDIC) as the character representation scheme,
	whereas personal computers use American Standard Code for Information
	Interchange (ASCII) characters. EBCDIC is an 8-bit code and ASCII is a 7-bit
	code.
	
	When you set the FTP tool to Image mode and send the MGET command as in the above
	example, the NLST command is sent to the IBM Host FTP server in binary format.
	The IBM Host FTP server has no way of knowing if the client making the request
	is an ASCII or EBCDIC client. It returns the list of files using EBCDIC, which
	is its default encoding scheme. Personal computers do not understand EBCDIC, so
	extended or unintelligible characters are displayed.
	
	For additional information in this issue as it affects Windows NT, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q164542 MGET to an IBM Host FTP Server Returns Garbage Characters
	
	Additional query words: garbage
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
