---
layout: page
title: "Q235741: SMSINST: Installer App Calls CTL3DV2.DLL on NTW Unchecked"
permalink: /kb/235/Q235741/
---

## Q235741: SMSINST: Installer App Calls CTL3DV2.DLL on NTW Unchecked

{% raw %}

	Article: Q235741
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 11-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the executable compiled by the 16-bit version of System Management
	Server Installer the following error may appear if the CTL3DV2.DLL file does not
	exist on the target Windows NT Workstation:
	
	  CTL3DV2.DLL has not been correctly installed...installation could not
	  continue.
	
	This file is only needed on 16-bit clients when the Use Internal 3D Effects box
	is checked in Installation properties of the program. The program was compiled
	on a 16-bit operating system which requires a CTL3DV2.DLL to run 3-D effects. A
	32-bit operating systems uses the CTL3D32.DLL.
	
	If you are going to run the program on a 32-bit operating system, compile the
	program on a 32-bit operating system rather than on a 16-bit operating system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS200 kbSMSI200
	Version           : WINDOWS:2.0; winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
