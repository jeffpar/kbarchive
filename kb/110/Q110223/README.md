---
layout: page
title: "Q110223: PC Gen: PODIAG.EXE NETPO.GLB Error 140"
permalink: /kb/110/Q110223/
---

## Q110223: PC Gen: PODIAG.EXE NETPO.GLB Error 140

	Article: Q110223
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Post Office Diagnostics Utility, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Postoffice Diagnostics Utility (PODIAG.EXE) Address &
	Group Check may return an Error 140 if it detects a badly corrupted NETPO.GLB
	file that cannot be repaired.
	
	One condition that will result in the Error 140 is when the NETPO.GLB file size
	does not divide into an integer after performing the following calculation:
	
	  [(NETPO.GLB file size) - 4]/43
	
	PODIAG.EXE will create a new 4-byte NETPO.GLB file with a 4-byte header. All
	external postoffice addresses and PROFS or SNADS gateway addresses that were
	added to the postoffice address list or personal address lists will be invalid
	after the NETPO.GLB file has been reset. These invalid addresses will be
	detected by the Address & Group Check and will be deleted. The following is
	the error message PODIAG.EXE displays when a badly corrupted NETPO.GLB is
	detected:
	
	  Error 140 Detected a problem with file (NETPO.GLB). All information will be
	  removed from this file. After this fix, run the Address and Group tool with
	  the maximum depth and all detail options selected. You must also add the
	  external and gateway postoffice addresses manually. Do you want all
	  information removed from this file?
	
	MORE INFORMATION
	================
	
	The following is an excerpt from a PODIAG.LOG file that displays the detection
	and correction of a badly corrupted NETPO.GLB. If the depth of check is not set
	to the maximum allowable, the administrator must run PODIAG.EXE again in order
	to detect the invalid addresses caused by the resetting of the NETPO.GLB.
	
	  Error 140 Detected a problem with file (NETPO.GLB). All information will be
	  removed from this file. After this fix, run the Address and Group tool with
	  the maximum depth and all detail options selected. You must also add the
	  external and gateway postoffice addresses manually. Do you want all
	  information removed from this file?
	  User 0 Pressed "Yes"
	  Info 0 Removed information from file.
	  Error 108 Detected an incorrect address (John Doe) in address list
	  (00000000.NME). Do you want to remove this address?
	  User 0 Pressed "Yes"
	  Info 0 Removed the incorrect address.
	  Error 108 Detected an incorrect address (Joe Smith) in address list
	  (00000000.NME). Do you want to remove this address?
	  User 0 Pressed "Yes"
	  Info 0 Removed the incorrect address.
	  Error 108 Detected an incorrect address (John Doe) in address list
	  (ADMINSHD.NME). Do you want to remove this address?
	  User 0 Pressed "Yes"
	  Info 0 Removed the incorrect address.
	  Error 108 Detected an incorrect address (Joe Smith) in address list
	  (ADMINSHD.NME). Do you want to remove this address?
	  User 0 Pressed "Yes"
	  Info 0 Removed the incorrect address.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbMailPODiagnostic320
	Version           : :3.2
	
	=============================================================================
	
