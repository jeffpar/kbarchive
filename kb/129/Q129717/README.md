---
layout: page
title: "Q129717: Err Msg: Cannot Rename Folder: Cannot Find the Specified..."
permalink: /kb/129/Q129717/
---

## Q129717: Err Msg: Cannot Rename Folder: Cannot Find the Specified...

{% raw %}

	Article: Q129717
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to rename a folder on a Novell NetWare network server you receive
	the following error message:
	
	  Cannot rename Folder: Cannot find the specified file.
	  Make sure you specify the correct path and filename.
	
	CAUSE
	=====
	
	The computer from which you are trying to rename the folder is configured to use
	the real-mode NETX network redirector and is connected to the server using a
	universal naming convention (UNC) connection. The NETX redirector does not
	support renaming directories (folders) on UNC connections.
	
	RESOLUTION
	==========
	
	Reconfigure the computer to use either the Novell NetWare VLM redirector or the
	Windows 95 client for NetWare networks.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
