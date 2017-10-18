---
layout: page
title: "Q304068: SMS: The Ndiscldr Tool Cannot Import into Child Sites"
permalink: kb/304/Q304068/
---

## Q304068: SMS: The Ndiscldr Tool Cannot Import into Child Sites

	Article: Q304068
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to import settings into a child site by using the Ndiscldr.exe
	tool with the /s:<sitecode> switch, you may receive the following error
	message:
	
	  ERROR: Could not retrieve component for sitecode
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version      Size    File name    Platform
	  --------------------------------------------------------------
	  10-Sep-2001  06:00  2.0.1250.11  74,688  Ndiscldr.exe i386
	  10-Sep-2001  06:00  2.0.1250.11 114,448  Ndiscldr.exe Alpha 
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in in the Ndiscldr.exe tool.
	
	MORE INFORMATION
	================
	
	The Ndiscldr.exe tool is included with the Microsoft BackOffice Resource Kit
	version 4.5. With this tool, you can export Systems Management Server (SMS) 2.0
	Network Discovery properties from one site and import them into another site.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
