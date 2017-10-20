---
layout: page
title: "Q148743: Cannot Complete MSN 1.2 Upgrade If Msnver.txt File Is Missing"
permalink: /kb/148/Q148743/
---

## Q148743: Cannot Complete MSN 1.2 Upgrade If Msnver.txt File Is Missing

{% raw %}

	Article: Q148743
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the version 1.2 upgrade for MSN, The Microsoft
	Network, you may receive the following error message:
	
	  Cannot complete the upgrade. There is not enough disk space available to
	  complete this upgrade. To free disk space, try emptying the Recycle Bin or
	  removing unneeded files from your hard disk.
	
	CAUSE
	=====
	
	If you have sufficient disk space, the Msnver.txt file may be missing. This file
	contains the version number of MSN, which is 5399 for MSN 1.0 and 5699 for MSN
	1.05.
	
	RESOLUTION
	==========
	
	Create the missing Msnver.txt file. To do so, follow these steps:
	
	1. Start an MS-DOS session.
	
	2. Change to the \progra~1\themic~1 folder.
	
	3. Type the following line, and then press ENTER:
	
	  "copy con:msnver.txt" (without the quotation marks)
	
	4. Type "5399" (without the quotation marks) for MSN 1.0 or "5699" (without the
	  quotation marks) for MSN 1.05. Press CTRL+Z and then press ENTER.
	
	After you create the Msnver.txt file, try upgrading to MSN 1.2 again.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN105
	Version           : WINDOWS:1.0,1.05
	
	=============================================================================
	

{% endraw %}
