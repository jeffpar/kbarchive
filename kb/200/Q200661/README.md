---
layout: page
title: "Q200661: XFOR: Event ID 2403: Failure Converting OLE v2 Object to OLE v1"
permalink: /kb/200/Q200661/
---

## Q200661: XFOR: Event ID 2403: Failure Converting OLE v2 Object to OLE v1

{% raw %}

	Article: Q200661
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbole exc4 exc5
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	If you send a message that contains an OLE version 2.0 object that can not be
	converted to an OLE version 1.0 object from Exchange Server through the
	Microsoft Mail Connector, the following event is logged in the application event
	log:
	
	  Event ID: 2403
	  Category: Warning
	  Source: MSExchangeMSMI
	  Description:
	
	  Failure converting OLE v2 object to OLE v1, OLE Object Class not registered in
	  message C=US;A= ;P=Microsoft;l=BISCUITHEAD-970304034713Z-3.
	
	You can still view this OLE object in Exchange Server clients. The Microsoft Mail
	client does not display this OLE object.
	
	WORKAROUND
	==========
	
	Install the OLE application on the Microsoft Mail Connector server.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0.
	
	MORE INFORMATION
	================
	
	Microsoft Mail for PC Networks is an OLE version 1.0 compatible application. For
	the Exchange Server client to embed OLE version 2.0 objects within a mail
	message, the Microsoft Mail Connector interchange must convert the OLE version
	1.0 object to an OLE version 2.0 object. This conversion occurs on the computer
	running the Microsoft Mail Connecter interchange. For the Microsoft Mail
	Connector interchange to convert the objects, the OLE application must be
	installed on the Microsoft Mail Connector server, because the Microsoft Mail
	Connector interchange uses the local registry to get the OLE information.
	
	Additional query words: msmi xcln msmail word excel
	
	======================================================================
	Keywords          : kbole exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
