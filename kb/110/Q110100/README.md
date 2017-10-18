---
layout: page
title: "Q110100: PC Gen: PODIAG.EXE NETPO.GLB Error 117"
permalink: kb/110/Q110100/
---

## Q110100: PC Gen: PODIAG.EXE NETPO.GLB Error 117

	Article: Q110100
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Post Office Diagnostics Utility, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Postoffice Diagnostics Utility (PODIAG.EXE) displays the
	following error message when it detects that the delete chain pointer in the
	NETPO.GLB file is corrupted:
	
	  Error 117 Detected an incorrect value in file
	  (NETPO.GLB). The value will be reset to its
	  default. Do you want it corrected?
	
	The delete chain will then be reset to zero, resolving a problem that is most
	often apparent when you try to add external addresses to a Personal Address
	List. The error message that is displayed in the MS-DOS client is:
	
	  Notice 53
	  Error creating user address
	  in Personal Address List.
	  Press Enter to continue
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbMailPODiagnostic320
	Version           : :3.2
	
	=============================================================================
	
