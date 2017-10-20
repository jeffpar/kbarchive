---
layout: page
title: "Q279879: Problems with Processing of Asynchronous CNOS and DISPLAY Verbs"
permalink: /kb/279/Q279879/
---

## Q279879: Problems with Processing of Asynchronous CNOS and DISPLAY Verbs

{% raw %}

	Article: Q279879
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp3 kbhis2000bug kbsna400sp4kbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the CNOS (Change Number of Sessions) verb or such DISPLAY verbs as
	ACTIVATE_SESSION and DEACTIVE_SESSION are called asynchronously, you may
	experience a "hang" where the application no longer responds.
	
	CAUSE
	=====
	
	The SNA Server Winmgt32.dll file is incorrectly processing asynchronous CNOS and
	DISPLAY verbs.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server 4.0 and Host Integration Server (HIS) 2000
	service pack that contains this fix.
	
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
	
	+-----------------------------------+
	| File name    | Date     | Time    | 
	+-----------------------------------+
	| Winmgt32.dll | 12/18/00 | 09:00AM | 
	+-----------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 3 (SP3), 4.0 SP4, and Microsoft Host Integration Server 2000.
	
	Additional query words: ACTIVATE DEACTIVATE Winmgt32 sp1 sp3 sp4 sp5
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp3 kbhis2000bug kbsna400sp4 kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
