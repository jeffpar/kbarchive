---
layout: page
title: "Q305693: SMS: Access Violation with the Preinst During /DELSITE Command"
permalink: /kb/305/Q305693/
---

## Q305693: SMS: Access Violation with the Preinst During /DELSITE Command

{% raw %}

	Article: Q305693
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbsms200 kbsms200bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The current version of the Preinst.exe utility (Build 1519) shipped with the SMS
	2.0 Recovery Tools can access violate during the /DELSITE operation.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  
	
	  Date       Version         Size     File name    Platform
	  ---------------------------------------------------------
	  8/22/2001  2.00.1520.2000  839,168  Preinst.exe  Intel
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the version of Preinst.exe (build 1250) that is
	included in the Microsoft BackOffice Resource Kit 4.5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 Recovery Tools.
	
	MORE INFORMATION
	================
	
	For additional information about the Preinst.exe tool, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q212978 Description of Preinst.exe for SMS 2.0
	
	The /delsite:{sitecode,parentsite} parameter is often used to delete orphaned
	child site information from a primary site database and file system. If you
	experience the symptom that is described in this article when you use the
	/delsite command, contact Microsoft Product Support Services for assistance.
	
	
	Additional query words: prodsms preinst delsite
	
	======================================================================
	Keywords          : kberrmsg kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
