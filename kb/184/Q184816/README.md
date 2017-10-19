---
layout: page
title: "Q184816: Run-time Error '52' Trying to Open Component Library"
permalink: /kb/184/Q184816/
---

## Q184816: Run-time Error '52' Trying to Open Component Library

	Article: Q184816
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you associate the .TLB extension with the COMTI program
	ComponentBuilder.exe, and then try to open a COMTI component library by
	double-clicking the .TLB file entry in Windows Explorer, the following error
	message appears:
	
	  Title: Component Builder
	  Text: Run-time error '52':
	  Bad file name or number.
	
	CAUSE
	=====
	
	The current working directory for Component Builder must be the directory in
	which COMTI is installed.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Start Component Builder. On the File menu, click Open, select the component
	  library, and open it.
	
	-or-
	
	- Place a shortcut icon (not an icon for the actual executable file) for
	  ComponentBuilder.exe on the desktop and drag the component library from
	  Windows Explorer onto the icon.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0 included with SNA Server 4.0. We are
	researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
