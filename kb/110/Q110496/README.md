---
layout: page
title: "Q110496: PC Gen: PODIAG.EXE Creates New REQTRANS.GLB Using REQCONF.GLB"
permalink: kb/110/Q110496/
---

## Q110496: PC Gen: PODIAG.EXE Creates New REQTRANS.GLB Using REQCONF.GLB

	Article: Q110496
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks Postoffice Diagnostic Utility, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Postoffice Diagnostics Utility (PODIAG.EXE),
	Directory Synchronization Check will successfully create a new REQTRANS.GLB if
	the REQCONF.GLB exists. The requestor will be synchronized with the directory
	server as the ReqSync value in the REQCONF.GLB is up to date. If REQCONF.GLB is
	missing, the utility will suggest that the PO be restored from a backup.
	
	MORE INFORMATION
	================
	
	The PODIAG.LOG file will contain the following text if the REQTRANS.GLB is found
	to be missing but the REQCONF.GLB still exists:
	
	  
	
	  Error 161 Detected file (REQTRANS.GLB) missing. Do you want to
	            create this file in its initial state? If this file is
	            created in its initial state you must follow the
	            instructions given in the online help.
	  User    0 Pressed "Yes"
	  Info    0 Rebuilt the directory synchronization file.
	
	PODIAG.EXE will create a new, 60 byte REQTRANS.GLB that contains the following
	information where ReqSync=XXXXXXXXXX is the value of ReqSync in the REQCONF.GLB
	file. This information can be found by using the LISTQ and LISTDS utilities:
	
	   Item   Sync No.   Transaction
	   ------ ---------- ----------------------------------------------
	   1      XXXXXXXXXX # Dummy record installed by PODIAG.<00>
	   End of Queue
	
	The administrator should perform a Config, Dir-Sync, Requestor, Export from the
	mail administrator utility (ADMIN.EXE) in order to verify that the requestor's
	address information is complete and up to date in the Global Address List.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbMailPCNPODiagnostic320
	Version           : :3.2
	
	=============================================================================
	
