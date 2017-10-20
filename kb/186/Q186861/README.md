---
layout: page
title: "Q186861: BUG: Install Wizard Cannot Distinguish Between MIPS CPUs"
permalink: /kb/186/Q186861/
---

## Q186861: BUG: Install Wizard Cannot Distinguish Between MIPS CPUs

{% raw %}

	Article: Q186861
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500bug kbVBp600 kbOSWinCE100bug kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a Windows CE Toolkit for Visual Basic 6.0 program created with
	the Application Install Wizard, certain devices might hang.
	
	This problem has been reported with some devices that use the Phillips PR31700
	chipset, and may occur on other devices that use the MIPS 3900 processors. The
	following devices might be affected:
	
	- Compaq C-Series 810
	- Compaq C-Series 2010c
	- Philips Velo 1
	- Philips Velo 500
	- Sharp Mobilon HC-4100
	- Sharp Mobilon HC-4500
	
	CAUSE
	=====
	
	The CE Services Application Manager and the VBCE Application Install Wizard
	cannot distinguish between MIPS processor versions. Both the 4000 (1K) and 3000
	(4K) options use the line "ProcessorType=4000" to indicate that a program should
	be downloaded and installed on the device. If the files for the wrong CPU are
	installed, the device may hang.
	
	RESOLUTION
	==========
	
	Create separate installation programs for each MIPS processor. Add information
	to your program's installation instructions indicating that the MIPS 3000 (4K)
	setup should be used for the devices listed above.
	
	If any device hangs during installation, a large .cab file may remain in the
	\Windows\AppMgr\Install folder. This file should be deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: The following steps cause your CE device to hang.
	
	1. Create an installation program for both MIPS processors using the VBCE
	  Application Install Wizard.
	
	2. Install the program on a desktop computer connected to a MIPS 3000 device
	  listed above.
	
	RESULT: The device hangs while trying to decompress the .cab file during
	installation because the file for the MIPS 4000 was downloaded.
	
	Additional query words: vbce wizard hang mobilon mips install vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp500bug kbVBp600 kbOSWinCE100bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
