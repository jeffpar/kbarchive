---
layout: page
title: "Q129943: INFO: OLE Controls Must Be Registered"
permalink: /kb/129/Q129943/
---

## Q129943: INFO: OLE Controls Must Be Registered

{% raw %}

	Article: Q129943
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	OLE Controls (.OCX files) are OLE servers, so they must be listed in the
	registry. Visual Basic applications require an installation process to ensure
	that the necessary items are properly registered. During the setup process, if
	an OLE Control is needed and not registered, Visual Basic uses the
	auto-registration facility to automatically register an OLE Control by searching
	along the normal DLL search path for a file with the OLE Control name. This is
	done both in the design environment and for built executables. If the OLE
	Control is properly registered by other means, it need not be on the DLL search
	path.
	
	If Visual Basic does not reside on a computer, any Visual Basic application
	targeted to be run on that computer must be installed through the setup process.
	It cannot be simply copied.
	
	MORE INFORMATION
	================
	
	The DLL Search Path for 16-bit Windows is:
	
	1. The current directory.
	
	2. The Windows directory.
	
	3. The Windows system directory.
	
	4. The directory containing the executable file for the current task.
	
	5. The directories listed in the PATH environment variable.
	
	6. The list of directories mapped in a network.
	
	Under 32-bit Windows, the DLL Search path is:
	
	1. The directory from which the application loaded.
	
	2. The current directory.
	
	3. The 32-bit Windows system directory.
	
	4. The 16-bit Windows system directory.
	
	5. The Windows directory.
	
	6. The directories that are listed in the PATH environment variable.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbRegistry kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
