---
layout: page
title: "Q90201: Setup Fails to Upgrade Over Existing WFWG Installation"
permalink: /kb/090/Q90201/
---

## Q90201: Setup Fails to Upgrade Over Existing WFWG Installation

{% raw %}

	Article: Q90201
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups version 3.1 Setup may fail to upgrade an existing
	installation of Windows for Workgroups even if the minimum disk space
	requirement of 500 kilobytes (K) is present. Setup operates normally until it
	reaches the file WIN386.EXE. You then see a dialog box telling you there is not
	enough disk space to perform a complete upgrade.
	
	You will only notice this problem if you have between 500K and 545K of free disk
	space on the drive of your current Windows for Workgroups installation.
	
	CAUSE
	=====
	
	Usually, Windows for Workgroups Setup checks to make sure that at least 500K of
	disk space is available. Usually there is slightly more than this amount
	available, resulting in no problems when you perform an upgrade over Windows for
	Workgroups.
	
	Setup uses the Windows dynamic link library (DLL) VER.DLL, which copies files and
	verifies Windows component versions. To function correctly, VER.DLL requires as
	much disk space as the file it is copying. When it reaches WIN386.EXE, it cannot
	find enough space and stops the installation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups Setup
	version 3.1. This problem does not occur in later versions of Windows for
	Workgroups.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
