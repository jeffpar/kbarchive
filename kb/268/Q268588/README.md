---
layout: page
title: "Q268588: Groups Exported to Netscape from MMS Are Not Searchable"
permalink: /kb/268/Q268588/
---

## Q268588: Groups Exported to Netscape from MMS Are Not Searchable

	Article: Q268588
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbtool
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Groups objects are exported to the Netscape connected directory. When there is a
	search for one of the exported groups, the search fails. However, there are no
	errors returned in the Zscript.log file on the Microsoft Metadirectory Services
	(MMS) server.
	
	CAUSE
	=====
	
	This behavior can occur because GroupOfNames is a valid object class, but
	GroupOfUniqueNames is the correct object class for groups in Netscape 4.1.
	Because GroupOfNames is not the correct object class for groups in Netscape 4.1,
	the objects are not considered a group and the search for group objects does not
	render that group.
	
	RESOLUTION
	==========
	
	To work around this issue, change this object class value for new accounts:
	
	1. Right-click Netscape MA and select Action.
	
	2. Select Configure MA.
	
	3. Click the New Accounts tab.
	
	4. In the "Create Netscape groups using" box, change GroupOfNames to
	  GroupOfUniqueNames.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
