---
layout: page
title: "Q164542: MGET to an IBM Host FTP Server Returns Garbage Characters"
permalink: kb/164/Q164542/
---

## Q164542: MGET to an IBM Host FTP Server Returns Garbage Characters

	Article: Q164542
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the File Transfer Protocol (FTP) utility MGET command to an IBM
	Host FTP server, the server may return garbage characters when the mode is set
	to Image (Binary). For example, here is a sample of the output you may receive:
	
	  ftp> bin
	  200 Representation type is Image
	  ftp> mget txt*
	  mget ptpnptp=ptp=ptp(? Y
	  Error opening local file ptpnptp=ptp=ptp(
	  ptpnptp=ptp=ptp(:Invalid argument
	  ftp>
	
	CAUSE
	=====
	
	IBM Host (mainframe or mini-computer(S/38 or AS/400)) uses EBCDIC (Extended
	Binary Coded Decimal Interchange Code) as the character representation scheme.
	Personal computers use ASCII. EBCDIC is an 8-bit code while ASCII is 7-bit.
	
	When you set the mode to Image mode and send the MGET command as in the previous
	example, the NLST command is sent to the IBM Host FTP server in binary format.
	The IBM Host FTP server has no way of knowing if the client making the request
	is an ASCII or EBCDIC client. It returns the list of files in its default
	encoding scheme, which is EBCDIC. This causes the problem because personal
	computers do not understand EBCDIC.
	
	RESOLUTION
	==========
	
	Apply the hotfix mention in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt ftp
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
