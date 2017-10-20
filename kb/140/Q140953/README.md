---
layout: page
title: "Q140953: XCLN: Fax Template Generates Bad Phone Number"
permalink: /kb/140/Q140953/
---

## Q140953: XCLN: Fax Template Generates Bad Phone Number

{% raw %}

	Article: Q140953
	Product(s): Microsoft Exchange
	Version(s): 3.0a,3.x,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Mail for PC Networks, version 3.x 
	- Microsoft Mail Gateway to Fax, version 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange client generates an incorrect phone number when sending
	faxes through a Microsoft Exchange Server to the Microsoft Mail for PC Networks
	fax gateway. The sender will receive a Mail Failure message from the Admin
	stating that the fax was addressed to an unknown fax number.
	
	WORKAROUND
	==========
	
	Import the latest version of the Microsoft Exchange Server FAX.CSV file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The sender will receive a "Mail Failure" message similar to the following when
	sending to a FAX PAB entry that was created using the Microsoft Exchange Server
	version 4.0 FAX template:
	
	From: Administrator
	Sent: Thursday, June 13, 1996 11:48AM
	To: PF Admin
	Subject: Mail failure
	
	Fax addressed to the following unknown FAX NUMBER:
	 RECIPIENT:  My Fax Machine
	 LOCATION:   3rd Floor
	 COMPANY:    MSFT
	 FAX NUMBER: 45811
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailPCN3xSearch kbMailGateFax300a
	Version           : :3.0a,3.x,4.0
	
	=============================================================================
	

{% endraw %}
