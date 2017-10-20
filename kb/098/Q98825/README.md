---
layout: page
title: "Q98825: PROFS: Address List from PROFS Fails to Import"
permalink: /kb/098/Q98825/
---

## Q98825: PROFS: Address List from PROFS Fails to Import

{% raw %}

	Article: Q98825
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 2.1b, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the version 2.1 or 3.0 Microsoft Mail Gateway to IBM PROFS and
	OfficeVision (PROFS Gateway) Import option from within the Microsoft Mail
	Administrator program, the PROFS user list may not be imported into the
	Microsoft Mail postoffice.
	
	For the PROFS gateway, this means that the Nickname file is not downloaded to the
	postoffice. The PROFS gateway reports that the import request file of 720 bytes
	is transferred to the VM host, but no user list is transferred back down to the
	postoffice.
	
	CAUSE
	=====
	
	Three known causes of this problem and their resolutions are:
	
	- The Nickname file is not designated in the PWAINIT DATA file on the VM host
	  ID.
	
	  In the PWAINIT DATA file, there is a parameter that designates the name of the
	  system Nickname file. If the filename and file type of the system nickname
	  file are missing, the PROFS USERS file cannot be generated and the PROFS user
	  fails to download.
	
	- The PROFS USERS file is missing or was not created on the gateway VM ID 191
	  disk.
	
	  The VM Administrator should check the VM ID 191 disk to ensure that the PROFS
	  USERS file has not been deleted or renamed.
	
	  This USERS file is automatically created when the host side of the gateway is
	  started, if the NICKNAME is designated in the PWAINIT DATA file and the PROFS
	  USERS file does not already exist.
	
	  To regenerate the PROFS USERS file, restart the VM ID.
	
	- The node created within the Administrator program does not match nodes in the
	  PROFS Nickname files on the host.
	
	  When you mail from a Microsoft Mail postoffice to PROFS, the addressing is
	  simplified by creating a node within the Mail Administrator program (select
	  Gateway, PROFS, Node, Create).
	
	  When you use the gateway Import option, the nodes selected are searched for
	  within the PROFS USERS file on the host. The user names corresponding to the
	  selected nodes are then downloaded to Microsoft Mail. These names are then
	  automatically imported into the postoffice.
	
	Additional query words: 2.10b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300 kbMailGateIBMPROFS210b
	Version           : :2.1b,3.0
	
	=============================================================================
	

{% endraw %}
