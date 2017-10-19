---
layout: page
title: "Q230275: XFOR: How to Re-add Extensions to Exchange for OV/VM Connector"
permalink: /kb/230/Q230275/
---

## Q230275: XFOR: How to Re-add Extensions to Exchange for OV/VM Connector

	Article: Q230275
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you uninstall the Microsoft Exchange Connector for IBM OV/VM (OV/VMC) from
	a site with multiple OV/VMC, then attempt to administer a remaining OV/VM
	Connector using the Exchange Server Administrator program, the following error
	messages may occur:
	
	  Extension 'lsovvcp0' could not be loaded. The extension for Microsoft
	  Exchange Administrator's CPU type has not been installed in the site.
	  Microsoft Exchange Administrator ID no: c1031667
	
	  Extension 'LSMSGTRK' could not be loaded. The extension for Microsoft Exchange
	  Administrator's CPU type has not been installed in the site. Microsoft
	  Exchange Administrator ID no: c1031667
	
	  Extension 'LSQVIEW' could not be loaded. The extension for Microsoft Exchange
	  Administrator's CPU type has not been installed in the site. Microsoft
	  Exchange Administrator ID no: c1031667
	
	Selecting Ignore on each error message opens the OV/VMC property pages, however
	the Options and the Message Tracking tabs will be missing. Moreover, the Queues
	tab will only show two queues, the MTS-IN and the MTS-OUT queues.
	
	CAUSE
	=====
	
	When one OV/VMC is uninstalled from a site that inculdes several OV/VMC, the
	replication process removes the Exchange Server extensions supporting the OV/VMC
	from all Exchange servers in the site. Mail flow still works, but the above
	error messages occur when you attempt to access the property page for the
	OV/VMC.
	
	RESOLUTION
	==========
	
	To re-add these missing components, run the following commands from the
	Exchsrvr\Connect\Exchconn\Install directory of an existing OV/VM Connector
	(substitute your Exchange Server Organization, Site, and Server names in the
	appropriate places). These commands add these missing components and propagate
	the components to the other servers in the site.
	
	  mexiextn /org=<ORG> /site=<SITE> /server=<SERVER>
	  /machine=i386 /name=LSMSGTRK
	  /extdll=\\server\add-ins\lsmsgtrk\i386\lsmsgtrk.dll /display_name="Extension
	  for Connectivity Message Tracking for i386"
	
	  mexiextn /org=<ORG> /site=<SITE> /server=<SERVER>
	  /machine=i386 /name=LSQVIEW /extdll=\\server\add-ins\lsqview\i386\lsqview.dll
	  /display_name="Extension for Connectivity Queue Viewer for i386"
	
	  mexiextn /org=<ORG> /site=<SITE> /server=<SERVER>
	  /machine=i386 /name=LSNTSCP0
	  /extdll=\\server\add-ins\lsovvcp0\i386\lsovvcp0.dll /display_name="Extension
	  for OV/VM Connector for i386"
	
	After you run each command individually, review the Lmeilog.txt file in the same
	directory, and look at the last entry to see if the command was successful.
	Alternatively, in the Exchange Server Administrator program, select the Add-ins
	container (press F5 to refresh), and see if the component now appears. If the
	display name for the component does not appear in the list, the command was
	unsuccessful.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
