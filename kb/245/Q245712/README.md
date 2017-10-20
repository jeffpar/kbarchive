---
layout: page
title: "Q245712: XCLN: How to Apply a Hotfix to Outlook 2000"
permalink: /kb/245/Q245712/
---

## Q245712: XCLN: How to Apply a Hotfix to Outlook 2000

{% raw %}

	Article: Q245712
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To support repair, installation on demand, and reinstallation in Microsoft
	Outlook 2000, you must control the way that Outlook files are changed. When you
	merely replace a file with a newer version of the file, if an issue occurs, the
	system does not repair the newer file; the newer file is replaced by the old
	version of the file. An additional consequence of replacing a file with a newer
	version of the file is that if you uninstall a feature, the newer file is no
	longer necessary and is deleted by the installer, and you lose the update in any
	future reinstallations of the feature.
	
	The proper way to distribute a patch is as a Windows Installer Patch file, which
	usually has an .msp extension. This file includes all of the information that is
	necessary to patch the administrative and client installations of one or more
	products.
	
	MORE INFORMATION
	================
	
	You can use different options to apply the changes in a Windows Installer Patch
	file, depending on your situation.
	
	Stand-Alone Installation
	------------------------
	
	This information applies to Outlook installations from a CD. If you installed
	Outlook from an administrative image that is located on a network share, patch
	the administrative image by following the instructions in the "Administrative
	Image" section of this article.
	
	To apply the patch for a stand-alone installation, in Windows Explorer,
	double-click the .msp file. The Microsoft Office 2000 Maintenance Mode Wizard
	starts. The patch runs immediately and installs the updated files.
	
	Administrative Image
	--------------------
	
	To patch the administrative image, run the following command line:
	
	  start msiexec /a <path to network image .msi file> /p <path to patch
	  .msp file> SHORTFILENAMES=1
	
	Where <path to network image .msi file> is the full path to the .msi file
	in the administrative image, and <path to patch .msp file> is the path to
	the Windows Installer Patch file.
	
	This command updates the administrative image. Any subsequent installations from
	this image will include the latest version of the files.
	
	The following is a sample command line:
	
	  start msiexec /a \\servername\installfolder\data1.msi /p c:\oqfe2051.msp
	  SHORTFILENAMES=1
	
	Updating Computers Where Outlook Was Installed from the Original Administrative Image
	-------------------------------------------------------------------------------------
	
	At every computer where Outlook was installed from the administrative image
	before the patch was applied, you need to update the system by using one of the
	following methods:
	
	- At the computer that you want to update, run the following command:
	
	  start msiexec /I <path to updated .msi file in the server>
	  REINSTALL=ALL REINSTALLMODE=vomus
	
	  Where <path to updated .msi file in the server> is the full path to the
	  .msi file on the network.
	
	  The following is a sample command line:
	
	  start msiexe /I \\servername\installfolder\data1.msi REINSTALL=ALL
	  REINSTALLMODE=vomus
	
	- Use the Repair Office feature:
	
	  1. In Control Panel, double-click Add/Remove Programs.
	
	  2. In the list of installed programs, click Microsoft Outlook 2000.
	
	  3. Click Add/Remove, and then click Repair Office.
	
	  4. Click "Repair errors in my Office installation", and then click Finish.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q227091 Command-Line Switches for the Microsoft Windows Installer Tool
	
	  Q202946 OFF2000: Setup Command-Line Switches for Office 2000
	
	  Q242479 Overview of the Windows Installer Technology
	
	Additional query words: OL20 QFE
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
