---
layout: page
title: "Q174522: BUG: Visual Studio SP2 Setup Updates Two Instances of VFP"
permalink: /kb/174/Q174522/
---

## Q174522: BUG: Visual Studio SP2 Setup Updates Two Instances of VFP

{% raw %}

	Article: Q174522
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a; WINNT:97sp2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	- Microsoft Visual Studio, Enterprise Edition 97sp2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual Studio Service Pack 2 finds and updates two installs of Visual FoxPro
	version 5.0x even though only one instance of the program exists on the system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The update routine for the Visual Studio Service Pack 2 finds two instances of
	Visual FoxPro although only one instance exists on that machine.
	
	This problem occurs even if you have a machine with a new install of Windows 95
	or Windows NT and with no other applications installed except for Visual FoxPro
	v5.0x.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make sure that there is only one instance of Visual FoxPro 5.0x installed on
	  the computer.
	
	2. Apply Visual Studio Service Pack 2 to your machine.
	
	3. Click Continue at the first dialog box that appears.
	
	4. Select 'I Accept' for the Second and Third dialog boxes.
	
	  NOTE: The fourth dialog box lists "Microsoft Visual FoxPro" twice.
	
	5. Run the SP2 setup all the way to the end.
	
	6. Look at the Log file (Vs97sp2.log) created by the Visual Studio Service Pack
	  2 setup.
	
	NOTE: The same FoxPro files are listed as updated twice.
	
	Additional query words: sp2 install setup kbvfp500 kbvfp500a
	
	======================================================================
	Keywords          :  
	Technology        : kbVSsearch kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a kbVS97SP2 kbVS97Search
	Version           : WINDOWS:5.0,5.0a; WINNT:97sp2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
