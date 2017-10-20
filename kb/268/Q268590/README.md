---
layout: page
title: "Q268590: Netscape Groups Are Not Discovered in MMS"
permalink: /kb/268/Q268590/
---

## Q268590: Netscape Groups Are Not Discovered in MMS

{% raw %}

	Article: Q268590
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbtool
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Netscape Management Agent (MA) does not discover groups that are created
	directly from Netscape Server version 4.1 by using the Netscape console.
	
	CAUSE
	=====
	
	This issue can occur because by default, the object class from groups is Top and
	"groupofuniquenames". In "Advanced Discovery Parameters", the "Requested object
	classes for lists discovery" is only set to "groupOfNames". Because of this
	class name difference, Microsoft Metadirectory Services (MMS) discovery is
	unable to retrieve some native Netscape lists.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, upgrade to MMS version 2.2. This issue is resolved in MMS
	2.2.
	
	To work around this issue:
	
	1. Right-click Netscape MA, and then click Action.
	
	2. Click Configure MA.
	
	3. Click the Advanced Discovery Parameters tab.
	
	4. In the "Requested object classes for lists discovery" box, add
	  groupofuniquenames.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: Zoomit Via zscript genlogs
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
