---
layout: page
title: "Q162004: Setwiz5.exe the Updated VFP 5.0 for Windows Setup Wizard"
permalink: /kb/162/Q162004/
---

## Q162004: Setwiz5.exe the Updated VFP 5.0 for Windows Setup Wizard

{% raw %}

	Article: Q162004
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbfile kbpatch kbvfp300 kbvfp500 kbDSupport
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setwiz.exe is a patch that contains the updated Setup Wizard for Visual FoxPro
	version 5.0.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Setwiz5.exe
	  (http://download.microsoft.com/download/vfox50/upd5/1/WIN98/EN-US/Setwiz5.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Here is the Readme.txt file from the updated Setup Wizard files, which includes
	instructions to install the updated files and the problems addressed.
	
	Setup Wizard Update Readme
	--------------------------
	
	The Visual FoxPro Setup Wizard has been updated to address a number of known
	issues. This update runs only under version 5.0 of Visual FoxPro. Do not use it
	in Visual FoxPro 3.0 or previous releases.
	
	Use the following steps to install the Setup Wizard update:
	
	1. Replace the existing files in the following locations with the updated
	  files:
	
	   File           Location
	   ----           --------
	   Wzsetup.app    \Vfp\Wizards
	   Wizset32.dll   \Vfp\Distrib.Src\Setup
	   Clireg32.exe   \Vfp
	
	  NOTE: If these files are not installed, then first rerun the Visual FoxPro 5.0
	  Setup, select Custom Install, choose Professional Applications, and choose
	  the Microsoft Visual FoxPro Runtime and Setup Wizard component options.
	
	2. Search your hard drive for other copies of Clireg32.exe and replace them with
	  the new version. This file is a common component that other applications such
	  as Visual Basic also use.
	
	3. If you have already run the Visual FoxPro 5.0 Setup Wizard, delete the
	  "\Vfp\Distrib" directory and all occurrences of the following files:
	
	     Dkcontrl.dbf
	     Dkcontrl.cdx
	     Wzsetup.ini
	
	The Setup Wizard will automatically re-create these the next time you run it.
	
	Updated Features
	----------------
	
	The Setup Wizard accommodates the latest version of Clireg32.exe, which now
	supports remote automation via Distributed COM (DCOM). There is a new option in
	the Custom OLE Servers Details dialog box for selecting DCOM. If you select this
	option, you must ensure that the machine onto which you are installing your
	distributed application supports DCOM.
	
	Known Issues Addressed
	----------------------
	
	1. The maximum number of files created for a disk image sometimes exceeds the
	  DOS root directory limit. This affects only disk images that have more than
	  112 files per image.
	
	
	2. When using a Visual FoxPro 3.0 setup, the default directory in Step 5
	  contains a drive letter. Generating disk images appends an extra drive letter
	  to this directory, creating corrupt disk images. Tabbing into and out of the
	  Default Directory text box also eliminates the problem.
	
	
	3. Installation of newly created disk images sometimes fails if you select the
	  Directory only option in Step 5 and choose a Program Item for a file on Step
	  6.
	
	
	4. The Setup Wizard now generates a Registry key for international platforms
	  using localized versions of the runtime resource file (for example,
	  Vfp5enu.dll). This bypasses potential problems when installing a localized
	  (non-US) runtime resource file onto an operating system whose locale ID is
	  different.
	
	  NOTE: This issue does not affect disk images created using the Vfp5enu.dll
	  resource file.
	
	
	5. The Setup Wizard now generates registry keys to support certain ActiveX
	  controls such as Microsoft's Web Browser when using ActiveX Dual Interface
	  Support. See the SYS(2333) function.
	
	
	6. The Setup Wizard has been updated to generate registry keys compatible with
	  Microsoft Office 97.
	
	
	7. A problem was corrected using SETUP /F with installs onto Novell networks.
	  This involved using long names for Program Group and Program Item
	  Description.
	
	  NOTE: The Visual FoxPro version 5.0x setup wizard no longer supports the /F
	  switch.
	
	
	8. The Setup Wizard no longer generates disk images that prompt the user to
	  select a location for ODBC Start Menu items. Access ODBC components through
	  the Control Panel.
	
	
	Additional query words: Setwiz5
	
	======================================================================
	Keywords          : kbfile kbpatch kbvfp300 kbvfp500 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
