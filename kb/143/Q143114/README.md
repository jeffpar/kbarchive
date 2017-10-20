---
layout: page
title: "Q143114: PRB: Trouble Installing Multiple Servers from Single Computer"
permalink: /kb/143/Q143114/
---

## Q143114: PRB: Trouble Installing Multiple Servers from Single Computer

{% raw %}

	Article: Q143114
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 4.0a, 5.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 4.0, 4.0a 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An administrator may need to install Visual SourceSafe several times from the
	same workstation. However Acme Setup might go into maintenance mode if this is
	attempted.
	
	CAUSE
	=====
	
	This behavior is required for Windows 95 compliant applications. For a file
	server application, such as Visual SourceSafe, this may not provide the needed
	functionality.
	
	WORKAROUND
	==========
	
	If the administrator's computer is running Windows or Windows for Workgroups,
	delete the Setup.stf file located in the Vss\Setup directory.
	
	If the administrator's computer is running Windows 95 or Windows NT, use the
	following method. This method requires changing the Registry. Please back up the
	registry before attempting either of these.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT or Windows 95 to correct
	them. Microsoft cannot guarantee that any problems resulting from the use of
	Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run the Server Setup.
	
	2. Go into the registry (REGEDIT in Windows 95 or REGEDT32 in Windows NT), and
	  find the entry for the following:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\MS Setup (ACME)\Table Files
	
	  if you have Visual SourceSafe version 5.0, 4.0, or 4.0a.
	
	  Delete all the entries for SSEXP and SSADMIN.
	
	  -or-
	
	  Find the entry for the following:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\VisualStudio\6.0\Setup\Microsoft Visual
	  SourceSafe\SetupWizard-1033-PRO
	
	  if you have Visual SourceSafe version 6.0.
	
	  Delete the key "WizardState".
	
	  NOTE: After this is done, you will not be able to go to select the Add/Remove
	  programs in the Control Panel for the server installation.
	
	3. Run Visual SourceSafe setup from the CD to do the installation for a new
	  database. It will not go into maintenance mode.
	
	4. Run Netsetup. It will not go into maintenance mode.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
