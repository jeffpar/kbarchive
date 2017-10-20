---
layout: page
title: "Q164652: Verify Old Passwords Before Updating SNA Host Account Database"
permalink: /kb/164/Q164652/
---

## Q164652: Verify Old Passwords Before Updating SNA Host Account Database

{% raw %}

	Article: Q164652
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft SNA Server does not offer a configurable option to verify the old
	password in a host-initiated password change before executing the change. This
	field is currently ignored. In addition, the SNA Server Host Account Manager
	(UDCONFIG.EXE) does not prompt you to enter your old password when updating the
	SNA Server host account cache for your account.
	
	CAUSE
	=====
	
	This functionality was not implemented in the initial release of SNA Server 3.0.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	There are two changes implemented in SNA Server Host Security Integration
	relating to the handling of old passwords.
	
	1. The ability to require the host to send the correct old host password to SNA
	  Server. When the host initiates a password change, the SNA Server host
	  security agent will now verify that the old password sent by the host is
	  valid for the account if the following registry entry is set:
	
	  HKEY_LOCAL_MACHINE
	  \SYSTEM
	     \CurrentControlSet
	        \Services
	           \SNAPmp
	              \Parameters   ValidateHostRequest: REG_DWORD: 1
	
	  If enabled, (REG_DWORD=1), the Host must supply the old password for the user
	  to apply any changes.
	
	2. Requires user to enter old password in SNA Host Account Manager.The Host
	  Account Manager configurator now requires you to enter your old password
	  before allowing the password to be updated. The updated modules are:
	  <snaroot>\system\hostproc.exe snaroot>\system\snaudb.exe
	  <snaroot>\system\snapmp.exe <snaroot>\snafile.stf
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem has been corrected in the latest U.S. service pack for Microsoft SNA
	Server version 3.0. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
