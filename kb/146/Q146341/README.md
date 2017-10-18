---
layout: page
title: "Q146341: Account Information Boxes Are Gray Adding Virtual Directories"
permalink: kb/146/Q146341/
---

## Q146341: Account Information Boxes Are Gray Adding Virtual Directories

	Article: Q146341
	Product(s): Microsoft Windows NT
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Account Information dialog boxes appear gray when you are adding virtual
	directories.
	
	CAUSE
	=====
	
	This is normal behavior. The Account Information boxes only become active when a
	universal naming convention (UNC) path is used for a virtual directory. For
	example:
	
	  \\servername\sharename
	
	The Account Information is used to validate the connection from the Internet
	Server to the share it is connecting to.
	
	Additional query words: prodiis FTP WWW Gopher alias home properties add
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
