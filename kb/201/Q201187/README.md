---
layout: page
title: "Q201187: Web Admin Ignores Spaces at the Beginning of Virtual Directories"
permalink: /kb/201/Q201187/
---

## Q201187: Web Admin Ignores Spaces at the Beginning of Virtual Directories

	Article: Q201187
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create virtual directories in the MMC (snap-in) interface with Internet
	Information Server 4.0, virtual directory names that begin with a space or
	spaces do not appear this way in the HTMLA Web Administration forms. They appear
	with no space(s). For example, in the MMC, " vdir" (without the quotation marks)
	appears, but in the HTMLA Admin, you will see "vdir" (with no space).
	
	This can present a problem if you name the directory "VirtualRoot" (without the
	quotation marks) and then have another directory named " VirtualRoot" (without
	the quotation marks). In the HTMLA interface, it appears as though you have two
	directories with the same name (because neither one has spaces in the name).
	
	WORKAROUND
	==========
	
	To work around this issue, do not use a space(s) at the beginning of virtual
	directory names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	4.0.
	
	
	Additional query words: space vdir vitual directory iis4
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
