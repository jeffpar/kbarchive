---
layout: page
title: "Q141142: FIX: Distributed Application Allows Setup /a"
permalink: /kb/141/Q141142/
---

## Q141142: FIX: Distributed Application Allows Setup /a

{% raw %}

	Article: Q141142
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The setup program created by the Visual FoxPro Setup Wizard is not intended to
	be used to set up a Visual FoxPro application to run from a network server.
	Although the setup program will allow the administrative setup option (Setup
	/a), the application will not be installed correctly.
	
	CAUSE
	=====
	
	The option for an administrative install is provided through the setup table
	files (*.stf). There are three different .stf files, one for each supported
	platform. They are located in the disk 1 or netsetup directory. The .stf files
	and their associated operating systems are listed below.
	
	  .STF File Name    Operating System
	  --------------------------------------------------------
	  Setup16.stf       Windows or Windows for Workgroups 3.11
	  Setup32.stf       Windows NT
	  Setup95.stf       Windows 95
	
	WORKAROUND
	==========
	
	The .stf files can be modified to disable the administrative setup option. by
	using any standard text editor such as Notepad. Locate the following line in the
	Setup16.stf file:
	
	     Admin Mode Root Object ID     7:02
	
	Delete all text on this line, but do not delete the line itself. There should be
	a blank line left in place of the text. Repeat this process for the other two
	.stf files (Setup32.stf and Setup95.stf). All three of the .stf files must be
	changed to disable this option on all three supported operating systems. Once
	the .stf files have been modified and saved, setup displays the following error
	immediately after an attempt to run Setup /a as it should:
	
	  Setup does not support being run in this mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Using the setup wizard, create a set of distribution disks.
	
	2. Run Setup /a from the distribution disks. Setup continues as though it is
	  performing an administrative install even though it does not support this
	  option.
	
	Additional query words: VFoxWin buglist3.00 fixlist3.0b
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
