---
layout: page
title: "Q253860: Assigning SMTP Mail Attribute from a Notes Connected Directory"
permalink: /kb/253/Q253860/
---

## Q253860: Assigning SMTP Mail Attribute from a Notes Connected Directory

{% raw %}

	Article: Q253860
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For attributes to flow from a connected directory into the Metaverse, the
	attributes must be defined and configured with certain attribute flow rules.
	
	MORE INFORMATION
	================
	
	The Notes Management Agent (MA) is already configured to cause the Lotus Notes
	SMTP mail address attribute to flow. The Notes Person record contains a field
	called ShortName, which holds the part of the SMTP address needed to send Notes
	mail. This is the short name for the full SMTP address (consisting of the name
	before the @ character). Because in most environments the full SMTP name is
	required, the ShortName field may have to be put in the proper format.
	
	You can use the following assignment in the process of assigning the ShortName
	attribute to the Mail attribute in the Metadirectory:
	
	1. Click the Lotus Notes MA.
	
	2. In the Action panel, click Attribute Flow.
	
	3. Click the Advanced Flow Script tab.
	
	4. Type the following flow rule
	
	  $md.mail = ($cd.zcNotesShortName)@<domain>.com
	
	where <domain> is the appropriate domain name.
	
	5. Click OK.
	
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: mms metadirectory via zoomit services
	
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
