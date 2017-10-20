---
layout: page
title: "Q150118: XADM: Err Msg:  The Ordinal 25 Could Not be Located"
permalink: /kb/150/Q150118/
---

## Q150118: XADM: Err Msg:  The Ordinal 25 Could Not be Located

{% raw %}

	Article: Q150118
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage exc4
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to start the Microsoft Exchange Administrator program from the
	Microsoft Exchange program group, the following error might be generated:
	
	  The Ordinal 25 could not be located in the Dynamic Link Library LIBXDS.DLL.
	
	MORE INFORMATION
	================
	
	This error can occur when you upgrade from an older Microsoft Exchange Server
	and you tell the Microsoft Exchange Setup program not to remove or replace
	existing files. This can leave more than one Libxds.dll on the computer and when
	the Microsoft Exchange Administrator program starts, it could load the wrong
	one.
	
	
	RESOLUTION
	==========
	
	Start the Windows NT File Manager, select Search from the File menu, enter the
	root of the system drive where the operating system files are located in the
	Start From box, verify the Search All Subdirectories checkbox is checked, enter
	Libxds.dll in the Search For box, and click OK. If more than one instance of
	this file is found, remove any that are not in the system32 subdirectory.
	
	If this does not resolve the problem, remove all instances of Libxds.dll and copy
	this file from the Microsoft Exchange Server CD under
	setup\<platform>\Libxds.dll into the system32 subdirectory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
