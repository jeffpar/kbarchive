---
layout: page
title: "Q162800: Genmenu5.exe Updated VFP 5.0 for Windows GENMENU Program"
permalink: /kb/162/Q162800/
---

## Q162800: Genmenu5.exe Updated VFP 5.0 for Windows GENMENU Program

{% raw %}

	Article: Q162800
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbfile kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbDSupportkbbuglist kbfixlist
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Genmenu5.exe is a patch containing an updated Genmenu.prg for Visual FoxPro 5.0
	that addresses a number of known issues.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Genmenu5.exe
	  (http://download.microsoft.com/download/vfox50/upd3/1/WIN98/EN-US/Genmenu5.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Here is the Release Notes/Readme.txt file from the updated Genmenu.prg for Visual
	FoxPro 5.0.
	
	The Genmenu.prg menu generator program has been updated to address a number of
	known issues. This update runs only under version 5.0 of Visual FoxPro. Do not
	use with Visual FoxPro 3.0 or previous releases.
	
	To install the Genmenu.prg update:
	
	Replace the existing Genmenu.prg file in the Visual FoxPro root directory with
	the updated version.
	
	Known Issues Addressed
	
	1. Handles top-level forms better, with respect to setup and cleanup code, the
	  Append location menu option, and removes naming conflicts encountered when
	  using RELEASE MENU...EXTENDED with multiple forms.
	
	
	  To explore the available options for integrating menus with top-level forms in
	  this version of GENMENU, open an .MPR file generated from a top-level menu
	  and read the header section. The code in this header section offers better
	  flexibility and ease-of-use for top-level forms. For even more capability,
	  you can take advantage of 4-9 additional parameters for your menus, or add
	  setup code to override settings, variables, and parameters in the header
	  section.
	
	2. Updates the #PREPOPUP generator directive functionality. This directive, for
	  use only with shortcut menus, allows you to control where the ACTIVATE POPUP
	  command is placed in relation to the generated cleanup code. By default,
	  ACTIVATE POPUP precedes any cleanup code. To run code before the ACTIVATE
	  POPUP command, such as code to mark a menu item before it displays, use
	  #PREPOPUP.
	
	
	  With this version of GENMENU, you can place the #PREPOPUP directive in the
	  setup code, as before, or, for more flexibility, in the cleanup code. If
	  #PREPOPUP is used in the setup code, ACTIVATE POPUP will follow any cleanup
	  code. So, if you defined a procedure or function in the cleanup code, an
	  error would be generated. This problem can be avoided if #PREPOPUP is used in
	  the cleanup code, because the ACTIVATE POPUP command is placed at the exact
	  #PREPOPUP location.
	
	
	Additional query words: Genmenu5
	
	======================================================================
	Keywords          : kbfile kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbDSupport kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
