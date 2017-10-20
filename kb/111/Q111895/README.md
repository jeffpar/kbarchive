---
layout: page
title: "Q111895: PC Forms: Routing Stopped by Client Without E-Form Software"
permalink: /kb/111/Q111895/
---

## Q111895: PC Forms: Routing Stopped by Client Without E-Form Software

{% raw %}

	Article: Q111895
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message using the Routing form included with Electronics Form
	Designer, the serialized routing of the file may not be completed. This occurs
	if one of the recipients in the Routing form is not an E-form client. This can
	include MS-DOS, Macintosh, and Windows clients that do not have the E-form
	software installed.
	
	CAUSE
	=====
	
	In the Routing form message, the routing information is stored in an MEF package
	and can only be read and interpreted by an E-form client. Mail clients that do
	not have the E-form software installed receive a text-only version of the
	message and can not access the MEF package (MEFPKG.DAT). Since the next
	recipient in the routing list cannot be determined, the routing cycle is
	terminated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.0 of Electronic Forms
	Designer. We are researching this problem and will post new information in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
