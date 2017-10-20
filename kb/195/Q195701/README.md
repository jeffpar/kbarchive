---
layout: page
title: "Q195701: SMS: No System BIOS Information Returned on IBM OS/2 Clients"
permalink: /kb/195/Q195701/
---

## Q195701: SMS: No System BIOS Information Returned on IBM OS/2 Clients

{% raw %}

	Article: Q195701
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbInventory smsinv
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Invos2.exe does not report any System BIOS information for IBM OS/2 clients. For
	16-bit Windows and Windows NT, the inventory agents report BIOS Manufacturer,
	BIOS Category and BIOS Release Date.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Systems
	Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time               Size    File name   Platform
	  ----------------------------------------------------------
	  11/11/98   12:43pm            156,645  Invos2.exe (x86)
	  10/22/98   05:10pm             14,556 Os2bios.exe (x86)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. In the <SMS_root>\Site.srv\Maincfg.box\Client.src\X86.bin directory,
	  replace the Invos2.exe file with the version obtained from the hotfix.
	
	  NOTE: You can perform this step automatically by using Hotfix.exe with the
	  provided Hotfix.ini file.
	
	2. Place the new file Os2bios.exe in the following directory:
	
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\X86.bin
	
	Maintenance Manager will replicate these files to the Systems Management Server
	logon servers on its next work cycle. When the files are updated on the logon
	servers, run inventory on the OS/2 clients. BIOS information should be reported
	to the database in the PC BIOS group.
	
	Additional query words: prodsms warp os2 hardware hw
	
	======================================================================
	Keywords          : kbsms120 kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
