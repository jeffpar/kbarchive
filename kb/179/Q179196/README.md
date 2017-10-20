---
layout: page
title: "Q179196: PRB: &quot;Insert the CD Labeled Microsoft VFP Setup CD-Rom&quot; Error"
permalink: /kb/179/Q179196/
---

## Q179196: PRB: &quot;Insert the CD Labeled Microsoft VFP Setup CD-Rom&quot; Error

{% raw %}

	Article: Q179196
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WARNING: The information in this article has not been confirmed or tested by
	Microsoft. Some or all of the information in this article has been taken from
	unconfirmed customer reports. ANY USE BY YOU OF THE INFORMATION PROVIDED IN THIS
	ARTICLE IS AT YOUR OWN RISK. Microsoft provides this information "as is" without
	warranty of any kind, either expressed or implied, including but not limited to
	the implied warranties of merchantability and/or fitness for a particular
	purpose.
	
	When you install the Visual FoxPro for Windows 5.0 component from Visual Studio
	97, the installation may be interrupted with the following error message:
	
	  Insert the CD Labeled Microsoft VFP Setup CD-ROM.
	
	A warning dialog box appears with OK and Cancel buttons. Selecting the OK button
	allows the installation to continue but the process will be interrupted again
	with either the same or a different error message.
	
	CAUSE
	=====
	
	You are using the Backpack external CD-ROM parallel port real-mode driver.
	
	RESOLUTION
	==========
	
	Current Backpack CD-ROM drive models can use a 32-bit protected-mode driver that
	can be obtained from the manufacturer for compatibility with Windows 95 and
	Windows NT 3.51 and 4.0. This driver can be downloaded from the Software Library
	at Micro Solutions' Web site at:
	
	  http://www.micro-solutions.com
	
	MORE INFORMATION
	================
	
	When the error message "Insert the CD Labeled Microsoft VFP Setup CD-ROM"
	occurs, a dialog box with OK and Cancel buttons appear. If you select either the
	OK or the Cancel button, the following error message occurs:
	
	  RACREG32.DLL cannot register itself in the registry.
	
	REFERENCES
	==========
	
	For more information about the Backpack CD-ROM driver, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q131499 CD-ROM Drives Requiring Real-Mode Drivers
	
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words: cd-rom
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
