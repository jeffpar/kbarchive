---
layout: page
title: "Q265143: .nim File for NetWare Servers Reports &quot;No Data Available&quot;"
permalink: kb/265/Q265143/
---

## Q265143: .nim File for NetWare Servers Reports &quot;No Data Available&quot;

	Article: Q265143
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a custom NOIDMIF file to report on a Novell NetWare server, the
	attribute data is displayed as "No Data Available" in the Systems Management
	Server (SMS) Administrator console.
	
	CAUSE
	=====
	
	The SMS Maintenance Manager thread of the SMS Executive component is responsible
	for the inventory of NetWare file servers. Maintenance Manager creates an IDMIF
	file for hardware and software inventory and a separate IDMIF file that contains
	any NOIDMIF data from any submitted .nim files.
	
	The IDMIF file that contains .nim file data is submitted to the inventory
	processor first, followed shortly by the inventory MIF file. The NOIDMIF (.nim)
	file attributes are then displayed as "No Data Available" in the SMS
	Administrator console.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date     Time   Version  Size    File name     Platform
	  -------------------------------------------------------
	  8/11/00  11:32  786      100 KB  Maintain.dll  Intel
	  8/11/00  11:37  786      163 KB  Maintain.dll  Alpha
	
	NOTE: This hotfix is available only for SMS 1.2 Service Pack 4 (SP4).
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To install the hotfix, follow these steps on the SMS site server:
	
	1. Stop all SMS 1.2 site services on the site server.
	
	2. Replace the Maintain.dll file that is located in the
	  SMS\Site.srv\<Platform>.Bin folder with the copy that is supplied in
	  the hotfix.
	
	3. Restart the SMS site services.
	
	After you apply this hotfix, Maintenance Manager performs a hardware and software
	inventory of Novell NetWare servers and appends .nim file data for all .nim
	files that are found in the Logon.srv\Isvmif.box folder on the NetWare server to
	the inventory MIF file. A single MIF file is produced.
	
	For information about collecting NOIDMIF files, see page 114 in the SMS 1.2
	Resource Guide.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
