---
layout: page
title: "Q104345: How to Determine If a Library Is Loaded in Memory"
permalink: /kb/104/Q104345/
---

## Q104345: How to Determine If a Library Is Loaded in Memory

{% raw %}

	Article: Q104345
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To see if an external library (.PLB file in the MS-DOS environment, .FLL file in
	the Windows environment) has been loaded by means of the SET LIBRARY TO command,
	use the code example shown below.
	
	MORE INFORMATION
	================
	
	The SET LIBRARY TO command allows API libraries to be loaded into memory. The
	following code example will allow a program to determine if a specific library
	has been loaded.
	
	     * Use the set of commands appropriate for the product installed
	
	     * From the FoxPro for MS-DOS root directory
	     SET LIBRARY TO netware.plb ADDITIVE   &&Not avail. in 2.0 single user
	     SET LIBRARY TO goodies\pdrivers\driver2.plb ADDITIVE
	
	     * From the FoxPro for Windows root directory
	     SET LIBRARY TO driver2.fll ADDITIVE
	     SET LIBRARY TO foxtools.fll ADDITIVE
	
	     *From the Visual FoxPro root directory
	     SET LIBRARY TO reserved.fll ADDITIVE
	     SET LIBRARY TO foxtools.fll ADDITIVE
	
	     * In both MS-DOS and Windows:
	     * To check if a library has been loaded:
	
	     isloaded = "<the name of the library>" $ SET("LIBRARY")
	     IF isloaded
	        WAIT WINDOW "<Library name> has been loaded"
	     ELSE
	           WAIT WINDOW "<Library name> has not been loaded"
	     ENDIF
	
	     * To clear all libraries from memory
	     SET LIBRARY TO
	
	     * End code example
	
	The SET("LIBRARY") function returns a string containing the names of all external
	API libraries currently loaded, with a comma between the library names. The $
	operator is used to search anywhere within the string for the name of a specific
	library.
	
	Additional query words: VFoxWin FoxDos FoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	
	=============================================================================
	

{% endraw %}
