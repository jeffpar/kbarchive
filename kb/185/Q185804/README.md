---
layout: page
title: "Q185804: SMSINST: Adding to the System Path Using SMS Installer"
permalink: /kb/185/Q185804/
---

## Q185804: SMSINST: Adding to the System Path Using SMS Installer

{% raw %}

	Article: Q185804
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 05-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Systems Management Server Installer has a script item called Add Directory
	To Path that allows you to add a directory to a system's path.
	
	NOTE: This script item does not allow you to remove a directory from the system
	path.
	
	MORE INFORMATION
	================
	
	To add a directory to the system path, use the following steps:
	
	1. Open Systems Management Server Installer and click Script Editor on the View
	  menu.
	
	2. In the right pane, locate the position in your script where you want to
	  include the Add Directory To Path script item. Highlight the script item that
	  appears after that position.
	
	3. In the left pane, select the Add Directory To Path script item.
	
	4. When you are prompted, type the directory you want to add to the path.
	
	  Note that you can use Installer script variables. For example, if the
	  Installer MAINDIR is set to "C:\My App" (without the quotation marks), you
	  can enter %MAINDIR% in the dialog box, and the value "C:\My App" (without the
	  quotation marks) will be added to the path.
	
	Notes
	-----
	
	- When the Add Directory To Path script item is used, Systems Management Server
	  Installer modifies the value of the built-in variable RESTART to "S" so that
	  the user is prompted to restart the computer at the end of the installation
	  process.
	
	  If you prefer to avoid this, the RESTART variable must be manually set to
	  nothing using the Set Variable script item. For additional information about
	  manipulating the RESTART variable, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q174330 SMSINST: Use of the RESTART Variable in SMS Installer
	
	- In Windows NT Server, the new path does not take effect until the user logs
	  off and logs back on. On other operating systems, such as Windows 95, the
	  path does not take effect until the computer is restarted.
	
	- In Windows NT Server, the path for the system is stored in the following
	  registry key:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
	     \Session Manager\Environment\Path
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	- If uninstall support is included in the installation, an uninstall will not
	  remove the directory from the path. This behavior is by design.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
