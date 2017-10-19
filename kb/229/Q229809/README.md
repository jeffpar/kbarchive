---
layout: page
title: "Q229809: SMS: Unexpected Reinstallation of SMS Packages"
permalink: /kb/229/Q229809/
---

## Q229809: SMS: Unexpected Reinstallation of SMS Packages

	Article: Q229809
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Packages installed months, weeks, or days earlier are suddenly reinstalled at
	some Systems Management Server clients.
	
	This problem occurs only on Systems Management Server 1.2 Service Pack 3 and
	Service Pack 4.
	
	CAUSE
	=====
	
	Deletion, corruption, or a purge in the local Package Command Manager (PCM)
	history file, Pcmhist.reg, may lead to this problem.
	
	When such a situation occurs, PCM rebuilds a new file containing all the packages
	available in the computer instruction (.ins) file, even if these packages were
	already installed as mandatory packages.
	
	A feature introduced in Systems Management Server 1.2 Service Pack 3 allows this
	behavior. For additional information about this feature, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q174933 SMS: PCM Service Job Does Not Log Failure If Not Mandatory
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
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
	
	  Date      Time   Size   File name   Platform
	  ---------------------------------------------------------
	
	  06/09/98   10:37p        263,632   Pcmsvc32.exe   (x86)
	  06/09/98   10:37p        451,760   Pcmwin16.exe   (x86)
	  06/09/98   10:37p        465,312   Pcmwin32.exe   (x86)
	
	  06/09/98   10:36p        792,336   Pcmsvc32.exe   (Alpha)
	  06/09/98   10:35p      1,168,144   Pcmwin32.exe   (Alpha)
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 3 and Service Pack 4.
	
	
	Additional query words: prodsms pcmsvc sp sp3
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
