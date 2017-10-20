---
layout: page
title: "Q151413: XCON: ContentReturn Requested by Default"
permalink: /kb/151/Q151413/
---

## Q151413: XCON: ContentReturn Requested by Default

{% raw %}

	Article: Q151413
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an X.400 message sent from Microsoft Exchange Server to a foreign MTA
	cannot be delivered by the foreign MTA, a non-delivery report (NDR) is sent back
	to Microsoft Exchange Server. This NDR contains the original message as content.
	
	CAUSE
	=====
	
	The PerMessageFlag of an X.400 message sent by the Microsoft Exchange MTA is
	always constructed with the ContentReturnRequest field being set to true. As a
	result, any NDR contains the content of the original message. The construction
	of the ContentReturnRequest field cannot be configured through the Microsoft
	Exchange administration module or through the client software.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The behavior described in this article does not represent a violation of any
	X.400 standard. However on low-bandwidth or expensive X.400 links, it may not be
	desirable for the NDR to contain the original message as content. The fix
	described herein allows you to configure the ContentReturnRequest field on a
	per-connector basis. The default behavior for Microsoft Exchange Server is to
	set the ContentReturnRequest field to true, thus asking for the content to be
	sent back with an NDR.
	
	You can set the ContentReturnRequest field to false in order to not request the
	content be returned with an NDR. Please do the following, after applying the
	hotfix, for EACH X.400 connector for which you want the Microsoft Exchange
	default setting to be changed:
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode using
	  the following syntax:
	
	  ADMIN -R
	
	2. In the Connections container, select the X.400 connector you want to change.
	
	3. On the File menu, click Raw Properties. This brings up the raw property page
	  of the selected connector.
	
	4. In the "List attributes of type" box at the lower left corner of the Raw
	  Properties tab page, click Non existing.
	
	5. In the "Object attributes" list box, select the Heuristics property to
	  highlight it.
	
	6. In the "Edit value" box, type 64 (0x40 hex); the Set button will become
	  active. Click the Set button.
	
	7. Click the Apply button and then click the OK button. This should close the
	  Raw Properties page for this connector.
	
	8. Check to see whether your modifications have been applied properly:
	
	  a. On the File menu, click Raw Properties again.
	
	  b. In the "List attributes of type" box, click Existing objects. You should
	     see the Heuristics property with a value of 64.
	
	9. Repeat steps 1 through 9 for each connector you want to modify. If you want
	  the modifications to take effect immediately, stop and restart the service
	  Microsoft Exchange message transfer agent (MTA).
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
