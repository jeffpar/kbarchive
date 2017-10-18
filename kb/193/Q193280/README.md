---
layout: page
title: "Q193280: SMS: CCM Removes LANDesk Files When Remote Control Isn't Enabled"
permalink: kb/193/Q193280/
---

## Q193280: SMS: CCM Removes LANDesk Files When Remote Control Isn't Enabled

	Article: Q193280
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Intel LANDesk Management Suite Remote Control files conflict with the
	Systems Management Server Remote Control files; these two Remote Control
	packages cannot be installed concurrently on a single client computer. However,
	even when Systems Management Server Remote Troubleshooting is not enabled on a
	site, the Client Configuration Manager (CCM) will remove the files and registry
	keys associated with Intel LANDesk.
	
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
	
	  Date       Time    Version      Size    File name    Platform
	  -------------------------------------------------------------
	  09/24/98   04:01   1.2          365,392 Clicfg.exe   (x86)
	  09/24/98   03:59   1.2          914,192 Clicfg.exe   (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	The new version of CCM detects the presence of LANDesk by checking for the
	HKEY_LOCAL_MACHINE\SOFTWARE\INTEL\LANDESK\WUSER32 registry key. If that registry
	key is present, CCM leaves the LANDesk files and registry keys intact if Systems
	Management Server Remote Troubleshooting is not enabled on the site.
	
	To install the hotfix, perform the following steps:
	
	1. Replace the Clicfg.exe file in the
	  <SMS_root_directory>\Site.srv\<platform>.bin directory with the
	  hotfixed version.
	
	  NOTE: You can perform Step 1 automatically by using Hotfix.exe with the
	  provided Hotfix.ini file.
	
	2. Reset the site from Systems Management Server Setup. The updated Clicfg.exe
	  will be copied to the Systems Management Server logon servers.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodsms RC config mgr
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
