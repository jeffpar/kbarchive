---
layout: page
title: "Q317403: ENC: &quot;Offset: 000023ab&quot; Error Message Starting Encarta"
permalink: /kb/317/Q317403/
---

## Q317403: ENC: &quot;Offset: 000023ab&quot; Error Message Starting Encarta

{% raw %}

	Article: Q317403
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 28-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia Standard 2003 
	- Microsoft Encarta Encyclopedia Deluxe 2003 
	- Microsoft Encarta Reference Library 2003, version 1.0 
	- Microsoft Encarta Encyclopedia Deluxe 2002, version 1.0 
	- Microsoft Encarta Encyclopedia Standard 2002, version 1.0 
	- Microsoft Encarta Reference Library 2002, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start a Microsoft Encarta product, you may receive an error
	message similar to the following:
	
	  Encarta has encountered a problem and needs to close. We are sorry for the
	  inconvenience.
	
	  AppName: enc2002.exe
	  AppVer: 11.0.1013.809
	  ModName: enc2002.exe
	  ModVer: 11.0.1013.809
	  Offset: 000023ab
	
	NOTE: The signature file that is included in this error message is an example of
	the signature file that you may receive.
	
	CAUSE
	=====
	
	This issue can occur if Encarta Setup (installation) stops responding and is
	then restarted. Setup appears to finish successfully, but a file is incorrectly
	copied.
	
	RESOLUTION
	==========
	
	To resolve this issue, uninstall Encarta and remove all associated files, clean
	the program CD-ROM, and then reinstall Encarta. To do this, follow these steps.
	
	Clean Boot the Computer:
	
	To clean boot the computer, use the appropriate method for your version of
	Microsoft Windows.
	
	Microsoft Windows XP
	
	1. Click Start, and then click Run.
	
	2. Type "msconfig" (without the quotation marks) in the Open box, and then click
	  OK.
	
	3. Click the General tab, and then click Selective Startup.
	
	4. Click to clear the following check boxes under Selective Startup:
	
	   - "Process SYSTEM.INI file"
	   - "Process WIN.INI file"
	   - "Load Startup Items"
	
	5. Click the Services tab, click to select the "Hide All Microsoft Services"
	  check box, and then click Disable All.
	
	6. Click OK, and then click Restart to restart the computer.
	
	For additional information about how to perform a clean boot in Windows XP, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	Microsoft Windows 2000
	
	For additional information about how to perform a clean boot in Windows 2000,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q306954 How to Perform a Clean Boot in Windows 2000 Professional
	
	Microsoft Windows Millennium Edition
	
	For additional information about how to perform a clean boot in Windows
	Millennium Edition (Me), click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	Microsoft Windows 98
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	
	   - Process Autoexec.bat File
	
	   - Process Winstart.bat File (if available)
	
	   - Process Win.ini File
	
	   - Load Startup Group Items
	
	4. Click OK.
	
	  When prompted, restart the computer.
	
	For additional information about how to clean boot Windows 98, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in System Configuration Utility.
	
	Uninstall Encarta Product
	-------------------------
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, double-click "Microsoft Encarta Reference
	  Library", and then follow the onscreen instructions to uninstall it.
	
	Remove Program Folders
	----------------------
	
	To remove the program folders, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following (including the quotation marks):
	
	  "C:\Program Files\Microsoft Encarta"
	
	3. Click OK.
	
	4. In the Microsoft Encarta dialog box, click the name of your Encarta product
	  to highlight it, and then press DELETE.
	
	  When the confirmation message appears, click Yes.
	
	5. Close the Microsoft Encarta dialog box.
	
	6. Click Start, and then click Run.
	
	7. In the Open box, type the following (including the quotation marks):
	
	  "C:\Program Files"
	
	8. Click OK.
	
	9. If you are using Encarta 2002, click the Microsoft FactFinder folder, and
	  then press DELETE.
	
	  NOTE: FactFinder is not included in Encarta 2003.
	
	10. When the confirmation message appears, click Yes.
	
	11. Close the Program Files dialog box.
	
	12. Click Start, and then click Run.
	
	13. In the Open box, type the following (including the quotation marks):
	
	  "C:\Program Files\Common Files\Microsoft Shared"
	
	14. Click OK.
	
	15. In the "Program Files\Common Files\Microsoft Shared" dialog box, select the
	  following folders, and then press DELETE.
	
	   - Encarta Researcher
	
	   - Reference 2002
	
	  NOTE: If you are using Encarta 2003, delete Encarta Researcher, Reference
	  2002, and Reference 2003.
	
	16. When the confirmation message appears, click Yes.
	
	17. Close the "Program Files\Common Files\Microsoft Shared" dialog box.
	
	
	Clean the Program CD-ROM
	------------------------
	
	Clean the program CD-ROM. To do this, use a CD-ROM cleaning kit, or gently wipe
	the silver side of the CD-ROM with a soft, lint-free cotton cloth. Wipe from the
	center of the CD-ROM outward.
	
	NOTE: Do not use paper, which can scratch the plastic and leave streaks, and do
	not use a circular motion when you wipe the CD-ROM.
	
	If the issue continues to occur, clean the CD-ROM with a damp cloth or a
	commercial CD cleaning solution. Dry the CD-ROM thoroughly before you insert it
	into the CD-ROM drive.
	
	For additional information about CD-ROM troubleshooting, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM or DVD-ROM Read Issues
	
	Install Encarta Product
	-----------------------
	
	Insert the installation CD-ROM, and then select Typical or Minimal installation.
	Follow the onscreen instructions for the installation process.
	
	MORE INFORMATION
	================
	
	This issue appears to occur when the CD-ROM drive fails to correctly copy a file
	to the hard drive. This causes the computer or the Setup program to stop
	responding.
	
	When Setup is restarted, the partially copied file is not re-copied, because it
	already exists on the hard drive. The file in question has a size of zero bytes.
	This causes the error in module Enc200x.exe at offset 000023ab.
	
	REFERENCES
	==========
	
	For additional information about Encarta installation issues, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q312070 ENC: Computer May Stop Responding During Installation
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbEncartaSearch kbMMSearch kbEncartaRef2002 kbEncartaEncyc2002 kbEncartaEnCyc2002Del
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
