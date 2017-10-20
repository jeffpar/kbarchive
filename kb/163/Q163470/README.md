---
layout: page
title: "Q163470: PATCH: Foxtools.hqx Upgrade to Prevent Setup Wizard Errors"
permalink: /kb/163/Q163470/
---

## Q163470: PATCH: Foxtools.hqx Upgrade to Prevent Setup Wizard Errors

{% raw %}

	Article: Q163470
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 18-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Foxtools.hqx is a file that updates the FoxTools libraries for Visual FoxPro for
	Macintosh 3.0b to address compatibility issues when using the Setup Wizard.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  Foxtools.hqx
	  (http://support.microsoft.com/download/support/mslfiles/Foxtools.hqx)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	The updated FoxTools.cfm and FoxTools.slm files in this archive should be placed
	in the Visual FoxPro folder, replacing the earlier versions. It is not necessary
	to restart the Macintosh or Visual FoxPro.
	
	Because these files are not marked with a version number, the best way to tell
	the old copies from the new copies is by size.
	
	The size of the old FoxTools files is as follows:
	
	   FoxTools.cfm         86,629 bytes
	   FoxTools.slm         70,291 bytes
	
	The size of the new FoxTools files is as follows:
	
	   FoxTools.cfm         86,693 bytes
	   FoxTools.slm         70,303 bytes
	
	The incompatibilities addressed by the new FoxTools files normally show up as a
	type 11 error right after you click the Finish button on the last step of the
	Setup Wizard. Instead of a type 11 error, sometimes the error message is "ASLM
	Switch -111."
	
	These new FoxTools files should also help if you are getting type 11 errors when
	using the FxGetResource() and FxSetResource() functions in FoxTools.
	
	The Visual FoxPro for Macintosh Setup Wizard uses only the FoxTools.slm file even
	though the development version of Visual FoxPro for Macintosh can only be run on
	a PowerMacintosh. Therefore, it is necessary to at least replace the old
	FoxTools.slm if you are having problems running the Setup Wizard on the
	Macintosh.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
