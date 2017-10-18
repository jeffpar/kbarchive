---
layout: page
title: "Q278518: XADM: How to Change the Version and Build Information"
permalink: kb/278/Q278518/
---

## Q278518: XADM: How to Change the Version and Build Information

	Article: Q278518
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to change the version and build information that is
	displayed when you view the properties of the server object in the Microsoft
	Exchange Server Administrator program. You may need to use this procedure if you
	applied a hotfix to a server; a hotfix installation does not update the build
	and version information for the server object.
	
	MORE INFORMATION
	================
	
	The build and version information for the server object is stored in the
	Serial-Number attribute of the server object. When a service pack is applied to
	the server, the value of this attribute is suitably modified to reflect the new
	build number for the store. However, when a POST service pack hotfix is applied,
	this value is not changed. To find out if a particular hotfix has been applied,
	open the properties of the Store.exe file, and then look for the version number.
	To update this value, use the procedure described in this section.
	
	NOTE: To complete this procedure, you must use the Administrator program in Raw
	mode.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Administrator program in Raw mode. To do so, type the following
	  command, where C is the drive where Exchange Server is installed:
	
	  c:\exchsrver\bin\admin.exe -r
	
	2. Click to expand the Configuration container, click the Servers object, and
	  then click the server where you want to modify the properties.
	
	3. Click File, and then click Raw Properties (or press SHIFT + ENTER).
	
	4. Click the Serial-Number attribute in the "Object-Attributes" list on the
	  left, and then click Editor.
	
	5. Make the appropriate modifications to the build number and version number,
	  click Apply, and then click OK.
	
	6. Click Set, click Apply, and then click OK.
	
	7. Click the server object that you just modified, click File, and then click
	  Properties. The new build number and version number are displayed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
