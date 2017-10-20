---
layout: page
title: "Q138363: Err Msg: The Registration Wizard Was Unable to Locate..."
permalink: /kb/138/Q138363/
---

## Q138363: Err Msg: The Registration Wizard Was Unable to Locate...

{% raw %}

	Article: Q138363
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use Online Registration in Windows 95, you may receive one of
	the following error messages:
	
	  - The Signup.exe file is linked to missing export
	  Mcm.dll:ConnectProtocolToIndex.
	
	  The Registration Wizard was unable to locate the SignUp application...
	
	  - The Billadd.dll file is linked to missing export
	  Mcm.dll:ConnectProtocolToIndex.
	
	  The Registration Wizard was unable to locate the SignUp application...
	
	CAUSE
	=====
	
	The Signup.exe file or the Billadd.dll file in the Program Files\The Microsoft
	Network folder and the Mcm.dll file in the Windows\System folder are mismatched.
	
	RESOLUTION
	==========
	
	Extract a new copy of each file from your original Windows 95 or Windows 95 OEM
	Service Release 2 disks or CD-ROM into the appropriate directory, and then run
	Online Registration again.
	
	For information about using the EXTRACT command, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	MORE INFORMATION
	================
	
	Note that the error message "The Registration Wizard was unable to locate the
	SignUp application..." can also occur if you remove MSN, The Microsoft Network.
	
	======================================================================
	Keywords          : kberrmsg kbsetup win95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
