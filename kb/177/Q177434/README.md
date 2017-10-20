---
layout: page
title: "Q177434: PRB: Resolving '&lt;App-name&gt;' is not a Valid Windows CE App Error"
permalink: /kb/177/Q177434/
---

## Q177434: PRB: Resolving '&lt;App-name&gt;' is not a Valid Windows CE App Error

{% raw %}

	Article: Q177434
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC kbVC500 kbVC600 kbOSWinCEsearch kbOSWinCE100 kbOSWinCE200 kbOSWinCE210
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows CE, version 1.0 
	- Microsoft Windows CE Toolkit for Visual C++, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to run an application built with the products listed above results in
	the following message:
	
	  '<app-name>' is not a valid Windows CE application.
	
	where <app-name> is the name of the application being run.
	
	CAUSE
	=====
	
	The application was not built for the correct processor platform.
	
	RESOLUTION
	==========
	
	You can determine what processor is used on a specific device by clicking
	[Start|Settings|System|General]. The processor type is displayed in the
	"System:" section under the heading "Processor Type:".
	
	To build for a particular processor platform, your Visual C++ project must
	contain a configuration for that platform and the configuration must be the
	active configuration when you build the application.
	
	- Use the following steps to select the active configuration:
	
	   - Choose [Build|Set Active Configuration...] from the Microsoft Developer
	     Studio menu bar.
	
	   - Select the configuration for the desired processor Platform and click
	     [OK].
	
	  If the desired configuration is not present, use the next procedure in this
	  article to add one.
	
	- Use the following steps to create a new configuration:
	
	   - Choose [Build|Configurations...] and click the [Add...] button.
	
	   - Choose the new processor platform in the "Platform:" field.
	
	   - Choose a configuration name and a configuration to copy settings from,
	     then click [OK].
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: RISC VR4100 PR3910 VCCEISS
	
	======================================================================
	Keywords          : kbVC kbVC500 kbVC600 kbOSWinCEsearch kbOSWinCE100 kbOSWinCE200 kbOSWinCE210 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbZNotKeyword3 kbWinCETK500VC kbWinCETK600VC kbVC100WinCE
	Version           : WINDOWS:1.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
