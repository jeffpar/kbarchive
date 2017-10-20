---
layout: page
title: "Q126822: Kids: Program Group and/or Icons Disappear in TabWorks"
permalink: /kb/126/Q126822/
---

## Q126822: Kids: Program Group and/or Icons Disappear in TabWorks

{% raw %}

	Article: Q126822
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,3.x
	Operating System(s): 
	Keyword(s): kbtlckbfaq
	Last Modified: 08-NOV-2001
	
	1.0
	WINDOWS
	kb3rdparty kbprb kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	- the operating system: Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Magic School Bus on a machine that has TabWorks installed on it,
	the Microsoft Kids program group and the Magic School Bus icons may not display
	on the TabWorks page. In addition, if you create tabs for them, they disappear
	when Windows is restarted.
	
	RESOLUTION
	==========
	
	To resolve this problem without disabling TabWorks, use the following steps:
	
	1. Remove the MSKIDS directory, including all Kids files and directories.
	
	2. In TabWorks, choose Set Shell from the Options menu.
	
	3. Select Program Manager as the Windows shell. Restart Windows.
	
	4. Install the Microsoft Kids programs from within Program Manager.
	
	5. Start TabWorks. Reset TabWorks as the default shell by choosing Set Shell
	  from the Options menu. Restart Windows.
	
	6. In TabWorks, choose Import Program Manager Groups from the File menu, then
	  select the Microsoft Kids program group.
	
	After following these steps, you should see icons for the Microsoft Kids program
	group and for Magic School Bus in TabWorks.
	
	If the Microsoft Kids program group and Magic School Bus icons are still not
	visible, it may be necessary to disable TabWorks permanently. To disable
	TabWorks version 1.0, use the following steps:
	
	1. In TabWorks, choose Set Shell from the Options menu, and select Program
	  Manager as the Windows shell. Restart Windows.
	
	2. Create new icons for the programs that do not have icons. For more
	  information about how to perform this task in Windows, see your Windows
	  printed documentation or online help.
	
	3. Restart Windows.
	
	After following these steps, you should see icons for the Microsoft Kids program
	group and for Magic School Bus.
	
	Please see the following article(s) in the Microsoft Knowledge Base for more
	information about how to re-create program icons:
	
	  Q122930 Kids: Program Icons Disappear from Program Manager
	
	MORE INFORMATION
	================
	
	TabWorks is a product of Xsoft (Xerox). It is commonly pre-installed on some
	Compaq computers, although it can be purchased independently.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For more information about disabling TabWorks, or versions of TabWorks other than
	version 1.0, contact Xerox at: (800) 821-2797
	
	
	Additional query words: item mskids msb msb-hb msbhb msb-ss msbss schoolbus magicbus gone lost missing disappear disappeared none xerox xsoft tab works tad explorapedia writer artist creative fine mczee liz frizz frizzle winmsbhuman msbhuman winmsbsolar msbsolar homekids homekid ocean winmsbocean dinos dinosaurs msbdinos winmsbdinos
	
	======================================================================
	Keywords          : kbtlc kbfaq
	Technology        : kbOSWinSearch kbHomeProdSearch kbZNotKeyword6 kbZNotKeyword kbKidsSearch kbScholasticHuman kbScholasticOcean kbScholasticSolar kbScholasticDinosaurs kbScholasticEarth kbOSWin310 kbOSWin311 kbOSWin300 kbOSWin300a kbMSBSearch
	Version           : WINDOWS:1.0,3.x
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
