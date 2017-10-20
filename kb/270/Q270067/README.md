---
layout: page
title: "Q270067: Delta Values Not Updated When You Run Management Agent"
permalink: /kb/270/Q270067/
---

## Q270067: Delta Values Not Updated When You Run Management Agent

{% raw %}

	Article: Q270067
	Product(s): Microsoft Windows NT
	Version(s): 2.2
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run a management agent, the delta values for "Last Update Time" are not
	incremented, or are set to a value of zero. This problem occurs with several
	management agents, including the Report management agent and the Exchange LDAP
	management agent.
	
	CAUSE
	=====
	
	There are actually two issues:
	
	- There is a timestamp reset from the current value to a value of all zeroes
	  (for example, "000000000000-0000.00") when you operate the management agent
	  with delta operations not enabled.
	
	- "Last Foreign Users Update Time" is not updated when you run the management
	  agent with delta operations enabled.
	
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
	  --------------------------------------------------
	  08/25/00  21:35  0630.1124  1,375,232  Importt.exe
	  08/25/00  21:35  0630.1124  1,503,744  Replica.exe
	  08/25/00  21:35  0630.1124  1,911,808  Viaserver.exe
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Zoomit Via MA zscript genlogs UTC update
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS220
	Version           : :2.2
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
