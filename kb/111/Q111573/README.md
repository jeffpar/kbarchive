---
layout: page
title: "Q111573: Standby Mode with APM, Mail, &amp; AWFAX May Result in a GP Fault"
permalink: /kb/111/Q111573/
---

## Q111573: Standby Mode with APM, Mail, &amp; AWFAX May Result in a GP Fault

{% raw %}

	Article: Q111573
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Microsoft Mail with Microsoft At Work PC Fax support when
	your Advanced Power Management computer goes into standby mode, you may receive
	the following error message:
	
	  PROGMAN caused a General Protection Fault in MOUSE.DRV
	
	CAUSE
	=====
	
	The above error message can occur when the computer goes into standby mode if
	all of the following conditions are true:
	
	- Power management is set to Advanced.
	
	- Hardware power management is set to something other than OFF.
	
	- Microsoft Mail and Microsoft At Work PC Fax are running.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.11. We are researching this problem and will post new information here as it
	becomes available.
	
	KBCategory: kbtool kbbuglist kbatwork kberrmsg
	KBSubcategory: wfw wfwg awfax gpf
	
	Additional query words: 3.11 gp-fault sleep blank program manager
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
