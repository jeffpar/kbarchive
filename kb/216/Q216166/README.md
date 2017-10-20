---
layout: page
title: "Q216166: How to Modify the Video Refresh Frequency in the Registry"
permalink: /kb/216/Q216166/
---

## Q216166: How to Modify the Video Refresh Frequency in the Registry

{% raw %}

	Article: Q216166
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbdisplay kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Some video drivers for Windows NT may not support the Refresh Frequency box
	feature on the Settings tab in the Display Properties dialog box. However, you
	can control this setting using a Windows NT registry value.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To change the monitor refresh rate using a registry value:
	
	1. Click Start, click Run, type "regedt32" (without the quotation marks), and
	  then click OK.
	
	2. On the Windows menu, click "HKEY_LOCAL_ MACHINE on Local Machine."
	
	3. Double-click the
	
	  System\CurrentControlSet\HardwareProfiles\Current\System\CurrentControlSet\Services
	
	  folder. Double-click the folder for your video driver (for example, if you
	  have a video display adapter that is based on the S3 chip set, double-click
	  the S3 folder), and then click the Device0 folder.
	
	4. If there is no DefaultSettings.Vrefresh value, go to step 5. If there is an
	  existing DefaultSettings.Vrefresh value, double-click the value and then type
	  a numerical setting (from the table below) that is supported by your monitor
	  in the Data box, and then click OK. Go to step 7.
	
	5. If the value does not exist, click Add Value on the Edit menu, type
	  "DefaultSettings.Vrefresh" (without the quotation marks), click REG_DWORD in
	  the Data Type box, and then click OK.
	
	6. Type "3c" (without the quotation marks) in the Data box, click Hex, and then
	  click OK.
	
	7. Quit Registry Editor, and then restart the computer.
	
	NOTE: The refresh frequency must be specified in hexadecimal. Refer to the table
	below for common monitor refresh rates and their equivalent hexadecimal values.
	
	Refresh Rate (in MHz)
	
	+-----------------------+
	| Decimal | Hexadecimal | 
	+-----------------------+
	| 50      | 32          | 
	+-----------------------+
	| 55      | 37          | 
	+-----------------------+
	| 60      | 3c          | 
	+-----------------------+
	| 65      | 41          | 
	+-----------------------+
	| 70      | 46          | 
	+-----------------------+
	| 75      | 4b          | 
	+-----------------------+
	| 80      | 50          | 
	+-----------------------+
	| 85      | 55          | 
	+-----------------------+
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdisplay kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
