---
layout: page
title: "Q103826: User Authentication Fails on LAN Manager Client"
permalink: /kb/103/Q103826/
---

## Q103826: User Authentication Fails on LAN Manager Client

{% raw %}

	Article: Q103826
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT does not properly store passwords with extended characters in the
	Microsoft LAN Manager-compatible password entry in the Security Accounts Manager
	(SAM) database. This may cause your Microsoft LAN Manager, Remote Access Service
	(RAS), or Macintosh clients to fail authentication if their passwords contain
	extended characters.
	
	CAUSE
	=====
	
	Each user account has two passwords, both a LAN Manager and a Windows
	NT-compatible password. Each password is doubly encrypted and stored in the SAM
	database. The two passwords enable Windows NT to validate your account for both
	Windows NT and LAN Manager clients.
	
	LAN Manager passwords are not case-sensitive. Before they are encrypted, they are
	converted to all uppercase letters. Windows NT has no way of making an extended
	character uppercase in a consistant manner due to the differences in foreign
	languages and code pages. Because of this, Windows NT stores only makes
	non-extended characters uppercase; it leaves extended characters alone.
	
	Because Windows NT handles extended characters in this manner, your password may
	not match up with the one stored on a LAN Manager client.
	
	NOTE: This problem only occurs when a password is originally created from Windows
	NT User Manager or during initial logon. If the password is created by using the
	LAN Manager client NET PASSWORD command, it is stored properly in the Windows NT
	SAM database. Also, if the password is created with PORTUAS, it should be all
	right.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1, and Windows NT Workstation and Server versions
	3.1.We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	For more information on Windows NT authentication or why RAS must convert the
	character case of passwords, query on the following words in the Microsoft
	Knowledge Base:
	
	  ras\sfm and password and authentication
	
	For more information on other password authentication problems, see the Knowledge
	Base article entitled, "RAS\SFM use LAN Manager Password Authentication."
	
	For more information on Windows NT Authentication, see the Knowledge Base Article
	entitled, "INF: User Authentication with Windows NT."
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWin3xSearch kbWinNT310Search kbZNotKeyword3 kbWin310
	Version           : 3.1 4.0
	
	=============================================================================
	

{% endraw %}
