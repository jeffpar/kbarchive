---
layout: page
title: "Q171361: Default Document Not Have .Asp Extension w/ Only Execute Access"
permalink: /kb/171/Q171361/
---

## Q171361: Default Document Not Have .Asp Extension w/ Only Execute Access

	Article: Q171361
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you specify Default.asp (or any .asp file) as your default document in
	Internet Information Server (IIS), you will get an error message if you do not
	have Read access specified for the root virtual directory.
	
	CAUSE
	=====
	
	IIS assumes that the default document is going to be read, not executed so the
	Read permission is necessary for the default document in the root directory to
	be interpreted correctly.
	
	WORKAROUND
	==========
	
	Apply both Read and Execute rights to the root virtual directory in Internet
	Service Manager.
	
	WARNING: Placing both Read and Execute rights on the root directory specifies
	that all files in the root can be executed. Take caution placing scripts and
	executables in the directory if you have enabled the execute right for the
	directory.
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
