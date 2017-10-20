---
layout: page
title: "Q159517: Encarta 97 Err Msg: File &lt;Filename&gt; Could Not be Opened..."
permalink: /kb/159/Q159517/
---

## Q159517: Encarta 97 Err Msg: File &lt;Filename&gt; Could Not be Opened...

{% raw %}

	Article: Q159517
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Encarta Encyclopedia 97 on a Microsoft Windows
	3.x-based computer, you may receive the following error message:
	
	  The file <drive>:\<path>\<filename> could not be opened.
	  Exit other applications and try again.
	
	CAUSE
	=====
	
	This behavior can occur if a damaged Win32s file exists in the \Windows\System
	folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the Win32s file from the \Windows\System folder,
	and then reinstall Encarta Encyclopedia 97.
	
	To do this:
	
	1. In the Main group in Program Manager, double-click File Manager.
	
	2. In the left pane, click the PLUS SIGN (+) next to the Windows folder to
	  expand the branch.
	
	3. Under the Windows folder in the left pane, click the System folder.
	
	4. In the right pane, click to select the Win32s file.
	
	5. On the File menu, click Delete. When you are prompted to confirm the file
	  deletion, click Yes.
	
	6. Close File Manager, and then reinstall Encarta Encyclopedia 97.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Encarta Encyclopedia
	for Windows, 1997 Edition.
	
	MORE INFORMATION
	================
	
	To run Encarta Encyclopedia 97 on a Microsoft Windows 3.x-based computer, Win32s
	must be installed on the computer.
	
	Win32s is a software extension for Microsoft Windows 3.x that provides support
	for certain 32-bit Windows programs in the 16-bit Microsoft Windows 3.x
	environment.
	
	Additional query words: 1997 setup err msg error message multi media multimedia multi-media mmtitles kbmm mm
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
