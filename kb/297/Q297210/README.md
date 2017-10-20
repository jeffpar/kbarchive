---
layout: page
title: "Q297210: Using Challenge Response on a Web Site that Has Framesets"
permalink: /kb/297/Q297210/
---

## Q297210: Using Challenge Response on a Web Site that Has Framesets

{% raw %}

	Article: Q297210
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use frameset pages on a site that uses NT Challenge Response as the
	only authentication method, 401 errors may appear in the IIS logs during the
	user's session. The user can successfully access the file shortly after the
	errors occur, and may experience slight delays in accessing some files.
	
	CAUSE
	=====
	
	When Microsoft Internet Explorer attempts to open a page that is divided into
	multiple frames, it requests the different frames pages simultaneously on
	separate ports. IIS sees these as separate requests because they are coming in
	on separate ports, and requires each request to be authenticated individually.
	
	MORE INFORMATION
	================
	
	This is by design for security reasons. Allowing the subsequent sockets to be
	opened without requiring authentication first leaves the server open to attack.
	
	Additional query words: IIS IE 401 frame NTLM
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
