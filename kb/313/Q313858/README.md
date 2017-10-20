---
layout: page
title: "Q313858: ENC 2002: Installation Quits Unexpectedly After Displaying EULA"
permalink: /kb/313/Q313858/
---

## Q313858: ENC 2002: Installation Quits Unexpectedly After Displaying EULA

{% raw %}

	Article: Q313858
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia Deluxe 2002, version 1.0 
	- Microsoft Encarta Encyclopedia Standard 2002, version 1.0 
	- Microsoft Encarta Reference Library 2002, version 1.0 
	- the operating system: Microsoft Windows 98 Second Edition 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install any of the Microsoft Encarta programs listed at the
	beginning of this article, the End User License Agreement (EULA) may be
	displayed and then suddenly disappear. Then, the installation process quits and
	you are returned to the desktop.
	
	CAUSE
	=====
	
	This behavior can occur if one or both of the following conditions are true:
	
	- There is a conflict with another program running in the background.
	
	- One or both of the following files are either missing or corrupted:
	
	   - Riched20.dll
	   - Riched32.dll
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use one or both of the following methods, as necessary,
	in the order presented.
	
	Perform a Clean Boot
	--------------------
	
	Run the System Configuration utility (Msconfig.exe) to perform a clean boot of
	your computer. To do this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. Click the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Process Win.ini File
	   - Load Startup Group Items
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	For additional information about how to perform a clean boot in Windows 98, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	
	NOTE: To restore your original startup configuration, rerun the System
	Configuration utility (Msconfig.exe), click the General tab, and then click
	Normal Startup.
	
	If the preceding clean-boot steps do not resolve the issue, proceed to the next
	method.
	
	Extract the Riched20.dll and Rich32.dll Files
	---------------------------------------------
	
	NOTE: To extract these files, you need your original Microsoft Windows 98 CD-ROM,
	or the Windows 98 Cab files must be installed on your computer's hard disk.
	
	To resolve this issue, extract the Riched20.dll and Rich32.dll files from the
	Windows 98 CD-ROM:
	
	1. Insert the Windows 98 or Microsoft Windows 98 Second Edition (SE) CD-ROM into
	  your computer's CD-ROM or DVD-ROM drive. Press and hold down the SHIFT key
	  when you insert the CD-ROM to prevent it from starting automatically.
	
	NOTE: If you do not have a Windows 98 CD-ROM, use the following path in step 7:
	
	  c:\Windows\Options\win98
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "sfc" (without the quotation marks), and then click OK.
	
	4. Click the "Extract one file from installation disk" option.
	
	5. Type "riched20.dll" (without the quotation marks).
	
	6. Click Start.
	
	7. In the "Restore from" box, type "<CD-ROM drive>:\win98" (without the
	  quotation marks).
	
	8. In the "Save file in" box, type "C:\Windows\System" (without the quotation
	  marks).
	
	9. Click OK. When you are prompted to restart the computer, click Yes.
	
	10. Repeat these steps to extract the Riched32.dll file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbOSWin98 kbOSWin98SE kbOSWinSearch kbHomeProdSearch _IKkbbogus kbEncartaSearch kbMMSearch kbEncartaRef2002 kbEncartaEncyc2002 kbEncartaEnCyc2002Del
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
