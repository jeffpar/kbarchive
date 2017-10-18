---
layout: page
title: "Q319899: VSS Show Differences Option Incorrectly Marks Files as Different"
permalink: kb/319/Q319899/
---

## Q319899: VSS Show Differences Option Incorrectly Marks Files as Different

	Article: Q319899
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows 6.0 
	- Microsoft Visual SourceSafe 6.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Show Differences option in the Visual SourceSafe 6.0c graphical
	user interface (GUI), the command that checks differences does not ignore
	end-of-line characters in each file. As a result, files are marked as different,
	even if the only difference in each file is the end-of-line character.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Visual Studio 6.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version       Size     File name
	  ----------------------------------------------------
	  18-Mar-2002  11:25                295,696  Ddconv.exe
	  18-Mar-2002  11:25                420,624  Ddupd.exe
	  18-Mar-2002  11:25                397,584  Ss.exe
	  18-Mar-2002  11:25  06.00.9447    562,448  Ssapi.dll
	  18-Mar-2002  11:25  06.00.9447    499,472  Ssarc.exe
	  18-Mar-2002  11:25  06.00.9447    497,424  Ssrestor.exe
	  18-Mar-2002  11:24  06.00.9447  1,412,368  Ssscc.dll
	
	The following self-extracting executable file contains all of the files in the
	preceding list:
	
	  Date         Time   Size       File name
	  ----------------------------------------
	  18-Mar-2002  11:30  2,025,472  Vsqfe374.exe
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe32bitSearch kbSSafe600C
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
