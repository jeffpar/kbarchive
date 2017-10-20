---
layout: page
title: "Q158907: Msbatch.inf Parameters: Installing Clipboard Viewer"
permalink: /kb/158/Q158907/
---

## Q158907: Msbatch.inf Parameters: Installing Clipboard Viewer

{% raw %}

	Article: Q158907
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install Clipboard Viewer using the Msbatch.inf
	file for batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	When you specify that Clipboard Viewer should be installed using the Msbatch.inf
	file, it is not installed. To work around this problem, follow these steps:
	
	1. Make sure that the [OptionalComponents] section of the Msbatch.inf file
	  contain "Clipboard Viewer"=1 instead of "Clipboard Viewer"=0.
	
	2. Create or modify the Custom.inf file to include these entries:
	
	  [Precopyfiles]
	  clip.inf
	
	  [load_inf]
	  clip.inf
	
	The completed Custom.inf file should look similar to the following example. Your
	exact file may vary:
	
	  [Version]
	  LayoutFile=layout.inf
	  Signature="$CHICAGO$"
	
	  [Custom_Precopy]
	  CopyFiles=PrecopyFiles
	
	  [DestinationDirs]
	  PrecopyFiles=2
	
	  [PrecopyFiles]
	  clip.inf
	
	  [load_inf]
	  clip.inf
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
