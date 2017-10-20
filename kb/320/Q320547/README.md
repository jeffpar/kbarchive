---
layout: page
title: "Q320547: HIS2000: Data Queue Control Hangs When Connection Is Lost"
permalink: /kb/320/Q320547/
---

## Q320547: HIS2000: Data Queue Control Hangs When Connection Is Lost

{% raw %}

	Article: Q320547
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bugkbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the link to an AS/400 system is lost, or some other type of networking
	failure occurs, a program that uses the Microsoft Data Queue ActiveX Control may
	stop responding (hang).
	
	CAUSE
	=====
	
	If any errors occur while you are receiving a reply, the request-completion
	event is not signaled.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later.
	
	  
	  +--------------------------------+
	  | File name   | Date     | Time  | 
	  +--------------------------------+
	  | MSEIGDQ.dll | 03/29/02 | 13:51 | 
	  +--------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug kbhostintegserv2000
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
