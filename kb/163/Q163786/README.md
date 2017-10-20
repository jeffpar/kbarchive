---
layout: page
title: "Q163786: PRB: Setup Requires Long Filename Support"
permalink: /kb/163/Q163786/
---

## Q163786: PRB: Setup Requires Long Filename Support

{% raw %}

	Article: Q163786
	Product(s): Microsoft FoxPro
	Version(s): 5.00a
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbvfp kbvfp500 kbbetapublic
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install to a drive volume that does not have long filename
	support you receive the following error:
	
	  The specified volume does not support long filenames. You must select a
	  destination that supports long filenames, or force the use of short
	  filenames. To force short filenames, exit now and restart Setup using the /F
	  command line option.
	
	If you attempt to use the /F switch with Setup, you will receive the following
	error:
	
	  The specified default directory name is invalid and setup cannot continue.
	
	This setup switch is no longer supported in Visual FoxPro so you must install to
	a drive that supports long filenames.
	
	RESOLUTION
	==========
	
	You must install to a volume that supports long filenames, such as Windows NT,
	Windows 95, or Novell Netware with OS/2 Name Space.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Previous versions of Visual FoxPro allowed you to install to a drive volume that
	did not support long filenames by using the Setup /F switch, such as Novell
	Netware without OS/2 Name Space, or to a Windows for Workgroups share. This
	switch is no longer supported.
	
	REFERENCES
	==========
	
	Netware is manufactured by Novell Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbvfp kbvfp500 kbbetapublic 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500a
	Version           : 5.00a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
