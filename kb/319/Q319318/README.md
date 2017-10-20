---
layout: page
title: "Q319318: HOW TO: Change Source Control Providers w/ MSSCCI Providers"
permalink: /kb/319/Q319318/
---

## Q319318: HOW TO: Change Source Control Providers w/ MSSCCI Providers

{% raw %}

	Article: Q319318
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe kbHOWTOmaster
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Architect Edition 
	   - Microsoft Visual Studio.NET (2002), Enterprise Developer Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	IN THIS TASK
	
	- SUMMARY
	
	   - Change Source Code Control Providers
	
	SUMMARY
	=======
	
	This article describes how to change the source control providers for all
	Microsoft Source Code Control Interface (MSSCCI)-compliant applications,
	including all versions of Microsoft Visual Studio, if two or more MSSCCI
	providers are installed.
	
	Change Source Code Control Providers
	------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To change source control providers, follow these steps:
	
	1. Click Start, click Run, type "regedit" (without the quotation marks), and
	  then click OK to open Registry Editor.
	
	2. In Registry Editor, expand the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\SourceCodeControlProvider\InstalledSCCProviders
	
	3. In the right pane, double-click the registry key of the source control
	  provider that you want to use (for example, Microsoft Visual SourceSafe), and
	  then copy the data of this key to the clipboard (for example,
	  Software\Microsoft\SourceSafe).
	
	4. In the left pane, click SourceCodeControlProvider.
	
	5. In the right pane, double-click ProviderRegKey.
	
	6. In the Edit String dialog box, replace all of the text in the Value Data box
	  with the contents of your clipboard, and then click OK.
	
	7. Close the registry editor.
	
	8. Restart your application for the changes to take effect.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe kbHOWTOmaster 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
