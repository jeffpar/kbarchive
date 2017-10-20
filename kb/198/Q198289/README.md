---
layout: page
title: "Q198289: XCLN: ErrMsg: Mapi32.dll Is Missing or Corrupted"
permalink: /kb/198/Q198289/
---

## Q198289: XCLN: ErrMsg: Mapi32.dll Is Missing or Corrupted

{% raw %}

	Article: Q198289
	Product(s): Microsoft Exchange
	Version(s): 98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you install Outlook 98 using the Outlook Deployment Kit (ODK), the
	installation appears to complete successfully. However, when you attempt to
	start the client, you receive the following error message:
	
	  MAPI32.DLL is missing or corrupted
	
	CAUSE
	=====
	
	Because Mapi32.dll is already in use by another application, the updated version
	of this file could not be copied over the previous version installed by Outlook
	97. As a result, several other .dll files required by Outlook 98 are not
	installed either. Because the file is in use at the time of installation, it is
	considered locked open by the Setup program, and cannot be overwritten with the
	newer version of these files.
	
	RESOLUTION
	==========
	
	Close any programs that may be using Mapi32.dll, like Outlook or the Exchange
	client, before running Setup from the Outlook Deployment Kit either manually or
	through a login script.
	
	Additional query words: Setup ODK Upgrade Missing Corrupted
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : 98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
