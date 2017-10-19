---
layout: page
title: "Q153013: Netware Compatible Password not Automatically Expired"
permalink: /kb/153/Q153013/
---

## Q153013: Netware Compatible Password not Automatically Expired

	Article: Q153013
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When creating new users with the Netware compatible password option enabled, the
	expired password option is not automatically set. This occurs with both User
	Manager and the command line utility Net User Add.
	
	CAUSE
	=====
	
	The Netware password expired flag will be reset every time the password
	notification DLL is called. The password notification DLL is de-coupled with
	User Manager. The password notification DLL is not called initially when a new
	user is created because the password does not exist yet. After the account is
	created, select NW compatible properties, and then select Netware compatible
	password expired. The value will then stay selected.
	
	RESOLUTION
	==========
	
	This is a design limitation of Microsoft Windows NT versions 3.51 and 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT versions
	3.51 and 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: FPNW DSMN
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
