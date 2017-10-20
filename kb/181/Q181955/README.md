---
layout: page
title: "Q181955: XFOR: DAT Extension On Inbound Internet Mail Attachments"
permalink: /kb/181/Q181955/
---

## Q181955: XFOR: DAT Extension On Inbound Internet Mail Attachments

{% raw %}

	Article: Q181955
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user receives a message through the Internet Mail Service, the inbound
	attachments included with the message appear with a .dat file extension. This
	can occur even if the Name= appears with the correct file extension in the RFC
	822 header. The name of the attachment is correct, but the extension is
	incorrect.
	
	CAUSE
	=====
	
	This problem occurs when the "application/octet-stream" MIME type is located in
	the MIME database. This can occur if you install Exchange Server 5.0 RC2 over
	Exchange Server 5.0 RC1, and then install Exchange Server 5.0 RTM.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Click Start, point to Programs, point to Microsoft Exchange, and then click
	  Microsoft Exchange Administrator.
	
	2. In the left pane, click the Protocols object under the appropriate Exchange
	  Server computer, and then click Properties on the File menu.
	
	   - If the Use Site Defaults For All Properties check box on the General tab
	     is not selected, proceed to step 3.
	
	   - If the Use Site Defaults For All Properties check box is selected, follow
	     these steps, and then proceed to step 3:
	
	  a. Click Cancel to close the Protocols property page.
	
	  b. In the left pane of the Administrator window, click the Protocols object
	     under the appropriate site, and then click Properties on the File menu.
	     Note that the Protocols object appears under the Configuration object.
	
	3. Click the MIME Types tab, click "application/octet-stream" in the list of
	  MIME content types, click Remove, click Yes, and then click OK.
	
	4. Stop and restart the Internet Mail Service. To do so, follow these steps:
	
	  a. In Control Panel, double-click Services.
	
	  b. Click the Microsoft Exchange Internet Mail Service, click Stop, and then
	     click Yes.
	
	  c. Click the Microsoft Exchange Internet Mail Service, and then click Start.
	
	MORE INFORMATION
	================
	
	For more information, please see the following Microsoft Knowledge Base
	article:
	
	  Q146263 XFOR: IMC Packages Failed Messages in ATT, DAT, or TXT
	
	Additional query words: MIME IMS Attachment
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
