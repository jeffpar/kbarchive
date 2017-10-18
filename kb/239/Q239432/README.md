---
layout: page
title: "Q239432: INFO: Visual FoxPro 5.0 Year 2000 Update"
permalink: kb/239/Q239432/
---

## Q239432: INFO: Visual FoxPro 5.0 Year 2000 Update

	Article: Q239432
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a
	Operating System(s): 
	Keyword(s): kbYear2000 kbvfp500a kbXBase kbGrpDSFox kbDSupport
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes a patch for the LUPDATE() function in Visual FoxPro 5.0a.
	This patch updates the Visual FoxPro LUPDATE() function so it behaves the same
	as in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro 5.0, the LUPDATE() function returns the date that a table was
	last updated. This date is read directly from the .dbf table header. However,
	because only two digits of the year are stored in the table header, the century
	in which the table was last updated is interpreted based on the setting of the
	SET CENTURY TO ROLLOVER.
	
	With this update to Visual FoxPro 5.0, the LUPDATE() function behaves as it does
	in Visual FoxPro 6.0. In Visual FoxPro 6.0, LUPDATE() queries the Windows
	operating system to determine the date a table was last updated, allowing users
	to determine the century in which the table was updated. However, the table
	header continues to store the last two digits of the year it was last updated.
	This is done to ensure backward compatibility with other versions of FoxPro.
	
	In order to apply the Visual FoxPro 5.0 year 2000 update, you need to have Visual
	FoxPro 5.0 Service Pack 3 installed. This update can be downloaded from:
	
	  http://msdn.microsoft.com/vstudio/sp/vs97/default.asp
	
	Download the LUPDATE() patch from:
	
	  http://msdn.microsoft.com/vfoxpro/downloads/vfp5-y2k.asp
	
	You can verify that the Visual FoxPro 5.0 2000 update is installed by
	right-clicking the Vfp.exe in Windows Explorer and selecting the Version tab.
	The file version should read "5.0a Build 415p."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 kbvfp500a kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500a
	Version           : WINDOWS:5.0a
	Issue type        : kbinfo
	
	=============================================================================
	
