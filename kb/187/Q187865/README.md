---
layout: page
title: "Q187865: XFOR: Problems Running Multiple LinkAge Connectors"
permalink: /kb/187/Q187865/
---

## Q187865: XFOR: Problems Running Multiple LinkAge Connectors

{% raw %}

	Article: Q187865
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have more than one Microsoft Exchange LinkAge connector (Exchange Notes
	Connector, Exchange SNADS Connector, or Exchange PROFS Connector) running on the
	same computer, the connectors may stop transferring messages and the LinkAge
	event log file may contain entries similar to the following:
	
	- LME-PROFS-DIAVM(0157) 4 40982:Finish building NETDATA INMR06 record >>
	  netdata(1738)
	
	- LME-PROFS-DIAVM(0157) 4 23704:NJE client finishes sending >>
	  njeclnt(3072)
	
	- LME-SNADS-MEXDIA(0230) 1 56002:{Table is full}: Could not register polling
	  timer for new Exchange messages >> mex2dia(6274)
	
	- LME-SNADS-MEXDIA(0230) 2 01101:Error {System failure}: The event handler for
	  MEXQALARM failed >> evtmgr(490)
	
	CAUSE
	=====
	
	When you start a LinkAge connector, an event timer is created using the static
	name MEXQALARM. Because a static name is used, only one timer is created when
	multiple LinkAge connectors are running on the same computer. This creates a
	conflict and prevents the connectors from functioning properly, which may cause
	an unusually large number of events to be logged in the LinkAge event manager.
	When the space that is allocated for the logging of events in the event manager
	becomes full, the above entries appear in the event log file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: queue snads-out snads-in snads-mexout
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
