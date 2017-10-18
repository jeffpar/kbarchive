---
layout: page
title: "Q186798: Populating Connection Manager Profile Using the INS File"
permalink: kb/186/Q186798/
---

## Q186798: Populating Connection Manager Profile Using the INS File

	Article: Q186798
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Connection Wizard does not configure Connection Manager for
	Internet Service Provider (ISP) Signup.
	
	CAUSE
	=====
	
	Some of the fields needed in the INS file are missing, and therefore the
	Internet Connection Wizard (ICW) does not know it needs to configure the
	Connection Manager.
	
	WORKAROUND
	==========
	
	To work around this problem, add or modify the following fields in the INS file
	as follows:
	
	     [ClientSetup]
	     Done_Message
	     <The message you want to display to the user at the end of signup
	     here.>
	     Explore_Command
	     <The page you want to take the user to at the end of signup here.
	     For example: http://www.microsoft.com>
	
	     [Custom]
	     Run=icwconn2.exe
	
	     [Custom_Dialer]
	     Auto_Dial_DLL=cmdial32.dll
	     Auto_Dial_Function=_InetDialHandler@16
	
	     [Entry]
	     Entry_Name=<This has to match the name of your Connection Manager
	     profile.>
	
	Also make the following changes in the Template.cmp file, located in the CMAK\ENU
	directory, and rebuild your profile using CMAK:
	
	     [Connection Manager]
	     RememberPassword=1
	
	Additional query words: connection manager cm cmak
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
