---
layout: page
title: "Q74749: Library Switches Determine Which C Libraries PWB Assumes"
permalink: /kb/074/Q74749/
---

## Q74749: Library Switches Determine Which C Libraries PWB Assumes

{% raw %}

	Article: Q74749
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PWB uses library switches in the TOOLS.INI file to determine whether certain
	libraries have been installed and whether to assume explicit or default names
	for each type.
	
	MORE INFORMATION
	================
	
	The library switches are as follows:
	
	  Switch         C Libraries Affected
	  ------         --------------------
	  doslibs        MS-DOS libraries
	  os2libs        OS/2 libraries
	  winlibs        Windows libraries
	  dlllibs        OS/2 DLL libraries
	  windlllibs     Windows DLL libraries
	  mtlibs         OS/2 Multithreaded libraries
	
	These switches should be set to either explicit, default, or none, depending on
	how the libraries were named during the install process. The Setup program
	places the correct settings in the TOOLS.PRE file in a section with the
	[pwb-pwbc] tag. This tagged section should be placed in your TOOLS.INI file and
	updated whenever any changes are made to the installed libraries.
	
	Further information for the library naming convention can be found under any of
	these switch names in the online help.
	
	If the library switch for a particular library type is set to default, then
	attempting to select the explicit library name will not work as expected. For
	example:
	
	1. Set doslibs to default in TOOLS.INI.
	
	2. Start PWB.
	
	3. Choose C Compiler Options from the Options menu.
	
	4. Choose MS-DOS in the C Libraries section of the C Compiler Options dialog box
	  and select OK.
	
	When you subsequently check the setting of C Libraries, it will be reset to
	Default, even though it was just changed to MS-DOS. This is because doslibs is
	set to default and cannot be overridden in this manner.
	
	If the library switch for a particular library type is set to none, then
	attempting to select a library of that type (either through Set Initial Build
	Options under Build Options on the Options menu or through C Libraries under C
	Compiler Options) will result in the following dialog box:
	
	   ----------- C Libraries Error -----------
	  |                                         |
	  |      <type> library not installed       |
	  |      Assume explicit library name?      |
	  |                                         |
	  |-----------------------------------------|
	  |   < Yes >  <  No  >  <Cancel>  < Help > |
	   -----------------------------------------
	
	<type> can be either MS-DOS, OS/2, Windows, OS/2 DLL, Windows DLL, or OS/2
	Multithreaded. Selecting Yes will assume explicit names; selecting No will
	assume default names.
	
	To avoid these situations, verify that library switch settings in the TOOLS.INI
	are correct for the libraries currently installed and the naming convention
	used.
	
	Additional query words: kbinf 1.00 1.10 6.00 6.00a 6.00ax PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}
