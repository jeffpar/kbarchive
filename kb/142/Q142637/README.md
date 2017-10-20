---
layout: page
title: "Q142637: Xircom Pocket Ether3 Adapters Require 802.2 Frame Type"
permalink: /kb/142/Q142637/
---

## Q142637: Xircom Pocket Ether3 Adapters Require 802.2 Frame Type

{% raw %}

	Article: Q142637
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An error message indicating
	
	  The password you specified is incorrect or your account is inactive. See your
	  network administrator to activate your account or get your password.
	
	will be displayed when all of the following conditions are present:
	
	- The client is using Windows for Workgroups 3.11.
	
	- A Xircom Pocket Ether3 Parallel Port Adapter is being used.
	
	- The client is running IPX, with the frame type set to "Not Present."
	
	- The client is attempting to log on to a primary domain controller (PDC).
	
	CAUSE
	=====
	
	When a Windows for Workgroups client uses the Xircom Pocket Ether3 Parallel Port
	Adapter and the frame type has been set to any value other than 802.2, the
	client is unable to log on and, instead, receives the error message indicated
	above. As a result, you need to ensure that the server is also set to use the
	802.2 frame type in its IPX configuration.
	
	RESOLUTION
	==========
	
	Manually setting the frame type to 802.2 allows the Windows for Workgroups
	client to log on to the PDC. Restart the client system before you attempt to log
	on.
	
	Additional query words: prodnt zircom
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
