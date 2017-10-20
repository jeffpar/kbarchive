---
layout: page
title: "Q141548: PRB: 16-Bit Visual Basic Requires 16-Bit SourceSafe"
permalink: /kb/141/Q141548/
---

## Q141548: PRB: 16-Bit Visual Basic Requires 16-Bit SourceSafe

{% raw %}

	Article: Q141548
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbSSafe400
	Last Modified: 22-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows NT, version 4.0 
	- Microsoft SourceSafe for Windows, versions 95, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the 16-bit version of Visual Basic is initially started or the Source Code
	Control Add-In check box is selected in the Visual Basic Add-In Manager when a
	standalone version of Visual SourceSafe has been installed under a 32-bit
	operating system, the following message and prompt results:
	
	  'Source Code Control Add-In' could not be loaded. Remove it from the list of
	  available Add-Ins?
	
	CAUSE
	=====
	
	There are two possible causes:
	
	- During installation of Visual SourceSafe, the Vb.ini file was not updated to
	  reflect the 16-bit Source Control Code Add-In entry. (This may occur even in
	  the Visual Basic Enterprise edition after the installation of the Visual
	  Basic 16-bit version and a subsequent Visual SourceSafe Client installation.)
	
	-or-
	
	- In the standalone version, Visual SourceSafe usually installs only the 32-bit
	  version on a 32-bit operating system, so the missing 16-bit version is the
	  source of the problem.
	
	RESOLUTION
	==========
	
	If the 16-bit version of the Visual SourceSafe client has not been loaded, you
	need to uninstall the SourceSafe 32-bit client and then reinstall it using the
	Custom option so that you can tell it to load the 16-bit as well as the MS-DOS
	versions.
	
	If the 16-bit version of Visual SourceSafe is already installed, run
	Win\Ssint.exe to update the <WINDOWS folder> or the Vb.ini file.
	
	MORE INFORMATION
	================
	
	Visual SourceSafe 4.0, which ships with Visual Basic 3.0 Enterprise Edition has
	a different Client setup (netsetup) from the standalone version. Instead of two
	buttons (one for 32-bit and one for custom), there is only one button (for all)
	that installs both the 16-bit and 32-bit versions of Visual SourceSafe on 16-
	and 32-bit operating systems.
	
	In the standalone version of Visual SourceSafe, there are two buttons. The
	non-custom button loads the 32-bit version only on a 32-bit operating system.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3
	Version           : WINDOWS:4.0,95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
