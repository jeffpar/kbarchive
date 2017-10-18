---
layout: page
title: "Q193224: SMS: PCMSVC32 AVs If Package Cmd Line Contains a Drive Letter"
permalink: kb/193/Q193224/
---

## Q193224: SMS: PCMSVC32 AVs If Package Cmd Line Contains a Drive Letter

	Article: Q193224
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Systems Management Server 1.2 Service Pack 4 version of the Package
	Command Manager (PCM) service, PCMSVC32, attempts to run a job that specifies a
	command line containing a drive letter, an access violation (AV) will occur.
	
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
	
	  Date      Time        Size    File name      Platform
	  -----------------------------------------------------
	  9/24/98   1:54pm      265,712 Pcmsvc32.exe   (Intel)
	  9/24/98   1:53pm      794,384 Pcmsvc32.exe   (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. Replace the Pcmsvc32.exe file in the
	  <SMS_root_directory>\Site.srv\<platform>.bin directory with the
	  hotfixed version.
	
	2. A site reset is required for the updated file to be copied to all servers
	  managed by the Site Configuration Manager. Windows NT Workstations running
	  PCMSVC32 must also be updated accordingly.
	
	Additional query words: prodsms pcmsvc
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
