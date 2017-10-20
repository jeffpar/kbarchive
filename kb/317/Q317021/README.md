---
layout: page
title: "Q317021: &quot;Device Name Is Already In Use&quot;  Err Msg Saving to Mapped Drive"
permalink: /kb/317/Q317021/
---

## Q317021: &quot;Device Name Is Already In Use&quot;  Err Msg Saving to Mapped Drive

{% raw %}

	Article: Q317021
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to save a Microsoft Office document to a mapped drive, you may
	receive the following error message:
	
	  An error occurred while reconnecting <drive letter> to \\<network
	  server>\<share folder>.
	
	  Microsoft Windows Network: The local device name is already in use.
	
	  This connection has not been restored.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- McAfee VirusScan ASAP software Scan Engine 4.1.40 is installed on your
	  computer.
	
	  -and-
	
	- The mapped drive is located on a Windows NT Server, Enterprise Edition
	  version 4.0-based computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact contact McAfee Technical Support for an update to
	the scan engine for McAfee VirusScan. To do this, browse to the following McAfee
	Web site:
	
	  http://www.mcafee.com/support
	
	WORKAROUND
	==========
	
	To work around this issue, disable McAfee VirusScan. Consult your McAfee
	VirusScan documentation for more information about how to temporarily turn off
	this program.
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
