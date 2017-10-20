---
layout: page
title: "Q271211: Deleted Users Repeatedly Processed"
permalink: /kb/271/Q271211/
---

## Q271211: Deleted Users Repeatedly Processed

{% raw %}

	Article: Q271211
	Product(s): Microsoft Windows NT
	Version(s): 2.2
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you operate the management agent in Delta mode, the operator's log contains
	text that indicates that a previously deleted user object has been deleted
	again.
	
	CAUSE
	=====
	
	The data for the last user was not deleted after the deletion was processed.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next version of Microsoft Metadirectory Services that contains this
	fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time   Version    Size       File name
	  ----------------------------------------------------
	  08/25/00  21:35  0630.1124  1,375,232  Importt.exe
	  08/25/00  21:35  0630.1124  1,911,808  Viaserver.exe
	
	
	
	This problem is related to the problem that is described in the following
	Microsoft Knowledge Base article:
	
	  Q270067 Delta Values Not Updated When You Run Management Agent
	
	Both issues are resolved in the fix that is described in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMMSSearch kbMMS220
	Version           : :2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
