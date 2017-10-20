---
layout: page
title: "Q173400: Msndc.exe Caused an Invalid Page Fault in Module..."
permalink: /kb/173/Q173400/
---

## Q173400: Msndc.exe Caused an Invalid Page Fault in Module...

{% raw %}

	Article: Q173400
	Product(s): The Microsoft Network
	Version(s): 2.6,5.0,5.1,5.2
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 31-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.6, 5.0, 5.1, 5.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, you may receive the
	following error message:
	
	  Msndc.exe caused an invalid page fault in module ...
	
	The module may be Unknown, kernel32, or others.
	
	CAUSE
	=====
	
	Some components of MSN Quick View may be missing or damaged.
	
	RESOLUTION
	==========
	
	The best way to resolve this issue is to upgrade your MSN experience to the
	latest MSN Software. You can upgrade to MSN Explorer by going to
	<A0><A0><A0><A0> http://explorer.msn.com/home.htm
	
	If you want to continue using your current software, re-installing that software
	will solve the problem. See instructions for different versions of MSN below.
	
	To resolve this issue in MSN 2.6, uninstall and reinstall MSN 2.6 
	-----------------------------------------------------------------
	
	1. Click Start, point to Settings, click Control Panel, and then click
	  Add/Remove Programs.
	
	2. Select MSN 2.6, click Add/Remove and then click Yes.
	
	3. Select Connection Manager, click Add/Remove, and then click Yes.
	
	4. Insert the MSN 2.6 installation CD-Rom and follow the screen prompts to
	  reinstall the software.
	
	To resolve this issue in MSN 5.0, reinstall MSN 5.0
	---------------------------------------------------
	
	1. Insert a MSN 5.0 installation CD-Rom
	
	2. Click Start, point to Find, and then click Files and Folders.
	
	3. In the Named box type msoobe.exe and set Look in to the CD drive.
	
	4. Double-click msoobe.exe and follow the installation instructions.
	
	<A0><A0><A0>-or-
	----
	
	1. Insert the Windows 98SE full version CD-Rom
	
	2. Click Start, point to Find, and then click Files and Folders.
	
	3. In the Named box type rstormsn.exe and set Look in to the CD drive.
	
	4. Double-click rstormsn.exe and follow the installation instructions.
	
	To resolve this issue in MSN 5.1 or 5.2, reinstall MSN 5.1
	----------------------------------------------------------
	
	1. Open Windows Explorer to C:\Program Files\Online Services
	
	2. Right-click Msn50 and click Delete.
	
	3. Insert the MSN 5.1 installation CD-Rom and follow the installation
	  instructions.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. kbimu
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN520 kbMSN510 kbMSN500 kbMSN260
	Version           : :2.6,5.0,5.1,5.2
	Issue type        : kbhowto kbprb
	
	=============================================================================
	

{% endraw %}
