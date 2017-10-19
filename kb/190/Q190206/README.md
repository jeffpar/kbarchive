---
layout: page
title: "Q190206: Unattended NT Option Pack Installation Ignores Some Parameters"
permalink: /kb/190/Q190206/
---

## Q190206: Unattended NT Option Pack Installation Ignores Some Parameters

	Article: Q190206
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT version 4.0 Option Pack 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Microsoft Windows NT 4.0 Option Pack in unattended mode,
	several parameters documented in Unattend.txt do not work:
	
	- Components are copied to their default locations no matter what you specify.
	
	  a. CiCatalogPath in section [indexsrv]: Catalog is created under
	     inetpub\Catalog.wci.
	
	  b. PathPROGRoot in section [iis]: IIS 4.0 components are copied to
	     %windir%\system32\inetsrv.
	
	- Drivers are installed although you specified that they not be installed. For
	  example, if you set DAC_DRV_SQLSRV = OFF, the SQL ODBC driver is nevertheless
	  installed.
	
	WORKAROUND
	==========
	
	Install the Microsoft Windows NT 4.0 Option Pack manually and choose Custom Mode
	to set the parameters as needed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Option Pack
	version 1.0.
	
	
	Additional query words: ntop iis uattended CiCatalogPath PathPROGRoot DAC_DRV_SQLSRV
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbiisSearch kbiis400 kbWinNT400OptionPack
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
