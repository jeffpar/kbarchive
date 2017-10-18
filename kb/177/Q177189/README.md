---
layout: page
title: "Q177189: Err Msg: Guide.exe Is Linked to Missing Export Mcm.dll"
permalink: kb/177/Q177189/
---

## Q177189: Err Msg: Guide.exe Is Linked to Missing Export Mcm.dll

	Article: Q177189
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbmsn
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, you may receive the
	following error message:
	
	  Guide.exe is linked to missing export Mcm.dll.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- The Guide.exe file in the Program Files\The Microsoft Network folder and the
	  Mcm.dll file in the Windows\System folder may be mismatched.
	
	- One or both of the files may be damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete each copy of the Mcm.dll file from your hard disk,
	and then extract a new copy of the Mcm.dll file from your original Windows 95
	disks or CD-ROM to the Windows\System folder. To do so, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "mcm.dll" (without the quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, right-click each Mcm.dll file, and then click
	  Delete. Continue until the list of found files is empty.
	
	4. Close the Find: Files Named Mcm.dll window.
	
	5. Extract a new copy of the Mcm.dll file from your original Windows 95 disks or
	  CD-ROM to the Windows\System folder.
	
	The Mcm.dll file is located in the Win95_07.cab cabinet file on the Windows 95
	CD-ROM, in the Win95_10.cab cabinet file on the Windows 95 OEM Service Release 2
	CD-ROM, in the Win95_07.cab cabinet file on disk 7 of the Windows 95 DMF format
	disks, and in the Win95_11.cab cabinet file on disk 11 of the Windows 95 non-DMF
	format disks.
	
	For information about using the Extract tool, type "extract" (without the
	quotation marks) at a command prompt, or see the following article in the
	Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	MORE INFORMATION
	================
	
	If extracting a new copy of the Mcm.dll file does not resolve the issue, follow
	these steps for your version of MSN:
	
	MSN 1.x
	-------
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "guide.exe" (without the quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, right-click each Guide.exe file, and then click
	  Delete. Continue until the list of found files is empty.
	
	4. Close the Find: Files Named Guide.exe window.
	
	5. Click Start, point to Settings, and then click Control Panel.
	
	6. Double-click Add/Remove Programs.
	
	7. On the Windows Setup tab, click the The Microsoft Network check box to clear
	  it, and then click OK. You may be prompted for your Windows CD-ROM or disks.
	
	8. When you are prompted to restart the computer, click Yes.
	
	9. Click Start, point to Settings, and then click Control Panel.
	
	10. On the Windows Setup tab, click the The Microsoft Network check box to
	  select it, and then click OK. Follow the instructions on the screen. You may
	  be prompted for your Windows CD-ROM or disks.
	
	11. When you are prompted to restart the computer, click Yes.
	
	12. Double-click the MSN icon on the desktop to connect to MSN.
	
	MSN 2.0
	-------
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "guide.exe" (without the quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, right-click each Guide.exe file, and then click
	  Delete. Continue until the list of found files is empty.
	
	4. Close the Find: Files Named Guide.exe window.
	
	5. Insert the MSN 2.0 CD-ROM into your CD-ROM drive. Press and hold down the
	  SHIFT key when you insert the CD-ROM to prevent the MSN Setup program from
	  starting automatically.
	
	6. Double-click My Computer, right-click the MSN (CD-ROM drive) icon, and then
	  click Explore.
	
	7. Double-click the Msnsetup folder.
	
	8. Double-click the Compnts folder.
	
	9. Double-click the Msn13.exe file.
	
	10. Follow the instructions on the screen. When you are prompted to restart the
	  computer, click Yes.
	
	11. Double-click the MSN icon on the desktop to connect to MSN.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0
	Issue type        : kbprb
	
	=============================================================================
	
