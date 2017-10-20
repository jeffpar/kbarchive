---
layout: page
title: "Q158956: XGEN: Cannot Update When Only Exchange Administrator Installed"
permalink: /kb/158/Q158956/
---

## Q158956: XGEN: Cannot Update When Only Exchange Administrator Installed

{% raw %}

	Article: Q158956
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Microsoft Exchange Server Setup program and clear every check box
	except Administration, only the Microsoft Exchange Server Administrator program
	components will be installed. If you later try to update to Microsoft Exchange
	Server version 4.0 Service Pack 3 (SP3) on this computer, the Service Pack
	update will stop. The following error message appears:
	
	  This version of Exchange Setup can only upgrade servers that are
	  4.0a/SP2.Upgrade the server to 4.0a/SP2 and then run Setup again.
	
	CAUSE
	=====
	
	When Microsoft Exchange Server is installed, entries are written to the registry
	that identify build version information. When only the Administrator components
	are installed, some of the entries are not written to the registry. Microsoft
	Exchange Server 4.0 SP3 checks the version. Because some registry entries are
	missing, Update for SP3 cannot determine the current version of Microsoft
	Exchange Server and terminates.
	
	WORKAROUND
	==========
	
	To work around this problem, add the missing entries to the registry. You can
	update the registry using Regini.exe from the Windows NT Resource Kit.
	
	The registry values that need to be added to the registry are:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Exchange\Setup
	  NewestBuild REG_DWORD  value = 0x3E1
	  Build REG_DWORD  value = 0x345
	
	1. Use the following script file with Regini.exe (from the Windows NT Resource
	  Kit) to update the registry with the correct values. Copy the script commands
	  below to a text file named Exch.ini.
	
	  \registry\machine\SOFTWARE\Microsoft\Exchange\Setup
	  NewestBuild=REG_DWORD 0x3E1
	  Build=REG_DWORD 0x345
	
	2. To have Regini.exe update the registry, carry out the following command:
	
	  regini exch.ini
	
	Note: This workaround assumes that Regini.exe is located in your path and
	Exch.ini is in the current directory.
	
	Additional query words: sp3 xgeneral
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
