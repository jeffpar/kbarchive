---
layout: page
title: "Q139016: Optimizing WFWG 3.11 for Real-Mode NetBIOS Programs"
permalink: /kb/139/Q139016/
---

## Q139016: Optimizing WFWG 3.11 for Real-Mode NetBIOS Programs

{% raw %}

	Article: Q139016
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a program or tool that relies on the real-mode NetBIOS
	interface provided by NetBEUI, your network session may be dropped in Windows
	for Workgroups 3.11. This problem is most likely to occur with programs or tools
	that load a real-mode TSR that interfaces with NetBIOS and have Windows-based
	components that communicate with the TSR.
	
	CAUSE
	=====
	
	This problem can be caused by a number of different timing and optimization
	problems that can occur when a Windows-based component uses the protected- mode
	NetBIOS interface to communicate with a real- mode TSR running over real-mode
	NetBEUI.
	
	RESOLUTION
	==========
	
	Disabling the protected-mode NetBEUI component and optimizing the real- mode
	NetBEUI protocol may increase the reliability of layered applications based on a
	real-mode NetBIOS interface requiring real-mode NetBEUI.
	
	The instructions in the following sections may help you to resolve the problem
	described in this article.
	
	Remove Protected-Mode NetBEUI/Use Real-Mode NetBEUI Only
	--------------------------------------------------------
	
	1. In the Network group, double-click the Network Setup icon.
	
	2. Click Drivers.
	
	3. Click the network adapter driver, and then click Setup.
	
	4. In the Driver Type box, click Real Mode NDIS Driver, and then click OK until
	  you exit Network Setup.
	
	5. When you are prompted to restart your computer, click Continue.
	
	6. Use any text editor (such as Notepad) to open the System.ini file. Locate the
	  line that reads
	
	        transport=netbeui.386
	      
	
	  and change it to:
	
	  transport=
	
	7. Add the following line to the [Network] section of the file:
	
	  AutoStart=NETBEUI
	
	8. Save and then close the System.ini file.
	
	Optimize the Real-Mode NetBEUI Protocol
	---------------------------------------
	
	1. In the Network group, double-click the Network Setup icon.
	
	2. Click Drivers.
	
	3. Click the NetBEUI protocol, and then click Set As Default Protocol.
	
	4. Click Setup, click Sessions, and increase the value to at least 16 (depending
	  on your results).
	
	5. Click Set, click NCBS, and increase the value to at least 32 (depending on
	  your results).
	
	6. Click Set, and then click OK until you exit Network Setup. When you are
	  prompted to restart your computer, click Continue.
	
	Optimize the Virtualized Network Interface
	------------------------------------------
	
	1. Use any text editor (such as Notepad) to open the System.ini file.
	
	2. Locate the line that reads
	
	        NetHeapSize=20
	      
	
	  and change it to:
	
	  NetHeapSize=32
	
	  NOTE: You can use a value greater than 32, depending on your results.
	
	3. Save and then close the System.ini file
	
	4. Restart your computer.
	
	MORE INFORMATION
	================
	
	The configuration described in this article was tested and is stable with the
	original versions of the Windows for Workgroups 3.11 files. This configuration
	was not found to be stable with the updated Windows for Workgroups 3.11 files
	included on the Microsoft Windows NT 3.5 and 3.51 Server CD-ROMs.
	
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
