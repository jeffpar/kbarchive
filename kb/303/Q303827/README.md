---
layout: page
title: "Q303827: PRB: Norton AntiVirus Error When Running Setup from Vfpstart.hta"
permalink: /kb/303/Q303827/
---

## Q303827: PRB: Norton AntiVirus Error When Running Setup from Vfpstart.hta

{% raw %}

	Article: Q303827
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbvfp kbGrpDSFox kbDSupport kbvfp700
	Last Modified: 19-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users with Norton AntiVirus installed may receive a warning dialog box after
	clicking on one of the links on the Visual FoxPro 7.0 Setup page. The dialog box
	contains text that resembles the following:
	
	----------------------
	Norton AntiVirus has detected a potential threat in the displayed Activity.
	For your protection, Norton AntiVirus halted the script so you can choose
	an appropriate Action from the list below.
	
	File:    CD ROM Drive Letter>\vfpstart.hta
	Object:  Windows Script Host Shell Object
	
	Action:   Run
	
	Norton AntiVirus recommends that you prevent the script from running
	unless you know and trust the source of the script.
	
	Action:  Stop this script (recommended)
	
	Choose "Stop this script" if you do not trust the script source or
	the current script activity.
	----------------------
	
	CAUSE
	=====
	
	Norton Antivirus has detected that a script is trying to run from the Visual
	FoxPro 7 startup page.
	
	RESOLUTION
	==========
	
	To allow the setup to complete, select Allow the entire script once from the
	Action menu, then click OK in the dialog box. The setup page uses Windows
	Scripting to start the various setups. Norton AntiVirus captures scripting
	activity and warns the user of possible threats.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbGrpDSFox kbDSupport kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
