---
layout: page
title: "Q184372: Setup Unable to Install Internet Authentication Services (IAS)"
permalink: /kb/184/Q184372/
---

## Q184372: Setup Unable to Install Internet Authentication Services (IAS)

	Article: Q184372
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	REFERENCES
	==========
	
	Windows NT 4.0 Option Pack Release Notes
	
	SYMPTOMS
	========
	
	When you upgrade the Internet Authentication Services (IAS) via the Windows NT
	4.0 Option Pack on a computer running a beta version of IAS on Windows NT Server
	4.0, an error message may appear indicating that Setup was unable to install
	IAS.
	
	NOTE: This may also happen on non-US versions of Windows NT (for example, German,
	Japanese, or French).
	
	WORKAROUND
	==========
	
	To work around this problem, uninstall IAS, and then re-install it from the
	Windows NT 4.0 Option Pack.
	
	The release notes for the Internet Authentication Services in the
	C:\WinNT\Help\iis\htm\core\iasread.htm file state:
	
	  Before you install this release of IAS on a computer running the Beta 3
	  version, you must stop IAS and then uninstall it.
	
	Additional query words: NTOP IAS Beta Install
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
