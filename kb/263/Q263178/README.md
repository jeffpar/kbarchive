---
layout: page
title: "Q263178: Err Msg: CAPI: The Install Failed. Rsabase.dll Doesn't Match"
permalink: /kb/263/Q263178/
---

## Q263178: Err Msg: CAPI: The Install Failed. Rsabase.dll Doesn't Match

{% raw %}

	Article: Q263178
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Windows NT Service Pack (SP4) as a prerequisite to the
	install of the Windows NT Option Pack (NTOP), the following error message may
	occur:
	
	  CAPI: The install failed. The rsabase.dll file that is being installed
	  doesn't match the signature file or the value in the registry.
	
	CAUSE
	=====
	
	This is caused by a version mismatch in the Rsabase.dll and Rsasig.dll files.
	This version mismatch can occur by installing Internet Explorer 5, re-applying
	SP4, and then installing the NTOP.
	
	RESOLUTION
	==========
	
	The correct file versions for the service pack can be obtained from the
	Microsoft DLL Help database at the following location:
	
	  http://support.microsoft.com/servicedesks/fileversion/dllinfo.asp
	
	When you have the correct file versions, rename the incorrect file, copy the
	correct version from the service pack media, disable (uncheck) the "Read Only"
	attribute (if applicable), and then re-apply the service pack.
	
	MORE INFORMATION
	================
	
	For the proper installation order for IIS 4.0, please see:
	
	  http://support.microsoft.com/support/iis/install/install_iis4.asp
	
	If you are installing Site Server, please see:
	
	  http://support.microsoft.com/support/siteserver/install/install_ss3.asp
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
