---
layout: page
title: "Q313953: ENC: Err Msg Referencing Enc200&lt;x&gt;.exe and Rssapi10.dll"
permalink: /kb/313/Q313953/
---

## Q313953: ENC: Err Msg Referencing Enc200&lt;x&gt;.exe and Rssapi10.dll

{% raw %}

	Article: Q313953
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 28-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia Standard 2003 
	- Microsoft Encarta Encyclopedia Deluxe 2003 
	- Microsoft Encarta Encyclopedia Deluxe 2002, version 1.0 
	- Microsoft Encarta Encyclopedia Standard 2002, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Encarta Encyclopedia or open an article, you
	may receive an error message similar to the following:
	
	  Encarta has encountered a problem and needs to close. We are sorry for the
	  inconvenience.
	
	  If you click on "click here", then you may see the following Error Signature
	  details:
	
	  Error Signature
	  AppName: ENC2002.EXE AppVer: 11.0.1013.809 ModName: Rssapi10.dl
	  ModVer: 1.0.0.4 Offset: 00015c3
	
	NOTE: The error signature that is included in this article is an example of an
	error signature that you may receive.
	
	CAUSE
	=====
	
	This issue can occur if the files are not the expected version.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, uninstall Encarta Encyclopedia and all of its folders,
	restart your computer using a clean boot, and then reinstall Encarta
	Encyclopedia. To do this, use the following methods in the order in which they
	are presented.
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	Uninstall Encarta Encyclopedia
	------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. In the list of installed programs, click Encarta Encyclopedia, and then click
	  Add/Remove.
	
	4. When the InstallSheild Wizard appears, click Remove, and then click OK.
	
	5. Follow instructions onscreen to complete the removal process.
	
	Delete Encarta Encyclopedia Folders
	-----------------------------------
	
	Delete the remaining Encarta Encyclopedia folders. To do this, follow these
	steps:
	
	1. Start Windows Explorer.
	
	2. Right-click "C:\Program Files\Common Files\Microsoft Shared\Reference
	  Titles". When you receive the confirmation message, click Yes.
	
	3. Repeat step 2 for the following folders:
	
	   - C:\Program Files\Common Files\Microsoft Shared\Reference 2001
	
	   - C:\Windows\Temp
	
	Start Your Computer with a Clean-Boot Procedure
	-----------------------------------------------
	
	Use the appropriate method for your version of Microsoft Windows.
	
	Microsoft Windows XP:
	
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
	
	For additional information about how to clean boot in Windows XP, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	Microsoft Windows Millennium Edition (Me):
	
	1. Click Start, click Run, type "msconfig" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. On the General tab, click "Selective startup".
	
	3. Click to clear all of the check boxes under "Selective startup".
	
	4. On the "Startup" tab, click to select the *StateMgr check box.
	
	
	5. Click OK. When you are prompted to restart your computer, click Yes. After
	  the computer restarts, click Start, click Run, type "msconfig" (without the
	  quotation marks) in the Open box, and then click OK.
	
	  IMPORTANT: Look closely at the General tab to ensure that the check boxes that
	  you cleared are still cleared. If none of the check boxes are selected,
	  proceed to the "Install Encarta Encyclopedia" section of this article. If you
	  see a selected, unavailable check box (it appears dimmed and has a check mark
	  in it), your computer is not truly "clean-booted" and you may need assistance
	  from the manufacturer of the program that is listed next to the selected,
	  unavailable check box.
	
	Microsoft Windows 98:
	
	1. Click Start, click Run, type "msconfig.exe" (without the quotation marks) in
	  the Open box, and then click OK.
	
	2. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	
	   - Process Autoexec.bat File
	
	   - Process Winstart.bat File (if available)
	
	   - Process System.ini File
	
	   - Process Win.ini File
	
	   - Load Startup Group Items
	
	3. Click OK, and then restart your computer when you are prompted to do so.
	
	Microsoft Windows 95:
	
	1. Restart your computer. When the Starting Windows 95 dialog box is displayed,
	  press F8, and then choose Step-By-Step Confirmation from the Startup menu.
	
	2. When you are prompted, load the following items (if you are prompted to load
	  any other items, press N):
	
	   - Dblspace driver.
	
	   - Himem.sys.
	
	   - Ifshlp.sys.
	
	   - Dblbuff.sys.
	
	   - Windows 95 graphical user interface (GUI); choose to load all Windows
	     drivers.
	
	IMPORTANT: Windows 95 does not require the Config.sys and Autoexec.bat files, but
	some tools that are installed on the computer may require them. Never rename the
	Config.sys and Autoexec.bat files until you perform a successful interactive
	boot to verify that they are not needed.
	
	Install Encarta Encyclopedia
	----------------------------
	
	To install Encarta Encyclopedia, follow these steps:
	
	1. Insert your Encarta Encyclopedia CD-ROM into your CD-ROM drive or DVD-ROM
	  drive.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. In the Add/Remove Programs dialog box, click Install.
	
	5. Follow the instructions onscreen to complete the installation process.
	
	Restart Your Computer in Normal Mode
	------------------------------------
	
	To restart your computer in Normal mode, follow these steps.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. In the System Configuration Utility dialog box, click "Selective startup".
	
	4. Click to clear each check box under "Selective startup".
	
	5. Click Apply, and then click OK.
	
	6. When prompted, restart your computer.
	
	REFERENCES
	==========
	
	For additional information about clean booting, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q243039 How to Perform a Clean Boot in Windows 95
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	  Q310353 How to Perform a Clean Boot in Windows XP
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbEncartaSearch kbMMSearch kbEncartaEncyc2002 kbEncartaEnCyc2002Del
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
