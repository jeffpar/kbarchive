---
layout: page
title: "Q114949: INFO: Description of the FOXTOUCH() Function"
permalink: /kb/114/Q114949/
---

## Q114949: INFO: Description of the FOXTOUCH() Function

	Article: Q114949
	Product(s): Microsoft FoxPro
	Version(s): 2.6,2.6a,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FOXTOUCH() function can be used to change the date/time stamp on a specified
	file. This article describes the FOXTOUCH() function.
	
	NOTE: For backward compatibility, Visual FoxPro still supports FOXTOOLS.FLL
	(included in earlier FoxPro versions), the Visual FoxPro API library that allows
	calls to 16-bit .DLL functions. However, in Visual FoxPro, the DECLARE command
	is the preferred method for calling .DLL functions.
	
	WARNING: The FOXTOUCH() function is not supported by Microsoft Technical Support
	either electronically or by telephone. This function may not work in future
	versions of Visual FoxPro.
	
	MORE INFORMATION
	================
	
	The FOXTOUCH() function changes the time stamp of the file specified with
	<filename>. If the time stamp parameters are not specified, the file is
	stamped with the current system information.
	
	The syntax of the FOXTOUCH() function is described below:
	
	  FOXTOUCH (<filename>,[<ExpN1>,<ExpN2>,<ExpN3>,<ExpN4>,<ExpN5>,<ExpN6>])
	
	  <filename> - The name of the file to be modified <ExpN1> - The
	  year to be stamped <ExpN2> - The month to be stamped <ExpN3> -
	  The day to be stamped <ExpN4> - The hour to be stamped <ExpN5> -
	  The minute to be stamped <ExpN6> - The seconds to be stamped
	
	Example
	-------
	
	  SET LIBRARY TO foxtools.fll
	  =FOXTOUCH( "myfile.txt", 1984, 2, 10, 13, 20, 6)
	
	This will change the date/time stamp of the file MYFILE.TXT to:
	
	  2/10/84  1:20:06pm
	
	The FOXTOUCH() function is not contained within FoxPro itself. The FOXTOUCH()
	function is contained within FOXTOOLS.FLL. To use this function, you must first
	use the SET LIBRARY TO command to set the library to FOXTOOLS.FLL.
	
	Under FoxPro 2.x, for more information about FOXTOOLS.FLL please see the
	FOXTOOLS.WRI file, which is located in the GOODIES\FOXTOOLS subdirectory of the
	FoxPro for Windows directory. In Visual FoxPro, see FOXTOOLS.HLP in the
	VFP\TOOLS directory.
	
	The FOXTOUCH() function was added to FOXTOOLS.FLL version 1.03. FOXTOOLS.FLL
	version 1.03 is shipped with FoxPro version 2.6 for Windows. The FOXTOUCH()
	function does not exist in versions of FOXTOOLS.FLL that shipped with earlier
	versions of FoxPro for Windows.
	
	Additional query words: VFoxWin FoxWin 2.60 2.60a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300 kbVFP500 kbVFP600
	Version           : :2.6,2.6a,3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
