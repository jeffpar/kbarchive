---
layout: page
title: "Q196400: XADM: Move Server Wizard Error: An Error has Occurred Copying"
permalink: /kb/196/Q196400/
---

## Q196400: XADM: Move Server Wizard Error: An Error has Occurred Copying

{% raw %}

	Article: Q196400
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error message is displayed during extraction of the Microsoft
	Exchange Move Server Wizard, if disk space on the installation drive is low:
	
	  An error has occurred copying <file name varies>
	
	  Ensure that the location specified below is correct, or change it and
	  insert 'Microsoft Exchange Move Server Wizard Disk' in the drive you
	  specify.
	
	WORKAROUND
	==========
	
	To work around this problem, increase the free disk space on the installation
	drive and run the Move Server Wizard extractor (Setupmvi.exe) again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Move Server Wizard component
	of Exchange Server 5.5
	
	MORE INFORMATION
	================
	
	This error is not accurate because the Web release of the Move Server Wizard
	does not have an installation disk.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
