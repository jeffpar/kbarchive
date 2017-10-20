---
layout: page
title: "Q269864: Error 14105 Index Duplication Generated in the MA Logs"
permalink: /kb/269/Q269864/
---

## Q269864: Error 14105 Index Duplication Generated in the MA Logs

{% raw %}

	Article: Q269864
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 08-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Management Agent logs contain the following error messages:
	
	  Index Duplication 14105
	
	  Connector Ignored, Index Duplication
	
	CAUSE
	=====
	
	This issue can occur because Index Duplication (14105) is reported when the
	$mail attribute is not unique in the directory. An Index Duplication (14105)
	error message is contained in the Management Agent logs when the Management
	Agent attempts to write to the $mail attribute with a value that already exists
	in the directory.
	
	RESOLUTION
	==========
	
	To resolve this issue, identify a user that was referenced in the error message
	that is contained in the Management Agent logs. Note the SMTP or e-mail address
	of that user, and then search the Metaverse to locate the user. If an existing
	user is found, you will not be able to create a new user in the Metaverse with
	the same e-mail address. In this case, it is likely that it is the same person,
	and "joining" this person into the Metaverse would be the correct solution. For
	information about how to do so, see the MMS Administration Manual and refer to
	the "Joining Connectors to the Metaverse" section. If the search of the
	Metaverse reveals that there are no users with this e-mail address, view your
	Custom Management Agent templates to determine the cause of the problem. Note
	that you may have assigned the mail attribute twice in the templates. For
	example, this could happen if you first assign "$cs.mail = $cd.mail" in the
	Connector Space construction templates. For this example, you would then
	construct "$mv.mail = $cs.mail" or "$mv.mail = $cd.mail" in the Metaverse
	construction templates.
	
	The $mail attribute can only be assigned once in the entire directory, Connector
	Space, and Metaverse, and must remain unique to avoid the 14105 error message.
	It is not necessary to populate the Connector Space with the $mail attribute.
	The solution for this issue is to remove "$cs.mail = $cd.mail" from the
	Connector Space construction templates.
	
	NOTE: E-mail attribute values that are contained within the hologram ($cd.xxxx)
	do not cause 14105 error messages. The hologram is an opaque structure with
	regard to attribute visibility.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
