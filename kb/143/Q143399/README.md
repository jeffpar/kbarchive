---
layout: page
title: "Q143399: PRB: AccessPC with Speed Copy Causes DBC and Project Problems"
permalink: /kb/143/Q143399/
---

## Q143399: PRB: AccessPC with Speed Copy Causes DBC and Project Problems

{% raw %}

	Article: Q143399
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
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
	
	Importing Visual FoxPro for Windows .dbc files into Visual FoxPro for Macintosh
	with AccessPC and Speed Copy loaded causes file corruption or the inability to
	modify or update data once the .dbc files are opened in Visual FoxPro for
	Macintosh.
	
	CAUSE
	=====
	
	There is an Init conflict between AccessPC 1.1 and Speed Copy.
	
	RESOLUTION
	==========
	
	Extension conflicts with Visual FoxPro can cause a variety of problems. To avoid
	these conflicts, follow one of the procedures below to turn off Inits:
	
	If you are using System 7.5x
	----------------------------
	
	1. From the Apple menu, choose Control Panels, and then choose Extensions
	  Manager.
	
	2. In the Sets box, select the All Off option.
	
	Note that in System 7.5, you may still experience problems if you attempt to turn
	off extensions by holding down the SHIFT key when you restart your computer.
	
	If you are using a System earlier than System 7.5
	-------------------------------------------------
	
	1. Switch to the Finder.
	
	2. Hold down the SHIFT key and choose Restart from the Special menu.
	
	3. Continue holding the SHIFT key down until a dialog box appears with the
	  message:
	
	  "Welcome to Macintosh."
	  "Extensions Off"
	
	Try to recopy the Visual FoxPro for Windows DBC to the Macintosh. Start Visual
	FoxPro for Macintosh and attempt to modify the data.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The conflict appears to be between AccessPC 1.1 and Speed Copy. AccessPC is used
	to read MS-DOS formatted disks. If the Macintosh System 7.5 utility that reads
	MS-DOS disks, PC Exchange, is used with Speed Copy, the import appears to go
	without a problem.
	
	Additional query words: VFoxMac unconfirmed
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
