---
layout: page
title: "Q299258: XADM: Information Store Access Violation with Virus Scanning API"
permalink: /kb/299/Q299258/
---

## Q299258: XADM: Information Store Access Violation with Virus Scanning API

{% raw %}

	Article: Q299258
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you install antivirus software that is based on the virus scanning
	application programming interface (API) on an Exchange Server 5.5 computer, the
	Information Store service may stop unexpectedly because of an access violation.
	
	The User.dmp file or, if proper symbols are installed, the Drwatson.log file may
	contain a call stack that is similar to the following:
	
	  
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  21b9f954 004f7018 000011f4 21b9fa10 00000000 21b9faa4 store!DwOpenRetryDelay [omap]  (FPO: [0,0,1])
	  21b9f998 004444f9 00000001 00000001 00000000 21b9fa04 store!EcGetOwningMDBs [omap]  (FPO: [EBP 0x000011f4] [9,12,4])
	  21b9f9c8 00444629 00000032 00000000 00000001 21b9fa04 store!EcQueryRowsOp [omap]  (FPO: [9,1,1])
	  21b9fa18 0040f25e 00000002 000028e1 24070834 21b9fd18 store!EcQueryRows [omap]  (FPO: [EBP 0x1f94e948] [2,6,4])
	  1f94e948 1f94e948 72660001 0000431d 00000000 00000000 store!EcRpc [omap]
	
	CAUSE
	=====
	
	The information store process calls the virus-scanning interface to enable the
	antivirus software to scan the messages. This problem can occur if the virus
	scanning interface becomes NULL for a short time (for example, during the
	automatic update of the antivirus software). If the virus-scanning interface
	calls the virus-scanning interface during that time, an access violation occurs.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
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
	
	Component: Information store
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Store.exe | 5.5.2655.37 | 
	+-------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: VAPI
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
