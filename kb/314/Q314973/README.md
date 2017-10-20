---
layout: page
title: "Q314973: &quot;Unable to Write File&quot; Err Msg After Adding Local APPC LU"
permalink: /kb/314/Q314973/
---

## Q314973: &quot;Unable to Write File&quot; Err Msg After Adding Local APPC LU

{% raw %}

	Article: Q314973
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to save an SNA Server or Host Integration Server (HIS) 2000
	configuration file (Com.cfg) after you add local Advanced Program-to-Program
	Communications (APPC) logical units (LUs), an "Unable to write file" error
	occurs.
	
	The new local APPC LUs that you added are not saved in the configuration.
	
	This is only likely to occur with very large SNA Server or HIS 2000
	configurations. The following list includes some configuration parameters that
	increase the chance that this problem will occur:
	
	- There are more than 2,000 local APPC LUs.
	
	- "Implicit Incoming Remote LU" is configured for the local APPC LUs.
	
	- "Implicit Incoming Mode" is configured for the remote APPC LUs.
	
	CAUSE
	=====
	
	The SNA Server or HIS 2000 configuration dynamic link library (DLL) incorrectly
	exceeds the maximum value for the number of internal records that are needed
	when you save large configuration files. This results in the "Unable to write
	file" error when you save the configuration.
	
	
	RESOLUTION
	==========
	
	SNA Server 4.0:
	
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
	
	+--------------------------------+
	| File name  | Date       | Time | 
	+--------------------------------+
	| Snacfg.dll | 12/18/2001 | 7:39 | 
	+--------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000:
	
	No fix is yet available for this problem in Host Integration Server 2000.
	
	STATUS
	======
	
	SNA Server 4.0:
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0, 4.0 Service Pack (SP) 1, 4.0 SP2, 4.0 SP3, and 4.0 SP4.
	
	Host Integration Server 2000:
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration Server
	2000.
	
	
	
	MORE INFORMATION
	================
	
	SNA Server 4.0 and HIS 2000 support a maximum of 3,000 local APPC LUs per SNA
	Server service.
	
	For additional information on problems that can cause an "Unable to write file"
	error when you save an SNA configuration file, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q293879 Unable to Write File Error After Changing Com.cfg
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
