---
layout: page
title: "Q316055: Password Synchronization from UNIX Does Not Work with Yppasswd"
permalink: /kb/316/Q316055/
---

## Q316055: Password Synchronization from UNIX Does Not Work with Yppasswd

	Article: Q316055
	Product(s): Microsoft Windows NT
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a UNIX user tries to change their password on a UNIX platform that is
	configured to use the UNIX NIS component for password validation, the user
	cannot do so. This occurs when the user uses the "yppasswd" (without the
	quotation marks) command. Under these conditions, the password is not replicated
	to the Windows computer by using the Windows Services for UNIX 3.0 password
	synchronization component.
	
	CAUSE
	=====
	
	If the Windows Services for UNIX Password Authentication Module (PAM) is
	installed on a UNIX NIS Master, the "yppasswd" (without the quotation marks)
	command does not use the pam_sso infrastructure.
	
	RESOLUTION
	==========
	
	To make password synchronization work in an NIS/NIS+ environment:
	
	1. Link yppasswd to the passwd command.
	
	2. On all the NIS UNIX clients (whether the "NIS Master" is a Windows Services
	  for UNIX NIS Server or a UNIX NIS server), edit the Etc/Nsswitch.conf file
	  and set it to use NIS / NIS+.
	
	3. If the "user" is not present in the local /etc/password | shadow files, the
	  passwd|yppasswd command that was run on the UNIX client (NIS client) computer
	  changes the NIS password for the user on the NIS master database.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbui 
	Technology        : kbWinServiceUNIXSearch kbWinServiceUNIX300
	Version           : :3.0
	Issue type        : kbbug
	
	=============================================================================
	
