---
layout: page
title: "Q307601: Unable to Allocate LU 6.2 Sessions Using Dependent APPC LUs"
permalink: /kb/307/Q307601/
---

## Q307601: Unable to Allocate LU 6.2 Sessions Using Dependent APPC LUs

{% raw %}

	Article: Q307601
	Product(s): Microsoft SNA Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced Program-to-Program Communications (APPC) or Common Programming
	Interface for Communications (CPI-C) applications may be unable to allocate LU
	6.2 sessions. This typically occurs after the applications have been functioning
	normally for a long period of time.
	
	This problem only occurs if the SNA Server or Host Integration Server (HIS) 2000
	systems are using dependent APPC LUs for communications with the host system.
	
	The exact symptoms experienced by the end users of the APPC or CPI-C applications
	may vary depending on the application, but the following errors are likely to be
	returned by the underlying SNA Server/HIS 2000 APPC and CPI-C APIs:
	
	  APPC
	
	  Primary Return Code: 0003 (AP_ALLOCATION_ERROR)
	
	  Secondary Return Code: 00000005 (AP_ALLOCATION_FAILURE_RETRY)
	
	  CPI-C
	
	  Error 20 (CM_PRODUCT_SPECIFIC_ERROR)
	
	  -or-
	
	  Error 24 (CM_PROGRAM_PARAMETER_CHECK)
	
	CAUSE
	=====
	
	The SNA Server service gets into a state where it rejects solicited BINDs from
	the host, which leads to the APPC or CPI-C allocation failures. The following
	problems have been identified:
	
	- An internal variable could become negative if the SNA Server/HIS 2000
	  configuration is very large.
	
	- The SNA Server service does not correctly process a BIND when the host system
	  responds to an INIT-SELF request with a NOTIFY ILU/TLU (Initiating
	  LU/Terminating LU) notification of a procedure error.
	
	RESOLUTION
	==========
	
	SNA Server
	----------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server version 4.0 service pack that contains this
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
	
	+-------------------------------------+
	| File name    | Date       | Time    | 
	+-------------------------------------+
	| Snaservr.exe | 08/10/2001 | 02:36PM | 
	+-------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000
	----------------------------
	
	No fix is available for this problem in Host Integration Server 2000 at this
	time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0 and 4.0.
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration Server
	2000.
	
	
	MORE INFORMATION
	================
	
	Note that the APPC and CPI-C errors described in the "Symptoms" section are
	common errors that can also occur for reasons other than the ones discussed in
	this article.
	
	SNA Server and HIS 2000 systems that meet the following criteria may be
	susceptible to the problem described in this article:
	
	- Dependent APPC LUs used for LU 6.2 sessions.
	
	- Supports Dynamic Remote APPC LU Definition is enabled in the connection
	  properties for the configured host connections.
	
	- SNA configurations that are very large. This would include configurations
	  that contain large numbers of LUs (APPC, 3270, LUA) and/or host connections.
	
	The following Microsoft Knowledge Base articles describe other problems related
	to dependent APPC LUs or the use of dynamic remote APPC LUs that can cause
	similar symptoms:
	
	  Q307520 Dynamic Remote LUs May Lead to Allocation Failures
	
	  Q281507 Dependent LU Version 6.2 Session Requests May Hang If Default Pool Is
	  Used
	
	  Q259149 SNA Server Selects Bad Dependent APPC LU from Default Pool
	
	  Q245487 APPC Program Never Retries New Local LU From Pool
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ300 kbSNAServ400
	Version           : :3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
