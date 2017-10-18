---
layout: page
title: "Q103828: RAS Password Authentication Failed"
permalink: kb/103/Q103828/
---

## Q103828: RAS Password Authentication Failed

	Article: Q103828
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT Remote Access Clients cannot be validated if the password contains
	extended characters. Extended characters have ASCII codes above 128.
	
	CAUSE
	=====
	
	If your Windows NT RAS client password contains any Extended characters, RAS
	client authentication will not properly convert their case (that is, uppercase
	versus lowercase). This will cause Windows NT RAS authentication to fail. It
	works fine for characters "a-z" and "A-Z."
	
	RESOLUTION
	==========
	
	Until a bug fix is released, do not use extended characters in your Windows NT
	passwords. This is especially true for Remote Access and Services for
	Macintosh.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	REFERENCES
	==========
	
	- For more information about why RAS must convert the character case of
	passwords, query on the following words in the Microsoft Knowledge Base:
	
	  RAS and LAN and Manager and Password and Authentication
	
	- For more information about other Windows NT password authentication problems,
	  query on the following words in the Microsoft Knowledge Base:
	
	  Windows and NT and Extended and Character and Password and Problems
	
	- For more information about Windows NT Authentication, query on the following
	  words in the Microsoft Knowledge Base:
	
	  INF and User and Authentication and Windows and NT
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWin3xSearch kbWinNT310Search kbZNotKeyword3 kbWin310
	Version           : 3.1
	
	=============================================================================
	
