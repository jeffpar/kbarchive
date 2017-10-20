---
layout: page
title: "Q133714: PRB: &quot;Not Enough Space on Drive x&quot; Error During Installation"
permalink: /kb/133/Q133714/
---

## Q133714: PRB: &quot;Not Enough Space on Drive x&quot; Error During Installation

{% raw %}

	Article: Q133714
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Microsoft Visual FoxPro setup, you may be presented with a dialog
	box that contains the following error message where drive X is the drive on
	which Windows is installed:
	
	  Not Enough Space on Drive X
	
	CAUSE
	=====
	
	When Visual FoxPro is installed, various Windows support components are
	installed into the WINDOWS\SYSTEM subdirectory. Visual FoxPro requires a minimum
	amount of space for these support components.
	
	RESOLUTION
	==========
	
	Based on the information presented in the dialog box, you can selectively remove
	some of the components and decrease the disk resources required in the
	\WINDOWS\SYSTEM subdirectory, or you can free up disk space to meet the minimum
	disk space requirements as shown in the dialog box.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual FoxPro has three installation options:
	
	- Complete
	
	- Custom
	
	- Laptop
	
	When you choose the Complete installation option, Visual FoxPro requires 6680K of
	free disk space on the drive where Windows is installed. Without sufficient disk
	space, the product can not be installed.
	
	When you choose the Laptop installation option, Visual FoxPro requires less than
	4000K of free disk space in the \WINDOWS\SYSTEM subdirectory.
	
	When you choose the Custom option, Visual FoxPro requires as much as 6680K of
	free disk space (depending on the number of components installed) on the drive
	where Windows is installed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Set up a computer with a C drive that has fewer than seven megabytes free and a D
	drive where Visual FoxPro will be installed. Given these two conditions (or
	similar ones), the behavior noted above will occur.
	
	Additional query words: VFoxWin install
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
