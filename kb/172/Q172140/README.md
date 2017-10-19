---
layout: page
title: "Q172140: Verity Search '97 Causes IIS Authentication to Fail"
permalink: /kb/172/Q172140/
---

## Q172140: Verity Search '97 Causes IIS Authentication to Fail

	Article: Q172140
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Information Server (IIS) systems with Verity Search '97 installed may
	fail with the following symptoms:
	
	- Verity Search'97 fails to operate with Anonymous password authentication
	  disabled.
	
	- No users (except administrators) can authenticate with Basic (Clear Text)
	  password authentication, while NT Challenge/Response works fine.
	
	- No users can access secure NTFS directories, including administrators.
	
	CAUSE
	=====
	
	Verity Search'97 installs a new authentication filter in the Microsoft Windows
	NT Server system registry. This filter, Authfilt.dll, is installed by Verity
	Search'97 in:
	
	  \\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\
	  Services\W3SVC\Parameters
	
	According to Verity, this filter fails to work correctly with IIS.
	
	WORKAROUND
	==========
	
	Please refer to the Verity FAQ ID:10218.0: "Using NT Authentication with your
	Search'97 Information Server 3.0 Install."
	
	This Verity FAQ is available in the Tech Support section on
	http://www.verity.com.
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
