---
layout: page
title: "Q153648: Cannot Delete Secondary Site After Installing Admin Tools"
permalink: /kb/153/Q153648/
---

## Q153648: Cannot Delete Secondary Site After Installing Admin Tools

	Article: Q153648
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbsetup kbsmsAdmin smsadmin smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install the Systems Management Server Administrator Tool and remove a
	secondary site for the site hierachy, the secondary site continues to function
	with the its services still running.
	
	WORKAROUND
	==========
	
	To work around this problem, manually remove the Systems Management Server
	components. For additional information on how to remove the Systems Management
	Server components, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q139627 How to Manually Remove Systems Management Server
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	If the Systems Management Server Administrator Tool is installed on a secondary
	site server, the following registry subkey in the HKEY_LOCAL_MACHINE subtree is
	overwritten:
	
	  \SOFTWARE\Microsoft\SMS\Setup
	
	The registry key now includes information that only the Systems Management Server
	Administrator Tool is installed. If the Tool is de-installed, all of the
	registry entries are removed.
	
	
	Additional query words: prodsms regedt32 registry
	
	======================================================================
	Keywords          : kbsetup kbsmsAdmin smsadmin smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
