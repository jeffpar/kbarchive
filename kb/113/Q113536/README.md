---
layout: page
title: "Q113536: WFWG 3.11 Err Msg: The Password You Specified Is Incorrect..."
permalink: kb/113/Q113536/
---

## Q113536: WFWG 3.11 Err Msg: The Password You Specified Is Incorrect...

	Article: Q113536
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	As you start Microsoft Windows for Workgroups 3.11 and your password is being
	validated for a Microsoft Windows NT domain, you receive the following error
	message:
	
	  The password you specified is incorrect or your account is inactive. See your
	  network administrator for the password or to activate your account.
	
	CAUSE
	=====
	
	If you include the command NET START NETBEUI instead of NET START in the
	AUTOEXEC.BAT file, the real-mode NetBEUI protocol is loaded. If your machine
	then connects to a Microsoft Windows NT domain and is supposed to be validated
	when you log on, the validation may be prevented, and the above error message
	may appear.
	
	RESOLUTION
	==========
	
	1. Choose the Network Setup icon in the Network group, then choose the Drivers
	  button.
	
	2. Select the Microsoft NetBEUI protocol, and then choose the Setup button.
	
	3. In the Advanced Protocol Settings section, set the value for NCBS to twice
	  that of the Maximum Sessions value.
	
	4. When you are prompted to restart the computer, choose the Continue button.
	
	5. Quit Windows and "cold boot" your computer (either turn the machine off and
	  then on again, or press the Reset button).
	
	If the above error message persists, continue with the following steps:
	
	1. In the Advanced Protocol Settings section, double the value for Maximum
	  Sessions and increase the NCBS value accordingly (refer to step 3 above).
	
	2. When you are prompted to restart the computer, choose the Continue button.
	
	3. Exit Windows and "cold boot" your computer (either turn the machine off and
	  then on again, or press the Reset button).
	
	NOTE: In addition to increasing the above values, you may need to increase the
	NetHeapSize setting in the [386Enh] section of the SYSTEM.INI file.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	This error message can also occur if the Windows NT server that you are logging
	on to runs out of available licenses (if the server is using "per server"
	mode).
	
	To verify this, run the Licensing tool in Control Panel on the Windows NT server.
	Verify that the number of client licenses is set to the correct number. Also,
	use Server Manager to determine whether all current licenses are currently in
	use.
	
	Additional query words: 3.11 winnt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
