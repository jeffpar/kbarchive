---
layout: page
title: "Q282184: XADM: Heuristic Changes in Address Book Views in Service Pack 4"
permalink: kb/282/Q282184/
---

## Q282184: XADM: Heuristic Changes in Address Book Views in Service Pack 4

	Article: Q282184
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The behavior to restrict Address Book views may change after you apply Exchange
	Server 5.5 Service Pack 4 in an organization in which the heuristic bit was
	changed to restrict permissions to Address Book views as described in the
	following post Service Pack 3 Microsoft Knowledge Base Article:
	
	  Q248398 XADM: Restricting Permission to Address Book Views
	
	If you apply Service Pack 4 (SP4) to a computer running Service Pack 3 (SP3) with
	no post SP3 hotfixes installed, the heuristics bit is not set. Nevertheless, the
	default behavior is as described in the More Information section below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	MORE INFORMATION
	================
	
	The change in the behavior to restrict Address Book views is to ensure that, by
	default, the permission on the Address Book views object is not inherited by the
	site naming context.
	
	The meaning of the heuristic bit is actually reversed in Service Pack 4 from any
	earlier fixes, to accommodate this request.
	
	In more detail, if the bit is set to 1, the Address Book Views object inherits
	permissions from the site naming context. If the heuristic bit is 0 or is not
	set, the Address Book Views object does not inherit any permissions and is
	locked down to the service account unless a security descriptor has already been
	stamped on the Address Book Views object.
	
	Furthermore, if you set the heuristic bit to 1 after you apply the post Exchange
	Server 5.5 Service Pack 3 Dsamain.exe fixes that are described in Knowledge Base
	article Q248398, to lock down the permissions to either a service account or
	security descriptor, notice that the heuristic bit is changed back to 0 after
	you apply Service Pack 4.
	
	The behavior to restrict Address Book views first changed in the post Exchange
	Server 5.5 Service Pack 3 version of the Dsamain.exe file (version
	5.5.2652.11).
	
	The version of the Dsamain.exe file that is included in Exchange Server 5.5
	Service Pack 4 is 5.5.2653.17.
	
	
	Additional query words: abv mapi hierarchy dsa recalculation DS_E_INSUFFICIENT_ACCESS_RIGHTS 1055 0x80
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
