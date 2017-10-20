---
layout: page
title: "Q230269: XFOR: How to Re-add Extensions to Exchange for Notes Connector"
permalink: /kb/230/Q230269/
---

## Q230269: XFOR: How to Re-add Extensions to Exchange for Notes Connector

{% raw %}

	Article: Q230269
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you uninstall the Exchange Notes Connector (MSMC) from a site that has
	multiple MSMC, then you attempt to administer the remaining MSMC in the same
	site using the Exchange Server Administrator program, the following error
	messages may occur:
	
	  Extension 'lsntscp0' could not be loaded. The extension for Microsoft
	  Exchange Administrator's CPU type has not been installed in the site.
	  Microsoft Exchange Administrator ID no: c1031667
	
	  Extension 'LSMSGTRK' could not be loaded. The extension for Microsoft Exchange
	  Administrator's CPU type has not been installed in the site. Microsoft
	  Exchange Administrator ID no: c1031667
	
	  Extension 'LSQVIEW' could not be loaded. The extension for Microsoft Exchange
	  Administrator's CPU type has not been installed in the site. Microsoft
	  Exchange Administrator ID no: c1031667
	
	Selecting Ignore on each error message opens the MSMC property pages, however the
	Options and the Message Tracking tabs will be missing. Moreover, the Queues tab
	will only show two queues, the MTS-IN and the MTS-OUT queues, not the full set
	of queues for this connector.
	
	CAUSE
	=====
	
	When one MSMC is uninstalled from a site that includes several MSMC, the
	replication process removes the Exchange Server extensions supporting the MSMC
	from all Exchange servers in the site. Mail flow still works, but the above
	error messages occur when you attempt to access the property page for the MSMC.
	
	RESOLUTION
	==========
	
	To re-add these missing components, run the following commands from the
	Exchsrvr\Connect\Exchconn\Install directory of an existing Exchange Notes
	Connector (substitute your Exchange Server Organization, Site, and Server names
	in the appropriate places). These commands add these missing components and
	propagate the components to the other servers in the site.
	
	  mexiextn /org=<ORG> /site=<SITE> /server=<SERVER>
	  /machine=i386 /name=LSMSGTRK
	  /extdll=\\server\add-ins\lsmsgtrk\i386\lsmsgtrk.dll /display_name="Extension
	  for Connectivity Message Tracking for i386"
	
	  mexiextn /org=<ORG> /site=<SITE> /server=<SERVER>
	  /machine=i386 /name=LSQVIEW /extdll=\\server\add-ins\lsqview\i386\lsqview.dll
	  /display_name="Extension for Connectivity Queue Viewer for i386"
	
	  mexiextn /org=<ORG> /site=<SITE> /server=<SERVER>
	  /machine=i386 /name=LSNTSCP0
	  /extdll=\\server\add-ins\lsntscp0\i386\lsntscp0.dll /display_name="Extension
	  for Lotus Notes Connector for i386"
	
	After you run each command individually, review the Lmeilog.txt file in the same
	directory and look at the last entry to see if the command was successful.
	Alternatively, in the Exchange Server Administrator program, select the Add-ins
	container (press F5 to refresh) and see if the component appears. If the display
	name for the component does not appear in the list, the command was
	unsuccessful.
	
	Additional query words: lmeilog txt
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
